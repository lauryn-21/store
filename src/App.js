import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Header1 from './components/Header1';
import Image1 from './components/Image1';
import Image from './components/Image';
function App() {
  const counter= useSelector((state)=>state.counter)
  const dispatch= useDispatch();
  const increment=()=>{dispatch({type:'INC'});};
  const decrement=()=>{dispatch({type:'DEC'});};
  const addby=()=>{dispatch({type:'ADD',payload :10});};

  return (
    <div className="App">
      

      <BrowserRouter>
      <Navbar />
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addby}>Add by 10</button>
      {/* <Header/>
      <Image/>
      <Header1/>
      <Image1/> */}
      <Footer/>
      <Routes>
        <Route path='navbar' element={Navbar} />
        {/* <Route path='header' element={Header} />
        <Route path='header1' element={Header1} />
        <Route path='image' element={Image} />
        <Route path='image' element={Image1} /> */}
        <Route path='footer' element={Footer} />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
