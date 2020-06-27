import styled from "styled-components";

export const MainDiv = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 1.2rem;
	background-color: #f3f3f3;
	margin: 0.5rem;
	@media (min-width: 455px) and (max-width: 675px) {
		flex-wrap: wrap;
		flex-direction: column-reverse;
	}
	@media screen and (max-width: 454px) {
		flex-wrap: wrap;
		flex-direction: column-reverse;
	}
`;
export const SubDiv = styled.div`
			display: flex;
			align-items: center;
			flex: 1 1 auto;
			flex-direction: column;
			width: 50%;
			@media (min-width: 455px) and (max-width: 675px) {
				width:100%;
			}
			@media screen and (max-width: 454px) {
				width:100%;
			}
		`;
export const Formdiv = styled.div`
			display: flex;
			flex-direction: column;
			width: 50%;
			flex: 1 1 auto;
			align-items: center;
			@media (min-width: 455px) and (max-width: 675px) {
				width: 100%;
			}
			@media screen and (max-width: 454px) {
				width: 100%;
			}

			form {
				background-color: #ccc;
				display: flex;
				padding: 10px;
				width: 90%;
				margin-bottom:10px;
				flex-direction: column;
				justify-content: center;
				@media (min-width: 455px) and (max-width: 675px) {
					width: 100%;
				}
				@media screen and (max-width: 454px) {
					width: 100%;
				}
			}
			input {
				width: 90%;
				height: 30px;
				border-radius: 10px;
				text-align: center;
				border: none;
				@media screen and (max-width: 454px) {
					font-size: 10px;
				}
			}
			textarea {
				width: 90%;
				text-align: center;
				border-radius: 10px;
				border: none;
				@media screen and (max-width: 454px) {
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
				background-color: #222;
				color: #fff;
			}
		`;

export const SubDivItem = styled.div`
			font-size: 16px;
			font-weight: bold;
			padding: 8px 0;
			a {
				text-decoration: none;
				color: black;
			}
		`;
