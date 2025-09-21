import nodemailer from "nodemailer";

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    // Create test account for Ethereal
    const testAccount = await nodemailer.createTestAccount();

    // Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // Send mail
    const info = await transporter.sendMail({
      from: '"EcomFSA" <no-reply@ecomfsa.com>',
      to,
      subject,
      text,
      html,
    });

    console.log("Email sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
