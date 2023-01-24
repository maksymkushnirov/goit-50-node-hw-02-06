const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, SENDGRID_EMAIL_SENDER } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: `${SENDGRID_EMAIL_SENDER}` };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;