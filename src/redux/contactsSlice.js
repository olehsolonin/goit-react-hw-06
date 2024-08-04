import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: 'contacts',
	initialState: {
		items: [{ id: 'id-1', name: 'Billy Herrington', number: '459-12-56' },
		{ id: 'id-2', name: 'Ryan Gosling', number: '443-89-12' },
		{ id: 'id-3', name: 'Ricardo Milos', number: '645-17-79' },
		{ id: 'id-4', name: 'Antonio Banderas', number: '227-91-26' },]
	},

	reducers: {
		deleteContact(state, action) {
			state.items = state.items.filter(item => item.id !== action.payload);
		},
		addContact(state, action) {
			state.items.push(action.payload);
		}
	}

});

export const selectContacts = state => state.contacts.items;

export const { deleteContact, addContact } = slice.actions;

export default slice.reducer;

// console.log(slice);

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


// export const contactsReducer = (state = {
// 	items: [{ id: 'id-1', name: 'Billy Herrington', number: '459-12-56' },
// 	{ id: 'id-2', name: 'Ryan Gosling', number: '443-89-12' },
// 	{ id: 'id-3', name: 'Ricardo Milos', number: '645-17-79' },
// 	{ id: 'id-4', name: 'Antonio Banderas', number: '227-91-26' },]
// }, action) => {
// 	switch (action.type) {
// 		case "contacts/deleteContact":
// 			return {
// items: state.items.filter(item => {
// 	return (item.id !== action.payload)
// }),
// 			};

// 		case "contacts/addContact":
// 			return {
// items: [...state.items, action.payload]
// 			};



// 		default:
// 			return state;
// 	}
// };



