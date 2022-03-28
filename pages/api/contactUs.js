const sgMail = require("@sendgrid/mail");

export default function handler(req, res) {
  console.log(process.env.SENDGRID_API_KEY);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const customer_data = Object.create(req.body);
  console.log(customer_data);

  var customer_name = customer_data.firstName;
  console.log(customer_name);
  var customer_lastName = customer_data.lastName;
  console.log(customer_lastName);
  var customer_email = customer_data.email;
  console.log(customer_email);
  var customer_phone = customer_data.phone;
  console.log(customer_phone);
  var customer_message = customer_data.message;
  console.log(customer_message);

  const msg = {
    to: ["cokedamaplantscaping@gmail.com", "cokedamainterio@gmail.com"],
    from: "mbarnes2k5@gmail.com", // Use the email address or domain you verified above
    subject: "A message from your customer!",
    text:
      "From :" +
      customer_name +
      " customer email : " +
      customer_email +
      "Message : " +
      customer_message,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email Sent");
    })
    .catch((error) => {
      console.error(error);
    });
  /*
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
  res.status(200).json({ name: "John Doe" });*/
}
