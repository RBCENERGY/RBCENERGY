import { PageLayout } from "@/components/layout/PageLayout";
import { SavingsCalculator } from "@/components/modules/SavingsCalculator";
import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Zap, Shield, TrendingDown, Clock } from "lucide-react";
import logoDZPrivatbank from "@assets/RBC_DZPrivatbank_1783271287485.webp";
import logoDieffenbacher from "@assets/RBC_Dieffenbacher_1783271287486.webp";
import logoCoveris from "@assets/RBC_Coveris_1783271287486.webp";
import logoSuntat from "@assets/Suntat_1783271287486.webp";
import logoCinemaxx from "@assets/RBC_Cinemaxx_1783271287486.webp";
import logoSuedkabel from "@assets/rbc-suedkabel_1783271287487.webp";
import logoGlatfelter from "@assets/rbc-glatfelter_1783271287487.webp";
import logoCaprisun from "@assets/rbc-caprisun_1783271287487.webp";
import logoAndros from "@assets/rbc-andros_1783271287487.webp";
import logoKimberlyClark from "@assets/RBC_kimberley-clark_1783271287487.webp";
import logoDilo from "@assets/RBC_Dilo-Group_1783271287488.webp";
import logoKDK from "@assets/RBC_KDKAutomotive_1783271287488.webp";
import logoThyssenkrupp from "@assets/RBC_thyssenkrupp_1783271287488.webp";
import logoSero from "@assets/rbc-sero_1783271287488.webp";
import logoKlaeger from "@assets/rbc-klaeger_1783271287488.webp";
import logoSchwarzkopf from "@assets/RBC_Schwarzkopf_1783271287489.webp";
import logoSika from "@assets/RBC_Sika_1783271287489.webp";
import logoImperial from "@assets/RBC_Imperial_1783271287489.webp";
import logoFrieslandCampina from "@assets/RBC_FrieslandCampina_1783271287489.webp";
import logoEdeka from "@assets/RBC_Edeka_1783271287489.webp";

