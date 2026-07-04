import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary text-white/80 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/rbc-logo.png" alt="RBC GmbH" className="h-10" />
              <span className="text-xl font-bold text-white">RBC GmbH</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Ihr zertifizierter Partner für die professionelle LED-Modernisierung in Industrie und Kommunen. Energieeffizienz ohne Investitionskosten.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-xs font-bold border border-white/10">ISO 9001</div>
              <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-xs font-bold border border-white/10">TÜV</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Leistungen</h4>
            <ul className="space-y-3">
              <li><Link href="/leistungen" className="hover:text-primary transition-colors">LED Retrofit</Link></li>
              <li><Link href="/leistungen" className="hover:text-primary transition-colors">Licht-Contracting</Link></li>
              <li><Link href="/industrie" className="hover:text-primary transition-colors">Industrie & Logistik</Link></li>
              <li><Link href="/kommunen" className="hover:text-primary transition-colors">Kommunen & Städte</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Unternehmen</h4>
            <ul className="space-y-3">
              <li><Link href="/unternehmen" className="hover:text-primary transition-colors">Über uns</Link></li>
              <li><Link href="/projekte" className="hover:text-primary transition-colors">Referenzen</Link></li>
              <li><Link href="/karriere" className="hover:text-primary transition-colors">Karriere</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors">News</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Kontakt</h4>
            <address className="not-italic text-sm space-y-3">
              <p>RBC GmbH</p>
              <p>Musterstraße 123<br />12345 Berlin, Deutschland</p>
              <p className="pt-2">
                <a href="tel:+49301234567" className="hover:text-primary transition-colors">+49 (0) 30 123 45 67</a><br />
                <a href="mailto:info@rbc-gmbh.de" className="hover:text-primary transition-colors">info@rbc-gmbh.de</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>&copy; {new Date().getFullYear()} RBC GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
