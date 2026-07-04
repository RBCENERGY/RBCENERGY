import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function SavingsCalculator() {
  const [lightPoints, setLightPoints] = useState(500);
  const [wattage, setWattage] = useState("400");
  const [hours, setHours] = useState(12);
  const [price, setPrice] = useState(0.30);

  const results = useMemo(() => {
    const w = parseInt(wattage);
    const newW = w * 0.3; // Approx 70% savings with LED
    const days = 250; // Working days per year

    const oldKwh = (lightPoints * w * hours * days) / 1000;
    const newKwh = (lightPoints * newW * hours * days) / 1000;

    const oldCost = oldKwh * price;
    const newCost = newKwh * price;

    const savingsEuro = oldCost - newCost;
    const savingsCo2 = (oldKwh - newKwh) * 0.42; // approx 0.42 kg CO2 per kWh

    // Assuming approx 150€ per new light point installed
    const investment = lightPoints * 150;
    const payback = investment / savingsEuro;

    return {
      oldCost,
      newCost,
      savingsEuro,
      savingsCo2,
      payback: isNaN(payback) || payback === Infinity ? 0 : payback
    };
  }, [lightPoints, wattage, hours, price]);

  const formatEuro = (val: number) => new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(val);

  return (
    <div className="bg-secondary/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
      
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
                    <SelectItem value="150">150 Watt (HQL/HQI)</SelectItem>
                    <SelectItem value="250">250 Watt (HQL/HQI)</SelectItem>
                    <SelectItem value="400">400 Watt (HQL/HQI)</SelectItem>
                    <SelectItem value="600">600 Watt (HQL/HQI)</SelectItem>
                    <SelectItem value="1000">1000 Watt (HQL/HQI)</SelectItem>
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
              <p className="text-xl text-white">~ {Math.round((results.savingsEuro / results.oldCost) * 100)}% Reduktion</p>
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
