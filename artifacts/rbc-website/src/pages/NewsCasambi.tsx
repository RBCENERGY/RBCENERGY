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

export default function NewsCasambi() {
  return (
    <PageLayout title="RBC entwickelt ein Casambi Modul">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/hero-news.png" alt="RBC Casambi Modul" className="w-full h-full object-cover" />
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
              <span className="bg-[#98B94B]/20 text-[#98B94B] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">RBC Produkte</span>
              <span className="text-white/40 text-sm">15. Juli 2021</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-4">
              RBC entwickelt ein Casambi Modul
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
                Die meisten Kunden und Partner der RBC kennen die LGE Solaris – ein leistungsstarker Hallenstrahler, den wir seit vielen Jahren sehr erfolgreich in zahlreichen Projekten einsetzen und eingesetzt haben. Neben einem Gewicht von nur 3,4 kg und einem exzellenten thermischen Verhalten liefert die Leuchte einen Lichtstrom von 143 Lumen pro Watt.
              </p>

              <H2>Casambi: Das Bluetooth-Steuerungssystem</H2>
              <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-4">
                Über Casambi braucht man nicht viel zu sagen. Das Bluetooth-Steuerungssystem findet man heute bei vielen namhaften Herstellern in der Verwendung. Die Vorteile liegen auf der Hand:
              </p>
              <BulletList items={[
                "Große Reichweiten",
                "Maximale Flexibilität und Kompatibilität",
                "Alle Casambi-ready-Produkte am Markt können miteinander kombiniert werden",
                "Alles findet sich in einer einzigen App wieder",
              ]} />

              <H2>Intelligente Steuerung für die LGE Solaris</H2>
              <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-6">
                Durch den Einsatz des RBC-Casambi-Moduls in der LGE Solaris kann diese intelligent gesteuert werden. Ob nur mit der App oder mit am Markt verfügbaren Casambi-ready-Sensoren und -Schaltern — das bleibt ganz den Kundenwünschen überlassen. Spätere Änderungen und Anpassungen sind hier natürlich jederzeit möglich.
              </p>
              <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-6">
                Ebenfalls möglich ist die Kombination mit nahezu allen Projektleuchten, Lichtbändern etc. Mit dieser Lösung liefern wir Ihnen das Rundum-Sorglos-Paket, welches auch Ihre Hallenbeleuchtung fit für die Zukunft machen kann.
              </p>

              <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed mb-6 bg-[#EDF1E4] border-l-4 border-[#98B94B] px-5 py-4">
                <strong className="text-[#25412D]">RBC – Casambi – Hallenstrahler:</strong> intelligente Lichtsteuerung, flexibel erweiterbar und zukunftssicher.
              </p>

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
