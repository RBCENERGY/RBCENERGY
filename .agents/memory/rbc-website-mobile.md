---
name: RBC website mobile/responsive conventions
description: Responsive breakpoint conventions and the hero stats-overlap gotcha for the RBC website
---

# RBC website mobile/responsive conventions

Canonical responsive scales used across pages (keep consistent when adding sections):
- Hero h1: `text-4xl sm:text-5xl md:text-6xl` (or `md:text-7xl` for Home/Industrie extrabold heroes).
- Section h2: `text-3xl sm:text-4xl md:text-5xl`.
- Card padding: `p-6 sm:p-8 md:p-10` (never bare `p-10` — too tight on phones and long German words overflow).
- Hero content padding: `pt-28 pb-16 md:pt-32 md:pb-20`.

Long-word overflow: `index.css` base layer gives all headings `overflow-wrap: break-word` always + `hyphens: auto` under 640px, and `index.html` is `lang="de"` so hyphenation works on words like "Straßenbeleuchtung".

**Home hero stats-bar overlap gotcha:** the hero has an `absolute bottom-0` stats bar. On mobile the hero content grows taller than `min-h-screen`, so an `items-center` hero pushes the CTA buttons down onto the absolute stats bar. Fix (already applied): section `flex items-start md:items-center` + content `pt-28 pb-40 md:pt-32 md:pb-24` so buttons clear the stats bar. **Why:** absolute bottom-0 is relative to the grown section, so content needs large mobile bottom padding, not vertical centering.

**Gotcha — sed on `p-10`:** some cards already had `p-8`/`p-6`; a blind `\bp-10\b` → `p-6 sm:p-8 md:p-10` sed produced duplicated tokens like `p-8 md:p-6 sm:p-8 md:p-10`. After any such bulk class replace, grep for repeated breakpoint tokens and collapse to the canonical sequence.
