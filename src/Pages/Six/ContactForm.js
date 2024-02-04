import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    // process.env.REACT_APP_SERVICE_ID = "service_y8ycm1s";
    // process.env.REACT_APP_TEMPLATE_ID = "template_3gx9e0d";
    // process.env.REACT_APP_PUBLIC_KEY = "9U64idXn07ZppBH-Q";

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
        .sendForm(
            "service_y8ycm1s",
            "template_3gx9e0d",
          e.target,
          "9U64idXn07ZppBH-Q"
        )
        .then(
          (result) => {
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
    };
    return (
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    );
  };
  export default ContactForm;



// service ID:
//   service_y8ycm1s

// template ID:
// template_3gx9e0d

// user ID: -----> remove
// public key:
// 9U64idXn07ZppBH-Q