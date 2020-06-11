import React, { Component } from "react";
import {Maindiv, Titlediv, Sliderdiv} from './slider.styled';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


export default function slider() {
  
    
    return (
      		<Maindiv>

			<Titlediv>Top Categories</Titlediv>
      			<Sliderdiv>
fjhghjh
</Sliderdiv>

			{/* <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3}>
				<Slider>
					<Slide index={0}>I am the first Slide.</Slide>
					<Slide index={1}>I am the second Slide.</Slide>
					<Slide index={2}>I am the third Slide.</Slide>
				</Slider>
			</CarouselProvider> */}
</Maindiv>
	);
}

