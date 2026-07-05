import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { Building2, Lightbulb, ShieldCheck, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

const areas = [
  {
    icon: <Lightbulb size={28} />,
    title: "Straßenbeleuchtung",
    desc: "Austausch veralteter Natriumdampflampen (NAV) gegen hocheffiziente LED-Straßenleuchten. Besseres Licht für mehr Verkehrssicherheit bei minimalen Energiekosten. Smart-City ready.",
  },
  {
    icon: <Building2 size={28} />,
    title: "Öffentliche Gebäude",
    desc: "Ob Schulen, Sporthallen oder Verwaltungsgebäude: Wir rüsten die Beleuchtung im laufenden Betrieb auf flimmerfreie, arbeitsplatzgerechte LED-Beleuchtung um.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Fördermittel-Service",
    desc: "Der Bund fördert kommunale LED-Projekte massiv. Wir übernehmen die komplette Beantragung der BMUV (PTJ/ZUG) Fördermittel für Ihre Kommune.",
  },
];

export default function Kommunen() {
  return (
    <PageLayout title="Kommunen & Städte">
      {/* Dark image hero (accent) */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/hero-municipality.png" alt="LED Straßenbeleuchtung in der Stadt" className="w-full h-full object-cover" />
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
            <h1 className="text-5xl md:text-6xl font-display font-extrabold text-white leading-[1.08] mb-6">
              Sicheres Licht für <span className="text-[#98B94B]">Städte & Gemeinden</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
              Reduzieren Sie den CO₂-Ausstoß Ihrer Kommune und entlasten Sie den Haushalt. Moderne Straßenbeleuchtung, Parkhäuser und öffentliche Gebäude — gefördert durch den Bund.
            </p>
            <Link href="/kontakt">
              <button className="inline-flex items-center gap-3 bg-[#98B94B] hover:bg-[#8aaa3f] text-[#0D0F12] font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors">
                Kommunale Beratung anfordern <ArrowRight size={14} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <span className="inline-block bg-[#EDF1E4] text-[#25412D] text-base font-bold uppercase tracking-widest px-4 py-2 mb-4">Leistungen für Kommunen</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] leading-tight">
              Nachhaltig. Gefördert. <span className="text-[#25412D]">Sicher.</span>
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
                <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
