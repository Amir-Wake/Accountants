import React from 'react'
import './Cards.css';
import First from './icons/image1.png';
import Second from './icons/image2.png';
import Third from './icons/image3.png';
import Fourth from './icons/image4.png';
import Fifth from './icons/image5.png';
import Sixth from './icons/image6.png';


function Cards() {
  const Cardsdata=[
    {
      title: "Bookkeeping Services",
      description: "Our bookkeeping services help you manage your financial records accurately and efficiently, keeping track of all your business transactions, reconciling bank statements, and generating detailed financial reports.",
      urls: First,
    },
    {
      title: "Tax Preparation and Planning",
      description: "We can help you with tax preparation and planning services, including filing tax returns, calculating tax liabilities, and providing tax planning advice to minimize your tax burden and maximize your deductions.",
      urls: Second,
    },
    {
      title: "Financial Statement Preparation",
      description: "Our financial statement preparation services can help you create clear and concise financial reports that accurately reflect the financial health of your business, including income statements, balance sheets, and cash flow statements.",
      urls: Third,
    },    {
      title: "Payroll Services",
      description: "We can help you manage your payroll processes, including calculating employee salaries and wages, processing payroll taxes, and generating pay stubs and other necessary documents.",
      urls: Fourth,
    },
    {
      title: "Auditing Services",
      description: "Our auditing services provide an independent and objective evaluation of your financial statements, internal controls, and accounting processes, giving you a comprehensive understanding of your business's financial position.",
      urls: Fifth,
    },
    {
      title: "Business Consulting",
      description: "We offer business consulting services to help you make informed decisions that drive your business's growth and success. Our services include financial analysis, budgeting and forecasting, and strategic planning.",
      urls: Sixth,
    },
  ]
  return (
  <div className='Card-Container' id='service'>
    <section className='contain'>
        <h1> Our Services</h1>
     <div className='cards'>
    {
    Cardsdata.map((cards, index) => (
      <div key={index} className='card'>
        <img src={cards.urls} alt={index}/>
        <h3 className='card-title'> {cards.title}</h3>
        <p className='card-detail'>{cards.description}</p>
      </div>
     ))}

     </div>
    </section>
  </div>
  )
}

export default Cards;