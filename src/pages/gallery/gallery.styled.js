import styled from "styled-components";

export const Maindiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	height: 500px;
	// background-color:black;
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
	width: 100%;
	height: 40px;
	background-color: #ffc300;
	padding: 3px;
	font-weight: bold;
	font-size: 20px;
	text-align: center;
	font-family: "Lucida Console", Monaco, monospace;
`;
export const Contentdiv = styled.div`
	flex-direction: column;
	display: flex;
	width: 100%;
	height: 450px;
	padding: 5px;
	text-align: justify;
	font-family: "Lucida Console", Monaco, monospace;

	// background-color: yellow;
	h6 {
		font-weight: bold;
	}
`;
