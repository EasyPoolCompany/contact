import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();

  const emjs = {
    serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emjs.serviceId, emjs.templateId, form.current, {
        publicKey: emjs.publicKey,
      })
      .then(
        () => {
          
          alert("Message sent!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
      
        <div className="first-container-contact">
        <h1>Contact Us</h1>
            <div>Name</div>
            <input type="text" placeholder="name" name="user_name" required /><br />
            <div>Surname</div>
            <input type="text" placeholder="surname" name="user_surname" required /><br />
            <div>Email</div>
            <input type="email" placeholder="email" name="user_email" required /><br />
            <div>Phone number (prefix included)</div>
            <input
              type="text"
              placeholder="phone number"
              name="user_phone"
              required
            />
        </div><div className="message-containersecond">
        <h1 style={{opacity: 0}} id="stupidH1">Contact Us</h1>
            <div>Message</div>
            <textarea
              name="user_message"
              placeholder="message here"
              required
            ></textarea><br />
            <input type="submit" value="Send" />
        </div>
        
        
      </form>
    </>
  );
};

export default Contact;
