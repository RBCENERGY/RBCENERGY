import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mt-12 mb-4">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-display font-bold text-[#25412D] mt-8 mb-3">{children}</h3>;
}

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

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[#1a1a1a]/70 text-[15px] leading-relaxed">
          <span className="w-6 h-6 rounded-full bg-[#98B94B] text-[#0D0F12] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function NewsLedFoerderung() {
  return (
    <PageLayout title="LED-Förderung für Unternehmen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/hero-news.webp" alt="LED-Förderung" className="w-full h-full object-cover" />
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
              <span className="bg-[#98B94B]/20 text-[#98B94B] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Fördermittel</span>
              <span className="text-white/40 text-sm">17. Juni 2025</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-4">
              LED-Förderung für Unternehmen: Bis zu 20 % Zuschuss sichern
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="prose-custom">

              <p className="text-[#1a1a1a]/70 text-lg leading-relaxed mb-6">
                In Zeiten steigender Energiepreise und wachsenden ökologischen Bewusstseins rückt das Thema Energieeffizienz für Unternehmen immer mehr in den Fokus. Eine besonders effektive Maßnahme: die Umrüstung auf moderne LED-Beleuchtungssysteme. Neben den direkten Stromkosteneinsparungen winken staatliche Förderungen von bis zu 20 % der Investitionssumme – ein enormer Hebel für jedes Unternehmen.
              </p>

              <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed mb-4">In diesem Artikel zeigen wir Ihnen:</p>
              <BulletList items={[
                "Welche Förderprogramme aktuell verfügbar sind",
                "Welche Voraussetzungen Sie erfüllen müssen",
                "Wie Sie Schritt für Schritt zum Zuschuss kommen",
                "Welche technischen Anforderungen für LED-Systeme gelten",
                "Welche Fehler Sie beim Antrag vermeiden sollten",
              ]} />

              <H2>Warum sich eine LED-Umrüstung lohnt</H2>
              <BulletList items={[
                "Bis zu 76 % Stromkostenersparnis durch hohe Energieeffizienz",
                "Weniger Wartungskosten dank langer Lebensdauer (bis 100.000 h)",
                "Verbesserte Arbeitsplatzbedingungen durch gleichmäßige Ausleuchtung",
                "Reduktion des CO₂-Ausstoßes – wertvoll für ESG-Reporting",
                "Steigerung des Firmenimages durch nachhaltiges Handeln",
              ]} />
              <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed mb-6 bg-[#EDF1E4] border-l-4 border-[#98B94B] px-5 py-4">
                Ein Logistikunternehmen mit 5.000 m² Hallenfläche spart durch LED-Umrüstung jährlich rund <strong className="text-[#25412D]">12.000 € Stromkosten</strong>.
              </p>

              <H2>Förderprogramme für LED-Umrüstung</H2>

              <H3>1. BEG Einzelmaßnahmen (Bundesförderung für effiziente Gebäude)</H3>
              <BulletList items={[
                "Zuschusshöhe: bis zu 20 %",
                "Förderfähig: LED-Beleuchtung in Nichtwohngebäuden (Büros, Lager, Produktion)",
                "Ansprechpartner: BAFA (Bundesamt für Wirtschaft und Ausfuhrkontrolle)",
                "Antragsstellung: über das BAFA-Onlineportal vor Projektbeginn",
              ]} />

              <H3>2. KfW-Energieeffizienzprogramm</H3>
              <BulletList items={[
                "Art: zinsgünstiger Kredit mit Tilgungszuschuss",
                "Vorteil: Kombination mit anderen Maßnahmen möglich (Heizung, Dämmung)",
              ]} />

              <H3>3. Regionale Förderprogramme</H3>
              <BulletList items={[
                "Bundeslandabhängig (z. B. NRW.PROGRES, Bayernenergie)",
                "Kombination mit BEG möglich",
              ]} />

              <H2>Technische Anforderungen für förderfähige LED-Systeme</H2>
              <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed mb-4">Die BAFA stellt klare Anforderungen an die LED-Komponenten:</p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#25412D] text-white">
                      <th className="text-left px-5 py-3 font-bold">Kriterium</th>
                      <th className="text-left px-5 py-3 font-bold">Mindestwert</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Lichtausbeute (lm/W)", "mind. 120 lm/W"],
                      ["Lebensdauer (L80/B50)", "≥ 50.000 Stunden"],
                      ["Energieeffizienzklasse", "mind. C (nach EU-Verordnung)"],
                      ["Nachweis durch Effizienzexperten", "Ja (BEG Voraussetzung)"],
                    ].map(([k, v], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-[#F7F8F9]" : "bg-white"}>
                        <td className="px-5 py-3 text-[#1a1a1a]/70">{k}</td>
                        <td className="px-5 py-3 text-[#1a1a1a]/70 font-medium">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed mb-6 bg-[#EDF1E4] border-l-4 border-[#98B94B] px-5 py-4">
                <strong className="text-[#25412D]">Wichtig:</strong> Nur Systeme mit CE-Kennzeichnung und fachgerechter Montage sind förderfähig.
              </p>

              <H2>Schritt für Schritt: So beantragen Sie die LED-Förderung</H2>
              <NumberedList items={[
                "Ist-Analyse durch einen Energieberater oder Anbieter",
                "Angebot für Umrüstung einholen (Kosten, Einsparpotenzial)",
                "Effizienzexperten beauftragen (BEG Pflicht)",
                "Antragstellung über BAFA-Portal",
                "Freigabe abwarten – keine Auftragsvergabe vorher!",
                "Projekt umsetzen mit dokumentierter Durchführung",
                "Verwendungsnachweis einreichen (Rechnung, Bilder etc.)",
                "Auszahlung des Zuschusses nach Prüfung durch das BAFA",
              ]} />

              <H2>Häufige Fehler beim Antrag</H2>
              <BulletList items={[
                "Projektstart vor Antragstellung → führt zur Ablehnung",
                "Technische Mindestwerte nicht eingehalten",
                "Fehlende Energieberater-Zertifizierung",
                "Kombination von Förderprogrammen ohne Genehmigung",
              ]} />

              <H2>FAQ: LED-Förderung im Schnellüberblick</H2>
              {[
                { q: "Wer kann die LED-Förderung beantragen?", a: "Alle gewerblichen Unternehmen, KMU, kommunale Träger und Vereine." },
                { q: "Wie hoch ist die maximale Förderung?", a: "Bis zu 20 % der Nettokosten. Kombination mit Steuerersparnis möglich." },
                { q: "Welche Gebäude sind förderfähig?", a: "Nichtwohngebäude wie Büros, Hallen, Lager oder Werkstätten." },
                { q: "Ist eine Kombination mit anderen Energieeffizienzmaßnahmen erlaubt?", a: "Ja, z. B. mit Heizungsoptimierung oder Dämmung. Beachten Sie die Antragsdetails." },
                { q: "Wie lange dauert die Bearbeitung beim BAFA?", a: "Etwa 8–10 Wochen. Bei fehlenden Dokumenten verlängert sich die Frist." },
              ].map(({ q, a }, i) => (
                <div key={i} className="border-b border-black/[0.07] py-5">
                  <p className="font-display font-bold text-[#1a1a1a] mb-2">{q}</p>
                  <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed">{a}</p>
                </div>
              ))}

              <div className="mt-14 bg-[#0D0F12] p-8 text-white">
                <p className="text-[#98B94B] text-xs font-bold uppercase tracking-widest mb-3">Fazit</p>
                <p className="text-white/80 text-[15px] leading-relaxed">
                  Die Umrüstung auf LED ist nicht nur ökologisch sinnvoll, sondern auch ökonomisch extrem attraktiv. Nutzen Sie die aktuellen Förderprogramme, um Ihre Investitionen zu reduzieren und dauerhaft Betriebskosten zu sparen. Besonders Unternehmen mit hohen Beleuchtungslaufzeiten (z. B. Lager, Produktion, Logistik) profitieren massiv.
                </p>
              </div>

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
