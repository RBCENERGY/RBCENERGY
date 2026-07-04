import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    title: "Elektroinstallateur / Bauleiter (m/w/d)",
    type: "Vollzeit",
    location: "Bundesweit",
    department: "Montage & Service"
  },
  {
    title: "Projektmanager Lichttechnik (m/w/d)",
    type: "Vollzeit",
    location: "Berlin / Remote",
    department: "Planung"
  },
  {
    title: "Vertriebsmitarbeiter B2B (m/w/d)",
    type: "Vollzeit",
    location: "Süddeutschland",
    department: "Sales"
  }
];

export default function Karriere() {
  return (
    <PageLayout title="Karriere">
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">Wir suchen <span className="text-primary">Lichtgestalter</span></h1>
            <p className="text-xl text-white/70 mb-8">
              Gestalten Sie mit uns die Energiewende in der deutschen Industrie. Wir suchen tatkräftige Macher, die Werte schaffen und CO₂ einsparen wollen.
            </p>
          </div>

          <div className="mb-20 grid md:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h4 className="font-bold text-white mb-2">Unbefristeter Vertrag</h4>
              <p className="text-white/50 text-sm">Sicherheit von Anfang an in einer zukunftssicheren Branche.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h4 className="font-bold text-white mb-2">Top Ausstattung</h4>
              <p className="text-white/50 text-sm">Modernstes Werkzeug und hochwertiger Firmenwagen (auch privat).</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h4 className="font-bold text-white mb-2">Weiterbildung</h4>
              <p className="text-white/50 text-sm">Regelmäßige Schulungen zu neuen Licht- und Steuerungstechnologien.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h4 className="font-bold text-white mb-2">Flache Hierarchien</h4>
              <p className="text-white/50 text-sm">Schnelle Entscheidungswege und eine Kultur des Machens.</p>
            </div>
          </div>

          <h2 className="text-3xl font-display font-bold text-white mb-8">Offene Positionen</h2>
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/10 transition-colors">
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs font-bold px-2 py-1 bg-primary/20 text-primary rounded">{job.type}</span>
                    <span className="text-xs font-bold px-2 py-1 bg-white/10 text-white rounded">{job.department}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <p className="text-white/50 mt-1">{job.location}</p>
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Details ansehen
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-primary/10 border border-primary/20 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Nichts Passendes dabei?</h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Wir sind immer auf der Suche nach guten Leuten. Senden Sie uns einfach Ihre Initiativbewerbung.
            </p>
            <Button className="bg-primary text-white hover:bg-primary/90">Initiativ bewerben</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
