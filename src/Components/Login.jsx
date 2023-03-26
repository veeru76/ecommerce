import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	//getting user details from localstorage
	const userName = localStorage.getItem("email")
		? localStorage.getItem("email")
		: "veeranjaneya@gmail.com";
	const userPassword = localStorage.getItem("password")
		? localStorage.getItem("password")
		: "veeru123";
	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (email === userName && password === userPassword) {
			alert("Login Successful");
			navigate("/");
		}
	};
	return (
		<div className="flex justify-center items-center h-screen pb-5">
			<form onSubmit={handleFormSubmit}>
				<span className="text-xl font-bold">Log in to your Account</span>
				<div>
					<label htmlFor="email">Email</label>
					<input
						className=" mt-3 block text-base"
						type="text"
						name="email"
						id="email"
						placeholder="Please enter email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						className=" mt-3 block text-base"
						type="text"
						name="password"
						placeholder="**********"
						id="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
				<button
					type="submit"
					className="mt-3 cursor-pointer border-indigo-700 bg-purple-800 text-white py-2"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
