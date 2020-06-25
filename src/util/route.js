import React from "react";

import {
	//HashRouter,
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
				<Route exact path="/home" component={home} />
				<Route exact path="/contact" component={contact} />
				<Route exact path="/about" component={about} />
				<Route exact path="/tile" component={tile} />
				<Route exact path="/light" component={light} />
				<Route exact path="/furniture" component={furniture} />
				<Route exact path="/clock" component={clock} />
				<Route exact path="/gallery" component={gallery} />

				{/* <Route component={MessageContainer} /> */}
				<Route exact path="/" render={() => <Redirect to="/home" />} />
			</Switch>
		</Router>
	);
};
  