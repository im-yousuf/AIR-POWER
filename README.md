# AirPower — Predictive Maintenance & Fleet Availability Platform

> 🚀 **Live Production Deployment (Vercel):** [https://airpower-predictive-maintenance.vercel.app](https://airpower-predictive-maintenance.vercel.app)  
> 🔗 **Alternate Mirror:** [https://airpower-predictive-maintenance-mu.vercel.app](https://airpower-predictive-maintenance-mu.vercel.app)  
> 📁 **GitHub Repository:** [https://github.com/im-yousuf/AIR-POWER](https://github.com/im-yousuf/AIR-POWER)

[![Live Application](https://img.shields.io/badge/Live%20Demo-Vercel-success?style=for-the-badge&logo=vercel)](https://airpower-predictive-maintenance.vercel.app)
[![Ministry of Defence](https://img.shields.io/badge/MoD%20DSSC-Problem%2026249-1d7ae0?style=for-the-badge)](https://github.com/im-yousuf/AIR-POWER)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20Typecheck-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Zero Runtime Deps](https://img.shields.io/badge/Dependencies-Zero%20Runtime%20Chart%20Libs-emerald?style=for-the-badge)](https://react.dev/)

---

## 🌐 About & Live Vercel Deployment

AirPower is deployed live on Vercel at:
- **Primary Production URL:** **[https://airpower-predictive-maintenance.vercel.app](https://airpower-predictive-maintenance.vercel.app)**
- **Alternate Production URL:** **[https://airpower-predictive-maintenance-mu.vercel.app](https://airpower-predictive-maintenance-mu.vercel.app)**

An integrated, military-grade predictive maintenance and fleet readiness platform built for the **Ministry of Defence (MoD) — Defence Services Staff College (DSSC)** under **Problem Statement ID: 26249**.

AirPower breaks the data silos between onboard aircraft health monitoring (IoT), technical logbooks, stores ERP, and maintenance repair agencies (MRO), converting delayed, reactive maintenance into proactive, scheduled readiness.

---

## 📌 Executive Summary & Problem Context

- **Problem Statement ID:** 26249
- **Organization:** Ministry of Defence (MoD)
- **Department:** Defence Services Staff College (DSSC)
- **Category:** Software
- **Theme:** Transportation & Logistics
- **Live Vercel Application:** [https://airpower-predictive-maintenance.vercel.app](https://airpower-predictive-maintenance.vercel.app)
- **GitHub Repository:** [https://github.com/im-yousuf/AIR-POWER](https://github.com/im-yousuf/AIR-POWER)

### The Core Problem Statement
> *"Low aircraft availability due to fragmented and largely reactive maintenance practices across the air fleet. Maintenance data from aircraft health-monitoring systems, technical records, spares and maintenance agencies is not adequately integrated, resulting in delayed fault prediction, avoidable aircraft downtime and sub-optimal utilisation of critical assets."*

---

## 🚀 Key Quantified Impact (Simulated 20-Airframe Fleet)

| Metric | Reactive Baseline | AirPower AI Platform | Strategic Operational Gain |
|---|:---:|:---:|:---:|
| **Fleet Availability** | 68.0% | **75.0%** | **▲ 7.0% points** (+1.4 effective airframes ready) |
| **Mission-Capable Rate** | 74.0% | **80.0%** | **▲ 6.0% points** higher combat readiness |
| **Mean Turnaround Time (MTTR)** | 41.0 hrs | **21.9 hrs** | **▲ 46.6% faster** return to service |
| **Mean Time Between Failures (MTBF)**| 34.5 flight hrs | **42.3 flight hrs** | **▲ 22.6% longer** safe operation |
| **Early Warning Lead Time** | 0.0 days (after defect) | **5.3 days** | Pre-failure detection before mission loss |
| **Spares Fill Rate** | 71.0% | **100.0%** | Zero AOG grounding due to stockouts |
| **Planned vs Reactive Work Ratio** | 31% / 69% | **69% / 31%** | Inverted maintenance culture to proactive |
| **Downtime Hours Avoided** | 0 hrs | **5,957 hrs** | Over 25 catastrophic failures averted (30-day window) |

---

## 🛡️ Military Role-Based Access Control (RBAC)

To reflect real-world defense operations, AirPower integrates an operational **Role-Based Access Control (RBAC)** architecture that honors the command hierarchy without creating artificial information blind spots:

### 1. Unified Defense Situational Awareness
All defense roles can freely navigate to all 8 operational consoles. No pages are arbitrarily locked or obscured behind 403 screens, preserving complete situational awareness across the air fleet.

### 2. Operational Clearances vs. Read-Only Audits
- When viewing consoles within their primary jurisdiction, personnel receive a **`✓ OPERATIONAL CLEARANCE`** badge.
- When viewing sister-agency consoles, personnel operate in **`🔒 READ-ONLY AUDIT`** mode with clear visual indicators in the top header and sidebar navigation.

### 3. Action-Level Command Enforcement
- **Raise Work Order:** Exclusively authorized for **Maintenance Controller** (and Duty Controller). Restricted roles see `🔒 Requires MRO Auth`.
- **Indent Spare:** Exclusively authorized for **Stores & Logistics Officer** (and Maintenance Controller). Restricted roles see `🔒 Requires Logistics Auth`.
- **Approve Indent & Log Stock Receipt:** Exclusively authorized for **Stores & Logistics Officer**. Restricted roles see `🔒 Stores Auth Req.`
- **Acknowledge Alert:** Authorized for technical and operational commanders.

```
┌────────────────────────────────────────────────────────────────────────┐
│                      MILITARY PERSONAS & CLEARANCES                    │
├────────────────────┬─────────────┬──────────────────┬──────────────────┤
│ Persona            │ Callsign    │ Military Rank    │ Primary Consoles │
├────────────────────┼─────────────┼──────────────────┼──────────────────┤
│ Duty Controller    │ AIR-OPS-1   │ Wing Commander   │ Overview, Fleet, │
│                    │             │                  │ Analytics        │
├────────────────────┼─────────────┼──────────────────┼──────────────────┤
│ Flight-Line Eng.   │ TECH-LINE-4 │ Squadron Leader  │ Digital Twin,    │
│                    │             │                  │ Predictions      │
├────────────────────┼─────────────┼──────────────────┼──────────────────┤
│ Maintenance Cont.  │ MRO-DISPATCH│ Chief Engineer   │ Maintenance,     │
│                    │             │                  │ Predictions, Data│
├────────────────────┼─────────────┼──────────────────┼──────────────────┤
│ Stores & Logistics │ LOG-DEPOT-51│ Sr Logistics Off │ Spares & Stores, │
│                    │             │                  │ Data Integration │
└────────────────────┴─────────────┴──────────────────┴──────────────────┘
```

---

## 💻 System Architecture & 8 Core Modules

### 1. Fleet Overview (`/overview`)
- High-level strategic readiness counters (Availability, Mission Capable, Early Warning Lead Time, Avoidable Downtime Avoided).
- High-visibility **Fleet Availability Trend** (70% expanded height) plotting rolling availability vs. historical reactive baseline.
- **Avoidable Downtime Pareto** isolating component downtime drivers into preventable vs unpreventable causes.
- Instant AOG risk triage with direct deep-linking to aircraft twins.

### 2. Aircraft Inventory (`/fleet`)
- Comprehensive airframe master register across 20 fighter, transport, and multi-role airframes.
- Real-time airworthiness status (`AIRWORTHY`, `SCHEDULED`, `AOG`, `DEPOT`).
- Flight hours, flight cycles, RUL alerts, open work orders, and utilisation percentages.

### 3. Digital Twin & Live IoT Telemetry (`/twin`)
- Top-down SVG airframe schematics with interactive subsystem health callouts (Turbofan Engines, Avionics, Hydraulics, Airframe Structure, Flight Controls, Radar, APU, Electrical).
- **2-second live streaming sensor traces** (EGT, N1/N2 RPM, Vibration, Hyd Pressure, Crack Growth).
- **Online Anomaly Detector (`src/lib/detector.ts`)**: Real-time EWMA baseline tracking, dynamic z-scores, and CUSUM change-point detection alerting directly on the streaming data.

### 4. Predictive Fault Detection (`/predictions`)
- 29 multi-system predictive alerts sorted by criticality (`CRITICAL`, `HIGH`, `MODERATE`, `LOW`).
- **SHAP-Style Feature Contribution Breakdown**: Transparent model explainability showing percentage contribution of sensor signals (e.g., EGT drift +42%, vibration kurtosis +31%).
- Remaining Useful Life (RUL) in days and flight hours.
- Direct operational closed loop: **Acknowledge Alert** → **Raise Work Order** → **Indent Spare** → **Audit Log**.

### 5. Maintenance Planning & Work Control (`/maintenance`)
- Unified maintenance schedule integrating predictive AI orders with preventive 100-hour servicing and depot overhauls.
- MRO repair agency capacity tracking (No. 51 BRD, No. 17 BRD, HAL OEM, Squadron Flight Line).
- Turnaround time (TAT) forecasting and 14-day lookahead window.

### 6. Spares & Inventory Management (`/spares`)
- Full-width **Inventory Ledger** with stock levels, consumption rates, and supplier lead times.
- Lead-time buffer analysis flagging parts where cover-days are shorter than replenishment lead times.
- **Live Indent Pipeline**: Automated lifecycle progression (`RAISED` → `APPROVED` → `RECEIVED`).

### 7. Data Integration Hub (`/data`)
- Ingestion pipeline modeling 5 military data sources:
  1. Onboard Health Monitoring (ACMS / IoT / ARINC-429)
  2. Digitized Technical Logbooks & Defect Reports
  3. Stores & Logistics ERP Master
  4. Base Repair Depots & OEM Facilities
  5. Operational Flight Rosters & Sortie Records
- Schema normalization, sync freshness monitoring, and data quality quarantine guards.
- **Bring-Your-Own-Data CSV Ingestion**: Ingest raw sensor telemetry CSVs directly in the browser to run anomaly detection live.

### 8. Maintenance Analytics (`/analytics`)
- Strategic Before-vs-After KPI scorecard verifying MTBF, MTTR, and availability deltas.
- **Horizontal 4-Model Production ML Registry**:
  - `GBM-RUL-v4.2` (LightGBM Regression · Remaining Useful Life)
  - `ISOF-VIB-v2.1` (Isolation Forest · Vibration & Bearing Anomaly)
  - `AE-HYD-v3.0` (Deep Autoencoder · Multi-sensor Pressure Anomaly)
  - `WBL-SURV-v1.8` (Weibull Hazard · Time-to-Failure Survival Analysis)
- Drift tracking (PSI), MAE, and automated retrain triggers.
- Detailed Downtime Pareto with quantified avoidable hours saved.

---

## 🛠️ Technology Stack & Engineering Standards

- **Core Framework:** React 18 + TypeScript (strict mode, zero warnings)
- **Bundler & Tooling:** Vite 5
- **Styling:** Custom CSS design system with HSL variables, glassmorphic headers, responsive flex/grid layouts, and military dark-mode accents. No heavy CSS dependencies.
- **Visualization:** Handcrafted, accessible, lightweight SVG charts and schematics. **Zero runtime charting bloat** (eliminates bundle overhead of Chart.js/Recharts).
- **State Management:** React Context API with persistent `localStorage` synchronization (`src/lib/platform.tsx`).
- **Production Bundle:** Under 250 KB total JavaScript, fast first-contentful paint (< 0.4s).

---

## 📦 Local Development & Quickstart

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Steps to Run
```bash
# 1. Clone the repository
git clone https://github.com/im-yousuf/AIR-POWER.git
cd AIR-POWER

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
# Server starts at http://localhost:5173/

# 4. Run TypeScript typecheck
npx tsc --noEmit

# 5. Build production bundle
npm run build
```

---

## 📑 Companion Documentation

- [**detailed_explanation.md**](detailed_explanation.md) — Comprehensive technical architecture, mathematical anomaly models, military defense mapping, and hackathon judge Q&A guide.
- [**video_script.md**](video_script.md) — Timed 3-to-4 minute demonstration and pitch script with verbatim narration and visual cues.
- [**sih_ppt_content.md**](sih_ppt_content.md) — Complete slide-by-slide content blueprint for presentation decks.

---

## ⚖️ Defense Disclaimer
*AirPower is an interactive demonstration and research prototype developed for Smart India Hackathon / MoD DSSC evaluation. All aircraft tail numbers, sensor traces, part serials, and operational records are synthetic simulations designed to replicate operational conditions without connecting to classified defence networks.*
