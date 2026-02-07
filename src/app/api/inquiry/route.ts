import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let message = "";
    let wantsBrief = false;
    let company = "";

    // ✅ Support both JSON (future) and HTML form posts (current)
    if (contentType.includes("application/json")) {
      const body = await req.json();
      name = (body?.name ?? "").toString().trim();
      email = (body?.email ?? "").toString().trim();
      message = (body?.message ?? "").toString().trim();
      wantsBrief = body?.wantsBrief === true;
      company = (body?.company ?? "").toString().trim();
    } else {
      const form = await req.formData();
      name = (form.get("name") ?? "").toString().trim();
      email = (form.get("email") ?? "").toString().trim();
      message = (form.get("message") ?? "").toString().trim();
      wantsBrief = (form.get("wantsBrief") ?? "") === "yes";
      company = (form.get("company") ?? "").toString().trim();
    }

    // Honeypot: silently accept bots
    if (company) {
      return NextResponse.redirect(new URL("/?sent=1", req.url));
    }

    // Validate
    if (!name || !email || !message) {
      return NextResponse.redirect(new URL("/?sent=0", req.url));
    }
    if (!isEmail(email)) {
      return NextResponse.redirect(new URL("/?sent=0", req.url));
    }

    // Ensure env vars exist
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
      LEADS_TO_EMAIL,
      LEADS_FROM_EMAIL,
      AUTO_REPLY,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !LEADS_TO_EMAIL ||
      !LEADS_FROM_EMAIL
    ) {
      console.error("Missing env vars for SMTP/Leads");
      return NextResponse.redirect(new URL("/?sent=0", req.url));
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === "true", // true only for 465
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const briefLink = "https://alizaighamagha.com/uae-market-brief-2026.pdf";

    await transporter.sendMail({
      from: LEADS_FROM_EMAIL,
      to: LEADS_TO_EMAIL,
      replyTo: email,
      subject: `New Inquiry — ${name}${wantsBrief ? " (Wants UAE Brief)" : ""}`,
      text: `
New inquiry from alizaighamagha.com

Name: ${name}
Email: ${email}
Wants UAE Market Brief: ${wantsBrief ? "Yes" : "No"}

Message:
${message}

${wantsBrief ? `Brief link: ${briefLink}` : ""}
`.trim(),
    });

    // Optional auto-reply
    if (AUTO_REPLY === "true") {
      await transporter.sendMail({
        from: LEADS_FROM_EMAIL,
        to: email,
        subject: "Thanks — received your inquiry",
        text: wantsBrief
          ? `Thanks for reaching out. Here’s the UAE Market Brief (PDF): ${briefLink}\n\n— Ali`
          : `Thanks for reaching out. I’ve received your message and will reply directly.\n\n— Ali`,
      });
    }

    // ✅ redirect back so user never sees a blank API page
    return NextResponse.redirect(new URL("/?sent=1", req.url));
  } catch (err: any) {
    console.error("INQUIRY_API_ERROR:", err?.message || err);
    return NextResponse.redirect(new URL("/?sent=0", req.url));
  }
}