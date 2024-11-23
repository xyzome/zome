import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import About from './components/About'
import Common from './services/Common'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from './images/logo.png'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/service' element={<Common />} ></Route>

        </Routes>
      <Footer />
        <FloatingWhatsApp phoneNumber='8657655887' darkMode={true} accountName='Zome' avatar={logo} />
      </BrowserRouter>




    </>
  );
}

export default App;
