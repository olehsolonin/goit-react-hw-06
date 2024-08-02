import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactList() {
  const contactState = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  //   console.log(contactState);

  const deleteContact = contactId => {
    return {
      type: 'contacts/deleteContact',
      payload: contactId,
    };
  };

  const handleDelete = contactId => {
    console.log(contactId);
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {contactState.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}
