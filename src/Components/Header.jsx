import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import DropDown from "./DropDown";
const Title = () => {
	return (
		<a href="/">
			<img
				className="h-20 pl-2"
				alt="logo"
				src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg"
			/>
		</a>
	);
};

const Header = () => {
	const [IsLoggedIn, setIsLoggedIn] = useState(false);
	const [dropDown, setDropDown] = useState(false);
	const Loginfun = () => {
		return (
			<>
				<Login />
				{setIsLoggedIn(true)}
			</>
		);
	};
	return (
		<div className="flex justify-between shadow-lg items-center">
			<Title />
			<div>
				<ul className="flex py-10">
					<Link to="/">
						<li className="px-2  hover:bg-sky-700">Home</li>
					</Link>

					<li className="px-2  hover:bg-sky-700">
						<Link to="/Categories">Categories</Link>
						{dropDown && <DropDown />}
					</li>

					<Link to="/Cart">
						<li className="px-2 hover:bg-sky-700">Cart</li>
					</Link>
					<Link to="/Contact">
						<li className="px-2  hover:bg-sky-700">Contact</li>
					</Link>
				</ul>
			</div>
			{/* <div className=" hover:bg-sky-700">
				<Link to="/Login">Login</Link>
			</div> */}
			<div className=" hover:bg-sky-700">
				{IsLoggedIn ? (
					<button
						onClick={() => {
							setIsLoggedIn(false);
						}}
					>
						Logout
					</button>
				) : (
					<button
						onClick={() => {
							Loginfun();
						}}
					>
						Login
					</button>
				)}
			</div>
		</div>
	);
};

export default Header;
