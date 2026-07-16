import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[#1a1a1a]/70 text-[15px] leading-relaxed">
          <CheckCircle2 size={17} className="text-[#98B94B] mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function NewsGreenIndustryCluster() {
  return (
    <PageLayout title="Ein Projekt, das sich sehen lassen kann">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/hero-news.webp" alt="RBC Projekt Parkhaus Heidelberg" className="w-full h-full object-cover" />
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
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
            <Link href="/news" className="inline-flex items-center gap-2 text-[#98B94B] text-sm font-bold uppercase tracking-widest mb-6 hover:gap-3 transition-all">
              <ArrowLeft size={14} /> Zurück zu News
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#98B94B]/20 text-[#98B94B] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Presse & Projekte</span>
              <span className="text-white/40 text-sm">Juli 2026</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-4">
              Ein Projekt, das sich sehen lassen kann
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              Der Green Industry Cluster e. V. berichtet über unsere LED-Sanierung des Parkhauses P10 am Friedrich-Ebert-Platz in Heidelberg.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>

              <p className="text-[#1a1a1a]/70 text-lg leading-relaxed mb-6">
                Besseres Licht und massive Energieeinsparung – das waren die Vorgaben für die Sanierung des Parkhauses „P10" am Friedrich-Ebert-Platz in Heidelberg, und das bei laufendem Betrieb. Das Projekt zeigt, dass intelligente Planung, technisches Know-how und ein Blick für Details entscheidend sind, um anspruchsvolle Vorhaben umzusetzen.
              </p>

              <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-6">
                „Es ist immer etwas Besonderes, ein großes Projekt in der eigenen Stadt zu realisieren. Und dazu noch eines, das man einfach so anschauen und nutzen kann", blickt Christoph Reinke, Geschäftsführer der RBC GmbH, zurück.
              </p>

              <div className="mb-8 overflow-hidden">
                <img src="/news-gic-parkhaus.jpg" alt="LED-Beleuchtung im Parkhaus P10 Heidelberg" className="w-full object-cover" />
                <p className="text-[#1a1a1a]/40 text-xs mt-2">Licht auf allen Ebenen: das Parkhaus P10 nach der Umrüstung. Foto: Green Industry Cluster e. V.</p>
              </div>

              <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">Über 700 Leuchten getauscht – bei laufendem Betrieb</h2>
              <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-6">
                Für das „P10" erstellte unser Team ein ausgeklügeltes Konzept, um die über 700 verbauten alten Leuchtstoffröhren und Metalldampflampen gegen hocheffiziente LED-Technik samt smarter Steuerung auszutauschen. Dank einheitlicher Lichtfarbe in Tageslichtweiß wird die Ausleuchtung jetzt als heller und gleichmäßiger wahrgenommen.
              </p>

              <div className="bg-[#EDF1E4] border-l-4 border-[#98B94B] px-6 py-5 mb-8">
                <p className="text-[#25412D] font-bold text-lg leading-snug">
                  240.000 kWh Strom werden pro Jahr eingespart – das bedeutet rund 154 Tonnen weniger CO₂.
                </p>
              </div>

              <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed mb-4">Die Highlights des Projekts:</p>
              <BulletList items={[
                "Über 700 Leuchtstoffröhren und Metalldampflampen durch LED-Technik ersetzt",
                "Intelligente Bewegungsmelder auf jeder Ebene – niemand steht im Dunkeln",
                "Die vom Neckar inspirierte Lichtlinienführung des Architekten blieb erhalten",
                "Sanierung bei laufendem Parkhausbetrieb",
                "240.000 kWh und 154 Tonnen CO₂ Einsparung pro Jahr",
              ]} />

              <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">Starke Partnerschaft mit dem Green Industry Cluster</h2>
              <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-6">
                Seit fast zwei Jahren ist RBC Mitglied im Green Industry Cluster e. V., dem Netzwerk, das Unternehmen, Hochschulen und Kommunen in der Rhein-Neckar-Region zusammenbringt. „Für uns ist das Green Industry Cluster die perfekte Plattform, um uns mit anderen Partnern über die vielfältigen Themen in den Bereichen GreenTech, Nachhaltigkeit und Klimaschutz auszutauschen und voneinander zu profitieren", sagt Christoph Reinke.
              </p>

              <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-8">
                „Die Umrüstung zu energieeffizienten LED-Leuchten ist ein Beispiel von vielen, wie das Green Industry Cluster mit seinen beteiligten Unternehmen in Heidelberg und der Region dazu beitragen kann, dass die Transformation hin zu Klimaneutralität und Nachhaltigkeit gelingt", bestätigt Marc Massoth, Leiter des Amtes für Wirtschaftsförderung und Wissenschaft der Stadt Heidelberg und Vorstandsmitglied des Green Industry Clusters.
              </p>

              <a
                href="https://greenindustrycluster.de/ein-projekt-dass-sich-sehen-lassen-kann/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#EDF1E4] border-l-4 border-[#98B94B] px-5 py-4 text-[#25412D] font-bold text-sm hover:bg-[#98B94B]/20 transition-colors"
              >
                <ExternalLink size={18} className="text-[#98B94B]" />
                Zum Original-Artikel auf greenindustrycluster.de
              </a>

              <div className="mt-10">
                <Link href="/news" className="inline-flex items-center gap-2 text-[#1a1a1a]/50 hover:text-[#98B94B] font-bold text-xs uppercase tracking-widest transition-all hover:gap-3">
                  <ArrowLeft size={14} /> Zurück zu News
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
