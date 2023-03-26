import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const DropDown = (allCategories) => {
	console.log(allCategories.name);
	const [click, setClick] = useState(false);
	const handleClick = setClick(!click);
	return (
		// <div className="dropdown">
		// 	<ul
		// 		onClick={handleClick}
		// 		tabIndex={0}
		// 		className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
		// 	>
		// 		{allCategories.name.map((Category, index) => {
		// 			<li key={index}>
		// 				{Category}
		// 				{/* <Link to={`/Category/${index}`}>{Category}</Link> */}
		// 			</li>;
		// 		})}
		// 	</ul>
		// </div>
		<></>
	);
};

export default DropDown;
