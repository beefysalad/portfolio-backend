const { sendEmail } = require("../helpers/emailHelper");
require("dotenv").config();
const sendEmailService = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.DESTINATION_EMAIL,
      subject: "Connect with me - Web Portfolio",
      html: `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
            <h2 style="color: #333;">New message from your web portfolio</h2>
            <p style="font-size: 16px;">${message}</p>
            <p style="font-size: 14px; color: #666;">- Feedback sender</p>
            ${
              name
                ? `<p style="font-size: 16px; font-weight: bold;">Name: ${name}</p>`
                : ""
            }
            ${
              email
                ? `<p style="font-size: 16px; font-weight: bold;">Email: ${email}</p>`
                : ""
            }
          </div>
        </body>
      </html>
    `,
    };
    const emailResponse = await sendEmail(mailOptions);
    if (emailResponse && emailResponse.messageId) {
      res.status(200).json({
        message: `Email sent successfully - ${emailResponse.messageId}`,
      });
    } else {
      res.status(500).json({
        message: "Email sending failed without an error response.",
      });
    }
  } catch (error) {
    console.error("Error encountered");
    res.status(500).json({
      message: `Error encountered ${error}`,
    });
  }
};

module.exports = {
  sendEmailService,
};
