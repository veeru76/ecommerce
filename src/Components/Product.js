import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "./redux/actions/ProductActions";

const Product = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [product, setProduct] = useState([]);
	//const [addedToCart, setAddedToCart] = useState(false);

	useEffect(() => {
		getProductInfo();
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		//	setAddedToCart(true);
	};

	// const removeItemHandler = (product) => {
	// 	dispatch(removeItem(product));
	// 	setAddedToCart(false)
	// }
	return (
		// <div>
		// 	<div className="">
		// 		<img alt="name" className="w-48 h-96" src={product.image} />
		// 		{!addedToCart ? (
		// 			<button
		// 				className="bg-blue-500 border border-blue-500 text-black font-bold"
		// 				onClick={() => addItemHandler(product)}
		// 			>
		// 				Add To Cart
		// 			</button>
		// 		) : (
		// 			<button
		// 				className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-5 px-10 border border-blue-700 rounded"
		// 				// onClick={() => removeItemHandler(product)}
		// 			>
		// 				Added To Cart
		// 			</button>
		// 		)}

		// 		<div className="">
		// 			<h2 className="font-extrabold">{product.title}</h2>
		// 			<h3 className="font-bold">₹{product.price}</h3>
		// 			<h3>{product.description}</h3>
		// 		</div>
		// 	</div>
		// </div>
		<section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row items-center">
					<div className="flex flex-1 justify-center items-center">
						<img
							className="object-center h-96 w-48"
							alt="name"
							src={product.image}
						/>
					</div>
					<div className="flex-1 text-center lg:text-left">
						<h1 className="font-bold">{product.title}</h1>
						<div className="text-xl text-red-500 font-medium">
							Rs.{product.price}
						</div>
						<p className="mb-8">{product.description}</p>
						<button
							onClick={() => addItemHandler(product)}
							className="text-blue bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Product;
