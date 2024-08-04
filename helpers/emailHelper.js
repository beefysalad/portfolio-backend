const { transporter } = require("../config/emailConfig");

const sendEmail = async (mailOptions) => {
  try {
    const emailInfo = await transporter.sendMail(mailOptions);
    if (emailInfo) {
      return emailInfo;
    }
  } catch (error) {
    console.error("Error in sending an email", error);
  }
};

module.exports = {
  sendEmail,
};
