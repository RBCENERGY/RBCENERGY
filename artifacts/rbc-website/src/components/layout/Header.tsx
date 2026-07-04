import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Leistungen", path: "/leistungen" },
  { name: "Industrie", path: "/industrie" },
  { name: "Kommunen", path: "/kommunen" },
  { name: "Fördermittel", path: "/foerdermittel" },
  { name: "Projekte", path: "/projekte" },
  { name: "Über uns", path: "/unternehmen" },
  { name: "News", path: "/news" },
];

export function Header() {
  const [location] = useLocation();
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = scrollY > 40;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0F12]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5 z-50" data-testid="link-logo">
          <img
            src="/rbc-logo.png"
            alt="RBC GmbH Logo"
            className={`object-contain transition-all duration-300 ${scrolled ? "h-11" : "h-14"}`}
          />
          <span className="text-xl font-bold tracking-tight hidden sm:block text-white">
            RBC GmbH
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.startsWith(item.path);
            const textColor = isActive
              ? "text-[#98B94B]"
              : "text-white/80 hover:text-white";

            return (
              <Link
                key={item.path}
                href={item.path}
                data-testid={`nav-${item.name.toLowerCase()}`}
                className={`text-xs font-bold tracking-widest uppercase transition-colors ${textColor}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <Link href="/kontakt" className="hidden lg:block" data-testid="button-kontakt-desktop">
          <button className="bg-[#98B94B] hover:bg-[#8aaa3f] text-[#0D0F12] font-bold tracking-widest uppercase text-xs px-7 py-3 transition-colors">
            Kostenlose Beratung
          </button>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2 transition-colors text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Overlay */}
        <div className={`fixed inset-0 bg-[#0D0F12] flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold uppercase tracking-widest transition-colors ${
                location.startsWith(item.path) ? "text-[#98B94B]" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)} data-testid="button-kontakt-mobile">
            <button className="mt-4 bg-[#98B94B] text-[#0D0F12] font-bold uppercase tracking-widest text-sm px-10 py-4">
              Kostenlose Beratung
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
