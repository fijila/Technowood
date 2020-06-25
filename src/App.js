import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./util/route.js";
import Banner from './components/banner/banner'
import Navbar from "./components/navbar/navbar";
import Slider from "./components/slider/slider";
import Footer from "./components/footer/footer";
import './App.css';

function App() {
  return (
		<div className="App">
			<Router>
				<AppRoutes />
			</Router>
		</div>
  );
}

export default App;
