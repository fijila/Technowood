import React, {useState } from "react";
import { Container, Box1, Box2, BannerImage,Subbanner1 } from "./banner.styled";
import assets from "./../assets/";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";


// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

export default function Banner() {
	  const [index, setIndex] = useState(0);

		const handleSelect = (selectedIndex, e) => {
			setIndex(selectedIndex);
		};
	return (
		<Container>
			<Box1>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<BannerImage src={assets.images.banner1} alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<BannerImage src={assets.images.banner2} alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<BannerImage src={assets.images.banner3} alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<BannerImage src={assets.images.banner4} alt="" />
					</Carousel.Item>
				</Carousel>
			</Box1>
			<Box2>
				<Subbanner1><img src={assets.images.delivery} alt=""/></Subbanner1>
				{/* <Subdiv1></Subdiv1>
				<Subdiv1></Subdiv1>
				<Subdiv1></Subdiv1> */}
			</Box2>
		</Container>
	);
}
