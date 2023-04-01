import React from 'react'
import './Contact.css'
import { useRef,useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // send message to emailj
  const [formStatus, setFormStatus] = React.useState('Send')
  const form = useRef();
  
  //Set and clear the input form
  const [nameValue, setnameValue] = useState("");
  const nameInput = (e) => setnameValue(e.target.value);
  const nameClear = () => {
    setnameValue("");
  };
  const [emailValue, setemailValue] = useState("");
  const emailInput = (e) => setemailValue(e.target.value);
  const emailClear = () => {
    setemailValue("");
  };
  const [messageValue, setmessageValue] = useState("");
  const messageInput = (e) => setmessageValue(e.target.value);
  const messageClear = () => {
    setmessageValue("");
  };

  // Send email to emailj
  const sendEmail = (e) => {
    e.preventDefault();
    nameClear();
    emailClear();
    messageClear();
    emailjs.sendForm('service_h1qmges', 'template_b4jp8ri', form.current, 'ST9tq16vYOvNkebVJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <div className="container">
      <h2 className="mb-3">Assistance Request</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label " htmlFor="name" >
            Name
          </label>
          <input className="form-control w-75" type="text" value={nameValue} id="name" onChange={nameInput} name="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" value={emailValue} id="email"onChange={emailInput} name="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" rows='8' value={messageValue} id="message" onChange={messageInput} name="message" required />
        </div>
        <button className="btn btn-danger w-50" type="submit" onClick={() => {
    alert('Your enquiry have sent!');}}>
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm