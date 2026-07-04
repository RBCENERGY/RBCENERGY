---
name: react-icons brand icons
description: Which react-icons submodule actually has social brand icons.
---
Social/brand icons (LinkedIn, Facebook, Xing) must come from `react-icons/fa` (FaLinkedinIn, FaFacebookF, FaXing).
**Why:** `react-icons/si` does NOT export SiLinkedin / SiFacebook / SiXing — importing them breaks the build.
**How to apply:** reach for `react-icons/fa` for social icons before assuming `si` has them.
