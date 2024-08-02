import { configureStore } from "@reduxjs/toolkit";


export const deleteContact = contactId => {
	return {
		type: 'contacts/deleteContact',
		payload: contactId,
	};
};

export const addContact = newContact => {
	return {
		type: 'contacts/addContact',
		payload: {
			id: newContact.id,
			name: newContact.name,
			number: newContact.number
		}
	};
};

const initialState = {
	contacts: {
		items: [{ id: 'id-1', name: 'Billy Herrington', number: '459-12-56' },
		{ id: 'id-2', name: 'Ryan Gosling', number: '443-89-12' },
		{ id: 'id-3', name: 'Ricardo Milos', number: '645-17-79' },
		{ id: 'id-4', name: 'Antonio Banderas', number: '227-91-26' },]
	},
	filters: {
		name: ""
	}
}
	;

const rootReducer = (state = initialState, action) => {

	switch (action.type) {

		case "contacts/deleteContact":
			return {
				...state,
				contacts: {
					...state,
					items: state.contacts.items.filter(item => {
						return (item.id !== action.payload)
					}),
				}

			};

		case "contacts/addContact":
			return {
				...state,
				contacts: {
					...state,
					items: state.contacts.items + action.payload
				}

			};



		default:
			return state;
	}

};

export const store = configureStore({
	reducer: rootReducer,
});

