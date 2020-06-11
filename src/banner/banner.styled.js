import styled from "styled-components";
export const Container = styled.div`
			display: flex;
			width: 100%;
			flex-direction: column;
			padding-bottom: 10px;
			height: 500px;
			// background-color: blue;
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
export const Box1 = styled.div`
			display: flex;

			width: 100%;
			object-fit: cover;
			// background: red;
			height: 450px;
			// @media (min-width: 872px) and (max-width: 1200px) {
			// 	height: 400px;
			// }
			@media screen and (min-width: 1200px) {
				justify-content: center;
				width: 100%;
				text-align: center;
				height: 450px;
			}

			@media (min-width: 676px) and (max-width: 872px) {
				padding-bottom: 0.7rem;
				margin-bottom: 10px;
				height: 400px;
			}
			@media (min-width: 455px) and (max-width: 675px) {
				padding-bottom: 0.7rem;
				margin-top: 10px;
				height: 350px;
			}
			@media screen and (max-width: 454px) {
				height: 300px;
			}
		`;

export const Box2 = styled.div`
			display: flex;
			wrap: nowrap;
			flex-direction:row;
			width: 97%;
			height: 100px;
			background: #fcfcfa;
			position: overflow;
            border:1px grey solid;
			margin: 0px 20px 0px 20px;


			@media screen and (min-width: 1200px) {
				display: flex;
				right: 25px;
				top: 15px;
				transform: translateY(-50%);
			}
			@media (min-width: 872px) and (max-width: 1200px) {
				width: 95%;

				display: flex;
				right: 25px;
				top: 15px;
				transform: translateY(-50%);
			}

			@media (min-width: 676px) and (max-width: 872px) {
				width:94%;
				display: flex;
				right: 25px;
				top: 15px;
				transform: translateY(-50%);
			}
			
			@media (min-width: 455px) and (max-width: 675px) {
				width: 94%;
				display: flex;
				right: 25px;
				top: 15px;
				transform: translateY(-50%);
			}
			@media screen and (max-width: 454px) {
				width: 90%;

				display: flex;
				right: 25px;
				top: 15px;
				transform: translateY(-50%);
			}
		`;
export const Subbanner1=styled.div`

width:25%;
height:98%;
background-color:black;

`;


export const BannerImage = styled.img`
			// height: 300px;
			width: 100%;
			display:flex;
			object-fit: cover;
			cursor: pointer;
			@media (min-width: 1500px) {
				height: 450px;
			}
			// @media (min-width: 1200px) and (max-width: 1500px) {
			// 	height: 425px;
			}
			@media (min-width: 872px) and (max-width: 1200px) {
				height: 450px;
			}
			@media (min-width: 676px) and (max-width: 872px) {
				height: 400px;
			}
			@media (max-width: 768px) {
				height: 350px;
			}
			@media (max-width: 425px) {
				height: 300px;
			}
		`;
