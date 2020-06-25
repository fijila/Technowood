import React from "react";
import { Maindiv, Titlediv, Contentdiv } from "./tile.styled";
import Navbar from "../../components/navbar/navbar";

function tiles() {
	return (
		<div>
			<Navbar />

			<Maindiv>
				<Titlediv>
					<h4>Wooden Tiles</h4>
				</Titlediv>
				<Contentdiv>
					<h6>BUILD YOUR DREAMS WITH US..</h6>
					<p>
						Are you looking to add a modern, unique and characterful style to the inside or outside of your home, shops or restaurant.
						Wooden tiles have a strong environmental benefits , eco-friendly and it is a sustainable building material.
					</p>
					<p>THINK WOOD, TRUST US. Woods are never solitary, they are full of whispering and friendly life</p>
					<p>For more information call ph:+91 90 48 16253 or +91 98 46 964104</p>
				</Contentdiv>
			</Maindiv>
		</div>
	);
}

export default tiles;
