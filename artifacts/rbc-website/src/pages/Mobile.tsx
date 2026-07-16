import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, ArrowRight, TrendingUp, Leaf, Zap, Puzzle } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

const leistungen = [
  {
    n: "1",
    title: "Individuelle Bedarfsermittlung",
    desc: "Wir analysieren die spezifischen Anforderungen Ihrer WEG und ermitteln die genaue Anzahl der Ladepunkte sowie die besten technischen Lösungen basierend auf der vorhandenen Infrastruktur.",
  },
  {
    n: "2",
    title: "Konzeptentwicklung",
    desc: "Wir erstellen ein maßgeschneidertes Konzept, das alle technischen, rechtlichen und wirtschaftlichen Aspekte berücksichtigt, um die Installation der Ladeinfrastruktur effizient und nachhaltig zu gestalten.",
  },
  {
    n: "3",
    title: "Umsetzung und Installation",
    desc: "Nach der Planung kümmern wir uns um die gesamte Installation der Ladepunkte — von der Auswahl der Geräte bis hin zur fachgerechten Integration in Ihre bestehende Elektroinfrastruktur.",
  },
  {
    n: "4",
    title: "Betrieb und Wartung",
    desc: "Wir bieten eine langfristige Wartungslösung, um die Ladeinfrastruktur stets funktionsfähig zu halten — inklusive regelmäßiger Updates und schneller Fehlerbehebung bei Bedarf.",
  },
  {
    n: "5",
    title: "Abrechnungslösungen",
    desc: "Unsere flexiblen Abrechnungssysteme ermöglichen eine faire und transparente Abrechnung — entweder zentral über die WEG oder individuell für jeden Nutzer.",
  },
];

const foerderPunkte = [
  "Förderhöhe: Bis zu 40 % der zuwendungsfähigen Ausgaben, maximal 2.500 € pro Ladepunkt",
  "Förderfähig: Vorbereitende Elektroinstallationen (z. B. Verkabelung, Netzanschluss) bis zum Ladepunkt",
  "Voraussetzung: Die Infrastruktur muss mindestens 3 Jahre in Betrieb bleiben",
  "Antragsberechtigt: WEG, Unternehmen, Freiberufler und juristische Personen",
];

const vorteile = [
  {
    icon: TrendingUp,
    title: "Wertsteigerung der Immobilie",
    desc: "Elektromobilität steigert den Wert Ihrer Immobilie und macht sie attraktiver für Käufer und Mieter.",
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    desc: "Sie leisten einen aktiven Beitrag zum Klimaschutz und zur Reduktion von CO₂-Emissionen.",
  },
  {
    icon: Zap,
    title: "Innovative Infrastruktur",
    desc: "Positionieren Sie Ihre WEG als zukunftsorientierten Standort und profitieren Sie von einer flexiblen, skalierbaren Ladeinfrastruktur.",
  },
  {
    icon: Puzzle,
    title: "Einfache Integration",
    desc: "Unsere Lösungen sind flexibel und lassen sich problemlos in bestehende Strukturen integrieren.",
  },
];

