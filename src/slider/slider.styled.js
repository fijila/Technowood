import styled from "styled-components";
export const Container = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	padding-bottom: 10px;
	height: 500px;
	background-color: blue;
	position: inline;
	@media (min-width: 676px) and (max-width: 872px) {
		padding-bottom: 0.7rem;
		margin-bottom: 10px;
		height: 450px;
	}
	@media (min-width: 455px) and (max-width: 675px) {
		padding-bottom: 0.7rem;
		margin-top: 10px;
		height: 400px;
	}
	@media screen and (max-width: 454px) {
		height: 350px;
	}
`;

export const Maindiv = styled.div`
	width: 100%;
	height: 280px;
	background-color: grey;
	display: flex;
	flex-direction: column;
`;
export const Titlediv = styled.div`
display:flex;
width:100%;
height:30px;
font family:
`;

export const Sliderdiv = styled.div`
	display: flex;
	width: 100%;
	background-color: black;
	height: 250px;
`;
