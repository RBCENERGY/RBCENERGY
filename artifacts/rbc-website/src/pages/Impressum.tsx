import { PageLayout } from "@/components/layout/PageLayout";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-display font-bold text-[#1a1a1a]">{title}</h2>
      <div className="text-[#1a1a1a]/70 leading-relaxed space-y-4 text-[15px]">{children}</div>
    </div>
  );
}

export default function Impressum() {
  return (
    <PageLayout title="Impressum">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-company.png"
            alt="Impressum RBC GmbH"
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
            <span className="text-[#98B94B] text-xs font-bold uppercase tracking-widest block mb-4">
              Rechtliches
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-[1.05] mb-6">
              Impressum
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              Angaben gemäß § 5 TMG und verantwortliche Ansprechpartner der RBC GmbH.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <Block title="Angaben gemäß § 5 TMG">
              <p>
                RBC GmbH<br />
                Hardtstraße 80<br />
                69124 Heidelberg
              </p>
            </Block>

            <Block title="Kontakt">
              <p>
                Telefon: <a href="tel:+4962211852020" className="hover:text-[#98B94B] transition-colors">+49 (0) 6221 / 18520-20</a><br />
                Telefax: +49 (0) 6221 / 18520-29<br />
                E-Mail: <a href="mailto:info@rbc-energy.de" className="hover:text-[#98B94B] transition-colors">info@rbc-energy.de</a>
              </p>
            </Block>

            <Block title="Registereintrag">
              <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Mannheim<br />
                Registernummer: 706834
              </p>
            </Block>

            <Block title="Umsatzsteuer">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE231464461
              </p>
            </Block>

            <Block title="Wirtschaftsidentifikationsnummer">
              <p>27702508</p>
            </Block>

            <Block title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
              <p>
                RBC GmbH<br />
                Hardtstraße 80<br />
                69124 Heidelberg
              </p>
            </Block>

            <Block title="Streitschlichtung">
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Block>

            <Block title="Haftung für Inhalte">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                entfernen.
              </p>
            </Block>

            <Block title="Haftung für Links">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </Block>

            <Block title="Urheberrecht">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </Block>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
