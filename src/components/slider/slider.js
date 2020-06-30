import React from "react";
import {Maindiv, Titlediv, Sliderdiv} from './slider.styled';
import Swiper from "react-id-swiper";
import assets from "../../assets";

import "swiper/css/swiper.css";



export default function slider() {
	
  const params = {
		slidesPerView: 4,

		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		spaceBetween: 10,
		breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    

  };
    
	
    return (
		<Maindiv>
			<Titlediv>New Trends</Titlediv>
			<Sliderdiv>
				<Swiper {...params}>
					<slideClass>
						<img src={assets.images.slider1} alt=" " />
					</slideClass>
					<slideClass>
						<img src={assets.images.slider2} alt=" " />
					</slideClass>
					<slideClass>
						<img src={assets.images.slider3} alt=" " />
					</slideClass>
					<slideClass>
						<img src={assets.images.slider4} alt=" " />
					</slideClass>
					<slideClass>
						<img src={assets.images.slider5} alt=" " />
					</slideClass>
					<slideClass>
						<img src={assets.images.slider6} alt=" " />
					</slideClass>
					<slideClass>
						<img src={assets.images.slider7} alt=" " />
					</slideClass>

					<slideClass>
						<img src={assets.images.slider8} alt=" " />
					</slideClass>
					<slideClass>
						<img src={assets.images.slider9} alt=" " />
					</slideClass>
					<slideClass>
						<img src={assets.images.slider10} alt=" " />
					</slideClass>
				</Swiper>
			</Sliderdiv>
		</Maindiv>
	);
}

