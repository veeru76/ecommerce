import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
const Cart = () => {
	const Items = useSelector((state) => state.allReducers.products);
	console.log(Items);
	const upDateItemQuantity = () => {
		return;
	};
	return Items.length <= 0 ? (
		<Shimmer />
	) : (
		<div className="h-screen bg-gray-300">
			<h1 class="text-xl font-medium ">Shopping Cart</h1>
			<table class="table-auto">
				<tbody>
					{Items.map((item, index) => {
						return (
							<tr key={index}>
								<td>
									<div className="bg-white overflow-hidden flex justify-center p-0.5">
										<img className="w-48" alt={item.title} src={item.image} />
									</div>
								</td>
								<td>
									<h6 className="whitespace-nowrap w-14 overflow-hidden text-ellipsis">
										{item.title}
									</h6>
								</td>
								<td>Rs.{item.price}</td>
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
};

export default Cart;
