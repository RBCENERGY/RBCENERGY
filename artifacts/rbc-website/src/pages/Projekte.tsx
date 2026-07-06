import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";

import { LogoMarquee } from "@/components/modules/LogoMarquee";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

export default function Projekte() {
  return (
    <PageLayout title="Referenzprojekte">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-projekte.png"
            alt="LED Referenzprojekte"
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
              Unsere <span className="text-[#98B94B]">Erfolge</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              Überzeugen Sie sich selbst von der visuellen und wirtschaftlichen Transformation durch unsere LED-Lösungen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {/* Linamar */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex px-3 py-1 bg-[#98B94B]/12 text-xs font-bold tracking-widest uppercase text-[#25412D]">
                  Automobilindustrie
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a]">
                  Linamar — Komplette Umstellung auf LED
                </h2>
                <p className="text-[#1a1a1a]/55 text-lg leading-relaxed">
                  Seit mehr als fünf Jahrzehnten ist Linamar ein internationaler Zulieferer der Automobilindustrie und zählt zu den Marktführern in der Entwicklung und Herstellung von Präzisionskomponenten für die Antriebs- und Fahrwerktechnik. Die von RBC sanierten Werke in Plettenberg und Halver gehören zum kanadischen Linamar-Konzern mit über 34.000 Mitarbeitern an 75 Standorten weltweit.
                </p>
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-black/8">
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">LED-System</div>
                    <div className="text-2xl font-display font-bold text-[#98B94B]">3.000 m</div>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">Lichtfarbe</div>
                    <div className="text-2xl font-display font-bold text-[#98B94B]">5.000 K</div>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">Notlicht</div>
                    <div className="text-2xl font-display font-bold text-[#98B94B]">80× EATON</div>
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rounded-lg px-5 py-4 text-sm text-[#1a1a1a]/60 space-y-1">
                  <p className="font-bold text-[#25412D] text-xs uppercase tracking-widest mb-2">Tech Facts</p>
                  <p>3.000 m VEKO Magnus DALI · dimmbar · 5.000 K</p>
                  <p>60× Hallentiefstrahler · 80× Hochtemperaturstrahler (bis 80 °C)</p>
                  <p>300× Wannenleuchten · 80× EATON Notlichtbausteine</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/linamar-halle.png"
                  alt="Linamar Werk Plettenberg — LED-Hallenbeleuchtung nach Sanierung"
                  className="w-full h-[420px] object-cover rounded-xl shadow-lg"
                  loading="eager"
                />
              </div>
            </div>

            {/* MAAG */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <img
                  src="/maag-halle.webp"
                  alt="MAAG Germany GmbH Grossostheim — LED-Hallenbeleuchtung"
                  className="w-full h-[380px] object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="order-2 space-y-6">
                <div className="inline-flex px-3 py-1 bg-[#98B94B]/12 text-xs font-bold tracking-widest uppercase text-[#25412D]">
                  Maschinenbau & Industrie
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a]">
                  MAAG — In neuem Licht
                </h2>
                <p className="text-[#1a1a1a]/55 text-lg leading-relaxed">
                  Die MAAG Germany GmbH in Grossostheim — Teil einer global führenden Gruppe für Kunststoff­industrie, Chemie und Pharma — setzte auf RBCs Full-Service-Konzept: kundenspezifische Fertigung, vollautomatische Lichtsteuerung mit Casambi und eine Sanierung des kompletten Standorts im laufenden Mehrschichtbetrieb.
                </p>
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-black/8">
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">LED-System</div>
                    <div className="text-2xl font-display font-bold text-[#98B94B]">3.350 m</div>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">Leuchtstärke</div>
                    <div className="text-2xl font-display font-bold text-[#98B94B]">bis 12.000 lm</div>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">Steuerung</div>
                    <div className="text-2xl font-display font-bold text-[#98B94B]">Casambi</div>
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rounded-lg px-5 py-4 text-sm text-[#1a1a1a]/60 space-y-1">
                  <p className="font-bold text-[#25412D] text-xs uppercase tracking-widest mb-2">Tech Facts</p>
                  <p>VEKO System Magnus, DALI · 3.350 m</p>
                  <p>7.000–12.000 Lumen · 42W–80W</p>
                  <p>Tageslichtsteuerung via Casambi</p>
                </div>
              </div>
            </div>

            {/* BAG Mannheim */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex px-3 py-1 bg-[#98B94B]/12 text-xs font-bold tracking-widest uppercase text-[#25412D]">
                  Bauwirtschaft & Außengelände
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a]">
                  BAG Mannheim — Neues Licht nach Maß
                </h2>
                <p className="text-[#1a1a1a]/55 text-lg leading-relaxed">
                  Die Baustahl-Armierungsgesellschaft Mannheim mbH liefert und verlegt seit 1968 deutschlandweit Bau- und Armierungsstahl — mit über 7.000 begleiteten Baumaßnahmen, darunter Kraftwerks- und Tunnelbauten wie das GKM Mannheim. Nach gemeinsamer Analyse der 200.000 m² Außenfläche entschieden wir uns für 60 Hochleistungsstrahler mit Zigbee-Funksteuerung von Dresden Elektronik — eines der wenigen Systeme, das bei Kraneinstreuung störungsfrei über 100 m überbrückt.
                </p>
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-black/8">
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">Fläche</div>
                    <div className="text-2xl font-display font-bold text-[#98B94B]">200.000 m²</div>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">Strahler</div>
                    <div className="text-2xl font-display font-bold text-[#98B94B]">60 Stk.</div>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">Steuerung</div>
                    <div className="text-2xl font-display font-bold text-[#98B94B]">Zigbee</div>
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rounded-lg px-5 py-4 text-sm text-[#1a1a1a]/60 space-y-1">
                  <p className="font-bold text-[#25412D] text-xs uppercase tracking-widest mb-2">Tech Facts</p>
                  <p>200 W · 30.000 lm &nbsp;|&nbsp; 500 W · 78.000 lm &nbsp;|&nbsp; 1.000 W · 154.000 lm</p>
                  <p>Abstrahlwinkel 95° × 25°</p>
                  <p>Funksteuerung Zigbee · Dresden Elektronik · Reichweite &gt; 100 m</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-3">
                <img
                  src="/bag-mannheim.webp"
                  alt="BAG Mannheim — Vogelperspektive Nachtbeleuchtung"
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
                <img
                  src="/bag-mannheim-2.webp"
                  alt="BAG Mannheim — Weitwinkel Außengelände beleuchtet"
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Kimberly-Clark */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 grid grid-cols-2 gap-3">
                <img
                  src="/kimberly-1.webp"
                  alt="Kimberly-Clark Koblenz — Prozessbereich mit neuer LED-Beleuchtung"
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
                <img
                  src="/kimberly-2.webp"
                  alt="Kimberly-Clark Koblenz — Produktionshalle mit Auriga-Leuchten"
                  className="w-full h-[300px] object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="order-2 space-y-6">
                <div className="inline-flex px-3 py-1 bg-[#98B94B]/12 text-xs font-bold tracking-widest uppercase text-[#25412D]">
                  Konsumgüter & Produktion
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a]">
                  Kimberly-Clark — Lichtsanierung in Koblenz
                </h2>
                <p className="text-[#1a1a1a]/55 text-lg leading-relaxed">
                  Als weltweit führender Hersteller von Hygieneprodukten stand Nachhaltigkeit im Mittelpunkt. RBC ermöglichte es Kimberly-Clark, das bestehende Canalis-Trägersystem weiter zu nutzen und trotzdem vollständig auf LED umzustellen — mit der eigenen Triproof-Leuchte „Auriga": stufenlos per Dip-Switch einstellbar von 22 bis 69 W, Plug-and-Play vorkonfektioniert, Montage in nur 4 Wochen. Ausfallrate nach Installation: 0.
                </p>
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-black/8">
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">Leuchten</div>
                    <div className="text-2xl font-display font-bold text-[#98B94B]">900 Stk.</div>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">Stromersparnis</div>
                    <div className="text-2xl font-display font-bold text-[#98B94B]">−62 %</div>
                  </div>
                  <div>
                    <div className="text-[#1a1a1a]/45 text-sm mb-1">Montagezeit</div>
                    <div className="text-2xl font-display font-bold text-[#98B94B]">4 Wochen</div>
                  </div>
                </div>
                <div className="bg-[#F7F8F9] rounded-lg px-5 py-4 text-sm text-[#1a1a1a]/60 space-y-1">
                  <p className="font-bold text-[#25412D] text-xs uppercase tracking-widest mb-2">Tech Facts</p>
                  <p>RBC Triproof „Auriga" · 150 lm/W · max. 9.900 lm · 22–69 W</p>
                  <p>Abstrahlwinkel 60°, 90° und 120° · Fläche ca. 5.000 m²</p>
                  <p>Canalis-kompatibel · Plug &amp; Play · Dip-Switch dimmbar</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-[#98B94B] mb-8 text-center">Weitere Referenzen</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/6">
                {[
                  { name: "Heidelberg iT Management", detail: "Rechenzentrum & Bürogebäude" },
                  { name: "Aquadrom Hockenheim", detail: "Bäder- & Hallenbeleuchtung" },
                  { name: "Holzgroßhandel Gerber", detail: "Lager- & Ausstellungsflächen" },
                  { name: "Medizinische Praxen", detail: "Präzisions-Beleuchtung" },
                ].map((ref, i) => (
                  <div key={i} className="bg-white p-8">
                    <div className="font-display font-bold text-lg text-[#1a1a1a] mb-1">{ref.name}</div>
                    <div className="text-[#1a1a1a]/45 text-sm">{ref.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      <CtaBand />
    </PageLayout>
  );
}
