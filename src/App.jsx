import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      <Footer />
      </BrowserRouter>



    </>
  );
}

export default App;
