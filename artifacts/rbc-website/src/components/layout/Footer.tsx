import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0D0F12] text-white/60">
      {/* Top CTA strip */}
      <div className="border-b border-white/8">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-display font-bold text-xl tracking-tight">Bereit für die Energiewende?</p>
            <p className="text-white/50 text-sm mt-1">Kostenlose Analyse Ihres Einsparpotenzials — unverbindlich und in 48h.</p>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 inline-block bg-[#98B94B] hover:bg-[#8aaa3f] text-[#0D0F12] font-bold uppercase tracking-widest text-xs px-8 py-4 transition-colors"
            data-testid="footer-cta"
          >
            Jetzt anfragen
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand col */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img src="/rbc-logo.png" alt="RBC GmbH" className="h-8 brightness-0 invert opacity-90" />
              <span className="text-white font-bold text-lg tracking-tight">RBC GmbH</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Ihr ISO-zertifizierter Partner für LED-Modernisierung in Industrie und kommunalen Einrichtungen — seit über 20 Jahren.
            </p>
            <div className="flex gap-3">
              <span className="inline-block px-3 py-1.5 border border-white/15 text-white/60 text-xs font-mono tracking-wider">
                ISO 9001
              </span>
              <span className="inline-block px-3 py-1.5 border border-white/15 text-white/60 text-xs font-mono tracking-wider">
                TÜV
              </span>
              <span className="inline-block px-3 py-1.5 border border-[#98B94B]/40 text-[#98B94B]/80 text-xs font-mono tracking-wider">
                BAFA
              </span>
            </div>
          </div>

          {/* Leistungen */}
          <div className="md:col-span-2">
            <h4 className="text-white/30 text-xs uppercase tracking-widest font-bold mb-5">Leistungen</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/leistungen" className="hover:text-white transition-colors">LED Retrofit</Link></li>
              <li><Link href="/leistungen" className="hover:text-white transition-colors">Licht-Contracting</Link></li>
              <li><Link href="/industrie" className="hover:text-white transition-colors">Industrie</Link></li>
              <li><Link href="/kommunen" className="hover:text-white transition-colors">Kommunen</Link></li>
              <li><Link href="/foerdermittel" className="hover:text-white transition-colors">Fördermittel</Link></li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div className="md:col-span-2">
            <h4 className="text-white/30 text-xs uppercase tracking-widest font-bold mb-5">Unternehmen</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/unternehmen" className="hover:text-white transition-colors">Über uns</Link></li>
              <li><Link href="/projekte" className="hover:text-white transition-colors">Referenzen</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="md:col-span-4">
            <h4 className="text-white/30 text-xs uppercase tracking-widest font-bold mb-5">Kontakt</h4>
            <address className="not-italic text-sm space-y-2 leading-relaxed">
              <p className="text-white/80">RBC GmbH</p>
              <p>Musterstraße 123<br />12345 Berlin, Deutschland</p>
              <p className="pt-2">
                <a href="tel:+49301234567" className="hover:text-white transition-colors block">+49 (0) 30 123 45 67</a>
                <a href="mailto:info@rbc-gmbh.de" className="hover:text-[#98B94B] transition-colors">info@rbc-gmbh.de</a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} RBC GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white/60 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white/60 transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-white/60 transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
