import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building2, Lightbulb, ShieldCheck } from "lucide-react";

export default function Kommunen() {
  return (
    <PageLayout title="Kommunen & Städte">
      <section className="relative min-h-[60vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-municipality.png" 
            alt="LED Straßenbeleuchtung in der Stadt" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Sicheres Licht für <span className="text-primary">Städte & Gemeinden</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Reduzieren Sie den CO₂-Ausstoß Ihrer Kommune und entlasten Sie den Haushalt. Moderne Straßenbeleuchtung, Parkhäuser und öffentliche Gebäude – gefördert durch den Bund.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8">
                Kommunale Beratung anfordern
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <Lightbulb className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Straßenbeleuchtung</h3>
              <p className="text-white/60 leading-relaxed">
                Austausch veralteter Natriumdampflampen (NAV) gegen hocheffiziente LED-Straßenleuchten. Besseres Licht für mehr Verkehrssicherheit bei minimalen Energiekosten. Smart-City ready.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <Building2 className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Öffentliche Gebäude</h3>
              <p className="text-white/60 leading-relaxed">
                Ob Schulen, Sporthallen oder Verwaltungsgebäude: Wir rüsten die Beleuchtung im laufenden Betrieb auf flimmerfreie, arbeitsplatzgerechte LED-Beleuchtung um.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <ShieldCheck className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Fördermittel-Service</h3>
              <p className="text-white/60 leading-relaxed">
                Der Bund fördert kommunale LED-Projekte massiv. Wir übernehmen die komplette Beantragung der BMUV (PTJ/ZUG) Fördermittel für Ihre Kommune.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
