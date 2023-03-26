import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Categories from "./Components/Categories";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Product from "./Components/Product";
import { Provider } from "react-redux";
import store from "./Components/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/Categories",
				element: <Categories />,
			},
			{
				path: "/Cart",
				element: <Cart />,
			},
			{
				path: "/Contact",
				element: <Contact />,
			},
			{
				path: "/products/:id",
				element: <Product />,
			},
			// {
			// 	path: "/Login",
			// 	element: <Login />,
			// },
		],
	},
]);
root.render(
	<Provider store={store}>
		<RouterProvider router={appRouter} />
	</Provider>
);
