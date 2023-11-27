import { Contacts } from '../Contact/Contacts';
import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, deleteContacts }) => {
  return (
    <ul className={css.contacts}>
      {contacts.map(el => (
        <Contacts key={el.id} contacts={el} deleteContacts={deleteContacts} />
      ))}
    </ul>
  );
};
