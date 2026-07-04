import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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

function DropdownMenu({ item, isActive, dark }: { item: (typeof navItems)[0]; isActive: boolean; dark: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.children) return null;

  const textColor = dark
    ? isActive ? "text-[#98B94B]" : "text-white/80 hover:text-white"
    : isActive ? "text-[#98B94B]" : "text-[#1a1a1a]/70 hover:text-[#1a1a1a]";

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`flex items-center gap-1 text-xs font-bold tracking-widest uppercase transition-colors ${textColor}`}
        onClick={() => setOpen(!open)}
      >
        {item.name}
        <ChevronDown size={12} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div className={`absolute top-full left-0 mt-3 w-52 border border-black/8 bg-white shadow-2xl overflow-hidden transition-all duration-200 ${
        open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}>
        {item.children.map((child) => (
          <Link
            key={child.path}
            href={child.path}
            onClick={() => setOpen(false)}
            className="block px-5 py-3.5 text-sm text-[#1a1a1a]/70 hover:text-[#1a1a1a] hover:bg-gray-50 transition-colors border-b border-black/5 last:border-0"
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
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = scrollY > 40;
  const isHome = location === "/";
  // On homepage, header is dark (over hero image). On scroll or other pages → white
  const dark = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md border-b border-black/8 shadow-sm py-4"
          : dark
          ? "bg-transparent py-7"
          : "bg-white/97 backdrop-blur-md border-b border-black/8 py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5 z-50" data-testid="link-logo">
          <img
            src="/rbc-logo.png"
            alt="RBC GmbH Logo"
            className={`object-contain transition-all duration-300 ${scrolled ? "h-11" : "h-14"} ${dark ? "" : "brightness-0"}`}
          />
          <span className={`text-xl font-bold tracking-tight hidden sm:block transition-colors duration-300 ${dark ? "text-white" : "text-[#1a1a1a]"}`}>
            RBC GmbH
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = item.path === "/" ? location === "/" : location.startsWith(item.path);

            if (item.children) {
              return <DropdownMenu key={item.path} item={item} isActive={isActive} dark={dark} />;
            }

            const textColor = dark
              ? isActive ? "text-[#98B94B]" : "text-white/80 hover:text-white"
              : isActive ? "text-[#98B94B]" : "text-[#1a1a1a]/70 hover:text-[#1a1a1a]";

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
          className={`lg:hidden z-50 p-2 transition-colors ${dark ? "text-white" : "text-[#1a1a1a]"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Overlay */}
        <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-10 transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          {navItems.map((item) => (
            <div key={item.path} className="flex flex-col items-center gap-3">
              <Link
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-bold uppercase tracking-widest transition-colors ${
                  location === item.path ? "text-[#98B94B]" : "text-[#1a1a1a]"
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
                      className="text-sm text-[#1a1a1a]/40 hover:text-[#98B94B]"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
