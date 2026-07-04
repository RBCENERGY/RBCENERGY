---
name: framer-motion Variants typing
description: Why fadeUp-style variant objects need an explicit type annotation.
---
Annotate motion variant objects as `Variants` (import `type Variants` from framer-motion): `const fadeUp: Variants = {...}`.
**Why:** without the annotation, an `ease: "easeOut"` literal widens to `string`, which is not assignable to framer-motion's `Easing` type, and `tsc --noEmit` fails on every page using the variant.
**How to apply:** any new page copying the fadeUp pattern must keep the `: Variants` annotation.
