import React from 'react'
import Section from '../components/Section'
import { Button } from 'rebass'

const Contact = () => (
  <Section.Container id="contact">
    <Section.Header name="Contact me" icon="🙋‍♂️" label="person" />
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6" />
      </div>
      <div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  </Section.Container>
)

export default Contact
