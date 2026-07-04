import { PageLayout } from "@/components/layout/PageLayout";
import { SavingsCalculator } from "@/components/modules/SavingsCalculator";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SiBmw, SiSiemens, SiDeutschebahn, SiBosch } from "react-icons/si";

export default function Home() {
  return (
    <PageLayout title="Marktführer für LED-Modernisierung">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-warehouse.png" 
            alt="Industriehalle mit LED Beleuchtung" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/30" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-primary font-medium text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Deutschlands Nr. 1 für Licht-Contracting
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6">
                Maximale Effizienz.<br />
                <span className="text-primary">Null Investition.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                Wir modernisieren Ihre Beleuchtung auf hochmoderne LED-Systeme. Sie sparen ab Tag 1 bis zu 80% Energiekosten – finanziert rein durch die Einsparung.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg font-bold" onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}>
                  Einsparpotenzial berechnen
                </Button>
                <Link href="/projekte">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg bg-white/5 border-white/20 text-white hover:bg-white/10">
                    Referenzen ansehen
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 md:px-6 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Erfolgreiche Projekte", value: "500+" },
                { label: "Energieeinsparung", value: "bis 80%" },
                { label: "Jahre Erfahrung", value: "20" },
                { label: "Zertifizierung", value: "ISO 9001" },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left border-l border-white/10 pl-4 first:border-0 first:pl-0">
                  <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 bg-secondary border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-8">
          <p className="text-center text-white/50 text-sm font-bold uppercase tracking-widest">Vertrauen von führenden Industrieunternehmen</p>
        </div>
        <div className="flex gap-16 items-center w-max animate-[scroll_40s_linear_infinite]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <SiBmw size={48} className="text-white/20" />
              <SiSiemens size={70} className="text-white/20" />
              <div className="text-white/20 font-display font-bold text-2xl">REWE Group</div>
              <SiDeutschebahn size={50} className="text-white/20" />
              <SiBosch size={80} className="text-white/20" />
            </div>
          ))}
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-32 bg-secondary relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Berechnen Sie Ihren Profit</h2>
            <p className="text-xl text-white/70">
              Mit unserem Contracting-Modell zahlt sich die neue Anlage von selbst. Finden Sie heraus, wie viel Liquidität Sie freisetzen können.
            </p>
          </div>
          <SavingsCalculator />
        </div>
      </section>
    </PageLayout>
  );
}
