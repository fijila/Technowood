import styled from "styled-components";

export const MainNav = styled.div`
			display: flex;
			width: 100%;
			flex-direction: column;
			background-color: #000000;
			@media screen and (min-width: 872px) {
				padding-top: 10px;
				height: 80px;
				border-bottom: 1px solid #fff;
				justify-content: center;
				width: 100%;
				text-align: center;
				display: flex;
			}
			@media (min-width: 676px) and (max-width: 872px) {
				height: 75px;
				display: flex;

				padding-top: 10px;
				margin-bottom: 1px;
			}
			@media screen and (max-width: 454px) {
				padding-top: 10px;
				height: 70px;
				justify-content: center;
				display: flex;

				margin-bottom: 1px;
			}
			@media (min-width: 455px) and (max-width: 675px) {
				padding-top: 10px;
				height: 70px;
				display: flex;

				width: auto;
				border: none;
			}
		`;
export const Img = styled.img`
			display: flex;
			@media screen and (min-width: 872px) {
				justify-content:start;
				padding: 0px 100px 0px 10px;

			}
		`;

export const Search = styled.div`
			display: flex;
			height: 45px;
			flex-direction: row;
			padding-bottom:5px;

			@media screen and (min-width: 872px) {
				justify-content: center;

				width: 100%;
			}
			@media (min-width: 676px) and (max-width: 872px) {
				justify-content: center;
				width: 100%;
			}
			@media (min-width: 455px) and (max-width: 675px) {
				justify-content: center;
				width: 100%;
			@media screen and (max-width: 454px) {
				padding:0px 5px;
				text-align:center;
				justify-content: center;

			}
		`;
export const Input = styled.input`
			display: flex;
			height: 40px;
			justify-content: center;

			max-width: 60%;
			min-width: calc(100% - 510px);

			@media screen and (min-width: 872px) {
				justify-content: center;
			}
			@media (min-width: 676px) and (max-width: 872px) {
				justify-content: center;
			}
			@media (min-width: 455px) and (max-width: 675px) {
				justify-content: center;
			}
			@media screen and (max-width: 454px) {
				justify-content: center;
				text-align:center;
			}
		`;
export const Button = styled.button`
			display: flex;

			background-color: #d4d4aa;
			@media screen and (max-width: 454px) {
				justify-content: center;
				text-align: center;
			}
		`;

export const Link = styled.div`
			display: flex;
			flex-direction: row;
			padding-top: 2px;
			height: 35px;
			width: 100%;
			padding-bottom: 2px;

			// background-color: #cc3300;
			background-color: #00000;

			&:hover {
				border-bottom: 2px solid #ffffff;
			}

			@media screen and (max-width: 872px) {
				justify-content: center;
				width: 100%;
				text-align: center;
				border-bottom: 1px solid #eee;
				margin-bottom: 10px;
			}
			@media (min-width: 676px) and (max-width: 872px) {
				padding-bottom: 0.7rem;
				margin-bottom: 2px;
			}
			@media screen and (max-width: 454px) {
				padding-bottom: 2px;
			}
			@media (min-width: 455px) and (max-width: 675px) {
				padding-bottom: 2px;
				justify-content: center;
			}
		`;

export const SubLink1 = styled.div`
			padding: 5px;
			width: 25%;
			border-right: 3px solid #fff;

			color: #000000;

			background-color: #ffc300;
			dispaly: flex;
			a {
				color: white;
			}
			&:hover {
				a {
					color: black;
				}
				background-color: #fff;
			}
		`;
export const SubLink2 = styled.div`
			padding: 5px;
			width: 25%;
			border-right: 3px solid #fff;

			background-color: #ffc300;
			dispaly: flex;
			a {
				color: white;
			}
			&:hover {
				a {
					color: black;
				}
				background-color: #fff;
			}
		`;
export const SubLink3 = styled.div`
			padding: 5px;
			width: 25%;
			border-right: 3px solid #fff;

			background-color: #ffc300;
			dispaly: flex;
			a {
				color: white;
			}
			&:hover {
				a {
					color: black;
				}
				background-color: #fff;
			}
		`;
export const SubLink4 = styled.div`
			padding: 5px;
			width: 25%;

			background-color: #ffc300;
			dispaly: flex;
			a {
				color: white;
			}
			&:hover {
				a {
					color: black;
				}
				background-color: #fff;
			}
		`;
