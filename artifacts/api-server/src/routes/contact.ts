import { Router, type IRouter } from "express";
import { z } from "zod";
import { sendContactEmail } from "../lib/resend";

const router: IRouter = Router();

const ContactRequest = z.object({
  firstName: z.string().trim().min(1, "Vorname ist erforderlich").max(120),
  lastName: z.string().trim().min(1, "Nachname ist erforderlich").max(120),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(200),
  phone: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Nachricht ist erforderlich").max(5000),
});

router.post("/contact", async (req, res) => {
  const parsed = ContactRequest.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  const data = parsed.data;
  try {
    await sendContactEmail({
      firstName: data.firstName,
      lastName: data.lastName,
      company: data.company || undefined,
      email: data.email,
      phone: data.phone || undefined,
      message: data.message,
    });
    return res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    return res.status(502).json({
      ok: false,
      error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
    });
  }
});

export default router;
