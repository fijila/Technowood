import React from "react";
import { Contactdiv,Titlediv,Maindiv } from "./contact.styled";
import Navbar from "../../components/navbar/navbar";

import { useForm } from "react-hook-form";

function Contact() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<div>
			<Navbar />
			<Maindiv>
				<Titlediv>
					<h5>Contact Us</h5>
				</Titlediv>
				<Contactdiv>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input type="text" placeholder="First name" name="First name" ref={register({ required: true, maxLength: 80 })} />
						<input type="text" placeholder="Last name" name="Last name" ref={register({ required: true, maxLength: 100 })} />
						<input type="text" placeholder="Email" name="Email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
						<input
							type="tel"
							placeholder="Mobile number"
							name="Mobile number"
							ref={register({ required: true, minLength: 6, maxLength: 12 })}
						/>
						<label htmlFor="question">
							<textarea ref={register} name="question" id="question" rows="3" placeholder="Say something" />
						</label>
						<input type="submit" />
					</form>
				</Contactdiv>
			</Maindiv>
		</div>
	);
}

export default Contact;
