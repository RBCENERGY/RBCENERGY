import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="py-24 bg-[#F7F8F9] border-t border-black/6">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] mb-6 leading-tight">
          Bereit für <span className="text-[#98B94B]">die Energiewende?</span>
        </h2>
        <p className="text-[#1a1a1a]/55 text-lg mb-10 max-w-md mx-auto">
          Kostenlose Potenzialanalyse — unverbindlich, in 48 Stunden bei Ihnen.
        </p>
        <Link href="/kontakt">
          <button className="inline-flex items-center gap-3 bg-[#98B94B] hover:bg-[#8aaa3f] text-[#0D0F12] font-bold uppercase tracking-widest text-xs px-10 py-5 transition-colors">
            Jetzt kostenlos anfragen <ArrowRight size={14} />
          </button>
        </Link>
      </div>
    </section>
  );
}
