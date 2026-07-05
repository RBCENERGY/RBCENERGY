---
name: RBC contact form email
description: How the Kontakt form delivers email and the Resend domain-verification constraint
---

The RBC website Kontakt form POSTs to the api-server `/api/contact` route, which sends
mail via the Resend integration (Replit connectors-sdk proxy, `connectors.proxy("resend", "/emails", ...)`).

Sender/recipient are env-configurable:
- `CONTACT_TO` — recipient, defaults to `info@rbc-energy.de`
- `CONTACT_FROM` — sender, defaults to `RBC GmbH Website <onboarding@resend.dev>`

**Constraint / gotcha:** Resend refuses to deliver to arbitrary recipients until a
sending domain is verified at resend.com/domains. Until then it returns **403
validation_error** and only allows sending to the Resend account owner's own email
from `onboarding@resend.dev`.

**Why:** This is a Resend account-level requirement, not a code bug — the route,
validation, and proxy call are correct (a 403 with "verify a domain" means success
up to that point).

**How to apply:** To make the form deliver to `info@rbc-energy.de` in production, the
user must verify a domain (ideally rbc-energy.de) in Resend, then set `CONTACT_FROM`
to a mailbox on that domain. No code change needed.
