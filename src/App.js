import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Footer/>
      <Routes>
        <Route path='/' element={Navbar} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
