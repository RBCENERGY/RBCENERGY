import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function Leistungen() {
  return (
    <PageLayout title="Leistungen">
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">Unsere <span className="text-primary">Leistungen</span></h1>
            <p className="text-xl text-white/70">Von der Planung über die Installation bis zur Wartung – wir bieten ganzheitliche Lösungen für Ihre LED-Modernisierung.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 border border-primary/30">
                <CheckCircle2 className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">LED Retrofit</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Austausch der veralteten Leuchtmittel gegen hochmoderne, effiziente LED-Systeme unter Beibehaltung der bestehenden Infrastruktur wo möglich.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Bestandsaufnahme & Lichtplanung</li>
                <li className="flex items-start gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Bemusterung vor Ort</li>
                <li className="flex items-start gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Fachgerechte Montage</li>
              </ul>
            </div>

            <div className="bg-secondary border border-primary/50 rounded-2xl p-8 shadow-[0_0_30px_rgba(152,185,75,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-bl-lg">BELIEBTESTES MODELL</div>
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Licht-Contracting</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Modernisierung ohne eigene Investitionskosten. Die neue Anlage finanziert sich komplett aus den erzielten Energieeinsparungen.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> 0€ Investitionskosten</li>
                <li className="flex items-start gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Sofortige Liquiditätsschonung</li>
                <li className="flex items-start gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Bilanzneutrale Umsetzung</li>
              </ul>
              <Link href="/kontakt">
                <Button className="w-full bg-primary text-white hover:bg-primary/90">Beratung anfordern</Button>
              </Link>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 border border-primary/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Wartung & Service</h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                Rundum-Sorglos-Paket für Ihre Beleuchtungsanlage. Wir kümmern uns um den reibungslosen Betrieb und garantieren die Funktionalität.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Regelmäßige Inspektionen</li>
                <li className="flex items-start gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> Kostenloser Teileaustausch</li>
                <li className="flex items-start gap-2 text-sm text-white/80"><CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" /> 24/7 Entstörungsservice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
