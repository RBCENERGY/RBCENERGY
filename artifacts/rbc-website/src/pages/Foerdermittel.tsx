import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileText, Coins, CheckCircle2 } from "lucide-react";

export default function Foerdermittel() {
  return (
    <PageLayout title="Fördermittel">
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">Bis zu <span className="text-primary">40% Zuschuss</span> sichern</h1>
            <p className="text-xl text-white/70">Bund und Länder fördern den Umstieg auf energieeffiziente LED-Beleuchtung. Wir übernehmen die komplette Abwicklung für Sie – von der Antragsstellung bis zur Auszahlung.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">1</div>
                  <h3 className="text-2xl font-bold text-white">BEG-Förderung (BAFA)</h3>
                </div>
                <p className="text-white/60 mb-4">Für Unternehmen. Förderung von bis zu 20% (KMU) auf Material und Installation bei der Modernisierung von Innen- und Außenbeleuchtung.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">2</div>
                  <h3 className="text-2xl font-bold text-white">Kommunalrichtlinie (ZUG)</h3>
                </div>
                <p className="text-white/60 mb-4">Für Kommunen, Vereine und soziale Einrichtungen. Bis zu 40% Zuschuss (finanzschwache Kommunen noch mehr) für den Austausch der Straßen- und Innenbeleuchtung.</p>
              </div>
            </div>

            <div className="bg-secondary border border-primary/30 p-8 rounded-2xl shadow-[0_0_40px_rgba(152,185,75,0.1)] relative">
              <h3 className="text-2xl font-bold text-white mb-6">Unser Fördermittel-Service</h3>
              <p className="text-white/70 mb-8">Der bürokratische Aufwand hält viele Unternehmen ab. Genau hier setzen wir an. Unser Team zertifizierter Energieberater kümmert sich um alles.</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-primary shrink-0" /> Prüfung der Förderfähigkeit
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-primary shrink-0" /> Einbindung eines Energieberaters (Energie-Audit)
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-primary shrink-0" /> Erstellung und Einreichung der Anträge
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-primary shrink-0" /> Nachweisführung nach Umsetzung
                </li>
              </ul>
              
              <Link href="/kontakt">
                <Button className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-lg">Jetzt Fördercheck starten</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
