---
name: RBC Netlify image assets
description: Prevent logos and images from appearing in the Replit preview but missing from Netlify.
---

`attached_assets/` is globally Git-ignored in this workspace. Importing a newly uploaded file from there can work in Replit's local preview while the file is absent from the Git push and Netlify build. For assets the published RBC site needs, copy them to `artifacts/rbc-website/public/`, reference them by public URL, and verify the asset itself is tracked before assuming it will deploy.

**Why:** A BUHLMANN logo imported from `attached_assets/` appeared locally but was missing from the pushed branch; Netlify's served bundle had no logo asset.

**How to apply:** For every new image/logo intended for Netlify, run `git check-ignore` or `git ls-files` on its source and prefer a tracked `public/` copy.
