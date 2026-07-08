import { Link } from "wouter";
import { useId } from "react";
import { FaFacebookF, FaLinkedinIn, FaXing } from "react-icons/fa";

function MembershipBadge() {
  const arcId = useId();
  return (
    <svg viewBox="0 0 150 150" className="w-32 h-32" role="img" aria-label="Mitglied im Green Industry Cluster">
      <circle cx="75" cy="75" r="73" fill="#F7F8F9" />
      <defs>
        <path id={arcId} d="M 22 75 A 53 53 0 0 1 128 75" fill="none" />
      </defs>
      <text fill="#25412D" fontSize="12.5" fontWeight="700" letterSpacing="1.5" fontFamily="Manrope, sans-serif">
        <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">WIR SIND MITGLIED</textPath>
      </text>
      <text x="72" y="92" textAnchor="middle" fontSize="46" fontWeight="800" fill="#98B94B" fontFamily="Manrope, sans-serif">g</text>
      <circle cx="93" cy="60" r="4" fill="#98B94B" />
      <text x="75" y="108" textAnchor="middle" fontSize="9" fontWeight="700" fill="#25412D" fontFamily="Manrope, sans-serif">Green Industry</text>
      <text x="75" y="119" textAnchor="middle" fontSize="9" fontWeight="700" fill="#25412D" fontFamily="Manrope, sans-serif">Cluster</text>
    </svg>
  );
}

function VekoBadge() {
  return (
    <svg viewBox="0 0 130 130" className="w-24 h-24" role="img" aria-label="VEKO Lightsystems Official Partner">
      <circle cx="65" cy="65" r="63" fill="#F7F8F9" />
      <text x="65" y="62" textAnchor="middle" fontSize="27" fontWeight="800" fill="#C50019" letterSpacing="1" fontFamily="Manrope, sans-serif">VEKO</text>
      <text x="65" y="78" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#25412D" letterSpacing="2.5" fontFamily="Manrope, sans-serif">LIGHTSYSTEMS</text>
      <text x="65" y="95" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#25412D" letterSpacing="1" fontFamily="Inter, sans-serif">Official Partner</text>
    </svg>
  );
}

function IsoBadge() {
  return (
    <svg viewBox="0 0 130 140" className="w-24 h-24" role="img" aria-label="ISO 9001 zertifiziert">
      <circle cx="65" cy="58" r="46" fill="none" stroke="#98B94B" strokeWidth="1.5" opacity="0.7" />
      <ellipse cx="65" cy="58" rx="18" ry="46" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.25" />
      <line x1="19" y1="58" x2="111" y2="58" stroke="#ffffff" strokeWidth="1" opacity="0.25" />
      <line x1="26" y1="34" x2="104" y2="34" stroke="#ffffff" strokeWidth="1" opacity="0.25" />
      <line x1="26" y1="82" x2="104" y2="82" stroke="#ffffff" strokeWidth="1" opacity="0.25" />
      <text x="58" y="66" textAnchor="middle" fontSize="26" fontWeight="800" fill="#ffffff" fontFamily="Manrope, sans-serif">ISO</text>
      <rect x="70" y="47" width="34" height="17" fill="#98B94B" />
      <text x="87" y="60" textAnchor="middle" fontSize="12" fontWeight="800" fill="#0D0F12" fontFamily="Manrope, sans-serif">9001</text>
      <text x="65" y="122" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ffffff" letterSpacing="2" fontFamily="Manrope, sans-serif">ZERTIFIZIERT</text>
      <path d="M 50 100 L 42 132 L 54 124 L 62 112 Z" fill="#98B94B" />
      <path d="M 80 100 L 88 132 L 76 124 L 68 112 Z" fill="#98B94B" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0D0F12] text-white/70">
      {/* Main footer — centered, old-site style */}
      <div className="container mx-auto px-6 py-16 relative">
        {/* Membership badge — left */}
        <div className="hidden lg:block absolute left-6 xl:left-16 top-1/2 -translate-y-1/2">
          <MembershipBadge />
        </div>

        {/* Partner + certificate badges — right */}
        <div className="hidden lg:flex items-center gap-6 absolute right-6 xl:right-16 top-1/2 -translate-y-1/2">
          <IsoBadge />
          <VekoBadge />
        </div>

        {/* Centered contact column */}
        <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-4">
          <img src="/rbc-logo.png" alt="Economic Light Design by RBC" className="h-16 object-contain mb-2" />

          <p className="text-white font-display font-bold tracking-wide text-sm md:text-base">
            RBC GMBH | HARDTSTR. 80 | 69124 HEIDELBERG
          </p>

          <p className="text-sm leading-relaxed">
            Telefonisch erreichen Sie uns <span className="text-white font-semibold">Mo – Do 08:00–17:00 Uhr</span> und{" "}
            <span className="text-white font-semibold">Fr 08:00–15:00 Uhr</span> unter:
          </p>

          <p className="text-sm">
            Fon:{" "}
            <a href="tel:+4962211852020" className="hover:text-[#98B94B] transition-colors">+49 (0)6221/18520-20</a>{" "}
            | Fax: +49 (0)6221/18520-29
          </p>

          <p className="text-sm">
            oder jederzeit per E-Mail an:{" "}
            <a href="mailto:info@rbc-energy.de" className="hover:text-[#98B94B] transition-colors">info@rbc-energy.de</a>
          </p>

          <div className="flex items-center gap-3 pt-3 text-white font-display font-bold text-xs md:text-sm tracking-wide">
            <Link href="/impressum" className="hover:text-[#98B94B] transition-colors">IMPRESSUM</Link>
            <span className="text-white/25">|</span>
            <Link href="/datenschutz" className="hover:text-[#98B94B] transition-colors">DATENSCHUTZ</Link>
            <span className="text-white/25">|</span>
            <Link href="/kontakt" className="hover:text-[#98B94B] transition-colors">PARTNERBEREICH</Link>
          </div>

          <div className="text-white/40 text-xs pt-4 leading-relaxed">
            <p>&copy; {new Date().getFullYear()}</p>
            <p>RBC GmbH</p>
          </div>

          {/* Social — green brand squares */}
          <div className="flex gap-2 pt-3">
            <a href="https://www.facebook.com/economiclightdesign/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 bg-[#98B94B] text-[#0D0F12] flex items-center justify-center hover:bg-white transition-colors" data-testid="social-facebook">
              <FaFacebookF size={15} />
            </a>
            <a href="https://www.linkedin.com/company/rbc-gmbh/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 bg-[#98B94B] text-[#0D0F12] flex items-center justify-center hover:bg-white transition-colors" data-testid="social-linkedin">
              <FaLinkedinIn size={15} />
            </a>
            <a href="https://www.xing.com/pages/rbcgmbh" target="_blank" rel="noopener noreferrer" aria-label="Xing" className="w-9 h-9 bg-[#98B94B] text-[#0D0F12] flex items-center justify-center hover:bg-white transition-colors" data-testid="social-xing">
              <FaXing size={15} />
            </a>
          </div>
        </div>

        {/* Badges — stacked on mobile / tablet */}
        <div className="lg:hidden flex flex-wrap items-center justify-center gap-10 mt-14">
          <MembershipBadge />
          <VekoBadge />
          <IsoBadge />
        </div>
      </div>
    </footer>
  );
}
