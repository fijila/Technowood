import styled from "styled-components";

export const MainNav = styled.div`
			display: flex;
			width: 100%;
			flex-direction: column;
			background-color: #000000;
			@media screen and (min-width: 872px) {
				padding-top: 10px;
				height: 90px;
				border-bottom: 1px solid #fff;
				justify-content: center;
				width: 100%;
				text-align: center;
				display: flex;
			}
			@media (min-width: 676px) and (max-width: 872px) {
				height: 85px;
				display: flex;

				padding-top: 10px;
				margin-bottom: 1px;
			}
			@media screen and (max-width: 454px) {
				padding-top: 10px;
				height: 80px;
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
				justify-content: start;
				padding: 0px 100px 0px 10px;
			}

			@media (min-width: 676px) and (max-width: 872px) {
				width: 200px;
				height: 33px;
			}
			@media (min-width: 455px) and (max-width: 675px) {
				width: 150px;
				height: 33px;
			}
			@media screen and (max-width: 454px) {
				width: 100px;
				height: 33px;
			}
		`;

export const Search = styled.div`
			display: flex;
			height: 55px;
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
			justify-content: center;

			max-width: 50%;
			min-width: calc(100% - 510px);

			@media screen and (min-width: 872px) {
				justify-content: center;
				height: 50px;
			}
			@media (min-width: 676px) and (max-width: 872px) {
				justify-content: center;
				height: 40px;
			}
			@media (min-width: 455px) and (max-width: 675px) {
				justify-content: center;
				height: 30px;
			}
			@media screen and (max-width: 454px) {
				justify-content: center;
				text-align: center;
				height: 30px;
			}
		`;
export const Button = styled.button`
			display: flex;

			@media screen and (min-width: 872px) {
				justify-content: center;
				height: 50px;
				padding-top: 5px;
			}
			justify-content: center;
			text-align: center;

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
			padding: 2px;
			width: 25%;
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
export const SubLink2 = styled.div`
			padding: 2px;
			width: 25%;
			border-right: 3px solid #fff;
			font-weight: bold;

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
export const SubLink3 = styled.div`
			padding: 2px;
			width: 25%;
			border-right: 3px solid #fff;
font-weight:bold;
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
export const SubLink4 = styled.div`
			padding: 2px;
			width: 25%;
			font-weight: bold;

			
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
