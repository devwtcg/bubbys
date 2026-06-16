const json = (res, status, body) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
};

const escapeHtml = (value = "") => String(value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

export async function handleForm(req, res, type) {
  if (req.method !== "POST") return json(res, 405, { error: "Method not allowed" });

  const body = typeof req.body === "object" && req.body
    ? req.body
    : JSON.parse(req.body || "{}");

  if (body.website) return json(res, 200, { ok: true });

  const email = String(body.email || "").trim();
  const name = String(body.name || "").trim();
  if (!email || !name) return json(res, 400, { error: "Name and email are required." });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.FORM_TO_EMAIL;
  const from = process.env.FORM_FROM_EMAIL || "Bubby's Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.warn("Missing RESEND_API_KEY or FORM_TO_EMAIL for form submission.");
    return json(res, 503, { error: "Form email is not configured." });
  }

  const rows = Object.entries(body)
    .filter(([key]) => !["website"].includes(key))
    .map(([key, value]) => `<tr><td><strong>${escapeHtml(key)}</strong></td><td>${escapeHtml(value)}</td></tr>`)
    .join("");

  const subject = body.subject || `Bubby's website ${type} submission`;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject,
      html: `<h1>${escapeHtml(subject)}</h1><table cellpadding="8" cellspacing="0" border="1">${rows}</table>`,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Resend error", error);
    return json(res, 502, { error: "Could not send email." });
  }

  return json(res, 200, { ok: true });
}
