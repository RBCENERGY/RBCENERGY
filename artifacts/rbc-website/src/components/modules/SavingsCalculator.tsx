import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

// Kalibriert anhand realer RBC-Energieberechnung (T8 2x58W Anlage):
// LED-Systemleistung ~22% der Altanlage (78% Einsparung), Investition
// ~160 € netto je Lichtpunkt inkl. Montage & DALI, Amortisation ~1,3 Jahre
// bei Dauerbetrieb und 0,16 €/kWh. HQL: ähnliches Verhältnis. T5: bereits
// effizienter, daher geringere Einsparung und längere Amortisation.
type FixtureOption = {
  value: string;
  label: string;
  watts: number;       // Anschlussleistung Altanlage je Lichtpunkt
  ledFactor: number;   // Restverbrauch LED im Verhältnis zur Altanlage
  invest: number;      // € netto je Lichtpunkt inkl. Montage
};

const FIXTURES: { group: string; options: FixtureOption[] }[] = [
  {
    group: "HQL / HQI (Quecksilber/Halogen)",
    options: [
      { value: "hql150", label: "150 Watt (HQL/HQI)", watts: 150, ledFactor: 0.22, invest: 220 },
      { value: "hql250", label: "250 Watt (HQL/HQI)", watts: 250, ledFactor: 0.22, invest: 280 },
      { value: "hql400", label: "400 Watt (HQL/HQI)", watts: 400, ledFactor: 0.22, invest: 350 },
      { value: "hql600", label: "600 Watt (HQL/HQI)", watts: 600, ledFactor: 0.22, invest: 450 },
      { value: "hql1000", label: "1000 Watt (HQL/HQI)", watts: 1000, ledFactor: 0.22, invest: 600 },
    ],
  },
  {
    group: "Leuchtstoffröhre T8 (klassisch)",
    options: [
      { value: "t8-18", label: "18 Watt (T8)", watts: 18, ledFactor: 0.22, invest: 80 },
      { value: "t8-36", label: "36 Watt (T8)", watts: 36, ledFactor: 0.22, invest: 120 },
      { value: "t8-58", label: "58 Watt (T8)", watts: 58, ledFactor: 0.22, invest: 140 },
      { value: "t8-2x36", label: "2x36 Watt (T8)", watts: 72, ledFactor: 0.22, invest: 150 },
      { value: "t8-2x58", label: "2x58 Watt (T8)", watts: 116, ledFactor: 0.22, invest: 160 },
    ],
  },
  {
    group: "Leuchtstoffröhre T5",
    options: [
      { value: "t5-14", label: "14 Watt (T5)", watts: 14, ledFactor: 0.5, invest: 80 },
      { value: "t5-28", label: "28 Watt (T5)", watts: 28, ledFactor: 0.5, invest: 120 },
      { value: "t5-54", label: "54 Watt (T5)", watts: 54, ledFactor: 0.5, invest: 140 },
      { value: "t5-80", label: "80 Watt (T5 HO)", watts: 80, ledFactor: 0.5, invest: 160 },
    ],
  },
];

const ALL_FIXTURES = FIXTURES.flatMap((g) => g.options);

