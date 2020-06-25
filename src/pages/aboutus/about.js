import React from 'react'
import { Maindiv, Titlediv, Contentdiv } from "./about.styled";
import Navbar from "../../components/navbar/navbar";


function about() {
    return (
		<div>
			<Navbar />

			<Maindiv>
				<Titlediv>
					<h4>About Us</h4>
				</Titlediv>
				<Contentdiv>
					<h6>BUILD YOUR DREAMS WITH US..</h6>
					<p>
						TECHNOWOOD INDUSTRIES have affordable solutions that suits most of your projects. we are well experienced over 10 years of
						wood works. our key to success is efficiency and effectiveness. we have magnificient working unit with skillfull employees. we
						can give you the impeccable service which value your quality and money.
					</p>
					<p>You can perfectly opt Technowood industries undoubtfully when ever you think about working with wood</p>
				</Contentdiv>
			</Maindiv>
		</div>
	);
}

export default about

