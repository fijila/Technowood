import styled from "styled-components";
export const Maindiv = styled.div`
			display: flex;
			flex-direction: column;
			margin: 0.7rem;
		`;
export const Titlediv = styled.div`
			padding:10px 0px;
            font-weight: bold;
			font-size: 24px;
			text-align: center;
            font-family: "Lucida Console", Monaco, monospace;
		`;
export const Contactdiv = styled.div`
			display: flex;
			margin: 0.7rem;
			justify-content: center;

			form {
				display: flex;
				flex: 0 1 auto;
				width: 50%;
				flex-direction: column;
				background-color: #ccc;
				padding: 10px;
				justify-content: center;
				border-radius: 10px;
				@media (min-width: 455px) and (max-width: 675px) {
					width: 100%;
				}
				@media screen and (max-width: 454px) {
					width: 100%;
				}
			}

			input {
				text-align: center;
				border-radius: 10px;
				border: none;
				margin: 0.5rem;
				height: 40px;
				width: 90%;
			}

			textarea {
				text-align: center;
				width: 90%;
				justify-content: center;
				border-radius: 10px;
				border: none;
				margin: 0.5rem;
				height: 100px;
			}
			button {
				height: 30px;
				width: 100px;
				margin: 5px;
				border-radius: 10px;
				text-align: center;
				align-self: center;
				border: none;
				background-color: #222;
				color: #fff;
			}
		`;
