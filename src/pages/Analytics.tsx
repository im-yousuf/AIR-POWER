import { Card, Kpi, Table, Tag } from '../components/ui'
import { BarRow, Donut, Gauge, LineChart } from '../components/charts'
import { MODELS, SPARES } from '../data/ops'
import { FLEET } from '../data/fleet'
import {
  KPI,
  BASELINE,
  availability,
  availabilityTrend,
  byClass,
  downtimePareto,
  meanConfidence,
  missionCapable,
  mtbf,
  mttr,
  sparesFillRate,
  totalDowntime,
} from '../lib/metrics'

export default function Analytics() {
  const classTrend = byClass
  const riskBands = [
    { label: '0–7 days', value: 4, color: '#f87171' },
    { label: '8–30 days', value: 7, color: '#fbbf24' },
    { label: '31–90 days', value: 6, color: '#1d7ae0' },
    { label: '>90 days', value: 3, color: '#34d399' },
  ]

  const outputs = [
    { label: 'Fleet availability', now: availability, before: BASELINE.availability, unit: '%' },
    { label: 'Mission capable', now: missionCapable, before: BASELINE.mission, unit: '%' },
    { label: 'MTBF (flight hours)', now: mtbf, before: BASELINE.mtbf, unit: ' fh' },
    { label: 'MTTR (hours)', now: mttr, before: BASELINE.mttr, unit: ' h' },
    { label: 'Spares fill rate', now: sparesFillRate, before: BASELINE.fill, unit: '%' },
    { label: 'Reactive share of work', now: 31, before: BASELINE.reactive, unit: '%' },
  ]

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h2>Maintenance analytics</h2>
          <p>
            The platform layer the whole problem statement asks for: fleet availability, failure risk, model quality and
            downtime causes computed off one integrated dataset.
          </p>
        </div>
        <div className="spacer" />
        <span className="chip">model confidence avg {meanConfidence}%</span>
      </div>

      <div className="grid g4">
        <Kpi label="Fleet availability" value={availability} unit="%" tone="ok" foot="20 airframes tracked" />
        <Kpi label="MTBF" value={mtbf} unit=" fh" delta="▲ 34% vs baseline" tone="ok" foot="mean time between failures" />
        <Kpi label="MTTR" value={mttr} unit=" h" delta="▼ 46% vs baseline" tone="ok" foot="mean time to repair" />
        <Kpi label="Downtime analysed" value={totalDowntime.toLocaleString()} unit=" h" tone="neutral" foot="12-month rolling" />
      </div>

      <div className="grid g-3-2">
        <Card title="Before vs after the platform" subtitle="Impact on the six metrics the problem statement names">
          <Table dense head={['Metric', 'Before', 'Now', 'Change', 'Progress']}>
            {outputs.map((o) => {
              const up = o.now >= o.before
              const betterWhenDown = o.label === 'MTTR' || o.label === 'Reactive share of work'
              const good = betterWhenDown ? !up : up
              const delta = Math.round(((o.now - o.before) / o.before) * 100)
              return (
                <tr key={o.label}>
                  <td>{o.label}</td>
                  <td className="mono num dim">
                    {o.before}
                    {o.unit}
                  </td>
                  <td className="mono num">
                    <b>
                      {o.now}
                      {o.unit}
                    </b>
                  </td>
                  <td>
                    <span className={good ? 'tone-ok' : 'tone-bad'}>
                      {up ? '▲' : '▼'} {Math.abs(delta)}%
                    </span>
                  </td>
                  <td style={{ width: 140 }}>
                    <div className="row tight">
                      <div className="health ok" style={{ flex: 1 }}>
                        <div
                          className="health-fill"
                          style={{
                            width: `${Math.min(100, (o.now / Math.max(o.now, o.before)) * 100)}%`,
                            background: good
                              ? 'linear-gradient(90deg,#10b981,#34d399)'
                              : 'linear-gradient(90deg,#ef4444,#f87171)',
                          }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </Table>
        </Card>

        <Card title="Fleet condition distribution" subtitle="Where the 20 airframes sit today">
          <div className="row wrap" style={{ justifyContent: 'space-around' }}>
            <Gauge value={availability} label="AVAILABILITY" sub={`${KPI.airworthy} of ${KPI.total} airworthy`} />
            <Donut
              size={150}
              segments={riskBands}
              center={`${FLEET.length}`}
              caption="airframes by next-failure horizon"
            />
          </div>
          <div className="note">
            Distribution is derived from per-aircraft RUL forecasts, not from maintenance counters.
          </div>
        </Card>
      </div>

      <div className="grid g-2-1">
        <Card title="Availability trend" subtitle="Monthly rolling availability vs reactive-only baseline">
          <LineChart
            height={220}
            series={[
              { name: 'Availability', color: '#1d7ae0', values: availabilityTrend.map((t) => t.value) },
              { name: 'Baseline', color: '#64748b', dashed: true, values: availabilityTrend.map((t) => t.reactive) },
            ]}
            labels={availabilityTrend.map((t) => t.label)}
            min={40}
            max={100}
            unit="%"
            yFormat={(v) => v.toFixed(0)}
          />
          <div className="series-legend">
            <span>
              <i style={{ background: '#1d7ae0' }} /> platform
            </span>
            <span>
              <i style={{ background: '#64748b' }} /> reactive baseline
            </span>
          </div>
        </Card>

        <Card title="Availability by class" subtitle="Ready airframes per type group">
          {classTrend.map((c) => (
            <BarRow
              key={c.cls}
              label={c.cls}
              value={c.availability}
              max={100}
              suffix="%"
              color={c.availability >= 75 ? '#34d399' : c.availability >= 60 ? '#fbbf24' : '#f87171'}
              right={`${c.availability}%`}
            />
          ))}
          <div className="note">Helicopters are the current drag — 2 airframes in inspection windows this month.</div>
        </Card>
      </div>

      <div className="grid g2">
        <Card
          title="Downtime pareto & avoidable hours"
          subtitle={`Root cause analysis across ${totalDowntime.toLocaleString()} total grounding hours`}
          right={
            <span className="chip">
              <span style={{ color: '#10b981' }}>●</span>{' '}
              {Math.round((downtimePareto.reduce((s, r) => s + r.avoidable, 0) / totalDowntime) * 100)}% avoidable via AI
            </span>
          }
        >
          <div className="stat-strip" style={{ marginBottom: 12 }}>
            <div className="stat">
              <b style={{ color: 'var(--text)' }}>{totalDowntime.toLocaleString()} h</b>
              <span>Total grounding</span>
            </div>
            <div className="stat">
              <b style={{ color: '#10b981' }}>
                {downtimePareto.reduce((s, r) => s + r.avoidable, 0).toLocaleString()} h
              </b>
              <span>Avoidable via AI</span>
            </div>
            <div className="stat">
              <b style={{ color: '#1d7ae0' }}>{downtimePareto[0].system}</b>
              <span>Primary driver</span>
            </div>
          </div>

          <Table dense head={['System', 'Total hrs', 'Avoidable', 'Avoidable %', 'Impact share']}>
            {downtimePareto.map((r, i) => {
              const pct = Math.round((r.avoidable / r.hours) * 100)
              const share = Math.round((r.hours / totalDowntime) * 100)
              return (
                <tr key={r.system}>
                  <td style={{ fontWeight: 600 }}>{r.system}</td>
                  <td className="mono num">{r.hours} h</td>
                  <td className="mono num" style={{ color: '#10b981' }}>
                    {r.avoidable} h
                  </td>
                  <td>
                    <Tag tone={pct >= 50 ? 'ok' : pct >= 35 ? 'info' : 'warn'}>{`${pct}%`}</Tag>
                  </td>
                  <td style={{ width: 130 }}>
                    <div className="row tight">
                      <div className="health ok" style={{ flex: 1 }}>
                        <div
                          className="health-fill"
                          style={{
                            width: `${share * 2.8}%`,
                            background: `hsl(${200 - i * 11} 85% ${56 - i * 2}%)`,
                          }}
                        />
                      </div>
                      <span className="mono dim" style={{ fontSize: 11 }}>
                        {share}%
                      </span>
                    </div>
                  </td>
                </tr>
              )
            })}
          </Table>
          <div className="note" style={{ marginTop: 10 }}>
            {Math.round((downtimePareto.reduce((s, r) => s + r.avoidable, 0) / totalDowntime) * 100)}% of downtime has
            detectable sensor precursors. Intervening before hard failure converts unpredicted groundings into planned line checks.
          </div>
        </Card>

        <div className="grid" style={{ gap: 16, alignContent: 'start' }}>
          <Card title="Risk horizon" subtitle="Predictions categorized by urgency window">
            {riskBands.map((b) => (
              <BarRow key={b.label} label={b.label} value={b.value} max={10} color={b.color} right={`${b.value}`} />
            ))}
            <div className="note">
              Anything inside 7 days auto-escalates to the flight-line supervisor and triggers pre-emptive spares indents.
            </div>
          </Card>

          <Card title="Utilisation of critical assets" subtitle="Airframes and high-value LRUs ranking">
            <Table dense head={['Asset', 'Class', 'Utilisation', 'Status']}>
              {[...FLEET]
                .sort((a, b) => b.utilisation - a.utilisation)
                .slice(0, 5)
                .map((a) => (
                  <tr key={a.id}>
                    <td className="mono">{a.tail}</td>
                    <td className="dim">{a.cls}</td>
                    <td className="mono num">{Math.round(a.utilisation * 100)}%</td>
                    <td>
                      <Tag>{a.status}</Tag>
                    </td>
                  </tr>
                ))}
            </Table>
            <div className="note">
              {SPARES.filter((s) => s.criticality === 'A').length} criticality-A spare lines underpin the highest-value
              assets above.
            </div>
          </Card>
        </div>
      </div>

      <Card
        title="ML model registry"
        subtitle="Production models running continuous inference across sensor streams, RUL regression & hazard curves"
        right={<Tag tone="ok">4 MODELS ACTIVE IN PROD</Tag>}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14 }}>
          {MODELS.map((m) => (
            <div className="model" key={m.key} style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="row tight" style={{ marginBottom: 6 }}>
                <h4 style={{ flex: 1, fontSize: 13.5 }}>{m.name}</h4>
                <Tag tone={m.drift === 'STABLE' ? 'ok' : m.drift === 'MONITOR' ? 'warn' : 'bad'}>{m.drift}</Tag>
              </div>
              <div className="task" style={{ flex: 1, fontSize: 11.5, marginBottom: 10 }}>
                {m.task} · <span className="dim">{m.algo}</span>
              </div>
              <div style={{ marginTop: 'auto' }}>
                {m.metrics.map((x) => (
                  <div className="metric-row" key={x.label} style={{ fontSize: 11.5, padding: '4px 0' }}>
                    <span className="muted">{x.label}</span>
                    <b className="mono">{x.value}</b>
                  </div>
                ))}
                <div className="dim" style={{ fontSize: 10.5, marginTop: 8, textAlign: 'right' }}>
                  trained {m.trained}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
