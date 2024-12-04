// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validação dos campos
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Configuração do transportador Nodemailer
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 587, // Porta padrão para email (587 ou 465)
        secure: false, // Use "true" para 465, "false" para outras portas
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // Opções do e-mail
      const mailOptions = {
        from: `"${name}" <${email}>`, // Nome e email do remetente
        to: process.env.EMAIL_USER, // Email do destinatário
        subject: `New Contact Form Submission from ${name}`,
        text: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      };

      // Envia o e-mail
      await transporter.sendMail(mailOptions);

      // Retorna sucesso
      return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
  } else {
    // Permite apenas POST
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
