import styled from "styled-components";
export const Container = styled.div`
			display: flex;
			width: 100%;
			flex-direction: column;
			padding-bottom: 10px;
			height: 500px;
			position: inline;
			@media (min-width: 676px) and (max-width: 872px) {
				padding-bottom: 0.7rem;
				margin-bottom: 10px;
				height: 450px;
			}
			@media (min-width: 455px) and (max-width: 675px) {
				padding-bottom: 0.7rem;
				margin-top: 30px;
				height: 400px;
			}
			@media screen and (max-width: 454px) {
				height: 350px;
				margin-top: 30px;
			}
		`;

export const Maindiv = styled.div`
	width: 100%;
	height: 280px;
	background-color: black;
	display: flex;
	flex-direction: column;
`;
export const Titlediv = styled.div`
			display: flex;
			width: 100%;
			height: 30px;
			padding-left: 30px;
			background-color: #ffc300;
			font-weight: bold;
			font-size: 20px;
			text-align: center;
			font-family: "Lucida Console", Monaco, monospace;
		`;

export const Sliderdiv = styled.div`
	display: flex;
	width: 100%;
	// background-color: black;
	height: 250px;
`;
