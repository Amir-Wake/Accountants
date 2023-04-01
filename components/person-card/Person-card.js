import React from 'react'
import './Person-card.css';
import Second from './images/image1.jpg';


function Cards() {
  const Cardsdata=[
    {
      title: "Jason Patel",
      description: "Jason is a chartered accountant (CA) with a specialization in financial reporting and analysis. He has a Bachelor's degree in Commerce from the University of Mumbai and a Master's degree in Accounting from the University of Toronto. Jason has worked with several multinational corporations and has experience in financial modeling and forecasting. He enjoys staying up to date on the latest accounting standards and regulations. In his free time, Jason likes to play tennis and watch documentaries.",
      urls: Second,
    },
  ]
  return (
  <div className='team-Container' id='team'>
    <section className='team-contain'>
        <div className='team-header'>
        <h3> MEET</h3>
        <h1> Our Team</h1>
        </div>
     <div className='teams'>
    {
    Cardsdata.map((cards, index) => (
      <div key={index} className='team'>
        <div className='team-info'>
        <h3 className='team-title'> {cards.title}</h3>
        <p className='team-detail'>{cards.description}</p>
        </div>
        <div className='team-image'>
        <img src={cards.urls} alt={index}/>
        </div>
      </div>
     ))}

     </div>
    </section>
  </div>
  )
}

export default Cards;