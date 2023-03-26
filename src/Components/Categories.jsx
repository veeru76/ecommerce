import React from "react";
import { useState, useEffect } from "react";
import DropDown from "./DropDown";

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
		<>
			veeranjaneya
			{/* <DropDown name={allCategories} /> */}
			{/* <div>
				{allCategories.map((Category, index) => {
					return (
						<ul
							key={index}
							tabIndex={0}
							className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a href="/">{Category}</a>
							</li>
						</ul>
					);
				})}
			</div> */}
		</>
	);
};

export default Categories;
