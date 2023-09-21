import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import{BsLinkedin} from 'react-icons/bs'
import '../contact/contact.css'
import { useRef } from "react";
import emailjs from "emailjs-com"

function Contact() {

  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_pcqp1cy",
          "template_5klhut1",
          form.current,
          "I2TM8ISvYOTYYMxiD"
        )
        e.target.reset()
    };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h4> Email</h4>
            <h5>aderemiadedamola325@gmail.com</h5>
            <a href="mailto:aderemiadedamola325@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
             <BsLinkedin/>
            <h4>linkedin</h4>
            <h5>Aderemi Israel</h5>
            <a href="mailto:aderemiadedamola325@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
           <BsWhatsapp/>
            <h4>whatsapp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+2347011866262 "
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}  >
          <input
            type="text"
            name="name"
            placeholder="your full name"
            required
          />
          <input type="email" name="email" placeholder="your Email" required />
          <textarea
            name="message"
            row="10"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary ">
            send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact
