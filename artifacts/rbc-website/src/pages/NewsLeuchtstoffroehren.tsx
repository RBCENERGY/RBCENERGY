import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, AlertTriangle } from "lucide-react";

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

export default function NewsLeuchtstoffroehren() {
  return (
    <PageLayout title="Leuchtstoffröhren-Verbot">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/hero-news.webp" alt="Leuchtstoffröhren-Verbot" className="w-full h-full object-cover" />
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
              <span className="bg-[#98B94B]/20 text-[#98B94B] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Branchen-News</span>
              <span className="text-white/40 text-sm">12. Oktober 2023</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-4">
              Leuchtstoffröhren-Verbot: Was Unternehmen jetzt tun müssen
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>

              <p className="text-[#1a1a1a]/70 text-lg leading-relaxed mb-6">
                Seit Herbst 2023 dürfen keine neuen T8-Leuchtstoffröhren mehr in Verkehr gebracht werden. Was zunächst wie eine bürokratische Randnotiz klingt, hat für tausende Unternehmen in Deutschland spürbare Konsequenzen: Wer seine Beleuchtungsanlage nicht anpasst, riskiert Ausfälle, steigende Betriebskosten und langfristig fehlende Ersatzteile.
              </p>

              <div className="flex items-start gap-4 bg-amber-50 border-l-4 border-amber-400 px-5 py-4 mb-8">
                <AlertTriangle size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed">
                  <strong className="text-[#1a1a1a]">Wichtig:</strong> Das Verbot gilt nicht für den Betrieb vorhandener Leuchtstoffröhren – Sie dürfen bestehende Lampen noch verwenden. Das Problem entsteht, wenn Sie Ersatz benötigen und keine Nachschubmöglichkeit mehr besteht.
                </p>
              </div>

              <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed mb-4">In diesem Artikel erfahren Sie:</p>
              <BulletList items={[
                "Was das Verbot genau umfasst und welche Lampen betroffen sind",
                "Welche Fristen Sie kennen müssen",
                "Welche LED-Alternativen es gibt",
                "Wie Sie die Umrüstung effizient und gefördert realisieren",
                "Warum jetzt der ideale Zeitpunkt für die Umstellung ist",
              ]} />

              <H2>Was ist das Leuchtstoffröhren-Verbot?</H2>
              <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-4">
                Grundlage ist die EU-Verordnung 2019/2020 (Ökodesign-Richtlinie), die schrittweise den Ausstieg aus ineffizienten Lichtquellen vorschreibt. Im Rahmen dieser Verordnung wurde das Inverkehrbringen bestimmter Leuchtstofflampen verboten — mit konkreten Terminen:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#25412D] text-white">
                      <th className="text-left px-5 py-3 font-bold">Lampentyp</th>
                      <th className="text-left px-5 py-3 font-bold">Verbot ab</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["T8-Leuchtstoffröhren (einfach amalgam)", "1. September 2023"],
                      ["T5-Leuchtstoffröhren", "1. September 2023"],
                      ["Kompaktleuchtstofflampen (KLL)", "1. September 2023"],
                      ["T8-Dreib.-Leuchtstoffröhren (restliche)", "1. Februar 2024"],
                    ].map(([k, v], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-[#F7F8F9]" : "bg-white"}>
                        <td className="px-5 py-3 text-[#1a1a1a]/70">{k}</td>
                        <td className="px-5 py-3 text-[#1a1a1a]/70 font-medium">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <H2>Welche Risiken entstehen für Unternehmen?</H2>
              <BulletList items={[
                "Keine Ersatzlampen mehr verfügbar — Produktionsausfall bei Defekt",
                "Steigende Restbestands-Preise durch Knappheit",
                "Veraltete Beleuchtung erfüllt keine modernen Arbeitsstättenrichtlinien mehr",
                "Fehlende Grundlage für staatliche Förderungen (BAFA, KfW)",
                "Höherer Energieverbrauch im Vergleich zu LED-Systemen (bis zu 76 % mehr)",
              ]} />

              <H2>Die LED-Alternative: Was Sie erwartet</H2>
              <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-4">
                Moderne LED-Systeme sind in jeder Hinsicht überlegen — nicht nur beim Energieverbrauch. Ein direkter Vergleich:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#25412D] text-white">
                      <th className="text-left px-5 py-3 font-bold">Kriterium</th>
                      <th className="text-left px-5 py-3 font-bold">Leuchtstoffröhre</th>
                      <th className="text-left px-5 py-3 font-bold">LED</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Lebensdauer", "8.000–15.000 h", "50.000–100.000 h"],
                      ["Energieverbrauch", "hoch (58–80 W)", "gering (18–36 W)"],
                      ["Anlaufzeit", "Flackern möglich", "sofort, stabil"],
                      ["Wartungskosten", "regelmäßig", "minimal"],
                      ["Förderfähig", "nein", "ja (BAFA/KfW)"],
                    ].map(([k, v1, v2], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-[#F7F8F9]" : "bg-white"}>
                        <td className="px-5 py-3 text-[#1a1a1a]/70 font-medium">{k}</td>
                        <td className="px-5 py-3 text-red-500/80">{v1}</td>
                        <td className="px-5 py-3 text-[#25412D] font-semibold">{v2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <H2>So planen Sie die Umrüstung richtig</H2>
              <NumberedList items={[
                "Bestandsaufnahme: Alle vorhandenen Leuchtstoffröhren und Leuchten erfassen",
                "Lichtplanung: Professionelle Messung der Lichtstärken und Anforderungen je Bereich",
                "Angebot & Wirtschaftlichkeitsberechnung einholen (Amortisation, Einsparung in €/Jahr)",
                "Förderantrag stellen (vor Auftragsvergabe! — BAFA-Portal)",
                "Montage durch Fachbetrieb mit CE-zertifizierten Komponenten",
                "Entsorgung der Altleuchten gemäß ElektroG (kostenlos über kommunale Stellen)",
                "Verwendungsnachweis einreichen und Förderung erhalten",
              ]} />

              <H2>Warum jetzt der richtige Zeitpunkt ist</H2>
              <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-4">
                Je länger Unternehmen warten, desto teurer und aufwändiger wird die Umstellung:
              </p>
              <BulletList items={[
                "Restbestände an Leuchtstoffröhren werden knapper und teurer",
                "Förderbudgets beim BAFA sind begrenzt und können ausgeschöpft sein",
                "Jedes Jahr mit Leuchtstoffröhren bedeutet vermeidbare Energiekosten",
                "Umrüstung jetzt = sofortige Einsparung + staatlichen Zuschuss mitnehmen",
              ]} />

              <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed mb-6 bg-[#EDF1E4] border-l-4 border-[#98B94B] px-5 py-4">
                Ein Produktionsbetrieb mit 300 Leuchtstoffröhren (à 58 W) spart nach LED-Umrüstung typischerweise <strong className="text-[#25412D]">ca. 18.000 € Stromkosten pro Jahr</strong> — bei einer Amortisationszeit von unter 3 Jahren.
              </p>

              <H2>FAQ</H2>
              {[
                { q: "Darf ich meine alten Leuchtstoffröhren noch weiterbetreiben?", a: "Ja. Das Verbot betrifft nur das Inverkehrbringen (Verkauf/Import) neuer Lampen. Bestehende Röhren dürfen bis zum Ende ihrer Lebensdauer weitergenutzt werden. Das Problem entsteht, wenn Ersatz gebraucht wird." },
                { q: "Gibt es noch Händler mit Restbeständen?", a: "Vereinzelt ja, aber die Mengen werden immer kleiner und die Preise steigen. Langfristig ist keine zuverlässige Versorgung mehr möglich." },
                { q: "Können LED-Röhren einfach in die alten Leuchten eingesetzt werden?", a: "Teilweise — sogenannte Retrofit-LEDs gibt es, aber eine fachgerechte Sanierung der Leuchten bringt deutlich bessere Ergebnisse und ist für Förderungen meist Voraussetzung." },
                { q: "Wer übernimmt die Umrüstung?", a: "Zugelassene Elektrobetriebe wie RBC GmbH. Wir übernehmen Planung, Lichtmessung, Montage, Entsorgung und Förderantragstellung aus einer Hand." },
                { q: "Wie schnell kann umgerüstet werden?", a: "Kleinere Anlagen oft innerhalb weniger Tage, größere Produktionshallen werden schrittweise umgestellt — ohne Betriebsunterbrechung." },
              ].map(({ q, a }, i) => (
                <div key={i} className="border-b border-black/[0.07] py-5">
                  <p className="font-display font-bold text-[#1a1a1a] mb-2">{q}</p>
                  <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed">{a}</p>
                </div>
              ))}

              <div className="mt-14 bg-[#0D0F12] p-8 text-white">
                <p className="text-[#98B94B] text-xs font-bold uppercase tracking-widest mb-3">Fazit</p>
                <p className="text-white/80 text-[15px] leading-relaxed">
                  Das Leuchtstoffröhren-Verbot ist längst in Kraft — und die Uhr tickt. Unternehmen, die jetzt handeln, profitieren von staatlichen Förderungen, senken dauerhaft ihre Energiekosten und schaffen rechtssichere, moderne Arbeitsbedingungen. RBC GmbH begleitet Sie dabei von der ersten Lichtmessung bis zur fertigen Anlage.
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
