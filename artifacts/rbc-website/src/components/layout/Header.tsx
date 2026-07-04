import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Startseite", path: "/" },
  { name: "Leistungen", path: "/leistungen" },
  { name: "Industrie", path: "/industrie" },
  { name: "Kommunen", path: "/kommunen" },
  { name: "Fördermittel", path: "/foerdermittel" },
  { name: "Projekte", path: "/projekte" },
  { name: "Unternehmen", path: "/unternehmen" },
  { name: "Karriere", path: "/karriere" },
  { name: "News", path: "/news" },
];

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/90 backdrop-blur-md border-b border-border shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <img src="/rbc-logo.png" alt="RBC GmbH Logo" className="h-10 object-contain" />
          <span className="text-xl font-bold text-white hidden sm:block">RBC GmbH</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.path ? "text-primary" : "text-white/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/kontakt" className="ml-4">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-white border-none">
              Kontakt aufnehmen
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Menu */}
        <div
          className={`fixed inset-0 bg-secondary flex flex-col items-center justify-center gap-6 transition-transform duration-300 lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold transition-colors ${
                location === link.path ? "text-primary" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
            <Button size="lg" className="mt-4 bg-primary text-white">
              Kontakt aufnehmen
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
