import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    name: "Leistungen",
    path: "/leistungen",
    children: [
      { name: "LED-Modernisierung", path: "/leistungen" },
      { name: "Industrie", path: "/industrie" },
      { name: "Kommunen", path: "/kommunen" },
      { name: "Fördermittel", path: "/foerdermittel" },
    ],
  },
  { name: "Projekte", path: "/projekte" },
  { name: "Über uns", path: "/unternehmen" },
  { name: "News", path: "/news" },
];

function DropdownMenu({
  item,
  isActive,
}: {
  item: (typeof navItems)[0];
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!item.children) return null;

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`flex items-center gap-1 text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
          isActive ? "text-primary" : "text-white/80"
        }`}
        onClick={() => setOpen(!open)}
      >
        {item.name}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute top-full left-0 mt-2 w-52 rounded-lg border border-white/10 bg-secondary/95 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-200 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {item.children.map((child) => (
          <Link
            key={child.path}
            href={child.path}
            onClick={() => setOpen(false)}
            className="block px-4 py-3 text-sm text-white/80 hover:text-primary hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
          >
            {child.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50" data-testid="link-logo">
          <img src="/rbc-logo.png" alt="RBC GmbH Logo" className="h-9 object-contain" />
          <span className="text-lg font-bold text-white tracking-tight hidden sm:block">RBC GmbH</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location === "/"
                : location.startsWith(item.path);

            if (item.children) {
              return (
                <DropdownMenu key={item.path} item={item} isActive={isActive} />
              );
            }

            return (
              <Link
                key={item.path}
                href={item.path}
                data-testid={`nav-${item.name.toLowerCase()}`}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-white/80"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <Link href="/kontakt" className="hidden lg:block" data-testid="button-kontakt-desktop">
          <Button className="bg-primary hover:bg-primary/90 text-secondary font-bold tracking-wide uppercase text-xs px-6 rounded-sm">
            Kostenlose Beratung
          </Button>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 bg-secondary flex flex-col items-center justify-center gap-8 transition-transform duration-300 lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navItems.map((item) => (
            <div key={item.path} className="flex flex-col items-center gap-3">
              <Link
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-bold uppercase tracking-widest transition-colors ${
                  location === item.path ? "text-primary" : "text-white"
                }`}
              >
                {item.name}
              </Link>
              {item.children && (
                <div className="flex flex-col items-center gap-2">
                  {item.children.slice(1).map((child) => (
                    <Link
                      key={child.path}
                      href={child.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm text-white/60 hover:text-primary"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)} data-testid="button-kontakt-mobile">
            <Button size="lg" className="mt-4 bg-primary text-secondary font-bold uppercase tracking-wide">
              Kostenlose Beratung
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
