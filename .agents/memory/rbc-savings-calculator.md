---
name: RBC Einsparrechner calibration
description: Real-world calibration basis for the savings calculator on the RBC website
---

Calibrated from a real RBC customer Energieberechnung (Treofan, T8 2x58W plant, 08.07.2024):

- LED replacement consumes ~22% of old system power → **78% savings** for T8 and HQL/HQI (user confirmed HQL ratio is similar).
- T5 is already efficient → use ledFactor 0.5 (~50% savings), so amortization is noticeably longer (per user instruction).
- Investment ~**160 € netto per Lichtpunkt** for a 2x58W T8 fixture, **including Montage + DALI Lichtsteuerung**; HQL highbays scaled higher (220–600 € by wattage).
- Acceptance fixture: 116W fixture, 8,766 h/yr (24h × 365d), 0.16 €/kWh, 160 €/point → payback ≈ **1.27 years** (matches the Excel).
- Calculator has a "Betriebstage pro Jahr" select (250/312/365) so continuous operation is representable.

**Why:** User said the old generic 70%/150€ numbers "entsprechen nicht der Realität" and provided the Excel as ground truth.
**How to apply:** Any change to SavingsCalculator math must still reproduce the acceptance fixture above.
