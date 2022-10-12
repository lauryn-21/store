import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Header1 from './components/Header1';
import Image1 from './components/Image1';
import Image from './components/Image';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Header/>
      <Image/>
      <Header1/>
      <Image1/>
      <Footer/>
      <Routes>
        <Route path='navbar' element={Navbar} />
        <Route path='header' element={Header} />
        <Route path='header1' element={Header1} />
        <Route path='image' element={Image} />
        <Route path='image' element={Image1} />
        <Route path='footer' element={Footer} />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
