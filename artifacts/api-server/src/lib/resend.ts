// Email sending via the Resend integration (Replit connectors).
// See the "resend" blueprint / connectors-sdk integration.
import { ReplitConnectors } from "@replit/connectors-sdk";
import { logger } from "./logger";

const connectors = new ReplitConnectors();

const FROM = process.env.CONTACT_FROM ?? "RBC GmbH Website <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO ?? "info@rbc-energy.de";

export interface ContactEmailInput {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function stripControlChars(value: string): string {
  // Remove CR/LF and other control chars to avoid header-style abuse in the subject.
  return value.replace(/[\r\n\t\f\v\0]+/g, " ").trim();
}

export async function sendContactEmail(input: ContactEmailInput): Promise<void> {
  const fullName = stripControlChars(`${input.firstName} ${input.lastName}`.trim());
  const rows: Array<[string, string]> = [
    ["Name", fullName],
    ["Unternehmen", input.company ?? "—"],
    ["E-Mail", input.email],
    ["Telefon", input.phone ?? "—"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#0D0F12;line-height:1.6;">
      <h2 style="color:#25412D;margin-bottom:16px;">Neue Anfrage über die Website</h2>
      <table style="border-collapse:collapse;margin-bottom:20px;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:4px 16px 4px 0;font-weight:bold;">${label}</td><td style="padding:4px 0;">${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <div style="padding:16px;background:#F7F8F9;border-left:3px solid #98B94B;">
        <strong>Nachricht / Projektdetails:</strong><br />
        ${escapeHtml(input.message).replace(/\n/g, "<br />")}
      </div>
    </div>
  `;

  const text = [
    "Neue Anfrage über die Website",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Nachricht / Projektdetails:",
    input.message,
  ].join("\n");

  const response = await connectors.proxy("resend", "/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: input.email,
      subject: `Neue Anfrage von ${fullName || stripControlChars(input.email)}`,
      html,
      text,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    logger.error({ status: response.status, detail }, "Resend email send failed");
    throw new Error(`Resend responded with status ${response.status}`);
  }
}
