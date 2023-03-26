import { legacy_createStore } from "redux";
import Reducers from "./redux/reducers/index";

const store = legacy_createStore(
	Reducers,
	{},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
