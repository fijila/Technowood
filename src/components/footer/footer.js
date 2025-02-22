import React from "react";
import { MainDiv, SubDiv, SubDivItem, Formdiv} from "./footer.styled";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function Footer() {
	const { register } = useForm();
	const showForm = (
		<form method="post">
			<label htmlFor="name">
				<input type="text" name="name" id="name" placeholder="Enter your name" ref={register} />
			</label>
			<label htmlFor="email">
				<input type="email" name="email" id="email" placeholder="your@email.address" ref={register} />
			</label>
			<label htmlFor="question">
				<textarea ref={register} name="question" id="question" rows="3" placeholder="Say something" />
			</label>
			<button type="submit">Send</button>
		</form>
	);
	return (
		<MainDiv>
			<SubDiv>
				<SubDivItem>
					<Link to="./about">About Us</Link>
				</SubDivItem>
				<SubDivItem>
					<Link to="">Trends</Link>
				</SubDivItem>
				<SubDivItem>
					<Link to="./gallery">Gallery</Link>
				</SubDivItem>
				<SubDivItem>
					<Link to="./contact"> Contact Us</Link>
				</SubDivItem>
			</SubDiv>
			<Formdiv>{showForm}</Formdiv>
		</MainDiv>
	);
}
