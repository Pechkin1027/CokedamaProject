import React, { useState } from "react";
import PageLayout from "../components/PageLayout";
import sendMessage from "../hooks/sendMessage";

//Javascript
export default function contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
    const obj = { firstName, lastName, email, phone, message };
    sendMessage(obj);
  };
  console;
  return (
    <PageLayout type={"CONTACT"}>
      <div className="contactBanner">
        <div className="contactImg">
          <img src="Contact_Background.jpg" width="100%" />
        </div>
        <div className="contactTitle">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div className="contactContent">
        <div className="contactContainer">
          <div className="contactSet">
            <div className="setContent">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="contactSet">
            <div className="setContent">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="contactSet">
            <div className="setContent">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="contactSet">
            <div className="setContent">
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="contactSet">
            <div className="setContent">
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div className="contactSet">
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </div>
      <div className="slogan">
        <h3>Grow a little love with a little plants.</h3>
      </div>
    </PageLayout>
  );
}
