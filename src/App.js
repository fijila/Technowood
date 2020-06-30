import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { AppRoutes } from "./util/route.js";
// import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

function App() {
  return (
		<div className="App">
			<Router >
				<AppRoutes />
			</Router>
		</div>
  );
}

export default App;
