import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, ArrowRight, Wrench, Zap, LifeBuoy } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

const services = [
  {
    icon: <Wrench size={24} />,
    title: "LED Retrofit",
    desc: "Austausch veralteter Leuchtmittel gegen hochmoderne, effiziente LED-Systeme unter Beibehaltung der bestehenden Infrastruktur wo möglich.",
    points: ["Bestandsaufnahme & Lichtplanung", "Bemusterung vor Ort", "Fachgerechte Montage"],
    featured: false,
  },
  {
    icon: <Zap size={24} />,
    title: "Licht-Contracting",
    desc: "Modernisierung ohne eigene Investitionskosten. Die neue Anlage finanziert sich komplett aus den erzielten Energieeinsparungen.",
    points: ["0 € Investitionskosten", "Sofortige Liquiditätsschonung", "Bilanzneutrale Umsetzung"],
    featured: true,
  },
  {
    icon: <LifeBuoy size={24} />,
    title: "Wartung & Service",
    desc: "Rundum-Sorglos-Paket für Ihre Beleuchtungsanlage. Wir kümmern uns um den reibungslosen Betrieb und garantieren die Funktionalität.",
    points: ["Regelmäßige Inspektionen", "Kostenloser Teileaustausch", "24/7 Entstörungsservice"],
    featured: false,
  },
];

export default function Leistungen() {
  return (
    <PageLayout title="Leistungen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#F7F8F9] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
            <span className="text-[#98B94B] text-xs font-bold uppercase tracking-widest block mb-5">Was wir tun</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] leading-[1.05] mb-6">
              Unsere <span className="text-[#98B94B]">Leistungen</span>
            </h1>
            <p className="text-lg text-[#1a1a1a]/55 leading-relaxed max-w-xl">
              Von der Planung über die Installation bis zur Wartung — wir bieten ganzheitliche Lösungen für Ihre LED-Modernisierung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className={`relative p-8 flex flex-col transition-all ${
                  s.featured
                    ? "bg-[#25412D] text-white"
                    : "bg-white border border-black/[0.08] hover:border-[#98B94B]/50 hover:shadow-xl"
                }`}
              >
                {s.featured && (
                  <div className="absolute top-0 right-0 bg-[#98B94B] text-[#0D0F12] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                    Beliebtestes Modell
                  </div>
                )}
                <div className={`mb-6 ${s.featured ? "text-[#98B94B]" : "text-[#98B94B]"}`}>{s.icon}</div>
                <h3 className={`font-display font-bold text-2xl mb-4 ${s.featured ? "text-white" : "text-[#1a1a1a]"}`}>{s.title}</h3>
                <p className={`mb-6 leading-relaxed text-sm ${s.featured ? "text-white/70" : "text-[#1a1a1a]/55"}`}>{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.points.map((p, j) => (
                    <li key={j} className={`flex items-start gap-2.5 text-sm ${s.featured ? "text-white/80" : "text-[#1a1a1a]/70"}`}>
                      <CheckCircle2 size={16} className="text-[#98B94B] shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
                {s.featured && (
                  <Link href="/kontakt" className="mt-auto">
                    <button className="w-full inline-flex items-center justify-center gap-3 bg-[#98B94B] hover:bg-[#8aaa3f] text-[#0D0F12] font-bold uppercase tracking-widest text-xs py-4 transition-colors">
                      Beratung anfordern <ArrowRight size={14} />
                    </button>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand />
    </PageLayout>
  );
}
