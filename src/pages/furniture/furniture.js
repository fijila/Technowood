import React from "react";
import { Maindiv, Titlediv, Contentdiv } from "./furniture.styled";
import Navbar from "../../components/navbar/navbar";

function furniture() {
	return (
		<div>
			<Navbar />

			<Maindiv>
				<Titlediv>
					<h4>Furniture</h4>
				</Titlediv>
				<Contentdiv>
					<h6>WE ASSURE YOUR MEASUREMENTS...</h6>

					<p>
						Increase your room space by customised furniture that gives a new look. We are  giving more importance in making high quality
						handmade furniture. Every new furniture design starts with a basic concept, or idea. A furniture designer then creates a
						drawing of this idea using traditional and modern methods. They will often sketch their designs on paper first, for instance.
					</p>
					<p>
						Choose from our range of stylish Sofas or Corner Sofas, Lounge Furniture, Bed and Bedroom Furniture, Dining Suites and Storage
						solutions
					</p>
					<p>For more information call ph:+91 90 48 16253 or +91 98 46 964104</p>
				</Contentdiv>
			</Maindiv>
		</div>
	);
}

export default furniture;
