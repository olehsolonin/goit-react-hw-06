import { configureStore } from "@reduxjs/toolkit";

const initialState = 5;

const rootReducer = (state = initialState, action) => {
	return state;
};

export const store = configureStore({
	reducer: rootReducer
});