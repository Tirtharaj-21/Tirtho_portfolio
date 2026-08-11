import React, { useState } from "react";
import "../styling/Contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_vb6xbec";
    const templateId = "template_j2dmd5y";
    const publicKey = "8AhULEAL-gznsSbVi";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Tirthoraj",
      message: message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log("Email sent successfully", res);

        // SUCCESS MESSAGE
        setSuccessMessage("Message sent successfully ");
        setErrorMessage("");
        setTimeout(() => {
          setSuccessMessage("");
        }, 4000);
      })
      .catch((e) => {
        console.log("Error sending email:", e);

        setErrorMessage("Failed to send message");
        setSuccessMessage("");
      });
  };
  return (
    <section id="contact" className="sendmesg">
      <form onSubmit={handlesubmit} className="sendmesg">
        <h3>Send a Message</h3>
        <div className="details">
          <label htmlFor="name">Your Name: </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <br />
          <label htmlFor="email">Email Address: </label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <label htmlFor="mesg">Message: </label>
          <textarea
            id="message"
            placeholder="Tell me about your project or how we can work together"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Send Message
        </button>
        {/* SUCCESS MESSAGE */}
        {successMessage && <div className="success-msg">{successMessage}</div>}

        {/* ERROR MESSAGE */}
        {errorMessage && <div className="error-msg">{errorMessage}</div>}
      </form>
    </section>
  );
};

export default Contact;
