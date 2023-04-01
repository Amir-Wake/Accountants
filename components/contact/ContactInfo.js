import React from 'react'
import Call from './icons/call.svg'
import Email from './icons/email.svg'
import Address from './icons/address.svg'
import './Contact.css'

function Contactinfo() {
  return (
    <div className='contact-info'>
        <div className='container'>
          <div className='infocontainer'>
        <div className='box'>
        <img src={Address} />
        <h3>Address</h3>
        <p>376 Langsett Rd, <br/> Sheffield<br/>United Kingdom<br/> S6 2UG</p>
            </div>
            <div className='box'>
            <img src={Email} /> 
             <h3>Email</h3>
            <p>test@test.com</p>
            </div>
            <div className='box'>
            <img src={Call} />                
            <h3>Phone Num.</h3>
            <p>07807800000</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contactinfo;