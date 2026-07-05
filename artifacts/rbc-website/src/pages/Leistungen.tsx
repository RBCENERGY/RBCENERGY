import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, ArrowRight, Wrench, Zap, LifeBuoy, ShieldCheck, SlidersHorizontal, Wallet } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

const services = [
  {
    icon: <Wrench size={24} />,
    title: "Lichtsanierung mit LED",
    desc: "Austausch veralteter Leuchtmittel gegen hochmoderne, effiziente LED-Systeme unter Beibehaltung der bestehenden Infrastruktur wo möglich.",
    points: ["Bestandsaufnahme & Lichtplanung", "Bemusterung vor Ort", "Fachgerechte Montage"],
    featured: false,
  },
  {
    icon: <Zap size={24} />,
    title: "Lichtplanung & Fördermittel",
    desc: "Individuelle Lichtkonzepte inklusive Wirtschaftlichkeitsberechnung — und die komplette Abwicklung Ihrer Fördermittel von bis zu 20 %.",
    points: ["Bedarfsanalyse & Lichtkonzept", "Wirtschaftlichkeitsberechnung", "Fördermittel-Beratung (bis 20 %)"],
    featured: true,
  },
  {
    icon: <LifeBuoy size={24} />,
    title: "Wartung & Service",
    desc: "Rundum-Sorglos-Paket für Ihre Beleuchtungsanlage. Wir kümmern uns um den reibungslosen Betrieb und garantieren die Funktionalität.",
    points: ["Regelmäßige Inspektionen", "Kostenloser Teileaustausch", "24/7 Entstörungsservice"],
    featured: false,
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Sicherheits- & Notbeleuchtung",
    desc: "Als Experte für Sicherheits- und Notbeleuchtung sorgen wir für normgerechte Fluchtweg- und Rettungszeichenleuchten — für den Schutz von Menschen und die Erfüllung gesetzlicher Vorgaben.",
    points: ["Planung nach DIN & Vorschrift", "Flucht- & Rettungszeichenleuchten", "Prüfung & Dokumentation"],
    featured: true,
  },
  {
    icon: <SlidersHorizontal size={24} />,
    title: "Lichtsteuerung & Automation",
    desc: "Intelligente Lichtsteuerung für maximale Effizienz und Komfort. Unsere DALI- und Casambi-Experten beraten Sie und realisieren maßgeschneiderte Automationslösungen.",
    points: ["DALI- & Casambi-Systeme", "Präsenz- & Tageslichtsteuerung", "Individuelle Lichtszenen"],
    featured: false,
  },
  {
    icon: <Wallet size={24} />,
    title: "Finanzierung & Contracting",
    desc: "Ob Kauf, Miete oder Contracting — wir finden das passende Finanzierungsmodell für Ihr Projekt, damit Sie ohne hohe Anfangsinvestition von moderner LED-Technik profitieren.",
    points: ["Miet- & Leasingmodelle", "Light-as-a-Service / Contracting", "Individuelle Finanzierungsberatung"],
    featured: false,
  },
];

export default function Leistungen() {
  return (
    <PageLayout title="Leistungen">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-leistungen.png"
            alt="LED-Modernisierung Leistungen"
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
              Unsere <span className="text-[#98B94B]">Leistungen</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
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
                className={`relative p-10 flex flex-col transition-all ${
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
                <p className={`mb-6 leading-relaxed text-[15px] ${s.featured ? "text-white/80" : "text-[#1a1a1a]/70"}`}>{s.desc}</p>
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
