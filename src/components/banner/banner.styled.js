import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Box1 = styled.div`
	object-fit: cover;
	justify-content: center;
	@media screen and (max-width: 675px) {
		display: none;
	}
`;
export const BoxMob = styled.div`
	// margin: 0.8rem;
	object-fit: cover;
	justify-content: center;
	@media screen and (min-width: 676px) {
		display: none;
	}
	@media screen and (max-width: 675px) {
		display: flex;
		object-fit: cover;
	}
`;

export const Box2 = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: row;
	align-items: center;
	box-shadow: 0 2px 4px #000;
	background-color: #f3f3f3;
	position: overflow;
	top: 80%;
	border: 3px #fff solid;
	transform: translateY(-50%);
	margin: 0 1.2rem;
	@media (min-width: 455px) and (max-width: 675px) {
		flex-wrap: wrap;
		transform: translateY(-10%);
		flex-direction: column;
	}
	@media screen and (max-width: 454px) {
		flex-wrap: wrap;
		flex-direction: column;
		transform: translateY(-10%);
	}
`;
export const SubbannerItem = styled.div`
	padding: 10px;
	height: 100%;
	border-right: 3px solid #fff;
	flex: 2 2 auto;

	h6 {
		color: brown;
	}
	@media (min-width: 455px) and (max-width: 675px) {
		border-right: none;
		border-bottom: 3px #fff solid;
		width: 100%;
	}
	@media screen and (max-width: 454px) {
		border-right: none;
		width: 100%;
		border-bottom: 3px #fff solid;
	}
`;

export const BannerImageDesktop = styled.img`
	object-fit: cover;
	cursor: pointer;
	aspect-ratio: 16/9;
`;
export const BannerImageMob = styled.img`
	object-fit: cover;
	cursor: pointer;
	aspect-ratio: 16/9;
	width: 100%;
`;
