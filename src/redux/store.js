import { configureStore } from "@reduxjs/toolkit";

const initialState = {
	balance: {
		value: 999,
	}
};

export const deposite = (value) => {
	return ({
		type: 'balance/deposit',
		payload: value,
	});
};

const balanceReducer = (state = { value: 999 }, action) => {
	switch (action.type) {
		case "balance/deposit":
			return {
				value: state.value + action.payload,

			}
		case "balance/withdraw":
			return {
				value: state.value - action.payload,

			}

		default:
			return state;
	}
};


const rootReducer = (state = initialState, action) => {

	switch (action.type) {
		case "balance/deposit":
			return {
				...state,
				balance: {
					value: state.balance.value + action.payload,
				}
			};

		case 'balance/withdraw':
			return ({
				...state,
				balance: {
					value: state.balance.value - action.payload,
				}
			});

		default:
			return state;
	}



};

export const store = configureStore({
	reducer: rootReducer
});