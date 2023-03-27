import "./App.css";
import Header from "./Components/Header";
//import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
//import { Provider } from "react-redux";

function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
