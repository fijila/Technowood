import React from "react";
import { Maindiv, Titlediv, Contentdiv } from "./gallery.styled";
import Navbar from "../../components/navbar/navbar";
import assets from "../../assets";

function gallery() {
	return (
		<div>
			<Navbar />

			<Maindiv>
				<Titlediv>
					<h4>Gallery</h4>
				</Titlediv>
				<Contentdiv>
					<h6>BUILD YOUR DREAMS WITH US..</h6>
					
					<img src={assets.images.galleryimage}/>
				</Contentdiv>
			</Maindiv>
		</div>
	);
}

export default gallery;




