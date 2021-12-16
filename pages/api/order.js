const sgMail = require("@sendgrid/mail");

//Changed the location of const send to accommodate new functions

export default function handler(req, res) {
  console.log(process.env.SENDGRID_API_KEY);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  var customer_data = Object.create(req.body.inputs);
  console.log(customer_data);
  var customer_email = customer_data.email;
  console.log(customer_email);

  const emailData = Object.create(req.body.Cart);
  var n = emailData.length;

  function orderStack(n) {
    const emailDataGamma = Object.create(req.body.Cart);
    var listOfItems = {};
    for (let i = 0; i < n; i++) {
      console.log(emailDataGamma[i].name);
      listOfItems[i] = emailDataGamma[i].name;
      console.log(listOfItems[i]);
    }
    return listOfItems;
  }

  function quantityStack(n) {
    const emailDataTheta = Object.create(req.body.Cart);
    var QuantityStack = [];
    for (let i = 0; i < n; i++) {
      console.log(emailDataTheta[i].quantity);
      QuantityStack[i] = emailDataTheta[i].quantity;
    }
    return QuantityStack;
  }
  var stackofQuantities = quantityStack(n);
  console.log(stackofQuantities);
  var stackofOrders = orderStack(n);
  console.log(stackofOrders);
  var message = "";

  for (let i = 0; i < n; i++) {
    message = message.concat(
      stackofQuantities[i] + " " + stackofOrders[i] + " "
    );
  }

  const msg = {
    to: customer_email,
    from: "cokedamaplantscaping@gmail.com", // Use the email address or domain you verified above
    subject: "Cokedama Order Received",
    text: "Ruchira, your order of: " + message + " Has been completed.",
  };
  console.log(msg.text);
  async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email Sent");
    })
    .catch((error) => {
      console.error(error);
    });
  res.status(200).json({ name: "John Doe" });
}
