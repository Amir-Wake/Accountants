import React from 'react'
import './Contact.css'
import ContactForm from './ContatcForm'
import Contactinfo from './ContactInfo'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Contact() {
  return (
    <div className='contact-container' id="contact">
        <div className='contact-content'>
      <section className="section-title">
      <p>GET IN TOUCH</p>
      <h2>Contact Us</h2>
    </section>
    <div >
    <Container className=''>
      <Row className="mb-5 mt-1">
      <Col lg="4" className="col1">
         <div className='contact-info '>
         <Contactinfo/>
         </div>
         </Col>
     <Col lg="8" className="col2">
         <div className='contact-form'>
        <ContactForm/>
        </div>
         </Col>

      </Row>
    </Container>
    </div>
    </div>
    </div>
  )
}

export default Contact