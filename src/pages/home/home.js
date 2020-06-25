import React from 'react';
import Banner from "../../components/banner/banner";
import Navbar from "../../components/navbar/navbar";
import Slider from "../../components/slider/slider";
import Footer from "../../components/footer/footer";

function home() {
    return (
		<div>
			<Navbar />
			<Banner />
			<Slider />
			<Footer />
		</div>
	);
}

export default home

