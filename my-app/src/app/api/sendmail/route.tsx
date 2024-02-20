import nodemailer from "nodemailer";

interface GmailProps{
  name: string
  email: string
  subject: string
  content: string
}

export async function POST(
  req: Request,
) {

  const { name, email, subject, content }: GmailProps = await req.json().then((res: any) => {
    return res
  })

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_ACCOUNT,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_ACCOUNT,
    to: email,
    subject: subject,
    text: `${name}様\n\nLaTeX Indexに関するお問い合わせありがとうございました。返信までしばらくお待ちください。\n\nお問い合わせ内容:\n  ${content}`,
  };

  const mailOptionsToMe = {
    from: process.env.MAIL_ACCOUNT,
    to: process.env.MAIL_ACCOUNT,
    subject: `LaTeX Indexの問い合わせが来ました 件名:${subject}`,
    text: `${name}より\nお問い合わせ内容\n\n${content}`,
  };

  const info = await transporter.sendMail(mailOptions);
  await transporter.sendMail(mailOptionsToMe);
  console.log("Email sent: " + info.response);

  return Response.json({ message: "メールが送信されました。" })
}

