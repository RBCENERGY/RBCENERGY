import { PageLayout } from "@/components/layout/PageLayout";
import { CtaBand } from "@/components/modules/CtaBand";
import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

type Article = {
  date: string;
  title: string;
  category: string;
  excerpt: string;
  link?: string;
  image?: string;
  video?: string;
  pressLink?: string;
  pressSource?: string;
};

const articles: Article[] = [
  {
    date: "Juli 2026",
    title: "Neu bei RBC: Ladeinfrastruktur für WEG",
    category: "RBC Mobile",
    excerpt: "Elektromobilität für Ihre Immobilie: Wir rüsten Wohnungseigentümergemeinschaften mit modularer Ladeinfrastruktur aus — von der Bedarfsermittlung über die Installation bis zur fairen Abrechnung. Bis zu 40 % Förderung sichern.",
    link: "/mobile",
    image: "/hero-mobile.webp",
  },
  {
    date: "Juli 2026",
    title: "Ein Projekt, das sich sehen lassen kann",
    category: "Presse & Projekte",
    excerpt: "Der Green Industry Cluster berichtet über unsere LED-Sanierung des Parkhauses P10 in Heidelberg: über 700 Leuchten getauscht, 240.000 kWh und 154 Tonnen CO₂ pro Jahr eingespart – bei laufendem Betrieb.",
    link: "/news/green-industry-cluster",
    image: "/news-gic-parkhaus.jpg",
  },
  {
    date: "Januar 2026",
    title: "LED-Umrüstung für Unternehmen – Einfach erklärt",
    category: "RBC News",
    excerpt: "Wie läuft eine LED-Umrüstung mit RBC ab? Unser neues Video erklärt in wenigen Minuten den kompletten Ablauf — von der Lichtplanung über die Förderung bis zur fertigen Anlage.",
    video: "https://www.youtube.com/embed/PGaPyx55tWs",
  },
  {
    date: "17. Juni 2025",
    title: "LED-Förderung für Unternehmen: Bis zu 25 % Zuschuss sichern",
    category: "Fördermittel",
    excerpt: "Neben direkten Stromkosteneinsparungen winken staatliche Förderungen von bis zu 25 % der Investitionssumme. Wir übernehmen die komplette Abwicklung für Sie.",
    link: "/news/led-foerderung",
    image: "/news-foerderung.webp",
  },
  {
    date: "30. September 2024",
    title: "Linamar: Komplette Umstellung auf LED – jetzt auch in der Presse",
    category: "Presse & Projekte",
    excerpt: "VEKO Lightsystems lieferte fast 3 km Aluminiumprofile und 1.700 LED-Einheiten für die Produktionsumgebung von Linamar in Plettenberg. Die nachhaltige Beleuchtung senkt die Energiekosten und verbessert den Arbeitsbereich.",
    video: "https://www.youtube.com/embed/UGc2nouXnGQ",
    pressLink: "https://bauprojekte.online/projekte/veko-lightsystems-linamar-plettenberg/",
    pressSource: "bauprojekte.online",
  },
  {
    date: "12. Oktober 2023",
    title: "Leuchtstoffröhren-Verbot: Was Unternehmen jetzt tun müssen",
    category: "Branchen-News",
    excerpt: "Seit Herbst 2023 dürfen keine neuen T8-Leuchtstoffröhren mehr in Verkehr gebracht werden. Wir zeigen Ihnen die Alternativen und Fristen.",
    link: "/news/leuchtstoffroehren-verbot",
    image: "/news-verbot.webp",
  },
  {
    date: "15. Juli 2021",
    title: "RBC entwickelt ein Casambi Modul",
    category: "RBC Produkte",
    excerpt: "Mit dem RBC-Casambi-Modul wird unser bewährter Hallenstrahler LGE Solaris intelligent steuerbar — per App, Sensoren oder Schaltern. Flexibel, erweiterbar und zukunftssicher.",
    link: "/news/casambi-modul",
    image: "/news-casambi.webp",
  },
  {
    date: "1. Juli 2021",
    title: "RBC ist ISO 9001 zertifiziert!",
    category: "RBC News",
    excerpt: "Unser Streben nach Optimierung ist jetzt amtlich: RBC ist ISO 9001 zertifiziert. Klar definierte Verantwortlichkeiten, transparente Prozesse und geschultes Personal garantieren Qualität.",
    link: "/news/iso-9001",
    image: "/news-iso9001.png",
  },
];

export default function News() {
  return (
    <PageLayout title="News & Presse">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-news.webp"
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
                <h3 className="text-xl font-display font-bold text-[#1a1a1a] mb-4 leading-snug">{article.title}</h3>
                <p className="text-[#1a1a1a]/55 text-sm leading-relaxed mb-6 flex-grow">{article.excerpt}</p>

                {article.image && (
                  <div className="mb-6 aspect-video w-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {article.video && (
                  <div className="mb-6 aspect-video w-full overflow-hidden">
                    <iframe
                      src={article.video}
                      title={article.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}

                {article.pressLink ? (
                  <a
                    href={article.pressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#98B94B] font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 mt-auto group-hover:gap-3 transition-all"
                  >
                    Pressebericht lesen <ExternalLink size={13} />
                  </a>
                ) : article.link ? (
                  <Link href={article.link} className="text-[#98B94B] font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 mt-auto group-hover:gap-3 transition-all">
                    Weiterlesen <ArrowRight size={14} />
                  </Link>
                ) : article.video ? null : (
                  <span className="text-[#98B94B]/40 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 mt-auto">
                    Demnächst
                  </span>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
