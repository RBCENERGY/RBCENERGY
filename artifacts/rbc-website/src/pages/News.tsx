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
    date: "12. Oktober 2023",
    title: "Leuchtstoffröhren-Verbot: Was Unternehmen jetzt tun müssen",
    category: "Branchen-News",
    excerpt: "Seit Herbst 2023 dürfen keine neuen T8-Leuchtstoffröhren mehr in Verkehr gebracht werden. Wir zeigen Ihnen die Alternativen und Fristen.",
  },
  {
    date: "28. September 2023",
    title: "Erfolgreicher Projektabschluss: Logistikpark München",
    category: "Pressemitteilung",
    excerpt: "Die RBC GmbH hat die komplette Umrüstung von 40.000 Quadratmetern Logistikfläche auf Smart-LED-Systeme im laufenden Betrieb abgeschlossen.",
  },
  {
    date: "05. September 2023",
    title: "Erhöhte Fördersätze in der BEG für den Mittelstand",
    category: "Fördermittel",
    excerpt: "Das BAFA hat die Rahmenbedingungen für die Förderung von Querschnittstechnologien angepasst. KMUs profitieren nun von höheren Zuschüssen.",
  },
];

export default function News() {
  return (
    <PageLayout title="News & Presse">
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-[#F7F8F9] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
            <span className="text-[#98B94B] text-xs font-bold uppercase tracking-widest block mb-5">News & Presse</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-[#1a1a1a] leading-[1.05] mb-6">
              Aktuelles von <span className="text-[#98B94B]">RBC</span>
            </h1>
            <p className="text-lg text-[#1a1a1a]/55 leading-relaxed max-w-xl">
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
