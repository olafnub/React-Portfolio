import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pp8c368', 'template_7ab464e', form.current, 'nqOalg-OE0STSEQBA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="sumbit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact