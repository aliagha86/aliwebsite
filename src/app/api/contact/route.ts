import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_TO,
    subject: "New Second-Opinion Query",
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  });

  return new Response("Message sent", { status: 200 });
}