---
name: RBC contact form email
description: Kontakt form posts to external PHP endpoint; Resend/api-server route was removed on purpose
---

The RBC website Kontakt form POSTs JSON to the **relative path `/api/send-mail.php`**
and treats the submission as successful only when the response body contains
`success: true` (otherwise it shows the inline error message, no page reload).

**Why:** The user ships the site as a static `dist` export to external hosting where a
PHP script handles mail delivery (intended recipient: `c.reinke@rbc-energy.de`, kept
in the PHP script, not in this repo). The former api-server `/api/contact` route, the
Resend lib, and the `@replit/connectors-sdk` dependency were deliberately removed
(July 2026) — do not reintroduce them or "fix" the .php URL.

**How to apply:** In the Replit dev preview the form will 404 (no PHP host) — that is
expected, not a bug. Static builds are made with
`NODE_ENV=production PORT=5000 BASE_PATH=/ pnpm --filter @workspace/rbc-website run build`
and zipped from `artifacts/rbc-website/dist/public`.
