import { PageLayout } from "@/components/layout/PageLayout";

const articles = [
  {
    date: "12. Oktober 2023",
    title: "Leuchtstoffröhren-Verbot: Was Unternehmen jetzt tun müssen",
    category: "Branchen-News",
    excerpt: "Seit Herbst 2023 dürfen keine neuen T8-Leuchtstoffröhren mehr in Verkehr gebracht werden. Wir zeigen Ihnen die Alternativen und Fristen."
  },
  {
    date: "28. September 2023",
    title: "Erfolgreicher Projektabschluss: Logistikpark München",
    category: "Pressemitteilung",
    excerpt: "Die RBC GmbH hat die komplette Umrüstung von 40.000 Quadratmetern Logistikfläche auf Smart-LED-Systeme im laufenden Betrieb abgeschlossen."
  },
  {
    date: "05. September 2023",
    title: "Erhöhte Fördersätze in der BEG für den Mittelstand",
    category: "Fördermittel",
    excerpt: "Das BAFA hat die Rahmenbedingungen für die Förderung von Querschnittstechnologien angepasst. KMUs profitieren nun von höheren Zuschüssen."
  }
];

export default function News() {
  return (
    <PageLayout title="News & Presse">
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">Aktuelles von <span className="text-primary">RBC</span></h1>
            <p className="text-xl text-white/70">Wichtige Industrie-Updates, gesetzliche Änderungen und Einblicke in unsere aktuellen Projekte.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, idx) => (
              <article key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">{article.category}</span>
                  <span className="text-white/40 text-sm">{article.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2">{article.title}</h3>
                <p className="text-white/60 mb-8 flex-grow">{article.excerpt}</p>
                <a href="#" className="text-primary font-medium hover:underline inline-flex items-center gap-2 mt-auto">
                  Weiterlesen <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
