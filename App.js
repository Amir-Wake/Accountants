import './App.css';
import Navbartop from './components/nav/NavbarTop'
import MainSlide from './components/Main-slide/MainSlide'
import Cards from './components/cards/Cards'
import PersonCard from './components/person-card/Person-card'
import Contact from './components/contact/Contact'
import FooterBottom from './components/footer/FooterBottom'

function App() {
  return (
    <>
    <div className='navbartop'><Navbartop /></div>
    <div className='mainslide'><MainSlide /></div>
    <div className='cardservice'><Cards /> </div>
    <div className='personcard'><PersonCard/></div>
    <div className='contact'><Contact/></div>
    <div className='footerbottom'><FooterBottom/></div>
    
    </>
  );
}

export default App;
