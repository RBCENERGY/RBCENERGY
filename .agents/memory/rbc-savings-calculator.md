---
name: RBC Einsparrechner calibration
description: Real-world calibration basis for the savings calculator on the RBC website
---

Calibrated from two real RBC customer Energieberechnungen; the second (Birkenfeld 2023, 1:1 renovation) superseded the first (Treofan 2024, which had heavy fixture-count reduction → unrealistically high 78% for a generic calculator).

- Old-fixture watts in the calculator are **real draw incl. konventionellem Vorschaltgerät** (e.g. 2x58W T8 → 130W, matches Excel: 4.550W/35 fixtures).
- ledFactor: **T8/HQL 0.35** (~65% savings; 2x58 → 0.33, LED 42,7W), **T5 0.55** (~45% savings, longer amortization — per user).
- Investment netto per Lichtpunkt incl. Montage + DALI: T8 90–170 € (2x58 → 170), HQL highbays 220–600 € by wattage.
- Acceptance fixture (Birkenfeld-style): 2x58W, 4.000 h/yr, 0,21 €/kWh → savings ≈ 73 €/point/yr, payback ≈ **2.3–2.7 years**.
- Calculator has "Betriebstage pro Jahr" select (250/312/365); footnote "Berechnung inkl. Montagekosten und realem Verbrauch (inkl. Vorschaltgerät)".

**Why:** User twice said generic numbers "entsprechen nicht der Realität" and provided both Excels as ground truth; 1:1 case is the representative one.
**How to apply:** Any change to SavingsCalculator math must stay consistent with the Birkenfeld acceptance fixture above.
