import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Components/Shimmer";
import { Link } from "react-router-dom";
const Productcard = ({
	category,
	description,
	id,
	image,
	price,
	rating,
	title,
}) => {
	return (
		<div className="w-[200px] p-2 m-2 shadow-lg">
			<img alt="product" src={image} className="object-scale-down h-48 w-96" />
			<h2>₹{price}/-</h2>
			<h3>{title}</h3>
			<h3>{rating.rate}</h3>
		</div>
	);
};
const Mens = () => {
	const [allElectronics, setAllElectronics] = useState([]);

	useEffect(() => {
		getProducts();
	}, []);
	const getProducts = async () => {
		const res = await fetch(
			"https://fakestoreapi.com/products/category/men's clothing"
		);
		const data = await res.json();
		console.log(data);
		setAllElectronics(data);
	};
	return (
		<>
			<div className="flex flex-wrap justify-center"></div>
			<div className="grid grid-rows-2 grid-flow-col gap-4 min-h-screen">
				{allElectronics.length === 0 ? (
					<Shimmer />
				) : (
					allElectronics.map((product, index) => {
						return (
							<Link to={"/products/" + product.id} key={product.title}>
								<Productcard {...product} />
							</Link>
						);
					})
				)}
			</div>
		</>
	);
};

export default Mens;
