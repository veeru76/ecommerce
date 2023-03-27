import { ActionTypes } from "../constants/ActionTypes";
export const addItem = (item) => {
	return {
		type: ActionTypes.ADD_ITEM,
		payload: item,
	};
};

export const removeItem = (item) => {
	return {
		type: ActionTypes.REMOVE_ITEM,
		payload: item,
	};
};

// export const clearCart = () => {
// 	return {
// 		type: ActionTypes.CLEAR_CART,
// 		payload: ,
// 	};
// };
