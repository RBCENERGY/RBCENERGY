---
name: RBC deploy workflow
description: How the RBC website gets deployed to Netlify
---

The user (agency circa2) deploys the RBC website to Netlify **via git push** as of July 2026.

**Why:** User explicitly said "keine zip dateien mehr erstellen wir pushen das über git."
**How to apply:** After changes, just verify typecheck/build; do not build+zip `rbc-website-dist.zip` or present it. Netlify config files (`_redirects`, `_headers`, `.htaccess`) live in `artifacts/rbc-website/public/` and are copied into the build automatically.
