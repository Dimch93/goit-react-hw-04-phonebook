import css from './Contacts.module.css';

export const Contacts = ({ contacts, deleteContacts }) => {
  return (
    <li className={css.list}>
      <p>{contacts.name}</p>
      <p>{contacts.number}</p>

      <button className="" onClick={() => deleteContacts(contacts.id)}>
        Delete
      </button>
    </li>
  );
};
