import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Leistungen", path: "/leistungen" },
  { name: "Industrie", path: "/industrie" },
  { name: "Kommunen", path: "/kommunen" },
  { name: "Mobile", path: "/mobile" },
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
        <Link href="/" className="flex items-center z-50 lg:ml-10 xl:ml-16" data-testid="link-logo">
          <img
            src="/rbc-logo.png"
            alt="RBC GmbH Logo"
            className={`object-contain transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 lg:mr-10 xl:mr-16">
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
                className={`text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-colors ${textColor}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2 transition-colors text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Overlay */}
        <div className={`fixed inset-0 bg-[#0D0F12] flex flex-col items-center justify-center gap-8 pt-28 pb-10 overflow-y-auto transition-transform duration-300 lg:hidden ${
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
