import styled from "styled-components";

export const Maindiv = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	flex-direction: row;
	padding-top: 20px;
	// background-color: blue;
`;
export const Subdiv = styled.div`
	display: flex;
	padding: 10px 10px 10x 30px;
	flex-direction: column;
	margin-top: 50px;
	width: 50%;
	height: 300px;
	background-color: white;
`;
export const Formdiv = styled.div`
			display: flex;
			flex-direction: column;
			padding: 10px 20px 10px 20px;
			width: 50%;
			// height: 300px;
			// background-color: blue;
			border-left: 1px solid grey;
			form {
				// background-color: grey;
			}
			input {
				border: 1px solid red;
				text-align: center;

				@media screen and (min-width: 1200px) {
					width: 400px;
					height: 30px;
					margin: 5px;
				}
				@media (min-width: 872px) and (max-width: 1200px) {
					width: 300px;
					height: 30px;
					margin: 3px;
				}
				@media (min-width: 676px) and (max-width: 872px) {
					width: 200px;
					height: 30px;
					margin: 2px;
				}
				@media (min-width: 455px) and (max-width: 675px) {
					width: 100px;
					height: 30px;
					margin: 2px;
				}
				@media screen and (max-width: 454px) {
					width: 100px;
					height: 30px;
					margin: 2px;
					font-size: 10px;
				}
			}

			textarea {
				border: 1px solid red;
				text-align: center;
				@media screen and (min-width: 1200px) {
					width: 400px;
					height: 80px;
					margin: 5px;
				}
				@media (min-width: 872px) and (max-width: 1200px) {
					width: 300px;
					height: 70px;
					margin: 3px;
				}
				@media (min-width: 676px) and (max-width: 872px) {
					width: 200px;
					height: 60px;
					margin: 2px;
				}
				@media (min-width: 455px) and (max-width: 675px) {
					width: 100px;
					height: 50px;
					margin: 2px;
				}
				@media screen and (max-width: 454px) {
					width: 100px;
					height: 40px;
					margin: 2px;
					font-size: 10px;
				}
			}
			button {
				width: 50%;
				height: 30px;
				text-algn: center;
				margin: 5px;
				border: 1px solid red;
				background-color: red;
			}
		`;

// export const Input = styled.input`

// 				width: 80%;
// 				height: 20%;
// 				text-algn: center;
// 			border: 1px solid red;

// 		`;
export const Subdiv1 = styled.div`
	flex-direction: column;
	padding-top: 10px;
	width: 100%;
	display: flex;
	height: 50px;
	font-size: 16px;
	font-weight: bold;

	a {
		text-decoration: none;
		color:black;
	}
`;
export const Subdiv2 = styled.div`
			display: flex;
			width: 100%;
			flex-direction: column;

			height: 50px;
			font-size: 16px;
			font-weight: bold;

			a {
				text-decoration: none;
				color: black;
			}
		`;
export const Subdiv3 = styled.div`
			display: flex;
			width: 100%;
			flex-direction: column;

			height: 50px;
			font-size: 16px;
			font-weight: bold;

			a {
				text-decoration: none;
				color: black;
			}
		`;
export const Subdiv4 = styled.div`
			display: flex;
			height: 50px;
			font-size: 16px;
			width: 100%;
			flex-direction: column;

			font-weight: bold;

			a {
				text-decoration: none;
				color: black;
			}
		`;
