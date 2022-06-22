import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f329d0323e27b4",
    pass: "11d9b96fa1f9f7"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({ subject, body }: SendMailData){
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Eduarda San Martin <dudafsanmartin@gmail.com>',
    subject: subject,
    html: body
  });
  }
}