const clientLogos: { src: string; alt: string; invert?: boolean }[] = [
  { src: logoThyssenkrupp, alt: "thyssenkrupp" },
  { src: logoEdeka, alt: "EDEKA" },
  { src: logoSika, alt: "Sika" },
  { src: logoKimberlyClark, alt: "Kimberly-Clark Professional" },
  { src: logoFrieslandCampina, alt: "FrieslandCampina" },
  { src: logoCaprisun, alt: "Capri-Sun" },
  { src: logoCoveris, alt: "Coveris" },
  { src: logoImperial, alt: "Imperial Logistics International" },
  { src: logoDieffenbacher, alt: "Dieffenbacher" },
  { src: logoAndros, alt: "Andros" },
  { src: logoCinemaxx, alt: "CinemaxX" },
  { src: logoSuedkabel, alt: "Südkabel", invert: true },
  { src: logoGlatfelter, alt: "Glatfelter" },
  { src: logoSuntat, alt: "Suntat" },
  { src: logoSchwarzkopf, alt: "Schwarzkopf" },
  { src: logoDZPrivatbank, alt: "DZ Privatbank" },
  { src: logoSero, alt: "SERO PumpSystems" },
  { src: logoKlaeger, alt: "Kläger" },
  { src: logoDilo, alt: "Dilo Group" },
  { src: logoKDK, alt: "KDK Automotive" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

export default function Home() {
  return (
    <PageLayout title="Ihr Partner für LED-Modernisierung seit 2009">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-warehouse.png"
            alt="Industriehalle mit LED Beleuchtung"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12]/92 via-[#0D0F12]/70 to-[#0D0F12]/20" />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(152,185,75,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(152,185,75,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
          <div className="max-w-2xl">
            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            >
              Maximale<br />
              Effizienz.<br />
              <span className="text-[#98B94B]">Bis zu 80 % Ersparnis.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Wir modernisieren Ihre Beleuchtung auf LED — für bis zu 80 % weniger Energieverbrauch, wartungsarmen Betrieb und geförderte Investitionen. Offizieller Veko-Partner für Süddeutschland, seit 2009.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-3 bg-[#98B94B] hover:bg-[#8aaa3f] text-[#0D0F12] font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors"
                data-testid="button-calculator"
              >
                Einsparpotenzial berechnen
                <ArrowRight size={14} />
              </button>
              <Link href="/projekte">
                <button className="inline-flex items-center gap-3 border border-white/20 text-white/80 hover:border-white/40 hover:text-white font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors" data-testid="button-projekte">
                  Referenzen ansehen
                  <ArrowRight size={14} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0D0F12]/60 backdrop-blur-md">
          <div className="container mx-auto px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "Seit 2009", label: "Am Markt" },
                { value: "bis 80%", label: "Energieeinsparung" },
                { value: "Veko-Partner", label: "Süddeutschland" },
                { value: "100%", label: "aus einer Hand" },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-3">
                  <span className="text-2xl font-display font-bold text-white">{stat.value}</span>
                  <span className="text-white/40 text-xs uppercase tracking-wide hidden sm:block">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── USP GRID ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-[#98B94B] text-xs font-bold uppercase tracking-widest block mb-4">
              Warum RBC GmbH
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] leading-tight">
              LED-Modernisierung.<br />
              <span className="text-[#25412D]">Ohne Kompromisse.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/6">
            {[
              {
                icon: <TrendingDown size={24} />,
                title: "Bis 80% Kostensenkung",
                desc: "Modernste LED-Technologie reduziert Ihren Stromverbrauch drastisch — mit schneller Amortisation.",
              },
              {
                icon: <Zap size={24} />,
                title: "Bis zu 20% Förderung",
                desc: "Wir übernehmen die komplette Fördermittel-Abwicklung — von der Antragstellung bis zur Auszahlung.",
              },
              {
                icon: <Shield size={24} />,
                title: "Offizieller Veko-Partner",
                desc: "Als einer von wenigen Betrieben in Deutschland planen wir die nachhaltigen Lichtsysteme von Veko Lightsystems eigenständig — exklusiv für Süddeutschland.",
              },
              {
                icon: <Clock size={24} />,
                title: "Full-Service aus einer Hand",
                desc: "Von der Planung über Montage bis zur Wartung — wir übernehmen die vollständige Verantwortung.",
              },
            ].map((usp, i) => (
              <motion.div
                key={i}
                className="bg-white p-10 group hover:bg-[#F7F8F9] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-[#98B94B] mb-6">{usp.icon}</div>
                <h3 className="font-display font-bold text-xl text-[#1a1a1a] mb-3">{usp.title}</h3>
                <p className="text-[#1a1a1a]/70 text-[15px] leading-relaxed">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-20 bg-[#F7F8F9]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[#98B94B] text-xs font-bold uppercase tracking-widest block mb-4">Der Prozess</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] leading-tight">
              In 4 Schritten zur neuen Anlage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-[#98B94B]/20 hidden md:block" />
            {[
              { step: "01", title: "Analyse", desc: "Kostenlose Bestandsaufnahme Ihrer aktuellen Beleuchtungsanlage." },
              { step: "02", title: "Konzept", desc: "Maßgeschneiderter Modernisierungsplan mit exakter Einsparberechnung." },
              { step: "03", title: "Umsetzung", desc: "Professionelle Montage ohne Betriebsunterbrechung — schlüsselfertig." },
              { step: "04", title: "Betrieb", desc: "Vollständige Wartung und Monitoring durch unser Service-Team." },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="relative px-8 pt-0 pb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 bg-white border border-[#98B94B]/30 flex items-center justify-center mb-6 relative z-10">
                  <span className="text-[#98B94B] font-display font-bold text-sm">{s.step}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-[#1a1a1a] mb-2">{s.title}</h3>
                <p className="text-[#1a1a1a]/50 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALCULATOR ─── */}
      <section id="calculator" className="py-20 bg-[#F7F8F9] border-t border-black/6 relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <span className="text-[#98B94B] text-xs font-bold uppercase tracking-widest block mb-4">Einsparrechner</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] leading-tight">
              Berechnen Sie Ihren Profit
            </h2>
            <p className="text-[#1a1a1a]/55 mt-4 max-w-lg mx-auto text-base">
              Finden Sie heraus, wie viel Liquidität Sie durch LED-Modernisierung freisetzen können.
            </p>
          </div>
          <SavingsCalculator />
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="py-20 bg-white border-t border-black/6">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#1a1a1a] mb-6 leading-tight">
              Bereit für<br />
              <span className="text-[#98B94B]">die Energiewende?</span>
            </h2>
            <p className="text-[#1a1a1a]/50 text-lg mb-10 max-w-md mx-auto">
              Kostenlose Potenzialanalyse — unverbindlich, in 48 Stunden bei Ihnen.
            </p>
            <Link href="/kontakt">
              <button
                className="inline-flex items-center gap-3 bg-[#25412D] hover:bg-[#1d3222] text-white font-bold uppercase tracking-widest text-xs px-10 py-5 transition-colors"
                data-testid="button-cta-contact"
              >
                Jetzt kostenlos anfragen
                <ArrowRight size={14} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── LOGOS STRIP ─── */}
      <section className="py-10 border-t border-black/6 overflow-hidden bg-[#F7F8F9]">
        <div className="container mx-auto px-6 mb-8">
          <p className="text-center text-black/25 text-xs font-bold uppercase tracking-widest">
            Vertrauen von Unternehmen und Institutionen aus der Region
          </p>
        </div>
        <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max gap-6 animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="flex h-24 w-[200px] shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-white px-6 shadow-sm"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className={`max-h-12 max-w-[150px] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 ${logo.invert ? "invert" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
