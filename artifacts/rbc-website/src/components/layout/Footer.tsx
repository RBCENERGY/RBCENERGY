import { Link } from "wouter";
import { FaFacebookF, FaLinkedinIn, FaXing } from "react-icons/fa";
import { Phone, Printer, Mail, Clock, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D0F12] text-white/60">
      {/* Top CTA strip */}
      <div className="border-b border-white/8">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-display font-bold text-2xl tracking-tight">Bereit für die Energiewende?</p>
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
          {/* Brand + contact col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/rbc-logo.png" alt="RBC GmbH" className="h-11 brightness-0 invert opacity-90" />
              <span className="text-white font-bold text-xl tracking-tight">RBC GmbH</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-sm">
              Ihr ISO-zertifizierter Partner für LED-Modernisierung in Industrie und kommunalen Einrichtungen — seit über 20 Jahren aus Heidelberg.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#98B94B] mt-0.5 shrink-0" />
                <span>RBC GmbH · Hardtstr. 80 · 69124 Heidelberg</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[#98B94B] mt-0.5 shrink-0" />
                <span>Montag bis Freitag · 08:00 – 17:00 Uhr</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#98B94B] mt-0.5 shrink-0" />
                <a href="tel:+4962211852020" className="hover:text-white transition-colors">+49 (0) 6221 / 18520-20</a>
              </div>
              <div className="flex items-start gap-3">
                <Printer size={16} className="text-[#98B94B] mt-0.5 shrink-0" />
                <span>+49 (0) 6221 / 18520-29</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#98B94B] mt-0.5 shrink-0" />
                <a href="mailto:info@rbc-energy.de" className="hover:text-[#98B94B] transition-colors">info@rbc-energy.de</a>
              </div>
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

          {/* Zertifikate & Partner */}
          <div className="md:col-span-3">
            <h4 className="text-white/30 text-xs uppercase tracking-widest font-bold mb-5">Zertifikate & Partner</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-white/12 px-3 py-4 flex flex-col items-center justify-center text-center gap-1 hover:border-[#98B94B]/40 transition-colors">
                <span className="text-white font-display font-bold text-sm leading-none">ISO 9001</span>
                <span className="text-white/40 text-[10px] uppercase tracking-wider">Zertifiziert</span>
              </div>
              <div className="border border-white/12 px-3 py-4 flex flex-col items-center justify-center text-center gap-1 hover:border-[#98B94B]/40 transition-colors">
                <span className="text-white font-display font-bold text-sm leading-none">VEKO</span>
                <span className="text-white/40 text-[10px] uppercase tracking-wider">Official Partner</span>
              </div>
              <div className="border border-white/12 px-3 py-4 flex flex-col items-center justify-center text-center gap-1 hover:border-[#98B94B]/40 transition-colors">
                <span className="text-[#98B94B] font-display font-bold text-sm leading-none">Green</span>
                <span className="text-white/40 text-[10px] uppercase tracking-wider">Industry Cluster</span>
              </div>
              <div className="border border-white/12 px-3 py-4 flex flex-col items-center justify-center text-center gap-1 hover:border-[#98B94B]/40 transition-colors">
                <span className="text-white font-display font-bold text-sm leading-none">TÜV</span>
                <span className="text-white/40 text-[10px] uppercase tracking-wider">Geprüft</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="w-10 h-10 border border-white/12 flex items-center justify-center hover:bg-[#98B94B] hover:text-[#0D0F12] hover:border-[#98B94B] transition-colors" data-testid="social-facebook">
                <FaFacebookF size={15} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 border border-white/12 flex items-center justify-center hover:bg-[#98B94B] hover:text-[#0D0F12] hover:border-[#98B94B] transition-colors" data-testid="social-linkedin">
                <FaLinkedinIn size={15} />
              </a>
              <a href="#" aria-label="Xing" className="w-10 h-10 border border-white/12 flex items-center justify-center hover:bg-[#98B94B] hover:text-[#0D0F12] hover:border-[#98B94B] transition-colors" data-testid="social-xing">
                <FaXing size={15} />
              </a>
            </div>
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
            <Link href="/kontakt" className="hover:text-white/60 transition-colors">Partnerbereich</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
