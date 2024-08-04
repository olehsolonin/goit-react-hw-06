import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const contactState = useSelector(selectContacts);
  const filtersState = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    //  console.log(contactId);
    dispatch(deleteContact(contactId));
  };

  const visibleContacts = contactState.filter(item =>
    item.name.toLowerCase().includes(filtersState.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}
