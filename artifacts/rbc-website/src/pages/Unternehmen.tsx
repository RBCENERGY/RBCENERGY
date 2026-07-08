import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { motion, type Variants } from "framer-motion";
import { Users, Award, Shield } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

const values = [
  {
    icon: <Award size={28} />,
    title: "Erfahrung & Expertise",
    desc: "Seit 2009 optimieren wir Beleuchtungsanlagen für Industrie, Handel und öffentliche Einrichtungen. Wir planen nicht am Reißbrett, sondern für die Realität.",
  },
  {
    icon: <Shield size={28} />,
    title: "Geprüfte Qualität",
    desc: "Als zertifizierter Veko Lightsystems Partnerbetrieb verbauen wir ausschließlich langlebige Premium-Komponenten, die für den industriellen Dauerbetrieb ausgelegt und geprüft sind.",
  },
  {
    icon: <Users size={28} />,
    title: "Alles aus einer Hand",
    desc: "Von der ersten Lichtmessung über die Förderantragstellung und Montage bis zur Entsorgung der Altleuchten und laufenden Wartung haben Sie bei uns genau einen Ansprechpartner.",
  },
];

const stats = [
  { value: "Seit 2009", label: "Am Markt" },
  { value: "bis 80%", label: "Energieeinsparung" },
  { value: "Veko", label: "Partnerbetrieb" },
  { value: "100%", label: "aus einer Hand" },
];

export default function Unternehmen() {
  return (
    <PageLayout title="Unternehmen & Werte">
      {/* Dark image hero (accent) */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/hero-company.png" alt="RBC Team im Büro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12]/92 via-[#0D0F12]/70 to-[#0D0F12]/20" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(152,185,75,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(152,185,75,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white leading-[1.08] mb-6">
              Ihr Partner für <span className="text-[#98B94B]">nachhaltiges Licht</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-lg">
              Die RBC GmbH mit Sitz in Heidelberg steht seit 2009 für Zuverlässigkeit, ingenieurtechnische Präzision und bedingungslose Qualität.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#F7F8F9] border-b border-black/6">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-display font-bold text-[#25412D]">{s.value}</div>
                <div className="text-[#1a1a1a]/45 text-xs uppercase tracking-wide mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <span className="inline-block bg-[#EDF1E4] text-[#25412D] text-base font-bold uppercase tracking-widest px-4 py-2 mb-4">Unsere Werte</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] leading-tight">
              Worauf Sie sich <span className="text-[#25412D]">verlassen können</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="bg-white border border-black/[0.08] p-6 sm:p-8 md:p-10 hover:border-[#98B94B]/50 hover:shadow-xl transition-all"
              >
                <div className="text-[#98B94B] mb-6">{v.icon}</div>
                <h3 className="font-display font-bold text-2xl text-[#1a1a1a] mb-4">{v.title}</h3>
                <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
