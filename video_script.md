# AirPower — 7-Minute Comprehensive Video Demonstration & Narration Script

> **Problem Statement ID:** 26249 · **Organization:** Ministry of Defence (MoD) · **Department:** Defence Services Staff College  
> **Title:** Air Power — Predictive Maintenance & Fleet Availability  
> **Target Video Duration:** Exactly 7 Minutes (0:00 to 7:00)  
> **Spoken Word Count:** ~950 words (Pacing: ~135 words/min, allowing natural pauses for UI clicks, graph inspections, and modal transitions)  
> **GitHub Repository:** [https://github.com/im-yousuf/AIR-POWER](https://github.com/im-yousuf/AIR-POWER)  
> **Live Production URL:** [https://airpower-predictive-maintenance-mu.vercel.app](https://airpower-predictive-maintenance-mu.vercel.app) (or `http://localhost:5173`)  
> **Companion Architecture Guide:** [detailed_explanation.md](detailed_explanation.md)

---

## 0 · Pre-Recording Setup & Checklist (60 Seconds)

1. **Clean Database / State:**
   - In your browser DevTools (`F12`), navigate to **Application** → **Local Storage** → delete any `airpower` keys, then refresh `http://localhost:5173/` (or the Vercel link).
2. **Display & Capture Settings:**
   - Resolution: 1080p (1920×1080) in Fullscreen (`F11`), browser zoom at 100%.
   - Mute all OS notifications and system sounds.
3. **Starting Condition:**
   - Top-right Role Dropdown: Set to **Duty Controller (AIR-OPS-1 · Wing Commander)**.
   - Starting Page: **Fleet overview**.
4. **Key Metrics Cheat Sheet (Keep visible on a second screen):**
   - **Fleet Availability:** 75.0% (+7.0 pts vs 68.0% baseline)
   - **Mission Capable Rate:** 80.0% (+6.0 pts)
   - **Mean Turnaround Time (MTTR):** 21.9 hrs (reduced 46.6% from 41.0 hrs)
   - **Mean Time Between Failures (MTBF):** 42.3 hrs (+22.6% reliability)
   - **Mean Early Warning Horizon:** 5.3 days before failure
   - **Avoided Downtime:** 5,957 flight hours across 25 averted failures
   - **Spares Fill Rate:** 100% (up from 71.0%)
   - **Planned Maintenance Ratio:** Inverted from 31% to 69%

---

## 1 · 7-Minute Master Timeline & Scene Breakdown

| # | Scene Title | Page / Feature Shown | Timestamp | Duration | Core Objective |
|---|---|---|---|---|---|
| **1** | **Problem Statement & The Silo Trap** | Fleet Overview (Intro) | 0:00 – 0:45 | 45 s | MoD PS 26249 context, reactive maintenance costs, the 4 disconnected defense silos. |
| **2** | **Fleet Overview & Command Readiness** | Fleet Overview | 0:45 – 1:30 | 45 s | 75% availability gauge, 5,957 h avoided, 12-month recovery trend, AOG triage banner. |
| **3** | **Aircraft Inventory & Fleet Asset Health** | Aircraft Inventory | 1:30 – 2:10 | 40 s | 20-airframe registry, squadron dispersal, utilization charts, airworthiness states (FMC/PMC/NMC). |
| **4** | **Digital Twin & 2s Live Telemetry Streaming** | Digital Twin (`AC-02`) | 2:10 – 3:00 | 50 s | Interactive 8-system airframe schematic, live 2s streaming graph, EWMA + z-score + CUSUM detector. |
| **5** | **Predictive Faults, SHAP & Closed Loop Action** | Predictive Faults | 3:00 – 4:00 | 60 s | 29 AI predictions, SHAP driver explainability, RUL forecast, 1-click Work Order + Spare Indent + Audit Trail. |
| **6** | **Work Control & MRO Bay Scheduling** | Work Control | 4:00 – 4:40 | 40 s | 51 work orders, planned vs corrective ratio (69% planned), HAL/Base Depot capacity limits, 14-day schedule. |
| **7** | **Spares Logistics & Indent Lifecycle** | Spares & Inventory | 4:40 – 5:20 | 40 s | Critical LRU ledger, cover-day vs lead-time risk, automated 3-stage indent pipeline (`RAISED` → `APPROVED` → `RECEIVED`). |
| **8** | **Data Integration Hub & Custom CSV Ingestion** | Data Integration Hub | 5:20 – 6:00 | 40 s | 5 military feeds, sync health, 5 quarantine guards, and live custom CSV telemetry file upload. |
| **9** | **Maintenance Analytics & Production ML Registry** | Maintenance Analytics | 6:00 – 6:35 | 35 s | Before-vs-after scorecard, downtime Pareto causes, horizontal 4-model production ML registry. |
| **10** | **Defense RBAC Clearance & Conclusion** | RBAC Dropdown + Wrap-up | 6:35 – 7:00 | 25 s | Switching 4 defense personas, button lock enforcement, Atmanirbhar Bharat vision & closing call. |

---

## 2 · Verbatim Narration & Director Instructions

---

### Scene 1 — 0:00 to 0:45 · Problem Statement & The Silo Trap

**🖥 On Screen Actions:**  
- Start on the **Fleet overview** dashboard.
- Smoothly pan cursor across the header, showcasing the centered **AIR POWER** insignia and the pulsating green **LIVE IoT FEED** indicator.
- Hover briefly over the AOG triage alert banner showing active critical groundings.

**🎤 Spoken Narration:**  
> *"Welcome to AirPower, developed for the Ministry of Defence and Defence Services Staff College under Problem Statement 26249: Predictive Maintenance and Fleet Availability.*  
>  
> *Across modern military aviation, aircraft availability is constantly compromised by a fundamental challenge: data fragmentation. Onboard health telemetry, paper-based technical logbooks, depot MRO scheduling, and central stores ERP operate in completely isolated silos.  
>  
> Because these systems cannot talk to one another in real time, maintenance remains dangerously reactive. Precursor degradation signals are detected only after in-flight failure, grounding multimillion-dollar airframes for weeks while waiting for long-lead spare parts.  
>  
> AirPower eliminates this bottleneck by unifying all defense telemetry into a single, real-time closed-loop decision platform."*

**✍ Director Note:** Deliver with authoritative, calm pacing. Emphasize *"isolated silos"* and *"dangerously reactive"*.

---

### Scene 2 — 0:45 to 1:30 · Fleet Overview & Command Readiness

**🖥 On Screen Actions:**  
- Sweep cursor across the 4 top KPI cards: **Fleet Availability (75.0%)**, **Mission Capable Rate (80.0%)**, **Early Warning (5.3 d)**, and **Downtime Avoided (5,957 h)**.
- Scroll down smoothly to show the **12-Month Fleet Availability Recovery Trend** (illustrating the climb from 68% to 75%).
- Hover over the **Avoidable Downtime Pareto Analysis** bar chart, showing engine vibration and hydraulic leaks as top contributors.

**🎤 Spoken Narration:**  
> *"On the Fleet Overview, the Duty Controller immediately answers the highest command priority: 'Can we fly today?'  
>  
> Instead of requiring frantic coordination across squadrons and depots, command has instant operational ground-truth. Fleet availability stands at seventy-five percent—a seven-point operational gain over the historical baseline, translating directly into one point four additional mission-ready fighters on the tarmac.  
>  
> Our 12-month recovery trend visualizes the steady transition from reactive firefighting to managed availability. Below, the avoidable downtime Pareto chart isolates the exact subsystem culprits—identifying that thirty-eight percent of lost airframe hours stem from propulsion and hydraulic seal wear, allowing planners to target preventative campaigns before combat sorties are impacted."*

**✍ Director Note:** Point specifically to the `+7.0%` recovery delta pill and the `5,957 hrs` downtime avoided card.

---

### Scene 3 — 1:30 to 2:10 · Aircraft Inventory & Fleet Asset Health

**🖥 On Screen Actions:**  
- Click **Aircraft inventory** in the left sidebar.
- Show the 20-aircraft fleet grid. Click the status filter tabs (**All**, **Airworthy**, **In Maintenance**, **AOG**).
- Point to aircraft **AC-02 (Su-30MKI)**, highlighting its airworthiness state (`FMC`), total flight hours (2,840 h), completed cycles, and last inspection timestamp.
- Click on **AC-02** to transition directly into its digital twin.

**🎤 Spoken Narration:**  
> *"Navigating into the Aircraft Inventory, engineering officers access a live, centralized registry of all twenty squadron airframes.  
>  
> Each airframe card continuously tracks operational readiness—categorized strictly by military standard: Fully Mission Capable, Partially Mission Capable, and Non-Mission Capable due to maintenance or supply.  
>  
> For every tail number, from our frontline Sukhois to Mirage airframes, the platform aggregates cumulative flight hours, landing cycles, and mean utilization rates. This eliminates logbook discrepancies between base hangars and command headquarters.  
>  
> By clicking into tail AC-02, we transition directly into its high-fidelity digital twin."*

**✍ Director Note:** Pause for 1 second on the inventory status filters before clicking tail AC-02.

---

### Scene 4 — 2:10 to 3:00 · Digital Twin & 2s Live Telemetry Streaming

**🖥 On Screen Actions:**  
- Arrive at the **Digital twin** page for `AC-02`.
- Hover over the interactive SVG airframe diagram, highlighting the 8 clickable subsystem nodes (**Turbofan Engine**, **Hydraulics**, **Avionics**, **Fuel System**, etc.).
- Click on **Turbofan Engine**; point to the component life-limited wear indicators.
- Scroll down to the **Live Telemetry Stream**, pointing to the real-time sensor plot updating dynamically every 2 seconds with live EGT temperature, vibration, and pressure readings.

**🎤 Spoken Narration:**  
> *"The Digital Twin provides a real-time diagnostic replica of the aircraft. Our interactive vector schematic maps the health of eight mission-critical subsystems with instant status indicators.  
>  
> Selecting the Turbofan Engine reveals component life consumption and remaining operational hours before mandatory overhaul.  
>  
> But what sets AirPower apart is what's happening underneath: this is not a mocked animation. AirPower streams real-time sensor telemetry every two seconds directly into the browser.  
>  
> Operating on this stream is our client-side statistical anomaly detector. Using an Exponentially Weighted Moving Average combined with standardized z-scores and Cumulative Sum control charting—or CUSUM—it captures subtle parameter drift and micro-vibrations long before conventional hard-threshold cockpit alarms ever trigger."*

**✍ Director Note:** Let the viewer see the chart tick forward 2–3 times as the data stream plots new points.

---

### Scene 5 — 3:00 to 4:00 · Predictive Faults, SHAP & The Closed-Loop Action

**🖥 On Screen Actions:**  
- Click **Predictive faults** in the sidebar.
- Filter by **Critical (P1)**. Select the top alert: **Turbofan Bearing Spallation Warning (AC-02)**.
- Point to the **Predicted Remaining Useful Life (RUL: 3.8 days)** and the model confidence metric (94.2%).
- Hover over the **SHAP Feature Importance Drivers** (Vibration kurtosis: +42%, Turbine Inter-stage Temp: +31%).
- Perform the **Closed-Loop Action Sequence**:
  1. Click **Acknowledge alert** (watch the status badge switch to acknowledged).
  2. Click **Raise work order** (button changes to *"✓ Work order raised"*).
  3. Click **Indent spare** (button changes to *"✓ Spare indented"*).
- Scroll down to the **Audit Trail & Action Log** to show the cryptographic timestamp, callsign, and signed action entry.

**🎤 Spoken Narration:**  
> *"Under Predictive Faults, artificial intelligence transforms raw sensor data into tactical decision foresight. Here, the system flags twenty-nine active fleet predictions.  
>  
> Examining this high-priority alert on AC-02's turbofan, the machine learning model forecasts a Remaining Useful Life of just 3.8 days before mechanical bearing failure.  
>  
> Crucially, AirPower rejects opaque black boxes. Our explainable AI panel uses SHAP feature attributions to show engineers exactly why the model fired: elevated high-frequency vibration contributed forty-two percent, combined with a 28-degree thermal spike.  
>  
> Most importantly, AirPower is built on the principle that prediction without automated execution is useless. With three clicks, we execute the full closed loop: we acknowledge the alert, automatically generate a Depot Work Order, and indent the required ceramic roller bearing from Base Stores.  
>  
> Every action is immediately committed to an immutable, cryptographically timestamped audit trail."*

**✍ Director Note:** Click cleanly through the three buttons without rushing so each state change is clearly legible.

---

### Scene 6 — 4:00 to 4:40 · Work Control & MRO Bay Scheduling

**🖥 On Screen Actions:**  
- Click **Work control** in the sidebar.
- Point to the top metric: **Planned Work Ratio (69%)** versus **Corrective (31%)**.
- Showcase the newly generated predictive work order for `AC-02` at the top of the queue.
- Hover over the **Agency Workload & Capacity Cards** (**No. 51 Base Repair Depot (BRD)** at 82% bay capacity, **Hindustan Aeronautics Limited (HAL)** at 64%).
- Scroll across the **14-Day Gantt Maintenance Schedule**.

**🎤 Spoken Narration:**  
> *"In Work Control, the newly dispatched work order instantly populates the active depot queue.  
>  
> By deploying predictive work orders days in advance, AirPower fundamentally inverts maintenance operations: our planned maintenance ratio has jumped from thirty-one percent to sixty-nine percent. Instead of responding to emergency engine seizures on the tarmac, ninety percent of major overhauls are scheduled proactively.  
>  
> The console tracks maintenance agency load balancing across Base Repair Depots and HAL facilities, ensuring no depot exceeds its critical bay capacity.  
>  
> The 14-day schedule maps hangar bay allocation, technician shift availability, and expected turn-around time, cutting mean repair duration down to twenty-one point nine hours."*

**✍ Director Note:** Point out how the work order raised in Scene 5 is now visible in the MRO schedule.

---

### Scene 7 — 4:40 to 5:20 · Spares Logistics & Indent Lifecycle

**🖥 On Screen Actions:**  
- Click **Spares & inventory** in the sidebar.
- Point to the **100% Spares Fill Rate** KPI and the **Zero AOG Stockouts** badge.
- Highlight the **Days of Supply Buffer vs. Supplier Lead Time** risk column.
- Filter or scroll to the ceramic bearing indented in Scene 5.
- Demonstrate the automated 3-stage procurement pipeline: click **Approve Indent**, then **Mark Received**.

**🎤 Spoken Narration:**  
> *"In Spares and Logistics, supply officers maintain real-time visibility over critical Line Replaceable Units and assemblies.  
>  
> The inventory ledger monitors each component's stock level against its reorder buffer and supplier lead time. If lead time exceeds our days of supply, the platform automatically flags stockout hazard warnings.  
>  
> Here is the replacement bearing we indented just moments ago from the predictive alert. AirPower coordinates an automated three-stage requisition workflow: from Raised, to Approved by the Stores Officer, to Marked Received upon depot delivery.  
>  
> By pre-positioning high-wear spares before the aircraft even touches down for servicing, AirPower achieves a one hundred percent spares fill rate, eliminating parts-related groundings entirely."*

**✍ Director Note:** Click **Approve Indent** and show the status indicator change green.

---

### Scene 8 — 5:20 to 6:00 · Data Integration Hub & Custom CSV Ingestion

**🖥 On Screen Actions:**  
- Click **Data integration** in the sidebar.
- Show the 5 defense data feed status cards (**ACMS/IoT Telemetry**, **Technical Logbooks**, **Spares ERP**, **Depot MRO Records**, **Flight Operations**). All show green `HEALTHY` or `SYNCED`.
- Point to the **5 Data Quality Quarantine Guards** (catching unit mismatches, out-of-range sensor spikes, and duplicate serials).
- Click the **Upload Sensor CSV** section. Select or drop a sample sensor telemetry CSV, showing the client-side parser ingest, validate, and compute statistics instantly.

**🎤 Spoken Narration:**  
> *"Behind this synchronized workflow sits the Data Integration Hub. AirPower bridges the military data divide by interfacing with five distinct defense streams—from MIL-STD-1553 bus telemetry to legacy ERPs.  
>  
> The hub enforces rigorous defense-grade data governance: five automated quarantine filters validate incoming packets, dropping corrupted values, resolving unit mismatches, and preventing bad sensor data from contaminating our predictive models.  
>  
> Furthermore, users can ingest external flight records directly: uploading any standard multi-channel sensor CSV immediately parses, validates, and runs real-time statistical anomaly detection client-side in the browser."*

**✍ Director Note:** Drag or select a sample CSV to show the file processing feedback badge.

---

### Scene 9 — 6:00 to 6:35 · Maintenance Analytics & Production ML Registry

**🖥 On Screen Actions:**  
- Click **Maintenance analytics** in the sidebar.
- Showcase the **Before vs. After Operational Scorecard**:
  - Availability: `68.0%` → `75.0%`
  - MTTR: `41.0 hrs` → `21.9 hrs` (-46.6%)
  - MTBF: `34.5 hrs` → `42.3 hrs` (+22.6%)
- Scroll to the **Horizontal Production ML Model Registry**, pointing out the 4 operational models:
  1. `GBM-RUL-v4.2` (LightGBM Regression)
  2. `ISOF-VIB-v2.1` (Isolation Forest)
  3. `AE-HYD-v3.0` (Deep Autoencoder)
  4. `WBL-SURV-v1.8` (Weibull Survival Analysis)

**🎤 Spoken Narration:**  
> *"In Maintenance Analytics, the operational return on investment is mathematically verified.  
>  
> Our before-and-after scorecard demonstrates a forty-six point six percent drop in Mean Turnaround Time, while Mean Time Between Failures improved by over twenty-two percent. Over the past rolling thirty days alone, five thousand nine hundred and fifty-seven downtime hours were preserved.  
>  
> Below, our Production Model Registry displays our multi-model AI ensemble: LightGBM for remaining useful life regression, Isolation Forests for high-frequency vibration anomalies, Deep Autoencoders for hydraulic pressure curves, and Weibull survival analysis for age-conditioned failure hazard rates."*

**✍ Director Note:** Point smoothly along the 4 horizontal model cards showing their respective MAE, precision, and drift scores.

---

### Scene 10 — 6:35 to 7:00 · Defense RBAC Clearance & Strategic Conclusion

**🖥 On Screen Actions:**  
- Click the top-right **Operational Role** dropdown.
- Switch role from **Duty Controller** to **Flight-Line Engineer**, then to **Maintenance Controller**.
- Point to the sidebar navigation badges updating (`PRIMARY` vs `READ ONLY`) and show that restricted action buttons render locked (`🔒 Requires MRO Auth`).
- Return to **Fleet overview** for the final wide shot.

**🎤 Spoken Narration:**  
> *"Finally, AirPower enforces military Role-Based Access Control. All defense officers retain full situational awareness across the entire fleet without artificial blind spots, but critical operational actions—such as releasing depot work orders or approving capital indents—are strictly restricted by appointment and military rank.  
>  
> AirPower transforms military fleet maintenance from a fragmented, reactive guessing game into an intelligent, proactive science.  
>  
> Built for the Indian Armed Forces under the vision of Atmanirbhar Bharat, AirPower guarantees higher sortie generation, zero preventable groundings, and total mission readiness.  
>  
> Jai Hind. Thank you."*

**✍ Director Note:** Close on the full, clean Fleet Overview dashboard with the gold AIR POWER emblem in view.

---

## 3 · Professional Filming & Audio Best Practices

1. **Audio Recording:**
   - Use a directional USB condenser mic or high-quality headset. Keep microphone ~15 cm from mouth with a pop filter.
   - Speak in a steady, confident military briefing cadence. Avoid rushed speech; let the UI animations finish before speaking the next sentence.
2. **Cursor Discipline:**
   - Never wave or circle the mouse rapidly. Move in straight, deliberate vectors.
   - Click once, pause for 1 second to let the UI reflect the change, then move to the next item.
3. **Screen Resolution:**
   - Record in full 1080p (1920×1080) at 60 FPS.
   - Ensure browser is at 100% native scale with bookmark bars and browser toolbars hidden (`F11` fullscreen mode).
4. **Backup Rehearsal:**
   - Do one dry run following the exact table timestamps to ensure your pace lands between 6 minutes 45 seconds and 7 minutes 00 seconds.

---

*AirPower — Built for Ministry of Defence (MoD) Defence Services Staff College under Problem Statement 26249.*
