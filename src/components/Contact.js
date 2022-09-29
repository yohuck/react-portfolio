import React, { useRef } from 'react';

import emailjs from "@emailjs/browser";



const sectionStyles = {};
const formStyles = {
  display: "flex",
  flexDirection: "column",
  padding: "var(--size-2)",
  backgroundColor: "",
  margin: "var(--size-1)",
};

const buttonStyles = {
  fontSize: "var(--font-size-3)",
  paddingInline: "var(--size-5)",
  paddingBlock: "var(--size-3)",
  borderRadius: "var(--radius-2)",
  boxShadow: "var(--shadow-2)",
  userSelect: "none",
  background: "var(--violet-7)",
  fontWeight: "var(--font-weight-7)",
  color: "white",
  textAlign: "center",
};

const textArea = {
  width: "500px",
  backgroundColor: "red",
};
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zt20pwv",
        "template_ps3cxcb",
        form.current,
        "KRFL7GOyvHCZIW3DT"
      )
        e.target.reset()

      .then(
        (result) => {
          console.log(result.text);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactPage">
      <section className="contact" style={sectionStyles}>
        <div className="form-grp">
          <h1>Let's Chat</h1>
          <form style={formStyles} ref={form} onSubmit={sendEmail}>
            <label htmlFor="user_name">Name:</label>
            <input
              name="user_name"
              id="user_name"
              type="text"
            ></input>
            <label htmlFor="email">Email Address:</label>
            <input
              name="user_email"
              id="user_email"
              type="user_email"
            ></input>
            <label htmlFor="message">Message:</label>
            <textarea styles={textArea} id="message" name="message"></textarea>
            <button type="submit" style={buttonStyles} value='send'>
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
