import React,{useState}from "react";
import { Maindiv, Subdiv, Subdiv1, Subdiv2, Subdiv3, Subdiv4, Formdiv,Input } from "./footer.styled";
import {useForm} from "react-hook-form";


export default function Footer() {
		
const { register } = useForm();
  const showForm = (
    <form method="post">
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          ref={register}
        />
      </label>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          ref={register}
        />
      </label>
      <label htmlFor="question">
        <textarea
          ref={register}
          name="question"
          id="question"
          rows="3"
          placeholder="Say something"
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
	return (
		<Maindiv>
			<Subdiv>
				<Subdiv1>
					<a href="">About Us</a>
				</Subdiv1>
				<Subdiv2>
					<a href="">Trends</a>
				</Subdiv2>
				<Subdiv3>
					<a href="">Gallery</a>
				</Subdiv3>
				<Subdiv4>
					<a href=""> Contact Us</a>
				</Subdiv4>
			</Subdiv>
			<Formdiv>{showForm}</Formdiv>
		</Maindiv>
	);
	
}

