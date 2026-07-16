---
name: RBC Einsparrechner calibration
description: Real-world calibration basis for the savings calculator on the RBC website
---

Calibrated from two real RBC customer Energieberechnungen; the second (Birkenfeld 2023, 1:1 renovation) superseded the first (Treofan 2024, which had heavy fixture-count reduction → unrealistically high 78% for a generic calculator).

- Final calibration source: **Kläger Spritzguss Excel (2019)** — 82× 2xT8 KVG à 138W, 6.000 h/yr, 0,16 €/kWh, LED 60×60W, invest 11.940 € → 68% savings, 1,61 y payback.
- Old-fixture watts are **real draw incl. konventionellem Vorschaltgerät** (2x58W T8 → 138W; KVG ≈ +19% over nominal).
- ledFactor: **T8 0.32** (~68% savings), **HQL 0.22** (~78%, per HEESS 2019 Excel: 46×HQL400 nominal watts no ballast surcharge, LED Tiefstrahler 3.496/18.400 W = 0,19–0,25), **T5 0.55** (~45%, longer amortization — per user).
- Investment netto per Lichtpunkt incl. Montage: T8 85–146 € (2x58 → 146), HQL 170–380 € (400W → 230, avg of HEESS rows 187–342).
- HQL watts are nominal (no KVG surcharge); only T8 carries the +19% ballast factor.
- Acceptance fixture: 82 pts, 2x58W, 24h × 250d, 0,16 €/kWh → ≈7.390 €/yr savings, 68%, payback ≈ **1,62 years** (Excel: 7.407 € / 1,61).
- Calculator has "Betriebstage pro Jahr" select (250/312/365); footnote "Berechnung inkl. Montagekosten und realem Verbrauch (inkl. Vorschaltgerät)".

**Why:** User twice said generic numbers "entsprechen nicht der Realität" and provided both Excels as ground truth; 1:1 case is the representative one.
**How to apply:** Any change to SavingsCalculator math must stay consistent with the Birkenfeld acceptance fixture above.
