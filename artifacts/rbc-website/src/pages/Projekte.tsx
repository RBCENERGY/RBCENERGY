import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { BeforeAfterSlider } from "@/components/modules/BeforeAfterSlider";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

export default function Projekte() {
  return (
    <PageLayout title="Referenzprojekte">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-projekte.png"
            alt="LED Referenzprojekte"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12]/92 via-[#0D0F12]/70 to-[#0D0F12]/20" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(152,185,75,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(152,185,75,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-[1.05] mb-6">
              Unsere <span className="text-[#98B94B]">Erfolge</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              Überzeugen Sie sich selbst von der visuellen und wirtschaftlichen Transformation durch unsere LED-Lösungen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex px-3 py-1 bg-[#98B94B]/12 text-xs font-bold tracking-widest uppercase text-[#25412D]">
                  Industrie & Produktion
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a]">Linamar — Automobilzulieferer</h2>
                <p className="text-[#1a1a1a]/55 text-lg leading-relaxed">
                  Komplette Umstellung der Produktions- und Hallenbeleuchtung auf moderne LED-Technik. Gleichmäßige, wartungsarme Ausleuchtung für sichere Arbeitsabläufe im laufenden Betrieb.
                </p>
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-black/8">
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">Energieeinsparung</div>
                    <div className="text-3xl font-display font-bold text-[#98B94B]">bis 80 %</div>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">Wartungsaufwand</div>
                    <div className="text-3xl font-display font-bold text-[#98B94B]">minimal</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <BeforeAfterSlider
                  beforeImage="/project-before-1.png"
                  afterImage="/project-after-1.png"
                  beforeLabel="400W HQL (Alt)"
                  afterLabel="120W LED (Neu)"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-8 text-center">Weitere Referenzen</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/6">
                {[
                  { name: "Heidelberg iT Management", detail: "Rechenzentrum & Bürogebäude" },
                  { name: "Aquadrom Hockenheim", detail: "Bäder- & Hallenbeleuchtung" },
                  { name: "Holzgroßhandel Gerber", detail: "Lager- & Ausstellungsflächen" },
                  { name: "Medizinische Praxen", detail: "Präzisions-Beleuchtung" },
                ].map((ref, i) => (
                  <div key={i} className="bg-white p-8">
                    <div className="font-display font-bold text-lg text-[#1a1a1a] mb-1">{ref.name}</div>
                    <div className="text-[#1a1a1a]/45 text-sm">{ref.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
