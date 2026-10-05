import { useEffect, useRef, useState } from 'react'
import { PlatformProvider, usePlatform, type RoleId } from './lib/platform'
import Overview from './pages/Overview'
import Fleet from './pages/Fleet'
import Twin from './pages/Twin'
import Predictions from './pages/Predictions'
import Maintenance from './pages/Maintenance'
import Spares from './pages/Spares'
import DataHub from './pages/DataHub'
import Analytics from './pages/Analytics'
import { PREDICTIONS } from './data/predictions'
import { WORK_ORDERS } from './data/ops'
import { KPI } from './lib/metrics'

type PageKey = 'overview' | 'fleet' | 'twin' | 'predictions' | 'maintenance' | 'spares' | 'data' | 'analytics'

interface NavDef {
  group: string
  items: { key: PageKey; label: string; icon: string; badge?: number }[]
}

const NAV: NavDef[] = [
  {
    group: 'Operations',
    items: [
      { key: 'overview', label: 'Fleet overview', icon: '◎' },
      { key: 'fleet', label: 'Aircraft inventory', icon: '✈' },
      { key: 'twin', label: 'Digital twin', icon: '⧉' },
    ],
  },
  {
    group: 'Intelligence',
    items: [
      { key: 'predictions', label: 'Predictive faults', icon: '⚠', badge: PREDICTIONS.filter((p) => p.severity === 'CRITICAL' || p.severity === 'HIGH').length },
      { key: 'analytics', label: 'Maintenance analytics', icon: '📈' },
    ],
  },
  {
    group: 'Sustenance',
    items: [
      { key: 'maintenance', label: 'Work control', icon: '🔧', badge: WORK_ORDERS.filter((w) => w.priority === 'P1' && w.status !== 'COMPLETED').length },
      { key: 'spares', label: 'Spares & stores', icon: '📦' },
      { key: 'data', label: 'Data integration', icon: '⛁' },
    ],
  },
]

const TITLES: Record<PageKey, string> = {
  overview: 'Fleet overview',
  fleet: 'Aircraft inventory',
  twin: 'Digital twin',
  predictions: 'Predictive fault detection',
  maintenance: 'Maintenance planning & work control',
  spares: 'Spares & inventory',
  data: 'Data integration hub',
  analytics: 'Maintenance analytics',
}

interface RoleDef {
  id: RoleId
  name: string
  callsign: string
  rank: string
  avatar: string
  color: string
  clearance: string
  desc: string
  defaultPage: PageKey
}

const ROLES: RoleDef[] = [
  {
    id: 'duty-controller',
    name: 'Duty Controller',
    callsign: 'AIR-OPS-1',
    rank: 'Wing Commander',
    avatar: 'DC',
    color: 'linear-gradient(135deg, #1d7ae0, #2563eb)',
    clearance: 'SECRET // DEF-OPS',
    desc: 'Fleet readiness, availability & AOG risk triage',
    defaultPage: 'overview',
  },
  {
    id: 'flight-engineer',
    name: 'Flight-Line Engineer',
    callsign: 'TECH-LINE-4',
    rank: 'Squadron Leader',
    avatar: 'FE',
    color: 'linear-gradient(135deg, #10b981, #059669)',
    clearance: 'CONFIDENTIAL // TECH',
    desc: 'Digital twin telemetry, live sensors & diagnostics',
    defaultPage: 'twin',
  },
  {
    id: 'maint-controller',
    name: 'Maintenance Controller',
    callsign: 'MRO-DISPATCH',
    rank: 'Chief Engineer',
    avatar: 'MC',
    color: 'linear-gradient(135deg, #f59e0b, #d97706)',
    clearance: 'SECRET // MRO',
    desc: 'Work order planning, agency load & TAT control',
    defaultPage: 'maintenance',
  },
  {
    id: 'stores-officer',
    name: 'Stores & Logistics',
    callsign: 'LOG-DEPOT-51',
    rank: 'Senior Logistics Officer',
    avatar: 'SO',
    color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    clearance: 'RESTRICTED // SUPPLY',
    desc: 'Spares coverage, stockout risk & indent approval',
    defaultPage: 'spares',
  },
]

const ROLE_PRIMARY_PAGES: Record<RoleId, PageKey[]> = {
  'duty-controller': ['overview', 'fleet', 'analytics'],
  'flight-engineer': ['twin', 'predictions'],
  'maint-controller': ['maintenance', 'predictions', 'data'],
  'stores-officer': ['spares', 'data'],
}

