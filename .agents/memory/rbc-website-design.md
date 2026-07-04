---
name: RBC website design language
description: Visual system + hard user constraint for the RBC GmbH LED-modernization site.
---
Light/futuristic "2030" corporate look. Base backgrounds are bg-white / bg-[#F7F8F9].

**Hard user constraint:** green is an ACCENT only. Never use dark-green (#25412D) as a page/section base background. The user explicitly rejected any "rückfall in altes design" (return to the old dark-green-heavy design).
**Why:** repeated, emphatic user preference across multiple turns.
**How to apply:** dark accents are allowed as (a) charcoal #0D0F12 image-hero gradient overlays, and (b) small #25412D accent cards (e.g. the Fördermittel service card, savings calculator). Everything else stays light.

Tokens: accent lime #98B94B, dark green #25412D, charcoal #0D0F12. Fonts Manrope (display) + Inter (body). Eyebrow: text-[#98B94B] text-xs font-bold uppercase tracking-widest. Cards: bg-white border-black/[0.08] hover:border-[#98B94B]/50 hover:shadow-xl. Primary btn bg-[#98B94B] text-[#0D0F12]; dark btn bg-[#25412D] text-white; all buttons uppercase tracking-widest text-xs.
**Hero + header (user constraint):** EVERY page uses the same dark charcoal image-hero (full-bleed img + `bg-gradient-to-r from-[#0D0F12]/92 via/70 to/20` + green grid overlay opacity-10 + green-line eyebrow + white heading + text-white/60 body). No page uses a light-grey hero. The Header is ALWAYS dark-style (light text/logo): `bg-transparent` at top, `bg-[#0D0F12]/95 backdrop-blur` on scroll — it must NEVER turn white. **Why:** user explicitly wanted every page to match the homepage and rejected the white-on-scroll header. Page BODIES below the hero stay light (accent-only green) — that part of the constraint is unchanged.
Header nav is flat top-level links (no dropdown) — user rejected the Leistungen dropdown ("nicht zum ausklappen"). Sub-pages Industrie/Kommunen/Fördermittel are their own top-level nav items + footer links.
Hero images in public/: hero-warehouse (Home), hero-industry, hero-municipality, hero-company, hero-leistungen, hero-foerdermittel, hero-projekte, hero-news, hero-kontakt.
Shared CTA lives in src/components/modules/CtaBand.tsx. Karriere page was removed. Real contact data: RBC GmbH, Hardtstr. 80, 69124 Heidelberg, info@rbc-energy.de.
