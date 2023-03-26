import React, { Profiler } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "./redux/actions/ProductActions";

const Product = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [product, setProduct] = useState([]);
	useEffect(() => {
		getProductInfo();
	}, []);
	const getProductInfo = async () => {
		const data = await fetch(`https://fakestoreapi.com/products/${id}`);
		console.log(data);
		const rest = await data.json();
		setProduct(rest);
	};
	console.log(product);
	const addItemHandler = (product) => {
		dispatch(addItem(product));
	};
	return (
		<>
			<div className="flex">
				<img alt="name" className="w-48 h-96" src={product.image} />
				<button
					className="p-9 bg-violet-900"
					onClick={() => addItemHandler(product)}
				>
					AddToCart
				</button>
				<div className="">
					<h2 className="font-extrabold">{product.title}</h2>
					<h3 className="font-bold">₹{product.price}</h3>
					<h3>{product.description}</h3>
				</div>
			</div>
		</>
	);
};

export default Product;
