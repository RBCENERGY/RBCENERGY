import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

const articles = [
  {
    date: "17. Juni 2025",
    title: "LED-Förderung für Unternehmen: Bis zu 20 % Zuschuss sichern",
    category: "Fördermittel",
    excerpt: "Neben direkten Stromkosteneinsparungen winken staatliche Förderungen von bis zu 20 % der Investitionssumme. Wir übernehmen die komplette Abwicklung für Sie.",
  },
  {
    date: "3. September 2024",
    title: "Linamar: Komplette Umstellung auf LED",
    category: "RBC Projekte",
    excerpt: "Für den internationalen Automobilzulieferer Linamar haben wir die gesamte Hallen- und Produktionsbeleuchtung auf moderne, wartungsarme LED-Technik umgestellt.",
  },
  {
    date: "12. Oktober 2023",
    title: "Leuchtstoffröhren-Verbot: Was Unternehmen jetzt tun müssen",
    category: "Branchen-News",
    excerpt: "Seit Herbst 2023 dürfen keine neuen T8-Leuchtstoffröhren mehr in Verkehr gebracht werden. Wir zeigen Ihnen die Alternativen und Fristen.",
  },
];

export default function News() {
  return (
    <PageLayout title="News & Presse">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-news.png"
            alt="RBC News und Presse"
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
              Aktuelles von <span className="text-[#98B94B]">RBC</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              Wichtige Industrie-Updates, gesetzliche Änderungen und Einblicke in unsere aktuellen Projekte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="bg-white border border-black/[0.08] p-8 hover:border-[#98B94B]/50 hover:shadow-xl transition-all flex flex-col group"
              >
                <div className="flex justify-between items-center mb-5">
                  <span className="text-[#25412D] bg-[#98B94B]/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest">{article.category}</span>
                  <span className="text-[#1a1a1a]/40 text-sm">{article.date}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-[#1a1a1a] mb-4 leading-snug line-clamp-3">{article.title}</h3>
                <p className="text-[#1a1a1a]/55 text-sm leading-relaxed mb-8 flex-grow">{article.excerpt}</p>
                <a href="#" className="text-[#98B94B] font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 mt-auto group-hover:gap-3 transition-all">
                  Weiterlesen <ArrowRight size={14} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
