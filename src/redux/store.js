import { configureStore } from "@reduxjs/toolkit";

const initialState = {
	balance: {
		value: 999,
	}
};

const rootReducer = (state = initialState, action) => {

	switch (action.type) {
		case "balance/deposit":
			return {
				balance: {
					value: state.balance.value + action.payload,
				}
			};

		default:
			return state;
	}



};

export const store = configureStore({
	reducer: rootReducer
});