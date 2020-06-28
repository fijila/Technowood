import styled from "styled-components";

export const MainNav = styled.div`
	display: flex;
	margin-bottom: 20px;
	flex-direction: column;
	background-color: #000000;
`;
export const HeaderDiv = styled.div`
	background-color: #000000;
`;
export const HeaderContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Search = styled.div`
	display: flex;
	padding: 5px 0px;
	flex-direction: row;
`;
export const Img = styled.img`
	padding: 5px 0;
	max-width: 15vw;
`;

export const Input = styled.input`
	height: 30px;
	margin-right: 10px;
	border-radius:10px;
	text-align:center;
	border:none;
`;
export const Button = styled.button`
			height: 30px;
			text-align: center;
			border-radius: 10px;
			background-color: #ffc300;
			border:none;
		`;

export const LinkDiv = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 2px;
	justify-content: space-between;
	`;

export const SubLink = styled.div`
			display: flex;
			padding: 10px 0px;
			flex: 1 1 auto;
			text-align:center;
			justify-content:center;
            border-right: 3px solid #fff;
			font-weight: bold;
			color: #000000;
			background-color: #f3f3f3;
			dispaly: flex;
			a {
				color: brown;
			}
			&:hover {
				a {
					color: black;
				}
				background-color: #fff;
			}
		`;
