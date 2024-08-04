import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contactsSlice';
import filterReducer from './filtersSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const persistedContactsReducer = persistReducer({
	key: 'contacts',
	storage,
}, contactsReducer)


const persistedFiltersReducer = persistReducer({
	key: 'filters',
	storage,
}, filterReducer)


export const store = configureStore({
	reducer: {
		contacts: persistedContactsReducer,
		filters: persistedFiltersReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);


// export const deleteContact = contactId => {
// 	return {
// 		type: 'contacts/deleteContact',
// 		payload: contactId,
// 	};
// };

// export const addContact = newContact => {
// 	console.log(newContact);
// 	const { id, name, number } = newContact

// 	return {
// 		type: 'contacts/addContact',
// 		payload: {
// 			id: id,
// 			name: name,
// 			number: number
// 		}
// 	};
// };

// export const setFilter = (filterValue) => {
// 	console.log(filterValue);

// 	return {
// 		type: 'filters/setFilter',
// 		payload: filterValue
// 	}
// }

// const initialState = {
// 	contacts: {
// 		items: [{ id: 'id-1', name: 'Billy Herrington', number: '459-12-56' },
// 		{ id: 'id-2', name: 'Ryan Gosling', number: '443-89-12' },
// 		{ id: 'id-3', name: 'Ricardo Milos', number: '645-17-79' },
// 		{ id: 'id-4', name: 'Antonio Banderas', number: '227-91-26' },]
// 	},
// 	filters: {
// 		name: ""
// 	}
// }
// 	;


// const contactsReducer = (state = {
// 	items: [{ id: 'id-1', name: 'Billy Herrington', number: '459-12-56' },
// 	{ id: 'id-2', name: 'Ryan Gosling', number: '443-89-12' },
// 	{ id: 'id-3', name: 'Ricardo Milos', number: '645-17-79' },
// 	{ id: 'id-4', name: 'Antonio Banderas', number: '227-91-26' },]
// }, action) => {
// 	switch (action.type) {
// 		case "contacts/deleteContact":
// 			return {
// 				items: state.items.filter(item => {
// 					return (item.id !== action.payload)
// 				}),
// 			};

// 		case "contacts/addContact":
// 			return {
// 				items: [...state.items, action.payload]
// 			};



// 		default:
// 			return state;
// 	}
// };

// const filterReducer = (state = { name: "" }, action) => {
// 	switch (action.type) {

// 		case 'filters/setFilter':
// 			return {
// 				name: action.payload
// 			}
// 		default:
// 			return state;
// 	}
// };

// const rootReducer = (state = initialState, action) => {

// 	switch (action.type) {

// 		case "contacts/deleteContact":
// 			return {
// 				...state,
// 				contacts: {
// 					...state.contacts,
// 					items: state.contacts.items.filter(item => {
// 						return (item.id !== action.payload)
// 					}),
// 				}

// 			};

// 		case "contacts/addContact":
// 			return {
// 				...state,
// 				contacts: {
// 					...state.contacts,
// 					items: [...state.contacts.items, action.payload]
// 				}
// 			};

// 		case 'filters/setFilter':
// 			return {
// 				...state,
// 				filters: {
// 					...state.filters,
// 					name: action.payload
// 				}
// 			};



// 		default:
// 			return state;
// 	}

// };



