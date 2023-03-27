import React from "react";

const Shimmer = () => {
	return (
		<div className="flex flex-wrap">
			{Array(20)
				.fill("")
				.map((e, index) => {
					return (
						<div
							className="h-96 w-48 m-2 p-7 border-black bg-gray-400"
							key={index}
						></div>
					);
				})}
		</div>
	);
};

export default Shimmer;
