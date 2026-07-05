import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

const programs = [
  {
    n: "1",
    title: "BEG-Förderung (BAFA)",
    desc: "Für Unternehmen. Förderung von bis zu 20 % (KMU) auf Material und Installation bei der Modernisierung von Innen- und Außenbeleuchtung.",
  },
  {
    n: "2",
    title: "Kommunalrichtlinie (ZUG)",
    desc: "Für Kommunen, Vereine und soziale Einrichtungen. Bis zu 40 % Zuschuss (finanzschwache Kommunen noch mehr) für den Austausch der Straßen- und Innenbeleuchtung.",
  },
];

const serviceSteps = [
  "Prüfung der Förderfähigkeit",
  "Einbindung eines Energieberaters (Energie-Audit)",
  "Erstellung und Einreichung der Anträge",
  "Nachweisführung nach Umsetzung",
];

export default function Foerdermittel() {
  return (
    <PageLayout title="Fördermittel">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-foerdermittel.png"
            alt="Fördermittel für LED-Modernisierung"
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
        <div className="container mx-auto px-6 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-[1.05] mb-6">
              Bis zu <span className="text-[#98B94B]">20 % Zuschuss</span> sichern
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              Bund und Länder fördern den Umstieg auf energieeffiziente LED-Beleuchtung. Wir übernehmen die komplette Abwicklung für Sie — von der Antragstellung bis zur Auszahlung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Programs */}
            <div className="space-y-6">
              {programs.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-white border border-black/[0.08] p-8 hover:border-[#98B94B]/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#98B94B]/15 flex items-center justify-center text-[#98B94B] font-display font-bold text-lg">{p.n}</div>
                    <h3 className="text-2xl font-display font-bold text-[#1a1a1a]">{p.title}</h3>
                  </div>
                  <p className="text-[#1a1a1a]/55 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Service card (dark accent) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#25412D] p-6 sm:p-8 md:p-10 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(152,185,75,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(152,185,75,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-white mb-6">Unser Fördermittel-Service</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Der bürokratische Aufwand hält viele Unternehmen ab. Genau hier setzen wir an. Unser Team zertifizierter Energieberater kümmert sich um alles.
                </p>
                <ul className="space-y-4 mb-8">
                  {serviceSteps.map((s, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/85">
                      <CheckCircle2 size={18} className="text-[#98B94B] shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt">
                  <button className="w-full inline-flex items-center justify-center gap-3 bg-[#98B94B] hover:bg-[#8aaa3f] text-[#0D0F12] font-bold uppercase tracking-widest text-xs py-4 transition-colors">
                    Jetzt Fördercheck starten <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
