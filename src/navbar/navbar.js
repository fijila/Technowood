import React, { useState, useEffect } from "react";
import { MainNav, Button, Link, Search,Input, SubLink1, SubLink2, SubLink3, SubLink4,Img } from "./navbar.styled";
import axios from "axios";
import assets from "../assets";


export default function Navbar() {
	const [state, setstate] = useState("");
	const [serachResult, setSerachResult] = useState([]);
	const [showSearch, setShowSearch] = useState(false);

	

	useEffect(() => {
		setShowSearch(true);
	}, [serachResult]);

	const handleSubmit = (e) => {
		const val=state;
		
		axios.get(`http://localhost:7777/searchCustomers?keyWord=` + val)
		.then((response) => {
			JSON.stringify(response.data)
			setSerachResult(response.data);
	});
		e.preventDefault();
	};
	const handleOnchange = (e) => {
		console.log(e.target.value);
		setstate(e.target.value);
	};
	return (
		<div>
			<MainNav>
				<Search>
					<Img src={assets.images.logo} alt=""/>
					<Input type="text" name="text" placeholder="Search here!" onChange={(e) => handleOnchange(e)} />
					<Button onClick={(e) => handleSubmit(e)}>Search</Button>
					{showSearch && (
						<div>
							{serachResult.map((item) => (
								<div key={item._id}>
									{item.name}
									{item.age}
								</div>
							))}
						</div>
					)}
				</Search>
				<Link>
					<SubLink1>
						<a>Furniture</a>
					</SubLink1>
					<SubLink2>
						<a>Sofas</a>
					</SubLink2>
					<SubLink3>
						<a>Dinning</a>
					</SubLink3>
					<SubLink4>
						<a>Bedroom</a>
					</SubLink4>
				</Link>
			</MainNav>
		</div>
	);
}
