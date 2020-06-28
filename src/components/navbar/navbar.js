import React, { useState, useEffect } from "react";
import { MainNav,Button, LinkDiv,HeaderDiv,HeaderContent, Search,Input, SubLink,Img } from "./navbar.styled";
import axios from "axios";
import assets from "../../assets";
import { Container } from "../container/container";


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
				<HeaderDiv>
					<Container>
						<HeaderContent>
							<a href="/">
								<Img src={assets.images.logo} alt="" title="logo" />
							</a>
							<Search>
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
						</HeaderContent>
					</Container>
				</HeaderDiv>
				<LinkDiv>
					<SubLink>
						<a href="./furniture" alt="">
							Furniture
						</a>
					</SubLink>
					<SubLink>
						<a href="./tile" alt="">
							Tiles
						</a>
					</SubLink>
					<SubLink>
						<a href="./clock" alt="">
							Clocks
						</a>
					</SubLink>
					<SubLink>
						<a href="./light" alt="">
							Lights
						</a>
					</SubLink>
				</LinkDiv>
			</MainNav>
		</div>
	);
}
