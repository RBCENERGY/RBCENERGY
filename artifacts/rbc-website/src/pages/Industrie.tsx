import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Factory, Warehouse, Zap } from "lucide-react";

export default function Industrie() {
  return (
    <PageLayout title="Industrie & Logistik">
      <section className="relative min-h-[60vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-industry.png" 
            alt="Industriehalle mit LED Beleuchtung" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Licht für die <span className="text-primary">Industrie</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Robuste, wartungsarme und hochgradig effiziente LED-Lichtsysteme für Produktionshallen, Lager und Logistikzentren. Erhöhen Sie die Arbeitssicherheit und senken Sie die Kosten um bis zu 80%.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8">
                Industrie-Beratung anfordern
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <Factory className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Produktion & Fertigung</h3>
              <p className="text-white/60 mb-6">Hitze, Staub und Vibrationen: Unsere Industrie-LEDs sind für härteste Bedingungen ausgelegt. Perfekte Ausleuchtung reduziert zudem Ausschuss und Fehlerquoten.</p>
              <ul className="space-y-2">
                <li className="flex gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary mt-0.5" /> Hohe Schutzklassen (IP65+)</li>
                <li className="flex gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary mt-0.5" /> Blendfreies Licht (UGR&lt;19)</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <Warehouse className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Lager & Logistik</h3>
              <p className="text-white/60 mb-6">Hochregallager erfordern spezielle Optiken. Intelligente Sensorik dimmt das Licht automatisch hoch, wenn ein Stapler in den Gang fährt.</p>
              <ul className="space-y-2">
                <li className="flex gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary mt-0.5" /> Enge Abstrahlwinkel für Gänge</li>
                <li className="flex gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary mt-0.5" /> Schwarmintelligenz (Sensorik)</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <Zap className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Kühlhäuser & Spezielle Bereiche</h3>
              <p className="text-white/60 mb-6">LEDs entfalten bei Kälte ihre maximale Lebensdauer. Spezielle Leuchten für die Lebensmittelindustrie erfüllen alle HACCP-Anforderungen.</p>
              <ul className="space-y-2">
                <li className="flex gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary mt-0.5" /> HACCP konform (Splitterschutz)</li>
                <li className="flex gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary mt-0.5" /> Einsatz bis -40°C</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
