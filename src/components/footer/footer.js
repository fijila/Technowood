import React from "react";
import { MainDiv, SubDiv, SubDivItem, Formdiv, Input } from "./footer.styled";
import { useForm } from "react-hook-form";

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
					<a href="./about">About Us</a>
				</SubDivItem>
				<SubDivItem>
					<a href="">Trends</a>
				</SubDivItem>
				<SubDivItem>
					<a href="./gallery">Gallery</a>
				</SubDivItem>
				<SubDivItem>
					<a href="./contact"> Contact Us</a>
				</SubDivItem>
			</SubDiv>
			<Formdiv>{showForm}</Formdiv>
		</MainDiv>
	);
}
