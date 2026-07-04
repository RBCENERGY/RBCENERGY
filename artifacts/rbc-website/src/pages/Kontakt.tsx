import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Kontakt() {
  return (
    <PageLayout title="Kontakt">
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">Lassen Sie uns <span className="text-primary">sprechen</span></h1>
            <p className="text-xl text-white/70">
              Fordern Sie eine kostenlose und unverbindliche Erstberatung inklusive Wirtschaftlichkeitsberechnung für Ihr Unternehmen an.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">Vorname</Label>
                    <Input id="firstName" className="bg-white/5 border-white/10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">Nachname</Label>
                    <Input id="lastName" className="bg-white/5 border-white/10 text-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">Unternehmen</Label>
                  <Input id="company" className="bg-white/5 border-white/10 text-white" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">E-Mail</Label>
                    <Input id="email" type="email" className="bg-white/5 border-white/10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Telefon</Label>
                    <Input id="phone" type="tel" className="bg-white/5 border-white/10 text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Ihre Nachricht oder Projektdetails</Label>
                  <Textarea id="message" rows={5} className="bg-white/5 border-white/10 text-white resize-none" />
                </div>

                <Button className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-lg">
                  Anfrage senden
                </Button>
                <p className="text-xs text-white/40 text-center">
                  Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>
              </form>
            </div>

            {/* Contact Info & Map placeholder */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Kontaktdaten</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Zentrale</h4>
                      <p className="text-white/60 leading-relaxed">RBC GmbH<br />Musterstraße 123<br />12345 Berlin, Deutschland</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Telefon</h4>
                      <p className="text-white/60">+49 (0) 30 123 45 67<br /><span className="text-sm">Mo-Fr, 08:00 - 17:00 Uhr</span></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">E-Mail</h4>
                      <p className="text-white/60">info@rbc-gmbh.de</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-[300px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative flex items-center justify-center">
                <div className="text-white/40 flex flex-col items-center">
                  <MapPin size={32} className="mb-2" />
                  <span>Google Maps Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
