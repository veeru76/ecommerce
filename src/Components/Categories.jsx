import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
	const [allCategories, setAllCategories] = useState([]);

	useEffect(() => {
		getCategories();
	}, []);
	const getCategories = async () => {
		const res = await fetch("https://fakestoreapi.com/products/categories");
		const data = await res.json();
		console.log(data);
		setAllCategories(data);
	};
	return (
		<div>
			{allCategories.map((category, index) => {
				//	category = category.split(" ").join(" ");
				return (
					<Link to={"/" + category}>
						<button
							type="button"
							key={index}
							class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
						>
							{category}
						</button>
					</Link>
				);
			})}
		</div>
	);
};

export default Categories;
