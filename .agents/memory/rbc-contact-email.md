---
name: RBC contact form email
description: Kontakt form uses Netlify Forms; earlier Resend and PHP approaches were removed on purpose
---

The RBC website Kontakt form uses **Netlify Forms**: a hidden static form
`name="kontakt"` with `netlify` + `netlify-honeypot="bot-field"` lives in
`index.html` (field names must match the React form: firstName, lastName,
company, email, phone, message). The React form POSTs urlencoded data to `/`
with `form-name=kontakt` plus a hidden `bot-field` honeypot; success = HTTP 200.

**Why:** The site ships as a static export hosted on Netlify. Earlier delivery
paths (api-server route with Resend, then an external `api/send-mail.php`) were
deliberately removed — do not reintroduce them. Intended recipient stays
c.reinke@rbc-energy.de (configured in the Netlify dashboard notifications).

**How to apply:** In the Replit dev preview submitting the form does nothing
meaningful (no Netlify backend) — expected, not a bug. If form fields change,
the hidden form in `index.html` must be updated in lockstep or Netlify drops
the unknown fields. Static builds: `NODE_ENV=production pnpm --filter
@workspace/rbc-website run build` (PORT/BASE_PATH now optional, default `/`),
zip from `artifacts/rbc-website/dist/public` incl. dotfiles (`.htaccess`,
`_redirects`).
