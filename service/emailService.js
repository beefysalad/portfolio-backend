const { sendEmail } = require("../helpers/emailHelper");
require("dotenv").config();
const sendEmailService = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.DESTINATION_EMAIL,
      subject: "Connect with me - Web Portfolio",
      text: `${message} - feedback sender ${name} ${email}`,
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
