import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";

const Reducers = combineReducers({
	allReducers: ProductReducer,
});

export default Reducers;
