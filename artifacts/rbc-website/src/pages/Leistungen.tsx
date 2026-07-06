import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { Link } from "wouter";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { CheckCircle2, ArrowRight, Wrench, Zap, LifeBuoy, ShieldCheck, SlidersHorizontal, Wallet } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

const services = [
  {
    icon: <Zap size={24} />,
    title: "Lichtplanung & Fördermittel",
    desc: "Individuelle Lichtkonzepte inklusive Wirtschaftlichkeitsberechnung — und die komplette Abwicklung Ihrer Fördermittel von bis zu 20 %.",
    points: ["Bedarfsanalyse & Lichtkonzept", "Wirtschaftlichkeitsberechnung", "Fördermittel-Beratung (bis 20 %)"],
    featured: true,
  },
  {
    icon: <Wrench size={24} />,
    title: "Lichtsanierung mit LED",
    desc: "Austausch veralteter Leuchtmittel gegen hochmoderne, effiziente LED-Systeme unter Beibehaltung der bestehenden Infrastruktur wo möglich.",
    points: ["Bestandsaufnahme & Lichtplanung", "Bemusterung vor Ort", "Fachgerechte Montage"],
    featured: false,
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

const testimonials = [
  {
    name: "Matthias Blatz",
    company: "Heidelberg IT Management GmbH & Co. KG",
    photo: "/testimonial-blatz.webp",
    quote: `Seit der Errichtung unseres Firmensitzes nutzen wir sowohl im neuen Rechenzentrum \u201eServerhotel 2\u201c als auch im Bürogebäude ausschließlich LED-Beleuchtung. Christoph Reinke und das RBC-Team haben uns bei der gesamten Lichtplanung kompetent beraten und das gemeinsam erarbeitete Konzept professionell umgesetzt. Das Ergebnis ist eine energieeffiziente und wartungsarme Raum- und Arbeitsplatzbeleuchtung, die für optimale Lichtverhältnisse sorgt.`,
  },
  {
    name: "Andreas Rothermel",
    company: "Aquadrom Hockenheim",
    photo: "/testimonial-rothermel.webp",
    quote: `Mit Herrn Reinke und der RBC haben wir einen starken Partner an unserer Seite, der uns seit Jahren bei der Planung und der Beschaffung unserer Beleuchtung kompetent berät und unterstützt.`,
  },
  {
    name: "Reto Gerber",
    company: "Holzgrosshandel Gerber",
    photo: null,
    quote: `Danke für die Erleuchtung. Unser Holz strahlt in den neu gestalteten Lagerflächen in bestem Licht.`,
  },
  {
    name: "Dr. med. Rüdiger Leutgeb",
    company: "Allgemeinmediziner in Rimbach, Praxis Dres. Leutgeb, Modl, Pielsticker",
    photo: null,
    quote: `Um in meiner Praxis verlässliche Diagnosen stellen zu können, benötige ich ein sehr spezielles, hochauflösendes Licht, mit hohem Beleuchtungsniveau und guter Farbwiedergabe. Christoph Reinke und sein Team haben uns ein optimales Beleuchtungskonzept erstellt und die Leuchten geliefert.`,
  },
  {
    name: "Larissa Schenk",
    company: "Zahnmedizin Schenk & Peters",
    photo: "/testimonial-schenk.webp",
    quote: `Das Beleuchtungskonzept unserer Praxis haben wir in die Hände von Christoph Reinke und seinem Team gelegt. Die gesamte Abwicklung des Auftrags lief reibungslos und zu unserer vollsten Zufriedenheit.`,
  },
];

function TestimonialsSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[active];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-leistungen.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0D0F12]/82" />
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: "linear-gradient(rgba(152,185,75,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(152,185,75,0.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#98B94B] mb-2">
          • Das sagen unsere Kunden •
        </p>
        <div className="w-16 h-px bg-[#98B94B]/50 mb-10" />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center max-w-3xl"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#98B94B]/40 mb-8 shadow-lg shrink-0 flex items-center justify-center bg-[#25412D]">
              {t.photo ? (
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-[#98B94B] font-display font-bold text-2xl select-none">
                  {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
              )}
            </div>

            <blockquote className="text-white/85 text-lg md:text-xl leading-relaxed italic mb-8">
              „{t.quote}"
            </blockquote>

            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/50">
              {t.name} &bull; {t.company}
            </p>
          </motion.div>
        </AnimatePresence>

        {testimonials.length > 1 && (
          <div className="flex gap-2.5 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "bg-[#98B94B] scale-110" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

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
        <div className="container mx-auto px-6 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-[1.05] mb-6">
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
                className={`relative p-6 sm:p-8 md:p-10 flex flex-col transition-all ${
                  s.featured
                    ? "bg-[#25412D] text-white"
                    : "bg-white border border-black/[0.08] hover:border-[#98B94B]/50 hover:shadow-xl"
                }`}
              >
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

      {/* Testimonials */}
      <TestimonialsSlideshow />

      {/* CTA */}
      <CtaBand />
    </PageLayout>
  );
}
