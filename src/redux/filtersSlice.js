import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
	name: 'filters',
	initialState: {
		name: ""
	},
	reducers: {
		setFilter(state, action) {
			state.name = action.payload
		}
	}
});

export const selectFilter = state => state.filters.name;

export const { setFilter } = slice.actions;

export default slice.reducer;


// export const setFilter = (filterValue) => {
// 	// console.log(filterValue);

// 	return {
// 		type: 'filters/setFilter',
// 		payload: filterValue
// 	}
// };


// export const filterReducer = (state = { name: "" }, action) => {
// 	switch (action.type) {

// 		case 'filters/setFilter':
// 			return {
// 				name: action.payload
// 			}
// 		default:
// 			return state;
// 	}
// };