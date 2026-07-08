import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, FileText } from "lucide-react";

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

export default function NewsIso9001() {
  return (
    <PageLayout title="RBC ist ISO 9001 zertifiziert">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/hero-news.png" alt="RBC ISO 9001 Zertifizierung" className="w-full h-full object-cover" />
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
              <span className="bg-[#98B94B]/20 text-[#98B94B] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">RBC News</span>
              <span className="text-white/40 text-sm">1. Juli 2021</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-4">
              RBC ist ISO 9001 zertifiziert!
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
                Wir sind ein Unternehmen, das sich ständig verbessert und dadurch wachsen kann. Dieses Streben nach Optimierung ist ab jetzt sogar amtlich, denn wir haben uns für unsere Kunden ISO 9001 zertifizieren lassen.
              </p>

              <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-6">
                Dieses Zertifikat definiert das wirksame Qualitätsmanagement, welches bei RBC rund um die Uhr gegeben ist, und hilft uns als Unternehmen, unsere Prozesse stetig zu optimieren und anzupassen.
              </p>

              <p className="text-[#1a1a1a]/60 text-[15px] leading-relaxed mb-4">Was das für unsere Kunden bedeutet:</p>
              <BulletList items={[
                "Klar definierte Verantwortlichkeiten",
                "Transparente Prozesse",
                "Geschultes Personal",
                "Garantierte Qualität in jedem Projekt",
              ]} />

              <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed mb-8">
                Wir hoffen, das Vertrauen in unsere innovativen Lichtkonzepte so weiter ausbauen zu können.
              </p>

              <a
                href="https://economiclightdesign.de/wp-content/uploads/2025/02/Zertifikat_ISO-9001-DE-24-Q-EA-10208-A-0-RBC-GmbH.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#EDF1E4] border-l-4 border-[#98B94B] px-5 py-4 text-[#25412D] font-bold text-sm hover:bg-[#98B94B]/20 transition-colors"
              >
                <FileText size={18} className="text-[#98B94B]" />
                Zertifikat ISO 9001 als PDF ansehen
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
