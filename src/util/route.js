import React from "react";

import {
	// HashRouter,
	Route,
	Redirect,
	Switch,
	// browserHistory
} from "react-router-dom";
import { createHashHistory } from "history";

import { BrowserRouter as Router } from "react-router-dom";
import contact from "../pages/contact/contact";
import home from "../pages/home/home";
import about from "../pages/aboutus/about";
import light from "../pages/lights/light";
import clock from "../pages/clocks/clock";
import tile from "../pages/tiles/tile";
import furniture from "../pages/furniture/furniture";
import gallery from "../pages/gallery/gallery";


const history = createHashHistory();
history.listen((location, action) => {
	console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
	console.log(`The last navigation action was ${action}`);
});
export const AppRoutes = () => {
	return (
		<Router history={createHashHistory()}>
			<Switch>
				<Route  path="/Home" component={home} />
				<Route path="/contact" component={contact} />
				<Route  path="/about" component={about} />
				<Route path="/tile" component={tile} />
				<Route  path="/light" component={light} />
				<Route path="/furniture" component={furniture} />
				<Route path="/clock" component={clock} />
				<Route path="/gallery" component={gallery} />

				{/* <Route component={MessageContainer} /> */}
				<Route path="/" render={() => <Redirect to="/home" />} />
			</Switch>
		</Router>
	);
};
  