import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function Mail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { firstName, lastName, email, subject, message } = req.body;
    const content = `
      First Name: ${firstName}\r\n
      Last Name: ${lastName}\r\n
      Subject: ${subject}\r\n
      Email: ${email}\r\n
      Message: ${message}
    `;

    const data = {
      to: "yarar-fisher.1@osu.edu",
      from: "hello@pro-sci.science",
      subject: "New Message from Contact Form",
      text: content,
      html: content.replace(/\r\n/g, "<br>"),
    };
    await sendgrid.send(data);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
  res.status(200).json({ status: "OK" });
}
