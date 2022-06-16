// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const emailUser = process.env.USERMAIL;
const emailPass = process.env.PASSMAIL;

const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  auth: {
    user: emailUser,
    pass: emailPass
  }
});

type MailProps = {
  senderMail: string, 
  about: string, 
  name: string, 
  text: string
};

const mailer = ({senderMail, about, name, text}: MailProps) => {

  const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;

  console.log(senderMail, about, name, text)

  const message = {
    from,
    to: 'angelo@creativemobile.com.br',
    subject: `Novo contato - Assunto: ${about}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      console.log(error, info);
      error ? reject(error) : resolve(info);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { senderMail, about, name, text } = req.body

  const mailRes = await mailer({senderMail, about, name, text});

  res.status(200).json(mailRes);
}
