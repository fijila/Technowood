import styled from "styled-components";

export const Maindiv = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	flex-direction: row;
	padding-top:20px;
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
			// display: flex;
			// flex-direction: column;
			padding: 10px 20px 10px 20px;
			width: 50%;
			height: 300px;
			// background-color: blue;
			border-left: 1px solid grey;
			form {
				// background-color: grey;
			}
			input {
				max-width: 500px;
				min-width: 300px;
				min-height: 50px;
				max-height: 100px;
				border: 1px solid red;
			}

			textarea {
				max-width: 500px;
				min-width: 300px;
				min-height: 50px;
				max-height: 100px;

				text-algn: center;
				margin: 5px;
				border: 1px solid red;
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
	}
`;
