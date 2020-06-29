import React, {useState } from "react";
import { Box1, Box2, BannerImageDesktop, BannerImageMob,BoxMob, SubbannerItem } from "./banner.styled";
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
		<>
			<Box1>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<BannerImageDesktop src={assets.images.banner3} alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<BannerImageDesktop src={assets.images.banner1} alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<BannerImageDesktop src={assets.images.banner2} alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<BannerImageDesktop src={assets.images.banner4} alt="" />
					</Carousel.Item>
				</Carousel>
			</Box1>
			<BoxMob>
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<BannerImageMob src={assets.images.bannermob3} alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<BannerImageMob src={assets.images.bannermob1} alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<BannerImageMob src={assets.images.bannermob2} alt="" />
					</Carousel.Item>
					<Carousel.Item>
						<BannerImageMob src={assets.images.bannermob4} alt="" />
					</Carousel.Item>
				</Carousel>
			</BoxMob>
			<Container>

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
		</>
	);  
}
