import React, { useState, useEffect } from "react";
import { MainNav,Button, Link, Search,Input, SubLink1, SubLink2, SubLink3, SubLink4,Img } from "./navbar.styled";
import axios from "axios";
import assets from "../../assets";



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
					<a href="/">
						<Img src={assets.images.logo} alt="" title="logo" />
					</a>
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
						<a href="./furniture" alt="">
							Furniture
						</a>
					</SubLink1>
					<SubLink2>
						<a href="./tile" alt="">
							Tiles
						</a>
					</SubLink2>
					<SubLink3>
						<a href="./clock" alt="">
							Clocks
						</a>
					</SubLink3>
					<SubLink4>
						<a href="./light" alt="">
							Lights
						</a>
					</SubLink4>
				</Link>
			</MainNav>
		</div>
	);
}
