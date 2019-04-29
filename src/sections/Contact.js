import React from 'react'
import Section from '../components/Section'
import styled from 'styled-components'
import postcardbackground from './../images/retro_postcard_opt.svg'

const MEDIA_QUERY_SMALL = '@media (max-width: 750px)'

const Form = styled.form`
  position: relative;
  width: 740px;
  height: 498px;
  margin: 0 auto;
  background: #ffffff url(${postcardbackground}) no-repeat;
  ${MEDIA_QUERY_SMALL} {
    width: auto;
    height: auto;
    margin: 0 0;
    background: #ffffff;
  }
`

const FromContainer = styled.div`
  position: absolute;
  left: 398px;
  top: 230px;
  ${MEDIA_QUERY_SMALL} {
    position: absolute;
    left: 20px;
    top: 20px;
  }
`

const ReplyContainer = styled.div`
  position: absolute;
  left: 390px;
  top: 285px;
  ${MEDIA_QUERY_SMALL} {
    position: absolute;
    left: 20px;
    top: 50px;
  }
`

const MessageContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 70px;
  ${MEDIA_QUERY_SMALL} {
    position: absolute;
    left: 20px;
    top: 100px;
  }
`

const Label = styled.label`
  font-size: 1em;
  font-family: Special Elite, sans-serif;
`

const Input = styled.input`
  font-size: 1em;
  font-family: Patrick Hand, sans-serif;
  border: none;
  padding: 0 10px;
  margin: 0;
  width: 240px;
  background: none;
  height: 2.5em;
  vertical-align: middle;
  &:focus {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    outline: none;
  }
`

const TextArea = styled.textarea`
  font-size: 1em;
  font-family: Patrick Hand, sans-serif;
  border: none;
  padding: 0 10px;
  margin: 0;
  width: 240px;
  background: none;
  display: block;
  padding: 10px;
  margin: 10px 0 0 -10px;
  width: 340px;
  height: 360px;
  resize: none;
  overflow: auto;
  ${MEDIA_QUERY_SMALL} {
    height: 200px;
  }
  &:focus {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    outline: none;
  }
`

const SendButton = styled.button`
  position: absolute;
  left: 440px;
  top: 400px;
  padding: 5px;
  font: bold 0.8em sans-serif;
  border: 2px solid #333;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  -webkit-transform: rotate(-1.5deg);
  -moz-transform: rotate(-1.5deg);
  -ms-transform: rotate(-1.5deg);
  -o-transform: rotate(-1.5deg);
  transform: rotate(-1.5deg);
  ${MEDIA_QUERY_SMALL} {
    position: absolute;
    left: 20px;
    top: 340px;
    margin-bottom: 100px;
  }
  &:after {
    content: ' >>>';
  }
  &:hover {
    outline: none;
    background: #000;
    color: #fff;
  }
  &:focus {
    outline: none;
    background: #000;
    color: #fff;
  }
`

const Contact = () => (
  <Section.Container id="contact">
    <Section.Header name="Contact me" />
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <FromContainer>
        <Label htmlFor="name">from:</Label>
        <Input type="text" name="name" id="name" placeholder="your name" />
      </FromContainer>
      <ReplyContainer>
        <Label htmlFor="email">reply:</Label>
        <Input type="text" name="email" id="email" placeholder="your email" />
      </ReplyContainer>
      <MessageContainer>
        <Label htmlFor="message">Your message:</Label>
        <TextArea
          name="message"
          id="message"
          rows="6"
          cols="22"
          placeholder="write here"
        />
      </MessageContainer>
      <div>
        <SendButton type="submit" bg="primary_dark">
          Send Message
        </SendButton>
      </div>
    </Form>
  </Section.Container>
)

export default Contact
