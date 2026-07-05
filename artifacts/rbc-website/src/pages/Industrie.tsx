import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Factory, Warehouse, Zap, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

const areas = [
  {
    icon: <Factory size={28} />,
    title: "Produktion & Fertigung",
    desc: "Hitze, Staub und Vibrationen: Unsere Industrie-LEDs sind für härteste Bedingungen ausgelegt. Perfekte Ausleuchtung reduziert zudem Ausschuss und Fehlerquoten.",
    points: ["Hohe Schutzklassen (IP65+)", "Blendfreies Licht (UGR<19)"],
  },
  {
    icon: <Warehouse size={28} />,
    title: "Lager & Logistik",
    desc: "Hochregallager erfordern spezielle Optiken. Intelligente Sensorik dimmt das Licht automatisch hoch, wenn ein Stapler in den Gang fährt.",
    points: ["Enge Abstrahlwinkel für Gänge", "Schwarmintelligenz (Sensorik)"],
  },
  {
    icon: <Zap size={28} />,
    title: "Kühlhäuser & Spezialbereiche",
    desc: "LEDs entfalten bei Kälte ihre maximale Lebensdauer. Spezielle Leuchten für die Lebensmittelindustrie erfüllen alle HACCP-Anforderungen.",
    points: ["HACCP konform (Splitterschutz)", "Einsatz bis -40 °C"],
  },
];

export default function Industrie() {
  return (
    <PageLayout title="Industrie & Logistik">
      {/* Dark image hero (accent) */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/hero-industry.png" alt="Industriehalle mit LED Beleuchtung" className="w-full h-full object-cover" />
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
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.05] mb-6">
              Licht für die <span className="text-[#98B94B]">Industrie</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
              Robuste, wartungsarme und hochgradig effiziente LED-Lichtsysteme für Produktionshallen, Lager und Logistikzentren. Mehr Arbeitssicherheit bei bis zu 80 % weniger Kosten.
            </p>
            <Link href="/kontakt">
              <button className="inline-flex items-center gap-3 bg-[#98B94B] hover:bg-[#8aaa3f] text-[#0D0F12] font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors">
                Industrie-Beratung anfordern <ArrowRight size={14} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-[#98B94B] text-xs font-bold uppercase tracking-widest block mb-4">Einsatzbereiche</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] leading-tight">
              Für jede Halle die <span className="text-[#25412D]">richtige Lösung</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {areas.map((a, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="bg-white border border-black/[0.08] p-10 hover:border-[#98B94B]/50 hover:shadow-xl transition-all"
              >
                <div className="text-[#98B94B] mb-6">{a.icon}</div>
                <h3 className="font-display font-bold text-2xl text-[#1a1a1a] mb-4">{a.title}</h3>
                <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-6">{a.desc}</p>
                <ul className="space-y-2.5">
                  {a.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[#1a1a1a]/70">
                      <CheckCircle2 size={16} className="text-[#98B94B] shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
