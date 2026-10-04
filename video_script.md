# AirPower — Video Narration Script (3–4 Minutes)

> **Problem Statement ID:** 26249 · **Organization:** Ministry of Defence (MoD) · **Department:** Defence Services Staff College  
> **Title:** Air Power — Predictive Maintenance & Fleet Availability  
> **Target Video Length:** ~3 min 30 s to 3 min 45 s (perfect for standard 3–4 minute pitch limits)  
> **Spoken Word Count:** ~480 words (~135–140 words per minute pacing)  
> **GitHub:** [https://github.com/im-yousuf/AIR-POWER](https://github.com/im-yousuf/AIR-POWER)  
> **Live Site:** [https://airpower-predictive-maintenance.vercel.app](https://airpower-predictive-maintenance.vercel.app) (or `http://localhost:5173`)  
> **Companion Architecture Guide:** [detailed_explanation.md](detailed_explanation.md)

---

## 0 · Pre-Recording Quick Checklist (30 seconds)

1. **Clean State:** In browser DevTools (F12) → Application → Local Storage → Clear `airpower` keys, then refresh `http://localhost:5173/`.
2. **Display Setup:** Fullscreen mode (F11), 1080p recording, 100% browser zoom, notifications muted.
3. **Starting View:** Top navigation role set to **Duty Controller (AIR-OPS-1 · Wing Commander)** on the **Fleet overview** page.
4. **Key Metrics Card (keep on second monitor):**
   - **Fleet Availability:** 75% (+7 pts vs 68% baseline)
   - **Mission Capable:** 80% (+6 pts)
   - **MTTR:** Reduced from 41 h to 21.9 h (▲46% faster)
   - **Mean Early Warning:** 5.3 days before failure
   - **Downtime Hours Avoided:** 5,957 h (rolling 30 d)

---

## 1 · Scene Breakdown & Timing (3:35 Total)

| # | Scene | Timestamp | Duration | Core Focus |
|---|---|---|---|---|
| **1** | **Problem Statement & Cold Open** | 0:00 – 0:35 | 35 s | MoD DSSC 26249, fragmented silos, reactive downtime |
| **2** | **Fleet Overview & Readiness KPIs** | 0:35 – 1:05 | 30 s | 75% availability, IoT stream, AOG status, 12-month trend |
| **3** | **Digital Twin & Live IoT Telemetry** | 1:05 – 1:40 | 35 s | Interactive airframe replica, 2s streaming telemetry, anomaly detector |
| **4** | **Predictive Faults & The Closed Loop** | 1:40 – 2:20 | 40 s | SHAP driver explainability, RUL days, raising WOs & spare indents |
| **5** | **Military RBAC & Defense Roles** | 2:20 – 2:55 | 35 s | Role switcher, PRIMARY vs READ-ONLY clearance, locked MRO/Logistics buttons |
| **6** | **Data Hub & Maintenance Analytics** | 2:55 – 3:20 | 25 s | 5 integrated feeds, horizontal ML registry, downtime pareto |
| **7** | **Conclusion & Operational Impact** | 3:20 – 3:35 | 15 s | Decided maintenance, mission readiness, closing call |

---

## 2 · Step-by-Step Narration Script

---

### Scene 1 — 0:00 to 0:35 · Problem Statement & The Silo Trap

**🖥 On Screen:**  
Start on the **Fleet overview** screen. Mouse hovers over the header and the **LIVE IoT FEED** indicator.

**🎤 Speaker Narration:**  
> *"This is AirPower, built for Ministry of Defence Problem Statement 26249: Predictive Maintenance & Fleet Availability.*  
>  
> *Across modern air fleets, low aircraft availability stems from a fundamental breakdown: onboard health sensors, technical logbooks, stores ERP, and repair depots operate in isolated silos. Because these systems never talk to each other, maintenance remains largely reactive. Precursor signals are missed, aircraft are grounded unexpectedly, and critical missions are compromised waiting weeks for long-lead spares.*  
>  
> *AirPower solves this by integrating all four data streams into a single closed-loop platform that predicts failures days in advance."*

**✍ Director Note:** Confident, crisp opening. Emphasize *"isolated silos"* and *"closed loop"*.

---

### Scene 2 — 0:35 to 1:05 · Fleet Overview & Command Readiness

**🖥 On Screen:**  
Sweep cursor across the top KPI cards (**Fleet availability 75%**, **Mission capable 80%**, **Early warning 5.3 d**, **5,957 h avoided**). Scroll down smoothly to show the **Fleet availability trend** and **Avoidable downtime pareto**.

**🎤 Speaker Narration:**  
> *"On the Fleet Overview, the Duty Controller immediately answers one critical operational question: 'Can we fly today?'*  
>  
> *Instead of making four phone calls across depots, command sees real-time airworthiness: fleet availability is up to seventy-five percent—a seven-point gain over the reactive baseline. The trend graph proves consistent recovery, while our Pareto analysis flags avoidable downtime hours saved before catastrophic component failure occurs."*

**✍ Director Note:** Point to the 75% availability gauge and the +7 delta chip.

---

### Scene 3 — 1:05 to 1:40 · Digital Twin & Live Telemetry

**🖥 On Screen:**  
Click **Digital twin** in the left sidebar. Click on an airframe node (e.g., **Turbofan Engine** or **Hydraulics**). Watch the live SVG telemetry chart update in real-time every 2 seconds.

**🎤 Speaker Narration:**  
> *"Under the Digital Twin, we inspect individual airframes in real time. Here on aircraft tail AC-02, an interactive SVG digital twin maps sensor health across all major subsystems.*  
>  
> *Live two-second streaming telemetry monitors turbine EGT, vibration, and hydraulic pressures. Our lightweight online detector runs statistical z-score and CUSUM algorithms directly on the sensor feed, instantly detecting subtle degradation patterns days before a pilot ever sees a cockpit alarm."*

**✍ Director Note:** Hover over the live telemetry graph as points stream in.

---

### Scene 4 — 1:40 to 2:20 · Predictive Faults & The Closed Loop Action

**🖥 On Screen:**  
Click **Predictive faults**. Select the top critical alert. Point to **Why the model flagged it** (SHAP-style drivers). Move to **Recommended action** and click **Raise work order**, then **Indent spare**. Point to the real-time **Action log (audit trail)** below.

**🎤 Speaker Narration:**  
> *"Under Predictive Faults, AI transforms telemetry into actionable foresight. For this critical engine bearing alert, the model predicts Remaining Useful Life of just 3.8 days.*  
>  
> *Unlike black-box models, our SHAP-style explainability shows exactly why it fired: elevated vibration contributed forty-two percent. Most importantly, AirPower is a closed-loop platform: with one click, we acknowledge the alert, dispatch an automated Work Order into maintenance planning, and indent the required replacement bearing before the aircraft is grounded. Everything writes to a permanent, cryptographically auditable log."*

**✍ Director Note:** Show the work order button turning into *"✓ Work order raised"* and appearing in the audit trail.

---

### Scene 5 — 2:20 to 2:55 · Military Role-Based Access Control (RBAC)

**🖥 On Screen:**  
Point to the sidebar showing **PRIMARY** vs **READ ONLY** badges. Open the top-right **Operational Role** dropdown. Show the 4 defense personas. Switch role from **Duty Controller** to **Flight-Line Engineer**, then to **Maintenance Controller**. Show how action buttons dynamically lock (`🔒 Requires MRO Auth`) and unlock based on role clearance.

**🎤 Speaker Narration:**  
> *"Crucially, AirPower enforces military Role-Based Access Control aligned with MoD operational hierarchy.*  
>  
> *All defense personnel maintain complete situational awareness across the fleet without artificial blind spots. However, operational actions are strictly governed: the sidebar distinguishes Primary Command consoles from Read-Only audit pages.*  
>  
> *A Flight-Line Engineer can inspect telemetry but cannot release depot work orders. When we switch to Maintenance Controller, authorized MRO buttons unlock, while procurement approval remains restricted to the Stores & Logistics Officer."*

**✍ Director Note:** Click the dropdown to show the roles, switch role, and show the topbar clearance badge update from `🔒 READ-ONLY AUDIT` to `✓ COMMAND`.

---

### Scene 6 — 2:55 to 3:20 · Data Integration & Analytics

**🖥 On Screen:**  
Quickly click **Data integration** to show the 5 feeds (ACMS/IoT, Technical Records, Spares ERP, Maintenance Agencies, Flight Ops). Then click **Maintenance analytics** to show the horizontal **Production ML Model Registry** and **Downtime Pareto**.

**🎤 Speaker Narration:**  
> *"Behind the scenes, our Data Integration Hub continuously synthesizes five defense feeds, verifying schema normalization and data freshness.*  
>  
> *In Maintenance Analytics, our horizontal Production Model Registry tracks model accuracy and data drift across four specialized algorithms, while fleet metrics confirm our mean turnaround time has dropped from forty-one hours down to twenty-one point nine hours."*

**✍ Director Note:** Highlight the 4 horizontal model cards (GBM-RUL, Isolation Forest, Autoencoder, Weibull).

---

### Scene 7 — 3:20 to 3:35 · Conclusion & Strategic Impact

**🖥 On Screen:**  
Return to **Fleet overview** with the full dashboard visible.

**🎤 Speaker Narration:**  
> *"AirPower turns air fleet maintenance from an expensive, reactive guessing game into a predictable, proactive science—delivering higher mission availability, zero preventable groundings, and complete tactical readiness.*  
>  
> *Thank you."*

---

## 3 · Video Filming Tips for Maximum Score

- **Pacing:** Keep your delivery energetic and steady. 480 words spoken in 3.5 minutes leaves ~20 seconds of breathing room for UI transitions.
- **Mouse Movement:** Move the cursor deliberately. Don't shake or circle erratically; point, pause for 1 second, then click.
- **Audio Quality:** Use an external microphone or headset in a quiet room to ensure the judging panel hears crisp defense terminology.
