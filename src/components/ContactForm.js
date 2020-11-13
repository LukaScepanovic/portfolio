import React from 'react'

export default function ContactForm() {
    return (
        <div className="contactme" id="contactme">
        <h1 className="title">Contact Me</h1>
        <form name="contact" method="POST" data-netlify="true">
          <div className="wrapper">
            <div className="contact-form">
              <div className="input-fields">
                <input type="text" name="name" className="input" placeholder="Name" />
                <input type="text" name="email" className="input" placeholder="Email" />
                <input type="text" name="phone" className="input" placeholder="Phone" />
                <input type="text" name="subject" className="input" placeholder="Subject" />
              </div>
              <div className="msg">
                <textarea placeholder="Message" defaultValue={""} />
                <div className="btn-primary">
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div></form>
      </div>
    )
}
