import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, type Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

type Status = "idle" | "sending" | "success" | "error";

type FieldName = "firstName" | "lastName" | "company" | "email" | "phone" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

export default function Kontakt() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function clearFieldError(field: FieldName) {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    setStatus("sending");
    setErrorMessage("");
    setFieldErrors({});
    try {
      const encode = (data: Record<string, string>) =>
        Object.keys(data)
          .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
          .join("&");

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "kontakt",
          "bot-field": String(data.get("bot-field") ?? ""),
          ...payload,
        }),
      });
      if (!res.ok) {
        setStatus("error");
        setErrorMessage("Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.");
    }
  }

  return (
    <PageLayout title="Kontakt">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-kontakt.webp"
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
        <div className="container mx-auto px-6 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-[1.05] mb-6">
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
            <div className="bg-white border border-black/[0.08] p-6 sm:p-8 md:p-10 shadow-sm">
              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-12">
                  <CheckCircle2 className="h-14 w-14 text-[#98B94B]" strokeWidth={1.5} />
                  <h3 className="mt-6 text-2xl font-bold text-[#1a1a1a]">Vielen Dank!</h3>
                  <p className="mt-3 text-[15px] text-[#1a1a1a]/70 max-w-sm">
                    Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    className="mt-8 bg-[#98B94B] text-[#0D0F12] hover:bg-[#8aaa3f] h-12 px-8 text-sm font-bold uppercase tracking-widest"
                  >
                    Neue Anfrage
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Nicht ausfüllen: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#1a1a1a]">Vorname</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        onInput={() => clearFieldError("firstName")}
                        aria-invalid={!!fieldErrors.firstName}
                        aria-describedby={fieldErrors.firstName ? "firstName-error" : undefined}
                        className={`bg-[#F7F8F9] border-black/10 ${fieldErrors.firstName ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      />
                      {fieldErrors.firstName && (
                        <p id="firstName-error" className="text-xs text-red-600">{fieldErrors.firstName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#1a1a1a]">Nachname</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        onInput={() => clearFieldError("lastName")}
                        aria-invalid={!!fieldErrors.lastName}
                        aria-describedby={fieldErrors.lastName ? "lastName-error" : undefined}
                        className={`bg-[#F7F8F9] border-black/10 ${fieldErrors.lastName ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      />
                      {fieldErrors.lastName && (
                        <p id="lastName-error" className="text-xs text-red-600">{fieldErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#1a1a1a]">Unternehmen</Label>
                    <Input
                      id="company"
                      name="company"
                      onInput={() => clearFieldError("company")}
                      aria-invalid={!!fieldErrors.company}
                      aria-describedby={fieldErrors.company ? "company-error" : undefined}
                      className={`bg-[#F7F8F9] border-black/10 ${fieldErrors.company ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    />
                    {fieldErrors.company && (
                      <p id="company-error" className="text-xs text-red-600">{fieldErrors.company}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#1a1a1a]">E-Mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        onInput={() => clearFieldError("email")}
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? "email-error" : undefined}
                        className={`bg-[#F7F8F9] border-black/10 ${fieldErrors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      />
                      {fieldErrors.email && (
                        <p id="email-error" className="text-xs text-red-600">{fieldErrors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#1a1a1a]">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        onInput={() => clearFieldError("phone")}
                        aria-invalid={!!fieldErrors.phone}
                        aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                        className={`bg-[#F7F8F9] border-black/10 ${fieldErrors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      />
                      {fieldErrors.phone && (
                        <p id="phone-error" className="text-xs text-red-600">{fieldErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#1a1a1a]">Ihre Nachricht oder Projektdetails</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      onInput={() => clearFieldError("message")}
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? "message-error" : undefined}
                      className={`bg-[#F7F8F9] border-black/10 resize-none ${fieldErrors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    />
                    {fieldErrors.message && (
                      <p id="message-error" className="text-xs text-red-600">{fieldErrors.message}</p>
                    )}
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600 text-center">{errorMessage}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-[#98B94B] text-[#0D0F12] hover:bg-[#8aaa3f] h-14 text-sm font-bold uppercase tracking-widest disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Wird gesendet…
                      </>
                    ) : (
                      "Anfrage senden"
                    )}
                  </Button>
                  <p className="text-xs text-[#1a1a1a]/40 text-center">
                    Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                  </p>
                </form>
              )}
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
                      <p className="text-[#1a1a1a]/55">Mo – Do: 08:00 – 17:00 Uhr<br />Fr: 08:00 – 15:00 Uhr</p>
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

              <div className="w-full h-[280px] bg-[#F7F8F9] border border-black/[0.08] overflow-hidden relative">
                <iframe
                  title="Standort RBC GmbH — Hardtstr. 80, 69124 Heidelberg"
                  src="https://www.google.com/maps?q=Hardtstr.%2080,%2069124%20Heidelberg&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
