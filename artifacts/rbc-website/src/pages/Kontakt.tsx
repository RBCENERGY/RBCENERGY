import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, type Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

export default function Kontakt() {
  return (
    <PageLayout title="Kontakt">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-kontakt.png"
            alt="Kontakt RBC GmbH"
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
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[#98B94B] text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-6 h-px bg-[#98B94B]" />
              Kontakt
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-[1.05] mb-6">
              Lassen Sie uns <span className="text-[#98B94B]">sprechen</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              Fordern Sie eine kostenlose und unverbindliche Erstberatung inklusive Wirtschaftlichkeitsberechnung für Ihr Unternehmen an.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-white border border-black/[0.08] p-8 md:p-10 shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[#1a1a1a]">Vorname</Label>
                    <Input id="firstName" className="bg-[#F7F8F9] border-black/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[#1a1a1a]">Nachname</Label>
                    <Input id="lastName" className="bg-[#F7F8F9] border-black/10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[#1a1a1a]">Unternehmen</Label>
                  <Input id="company" className="bg-[#F7F8F9] border-black/10" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#1a1a1a]">E-Mail</Label>
                    <Input id="email" type="email" className="bg-[#F7F8F9] border-black/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#1a1a1a]">Telefon</Label>
                    <Input id="phone" type="tel" className="bg-[#F7F8F9] border-black/10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#1a1a1a]">Ihre Nachricht oder Projektdetails</Label>
                  <Textarea id="message" rows={5} className="bg-[#F7F8F9] border-black/10 resize-none" />
                </div>

                <Button className="w-full bg-[#98B94B] text-[#0D0F12] hover:bg-[#8aaa3f] h-14 text-sm font-bold uppercase tracking-widest">
                  Anfrage senden
                </Button>
                <p className="text-xs text-[#1a1a1a]/40 text-center">
                  Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-8">Kontaktdaten</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#98B94B]/15 flex items-center justify-center text-[#98B94B] shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-[#1a1a1a] font-bold mb-1">Zentrale</h4>
                      <p className="text-[#1a1a1a]/55 leading-relaxed">RBC GmbH<br />Hardtstr. 80<br />69124 Heidelberg</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#98B94B]/15 flex items-center justify-center text-[#98B94B] shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="text-[#1a1a1a] font-bold mb-1">Öffnungszeiten</h4>
                      <p className="text-[#1a1a1a]/55">Montag bis Freitag<br />08:00 – 17:00 Uhr</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#98B94B]/15 flex items-center justify-center text-[#98B94B] shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-[#1a1a1a] font-bold mb-1">Telefon & Fax</h4>
                      <p className="text-[#1a1a1a]/55">
                        <a href="tel:+4962211852020" className="hover:text-[#98B94B] transition-colors">Fon: +49 (0) 6221 / 18520-20</a><br />
                        Fax: +49 (0) 6221 / 18520-29
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[#98B94B]/15 flex items-center justify-center text-[#98B94B] shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-[#1a1a1a] font-bold mb-1">E-Mail</h4>
                      <a href="mailto:info@rbc-energy.de" className="text-[#1a1a1a]/55 hover:text-[#98B94B] transition-colors">info@rbc-energy.de</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-[280px] bg-[#F7F8F9] border border-black/[0.08] overflow-hidden relative flex items-center justify-center">
                <div className="text-[#1a1a1a]/35 flex flex-col items-center">
                  <MapPin size={32} className="mb-2" />
                  <span className="text-sm">Google Maps Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
