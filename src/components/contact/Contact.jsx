import React from 'react'
import './contact.css'
import {MdMarkEmailRead} from 'react-icons/md'
import {IoLogoInstagram} from 'react-icons/io'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdMarkEmailRead className='contact_option-icon' />
            <h4>Email</h4>
            <h5>manavmehta0226@gmail.com</h5>
            <a href="https://mail.google.com/mail/u/manavmehta0226@gmail.com" target="blank">Send an Email</a>
          </article>

          <article className='contact_option'>
            <IoLogoInstagram className='contact_option-icon' />
            <h4>Message</h4>
            <h5>Manav_262</h5>
            <a href="https://www.instagram.com/manav_262/" target="blank">Send a Message</a>
          </article>

          <article className='contact_option'>
            <FaWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>Click Me</h5>
            <a href="https://api.whatsapp.com/send?phone=9767605149" target="blank">Send an WhatsApp</a>
          </article>

        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Messgae' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section >
  )
}

export default Contact