export default function Mobile() {
  return (
    <PageLayout title="Ladeinfrastruktur für WEG">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-mobile.webp"
            alt="Ladeinfrastruktur für Elektromobilität in der Tiefgarage"
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
              Elektromobilität für Ihre <span className="text-[#98B94B]">Immobilie</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-8">
              Die Elektromobilität wächst — und auch Wohnungseigentümergemeinschaften (WEG) stehen vor der Herausforderung, ihre Immobilien zukunftsfähig zu machen. Wir liefern die passende Ladeinfrastruktur mit fairer Kostenverteilung. Bis zu 40 % Förderung sichern.
            </p>
            <Link href="/kontakt">
              <button className="inline-flex items-center gap-3 bg-[#98B94B] hover:bg-[#8aaa3f] text-[#0D0F12] font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors">
                Jetzt beraten lassen <ArrowRight size={14} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem / Lösung */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="inline-block bg-[#EDF1E4] text-[#25412D] text-base font-bold uppercase tracking-widest px-4 py-2 mb-4">Kennen Sie es auch?</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a] leading-tight mb-6">
                Die richtige Entscheidung im Wandel der Energiewirtschaft
              </h2>
              <p className="text-[#1a1a1a]/55 leading-relaxed mb-4">
                Viele WEG stehen vor der Herausforderung, im Wandel der Energiewirtschaft die richtige Entscheidung zu treffen. Wie kann man mit überschaubaren Investitionen sowohl wirtschaftlich als auch ökologisch sinnvoll handeln?
              </p>
              <p className="text-[#1a1a1a]/55 leading-relaxed">
                Die Suche nach Lösungen, die den Wert der eigenen Immobilie steigern und gleichzeitig den Bedürfnissen aller Eigentümer gerecht werden, ist oft nicht einfach. Aber keine Sorge — wir haben die Lösung.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              className="bg-white border border-black/[0.08] p-8 md:p-10 hover:border-[#98B94B]/50 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">
                Ladeinfrastruktur mit fairer Kostenverteilung
              </h3>
              <p className="text-[#1a1a1a]/55 leading-relaxed mb-6">
                Wir bieten Ihnen die Möglichkeit, Ihre Immobilie mit Ladeinfrastruktur aufzuwerten und gleichzeitig eine faire, transparente Lösung für die gesamte WEG zu schaffen. Unsere Konzepte ermöglichen es, dass die Kosten gerecht verteilt und gleichzeitig zukunftsfähige Erweiterungen für einzelne Eigentümer eingeplant werden.
              </p>
              <Link href="/kontakt" className="text-[#98B94B] font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:gap-3 transition-all">
                Interesse geweckt? <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-24 bg-[#F7F8F9]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mb-14">
            <span className="inline-block bg-[#EDF1E4] text-[#25412D] text-base font-bold uppercase tracking-widest px-4 py-2 mb-4">Unsere Leistungen</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a] leading-tight">
              Unsere Leistungen für Ihre WEG
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leistungen.map((l, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="bg-white border border-black/[0.08] p-8 hover:border-[#98B94B]/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#98B94B]/15 flex items-center justify-center text-[#98B94B] font-display font-bold text-lg mb-5">{l.n}</div>
                <h3 className="text-xl font-display font-bold text-[#1a1a1a] mb-3">{l.title}</h3>
                <p className="text-[#1a1a1a]/55 text-sm leading-relaxed">{l.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Förderung (dark accent card) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="inline-block bg-[#EDF1E4] text-[#25412D] text-base font-bold uppercase tracking-widest px-4 py-2 mb-4">Ihre passende Förderung</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a] leading-tight mb-6">
                Fördermöglichkeiten für WEG in <span className="text-[#98B94B]">Baden-Württemberg</span>
              </h2>
              <p className="text-[#1a1a1a]/55 leading-relaxed">
                Nutzen Sie staatliche Förderprogramme, um Ihre Ladeinfrastruktur zu finanzieren und bis zu 40 % der Kosten zu decken. Wir prüfen die Förderfähigkeit und übernehmen die Abwicklung für Sie.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
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
                <div className="text-[#98B94B] font-display font-bold text-5xl mb-2">bis 40 %</div>
                <p className="text-white/70 mb-8">Zuschuss für Ihre Ladeinfrastruktur</p>
                <ul className="space-y-4 mb-8">
                  {foerderPunkte.map((p, j) => (
                    <li key={j} className="flex items-start gap-3 text-white/85 text-sm leading-relaxed">
                      <CheckCircle2 size={18} className="text-[#98B94B] shrink-0 mt-0.5" /> {p}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt">
                  <button className="w-full inline-flex items-center justify-center gap-3 bg-[#98B94B] hover:bg-[#8aaa3f] text-[#0D0F12] font-bold uppercase tracking-widest text-xs py-4 transition-colors">
                    Kontakt aufnehmen <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-24 bg-[#F7F8F9]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-2xl mb-14">
            <span className="inline-block bg-[#EDF1E4] text-[#25412D] text-base font-bold uppercase tracking-widest px-4 py-2 mb-4">Ihre Vorteile</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a] leading-tight mb-4">
              Die Vorteile für Ihre WEG
            </h2>
            <p className="text-[#1a1a1a]/55 leading-relaxed">
              Mit einer flexiblen und skalierbaren Lösung bieten Sie den Bewohnern Ihrer WEG eine moderne, zukunftsfähige Infrastruktur, die sich nahtlos in die bestehende Struktur einfügt.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vorteile.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="bg-white border border-black/[0.08] p-8 hover:border-[#98B94B]/50 hover:shadow-lg transition-all"
              >
                <v.icon size={28} className="text-[#98B94B] mb-5" />
                <h3 className="text-lg font-display font-bold text-[#1a1a1a] mb-3 leading-snug">{v.title}</h3>
                <p className="text-[#1a1a1a]/55 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
