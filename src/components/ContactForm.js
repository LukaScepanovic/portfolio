import React from 'react'

export default function ContactForm() {
  return (
    <section className="contactme" id="contactme">
      <h1 className="title">Contact Me</h1>

      <form name="contact" action="/contact" method="post">
        <div className="wrapper">
          <div className="contact-form">
            <div className="input-fields">
              <input type="hidden" name="form-name" value="contact"/>
              <input required type="text" name="name" className="input" placeholder="Name" />
              <input required type="text" name="email" className="input" placeholder="Email" />
              <input type="text" name="phone" className="input" placeholder="Phone" />
              <input type="text" name="subject" className="input" placeholder="Subject" />
            </div>
            <div className="msg">
              <textarea required name="message" placeholder="Message" ></textarea>/
              <div className="btn-primary">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
