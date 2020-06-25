import React from 'react';
import { Maindiv, Titlediv, Contentdiv } from "./clock.styled";
import Navbar from "../../components/navbar/navbar";

function clock() {
    return (
		<div>
			<Navbar />

			<Maindiv>
				<Titlediv>
					<h4>Wooden Clocks</h4>
				</Titlediv>
				<Contentdiv>
					<h6>WE ASSURE QUALITY...</h6>
					<p>
						Time is on your side.. Decorate your wall  with wooden clocks that add rustic attraction to your space. Wooden clocks as a unique piece in various styles.</p>
					<p> For beautifully handcrafted wooden clocks call ph:+91 90 48 16253 or +91 98 46 964104</p>
				</Contentdiv>
			</Maindiv>
		</div>
	);
}

export default clock;