export function SavingsCalculator() {
  const [lightPoints, setLightPoints] = useState(500);
  const [wattage, setWattage] = useState("hql400");
  const [hours, setHours] = useState(12);
  const [price, setPrice] = useState(0.30);
  const [days, setDays] = useState("250");

  const results = useMemo(() => {
    const fixture = ALL_FIXTURES.find((f) => f.value === wattage) ?? ALL_FIXTURES[2];
    const daysPerYear = parseInt(days);

    const oldKwh = (lightPoints * fixture.watts * hours * daysPerYear) / 1000;
    const newKwh = oldKwh * fixture.ledFactor;

    const oldCost = oldKwh * price;
    const newCost = newKwh * price;

    const savingsEuro = oldCost - newCost;
    const savingsCo2 = (oldKwh - newKwh) * 0.42; // ca. 0,42 kg CO2 je kWh

    const investment = lightPoints * fixture.invest;
    const payback = investment / savingsEuro;

    return {
      oldCost,
      newCost,
      savingsEuro,
      savingsCo2,
      reductionPct: oldCost > 0 ? Math.round((savingsEuro / oldCost) * 100) : 0,
      payback: isNaN(payback) || payback === Infinity ? 0 : payback
    };
  }, [lightPoints, wattage, hours, price, days]);

  const formatEuro = (val: number) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(val);

  return (
    <div className="bg-[#25412D] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(152,185,75,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(152,185,75,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Berechnen Sie Ihr Potenzial</h3>
            <p className="text-white/70">Erfahren Sie sofort, wie viel Energie und Kosten Sie durch eine Modernisierung sparen.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="text-base text-white">Anzahl der Lichtpunkte</Label>
                <span className="font-mono text-primary">{lightPoints} Stk.</span>
              </div>
              <Slider 
                value={[lightPoints]} 
                onValueChange={(val) => setLightPoints(val[0])} 
                max={5000} 
                step={50} 
                className="[&>[role=slider]]:bg-primary [&>[role=slider]]:border-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Aktuelle Leistung je Leuchte</Label>
                <Select value={wattage} onValueChange={setWattage}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Watt wählen" />
                  </SelectTrigger>
                  <SelectContent className="bg-secondary border-white/10 text-white">
                    {FIXTURES.map((group, i) => (
                      <SelectGroup key={group.group}>
                        <SelectLabel className={`text-white/40 text-xs uppercase tracking-widest px-2 py-1${i > 0 ? " mt-2" : ""}`}>{group.group}</SelectLabel>
                        {group.options.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-white">Strompreis (€/kWh)</Label>
                <Input 
                  type="number" 
                  step="0.01" 
                  value={price} 
                  onChange={(e) => setPrice(parseFloat(e.target.value) || 0)} 
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="text-base text-white">Tägliche Betriebsstunden</Label>
                <span className="font-mono text-primary">{hours} h</span>
              </div>
              <Slider 
                value={[hours]} 
                onValueChange={(val) => setHours(val[0])} 
                max={24} 
                step={1}
                className="[&>[role=slider]]:bg-primary [&>[role=slider]]:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-white">Betriebstage pro Jahr</Label>
              <Select value={days} onValueChange={setDays}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Betriebstage wählen" />
                </SelectTrigger>
                <SelectContent className="bg-secondary border-white/10 text-white">
                  <SelectItem value="250">250 Tage (5-Tage-Woche)</SelectItem>
                  <SelectItem value="312">312 Tage (6-Tage-Woche)</SelectItem>
                  <SelectItem value="365">365 Tage (Durchgehend)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <p className="text-sm text-white/50">Berechnung inkl. Montagekosten</p>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-8 border border-white/10 flex flex-col justify-center">
          <div className="space-y-8">
            <motion.div 
              key={results.savingsEuro}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <p className="text-white/60 mb-2 uppercase tracking-wider text-sm font-bold">Ihre jährliche Ersparnis</p>
              <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">
                {formatEuro(results.savingsEuro)}
              </div>
              <p className="text-xl text-white">~ {results.reductionPct}% Reduktion</p>
            </motion.div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-white/50 text-sm mb-1">CO₂-Einsparung</p>
                <p className="text-2xl font-mono text-white">{Math.round(results.savingsCo2).toLocaleString("de-DE")} kg</p>
              </div>
              <div className="text-center">
                <p className="text-white/50 text-sm mb-1">Amortisation in</p>
                <p className="text-2xl font-mono text-white">{results.payback.toFixed(1)} Jahren</p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/kontakt">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold">
                  Kostenlose Vor-Ort-Analyse anfragen
                </Button>
              </Link>
              <p className="text-center text-xs text-white/40 mt-3">*Die Berechnung stellt einen Richtwert dar und ersetzt kein detailliertes Angebot.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
