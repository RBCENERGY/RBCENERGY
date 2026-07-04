import { PageLayout } from "@/components/layout/PageLayout";
import { BeforeAfterSlider } from "@/components/modules/BeforeAfterSlider";

export default function Projekte() {
  return (
    <PageLayout title="Referenzprojekte">
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">Unsere <span className="text-primary">Erfolge</span></h1>
            <p className="text-xl text-white/70">Überzeugen Sie sich selbst von der visuellen und wirtschaftlichen Transformation durch unsere LED-Lösungen.</p>
          </div>

          <div className="space-y-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-wider uppercase text-white/60">Logistik & Lager</div>
                <h2 className="text-3xl font-display font-bold">Logistikzentrum Süd</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  Austausch von 850 veralteten HQL-Strahlern gegen intelligente, tageslichtgesteuerte LED-Hallenstrahler. Deutliche Verbesserung der Arbeitsplatzsicherheit durch homogenere Ausleuchtung.
                </p>
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
                  <div>
                    <div className="text-white/50 text-sm">Energieeinsparung</div>
                    <div className="text-2xl font-bold text-primary">76%</div>
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">CO₂ Reduktion</div>
                    <div className="text-2xl font-bold text-primary">142 t/Jahr</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <BeforeAfterSlider 
                  beforeImage="/project-before-1.png" 
                  afterImage="/project-after-1.png"
                  beforeLabel="400W HQL (Alt)"
                  afterLabel="120W LED (Neu)"
                />
              </div>
            </div>
            
            {/* Add more projects here following the same structure */}
            <div className="p-10 border border-dashed border-white/20 rounded-2xl text-center">
              <p className="text-white/50 text-lg">Weitere Projekte werden in Kürze hinzugefügt.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
