import { PageLayout } from "@/components/layout/PageLayout";
import { Users, Award, Shield } from "lucide-react";

export default function Unternehmen() {
  return (
    <PageLayout title="Unternehmen & Werte">
      <section className="relative min-h-[50vh] flex items-center pt-20 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-company.png" 
            alt="RBC Team im Büro" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Ihr Partner für <span className="text-primary">nachhaltiges Licht</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Die RBC GmbH steht für hanseatische Zuverlässigkeit, ingenieurtechnische Präzision und bedingungslose Qualität. Seit über zwei Jahrzehnten.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <Award className="text-primary w-10 h-10" />
              <h3 className="text-2xl font-bold text-white">Erfahrung & Expertise</h3>
              <p className="text-white/60 leading-relaxed">
                Mit über 500 erfolgreich realisierten Großprojekten kennen wir die spezifischen Anforderungen jeder Branche. Wir planen nicht am Reißbrett, sondern für die Realität.
              </p>
            </div>

            <div className="space-y-4">
              <Shield className="text-primary w-10 h-10" />
              <h3 className="text-2xl font-bold text-white">Geprüfte Qualität</h3>
              <p className="text-white/60 leading-relaxed">
                Die RBC GmbH ist nach DIN EN ISO 9001 zertifiziert. Wir verbauen ausschließlich Premium-Komponenten namhafter Hersteller, die für jahrzehntelangen Dauerbetrieb ausgelegt sind.
              </p>
            </div>

            <div className="space-y-4">
              <Users className="text-primary w-10 h-10" />
              <h3 className="text-2xl font-bold text-white">Alles aus einer Hand</h3>
              <p className="text-white/60 leading-relaxed">
                Von der ersten Lichtmessung über die Förderantragstellung und Montage bis zur Entsorgung der Altleuchten und laufenden Wartung haben Sie bei uns genau einen Ansprechpartner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
