import React, {useState } from "react";
import { Box1, Box2, BannerImage, SubbannerItem } from "./banner.styled";
import assets from "../../assets";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "../container/container";

export default function Banner() {
	  const [index, setIndex] = useState(0);

		const handleSelect = (selectedIndex, e) => {
			setIndex(selectedIndex);
		};
	return (
		<Container>
			<Box1 className="desktop">
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<BannerImage src={assets.images.banner3} alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<BannerImage src={assets.images.banner1} alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<BannerImage src={assets.images.banner2} alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<BannerImage src={assets.images.banner4}  alt="" />
					</Carousel.Item>
				</Carousel>
			</Box1>
			
			<Box2>
				<SubbannerItem>
					<img src={assets.images.delivery} alt="" />
					<h6>Free Delivery</h6>
				</SubbannerItem>
				<SubbannerItem>
					<img src={assets.images.quality} alt="" />
					<h6>Assured Quality</h6>
				</SubbannerItem>
				<SubbannerItem>
					<img src={assets.images.since} alt="" />
					<h6>Since 1976</h6>
				</SubbannerItem>
				<SubbannerItem>
					<img src={assets.images.customize} alt="" />
					<h6>Customized Products</h6>
				</SubbannerItem>
			</Box2>
		</Container>
	);
}
