import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Carousel/>
      <Footer/>
      <Routes>
        <Route path='navbar' element={Navbar} />
        <Route path='carousel' element={Carousel} />
        <Route path='footer' element={Footer} />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
