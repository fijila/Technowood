import React from 'react';
import logo from './logo.svg';
import Banner from './banner/banner'
import Navbar from './navbar/navbar';
import gallery from './gallery/gallery';
import Slider from './slider/slider';
import Footer from './footer/footer';
import SignupForm from "./signup/SignupForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Slider/>
      <Footer/>
      
    </div>
  );
}

export default App;
