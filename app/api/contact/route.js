import { NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateInput({ name, phone, email }) {
  if (!name || !phone || !email) {
    return "Name, phone, and email are required.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please provide a valid email address.";
  }

  return null;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    const validationError = validateInput({ name, phone, email });
    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        {
          ok: false,
          error: "Email service is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message || "No additional message.");

    await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo: email,
        subject: `New Session Request from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong><br />${safeMessage.replace(/\n/g, "<br />")}</p>
        `,
      }),
      resend.emails.send({
        from: fromEmail,
        to: email,
        replyTo: toEmail,
        subject: "We received your request | 1% Wiser Kids",
        html: `
          <p>Hi ${safeName},</p>
          <p>Thank you for booking a free diagnostic session with 1% Wiser Kids.</p>
          <p>Our team will contact you within 24 hours to confirm the session details.</p>
          <p><strong>Your submitted details:</strong></p>
          <p>Name: ${safeName}<br />Phone: ${safePhone}<br />Email: ${safeEmail}</p>
          <p>Warmly,<br />1% Wiser Kids Team</p>
        `,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ ok: false, error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
