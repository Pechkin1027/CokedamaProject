const sgMail = require("@sendgrid/mail");

//Changed the location of const send to accommodate new functions

export default function handler(req, res) {
  console.log(process.env.SENDGRID_API_KEY);
  sgMail.setApiKey("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");
  
  var customer_data = Object.create(req.body.inputs);
  console.log(req.body);
  console.log(customer_data);

  var customer_name = customer_data.first_name;
  console.log(customer_name);
  var customer_lastName = customer_data.last_name;
  console.log(customer_lastName);
  var customer_email = customer_data.email;
  console.log(customer_email);
  var customer_address = customer_data.address;
  console.log(customer_address);
  var customer_zip = customer_data.zip;
  console.log(customer_zip);
  var customer_city = customer_data.city;
  console.log(customer_city);

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
      to: ['cokedamainteriorplantscaping@gmail.com'],
      from: 'cokedamainteriorplantscaping@gmail.com',
    subject: "Cokedama Order Up",
    text:
      "Ruchira, your customer has ordered : " +
      message +
      "\nPlease observe the customers information and fulfil the order : \n" +
      "Name : " +
      customer_name +
      " " +
      customer_lastName +
      "\n" +
      "Address : " +
      customer_address +
      "\n" +
      "Zip Code :" +
      customer_zip +
      "\n" +
      "City : " +
      customer_city +
      "\n" +
      "Email : " +
      customer_email,
  };

  console.log(msg.text);
  // async () => {
  //   try {
  //     const Res = await sgMail.send(msg);
  //     console.log(Res);
  //   } catch (error) {
  //     console.error(error);

  //     if (error.response) {
  //       console.error(error.response.body);
  //     }
  //   }
  // };
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
