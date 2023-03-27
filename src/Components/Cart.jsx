import React from "react";
import { useSelector } from "react-redux";
//import { Link } from "react-router-dom";
//import { useState } from "react";
import Shimmer from "./Shimmer";
//import { clearCart } from "./redux/actions/ProductActions";
const Cart = () => {
	const Items = useSelector((state) => state.allReducers.products);
	console.log(Items);
	const upDateItemQuantity = () => {
		return;
	};
	//const dispatch = useDispatch();
	return !Items ? (
		<Shimmer />
	) : (
		<div className="h-screen bg-gray-300">
			{/* <button
				className="bg-blue-800"
				onClick={() => {
					dispatch(clearCart());
				}}
			>
				Clear Cart
			</button> */}
			<h1 className="text-xl font-medium ">Shopping Cart</h1>
			<table className="table-auto p-10">
				<tbody>
					{Items.map((item, index) => {
						return (
							<tr key={index}>
								<td>
									<div className="bg-white overflow-hidden flex justify-center m-4 p-10">
										<img
											className="w-32 h-30"
											alt={item.title}
											src={item.image}
										/>
									</div>
								</td>
								<td>
									<h6 className="whitespace-nowrap w-14 overflow-hidden text-ellipsis p-9">
										{item.title}
									</h6>
								</td>
								<td className="font-bold p-10">Rs.{item.price}</td>
								<td>
									<button
										onClick={() =>
											upDateItemQuantity(item.id, item.quantity - 1)
										}
										className="px-1 bg-red-700"
									></button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
	// return (
	// 	<div className="flex">
	// 		<div className="w-full min-h-[150px] flex items-center gap-x-4"></div>
	// 	</div>
	// );
};

export default Cart;
