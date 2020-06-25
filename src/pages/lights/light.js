import React from "react";
import { Maindiv, Titlediv, Contentdiv } from "./light.styled";
import Navbar from "../../components/navbar/navbar";

function light() {
	return (
		<div>
			<Navbar />

			<Maindiv>
				<Titlediv>
					<h4>Wooden Lamps</h4>
				</Titlediv>
				<Contentdiv>
					<h6>BUILD YOUR DREAMS WITH US..</h6>
					<p>
						Wooden lamps looks very enticing and can be customized to match your home decor. We are introducing our high quality handmade
						home decor lighting available in styles to suit any space.
					</p>

					<p>Be original and your home will speak for itself. THINK WOOD, TRUST US</p>
					<p>For more information call ph:+91 90 48 16253 or +91 98 46 964104</p>
				</Contentdiv>
			</Maindiv>
		</div>
	);
}

export default light;
