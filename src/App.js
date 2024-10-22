import './App.css';
import Navbarr from './components/Navbarr';
import BoutiqueList from './components/BoutiqueList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import Promos from './components/Promos';
import Productspromo from './components/Productspromo';
import { useState } from 'react';
import Rate from './components/Rate';
import Productpromo1 from './components/Productpromo1';
import User from './components/User';
import Livraison from './components/Livraison';
import Presentation from './components/Presentation';
import Notification from './components/Notification';


function App() {
  const [text, setText] = useState("")
       const [rate, setRate] = useState ("")
  return (
    <div className="App">
       
      <Navbarr setText={setText} setRate={setRate} />


      <Carrousel />


      <Routes>
        <Route path="/" element={ <BoutiqueList text={text} rate={rate}/>} />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/promos" element={ <Promos/> } />
        <Route path="/productpromo" element={ <Productspromo/> } />
        <Route path="/productpromo1" element={ <Productpromo1/> } />
        <Route path="/livraison" element={ <Livraison/> } />
        <Route path="/presentation" element={ <Presentation/> } />
        <Route path="/notification" element={ <Notification/> } />



      </Routes>


  
      <Footer />
    </div>
  );
}

export default App;
