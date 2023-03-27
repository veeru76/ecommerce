import { ActionTypes } from "../constants/ActionTypes";
const initialState = {
	products: [],
};
export const ProductReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.ADD_ITEM:
			return { ...state, products: state?.products?.concat(payload) };
		case ActionTypes.REMOVE_ITEM:
			return state;
		default:
			return state;
	}
};
