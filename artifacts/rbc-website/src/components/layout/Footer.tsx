import { Link } from "wouter";
import { FaFacebookF, FaLinkedinIn, FaXing } from "react-icons/fa";

function MembershipBadge() {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Wir sind Mitglied</p>
      <div className="bg-white p-3 rounded-full">
        <img
          src="/green-industry-cluster.png"
          alt="Mitglied im Green Industry Cluster"
          className="w-24 h-24 object-contain"
        />
      </div>
    </div>
  );
}

function VekoBadge() {
  return (
    <img
      src="/veko-official-partner.png"
      alt="VEKO Lightsystems Official Partner"
      className="w-24 h-24 object-contain"
    />
  );
}

function IsoBadge() {
  return (
    <img
      src="/iso-9001-badge.png"
      alt="ISO 9001 zertifiziert"
      className="w-24 h-24 object-contain"
    />
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
