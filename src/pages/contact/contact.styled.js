import styled from "styled-components";
export const Maindiv = styled.div`
			display: flex;
			flex-direction: column;

			width: 430px;
			margin: 100px;
			height: 400px;

			@media screen and (min-width: 1200px) {
				margin: 100px;
			}
			@media (min-width: 872px) and (max-width: 1200px) {
				margin: 40px;
			}
			@media (min-width: 676px) and (max-width: 872px) {
				margin: 10px;
			}
			@media (min-width: 455px) and (max-width: 675px) {
				margin: 5px;
			}
			@media screen and (max-width: 454px) {
				margin: 2px;
				font-size: 10px;
			}
		`;
export const Titlediv = styled.div`
			display: flex;
			width: 400px;
			height: 30px;
			font-weight: bold;
			font-size: 24px;
			text-align: center;
			font-family: "Lucida Console", Monaco, monospace;
		`;


export const Contactdiv = styled.div`
			display: flex;
			height: 400px;
			width: 400px;
			margin-right: 500px;

			form {
				background-color: #ccc;
				padding: 10px;
				border-radius: 10px;
			}

			input {
				text-align: center;
				border-radius: 10px;
				border: none;

				@media screen and (min-width: 1200px) {
					width: 400px;
					height: 40px;
					margin: 5px;
				}
				@media (min-width: 872px) and (max-width: 1200px) {
					width: 300px;
					height: 30px;
					margin: 3px;
				}
				@media (min-width: 676px) and (max-width: 872px) {
					width: 300px;
					height: 30px;
					margin: 2px;
				}
				@media (min-width: 455px) and (max-width: 675px) {
					width: 300px;
					height: 30px;
					margin: 2px;
				}
				@media screen and (max-width: 454px) {
					width: 200px;
					height: 30px;
					margin: 2px;
					font-size: 10px;
				}
			}

			textarea {
				border: 1px solid red;
				text-align: center;
				flex-wrap: no-wrap;
				flex-direction: column;
				text-align: center;
				border-radius: 10px;
				border: none;
				@media screen and (min-width: 1200px) {
					width: 400px;
					height: 80px;
					margin: 5px;
				}
				@media (min-width: 872px) and (max-width: 1200px) {
					width: 400px;
					height: 70px;
					margin: 3px;
				}
				@media (min-width: 676px) and (max-width: 872px) {
					width: 300px;
					height: 60px;
					margin: 2px;
				}
				@media (min-width: 455px) and (max-width: 675px) {
					width: 300px;
					height: 50px;
					margin: 2px;
				}
				@media screen and (max-width: 454px) {
					width: 200px;
					height: 40px;
					margin: 2px;
					font-size: 10px;
				}
			}
			button {
				height: 30px;
				width: 100px;
				margin: 5px;
				border-radius: 10px;
				text-align: center;
				align-self: center;
				border: none;
				background-color: #ffc300;
			}
		`;