function AppShell() {
  const [page, setPage] = useState<PageKey>('overview')
  const [navOpen, setNavOpen] = useState(() => window.innerWidth > 860)
  const [aircraftId, setAircraftId] = useState('AC-02')
  const [now, setNow] = useState(() => new Date())
  const [roleMenuOpen, setRoleMenuOpen] = useState(false)
  const roleWrapperRef = useRef<HTMLDivElement>(null)

  const { roleId, setRoleId } = usePlatform()
  const currentRole = ROLES.find((r) => r.id === roleId) || ROLES[0]

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    if (!roleMenuOpen) return
    const handleOutside = (e: MouseEvent) => {
      if (roleWrapperRef.current && !roleWrapperRef.current.contains(e.target as Node)) {
        setRoleMenuOpen(false)
      }
    }
    window.addEventListener('mousedown', handleOutside)
    return () => window.removeEventListener('mousedown', handleOutside)
  }, [roleMenuOpen])

  const openAircraft = (id: string) => {
    setAircraftId(id)
    setPage('twin')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const go = (k: PageKey) => {
    setPage(k)
    if (window.innerWidth <= 860) setNavOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`shell${navOpen ? '' : ' nav-closed'}`}>
      <aside className="sidebar">
        <div className="brand">
          <button
            type="button"
            className="nav-toggle"
            title="Close sidebar"
            aria-label="Close sidebar"
            onClick={() => setNavOpen(false)}
            style={{ marginLeft: 0 }}
          >
            ✕
          </button>
          <div className="brand-wordmark">
            <div className="brand-ap-title">AIR POWER</div>
            <div className="brand-ap-sub">Navigation Menu</div>
          </div>
        </div>

        {NAV.map((g) => (
          <div key={g.group}>
            <div className="nav-group">{g.group}</div>
            {g.items.map((item) => {
              const isPrimary = ROLE_PRIMARY_PAGES[roleId]?.includes(item.key)
              return (
                <button
                  key={item.key}
                  type="button"
                  className={`nav-item ${page === item.key ? 'on' : ''}`}
                  onClick={() => go(item.key)}
                >
                  <span className="ico">{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge ? <span className="nav-badge">{item.badge}</span> : null}
                  <span className={`nav-perm-badge ${isPrimary ? 'primary' : 'readonly'}`}>
                    {isPrimary ? 'PRIMARY' : 'READ ONLY'}
                  </span>
                </button>
              )
            })}
          </div>
        ))}
      </aside>

      {navOpen && <div className="nav-backdrop" onClick={() => setNavOpen(false)} />}

      <div className="main">
        <header className="topbar">
          {!navOpen && (
            <button
              type="button"
              className="nav-toggle dark"
              title="Open sidebar"
              aria-label="Open sidebar"
              onClick={() => setNavOpen(true)}
            >
              ☰
            </button>
          )}
          <div className="topbar-title-block">
            <div className="topbar-title-row">
              <h1>{TITLES[page]}</h1>
              <span className="live">
                <span className="dot" />
                LIVE IoT FEED
              </span>
            </div>
          </div>
          {/* Absolutely centred brand heading */}
          <div className="topbar-brand-center">
            <span className="topbar-brand-ap">AIR POWER</span>
          </div>
          <div className="topbar-right">
            <span className="mono">{now.toLocaleTimeString('en-IN', { hour12: false })} IST</span>
            <span className="chip">
              {KPI.airworthy}/{KPI.total} ready
            </span>
            <div className="role-wrapper" ref={roleWrapperRef}>
              <button
                type="button"
                className="role-btn"
                title="Switch operational role (RBAC)"
                onClick={() => setRoleMenuOpen((v) => !v)}
              >
                <div className="avatar role-avatar" style={{ background: currentRole.color }}>
                  {currentRole.avatar}
                </div>
                <div className="role-meta">
                  <span className="role-name">{currentRole.name}</span>
                  <span className="role-callsign">{currentRole.rank}</span>
                </div>
                <span className="role-caret">{roleMenuOpen ? '▴' : '▾'}</span>
              </button>

              {roleMenuOpen && (
                <div className="role-dropdown">
                  <div className="role-dropdown-header">
                    <span className="role-dropdown-title">OPERATIONAL ROLE (RBAC)</span>
                    <span className="role-dropdown-clearance">{currentRole.clearance}</span>
                  </div>
                  <div className="role-list">
                    {ROLES.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        className={`role-item ${currentRole.id === r.id ? 'active' : ''}`}
                        onClick={() => {
                          setRoleId(r.id)
                          setRoleMenuOpen(false)
                        }}
                      >
                        <div className="role-item-badge" style={{ background: r.color }}>
                          {r.avatar}
                        </div>
                        <div className="role-item-content">
                          <div className="role-item-title-row">
                            <span className="role-item-name">{r.name}</span>
                            {currentRole.id === r.id && <span style={{ color: '#34d399', fontSize: 13 }}>✓</span>}
                          </div>
                          <div className="role-item-rank">{r.rank} · <span className="mono">{r.callsign}</span></div>
                          <div className="role-item-desc">{r.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="role-dropdown-footer">
                    <span>Role-Based Access Control</span>
                    <span style={{ color: '#38bdf8' }}>Simulated MoD DSSC</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {page === 'overview' && <Overview onOpenAircraft={openAircraft} />}
        {page === 'fleet' && <Fleet onOpenAircraft={openAircraft} />}
        {page === 'twin' && <Twin aircraftId={aircraftId} onSelectAircraft={setAircraftId} />}
        {page === 'predictions' && <Predictions onOpenAircraft={openAircraft} />}
        {page === 'maintenance' && <Maintenance onOpenAircraft={openAircraft} />}
        {page === 'spares' && <Spares />}
        {page === 'data' && <DataHub />}
        {page === 'analytics' && <Analytics />}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <PlatformProvider>
      <AppShell />
    </PlatformProvider>
  )
}
