const sgMail = require("@sendgrid/mail");

export default function handler(req, res) {
  console.log(process.env.SENDGRID_API_KEY);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "cokedamaplantscaping@gmail.com",
    from: "cokedamaplantscaping@gmail.com", // Use the email address or domain you verified above
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
  };
  console.log(req);
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
  res.status(200).json({ name: "John Doe" });
}
