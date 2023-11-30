import { useEffect, useState } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = contact => {
    const nameContact = contacts.some(
      ({ name }) =>
        name.toLowerCase().trim() === contact.name.toLowerCase().trim()
    );

    if (nameContact) {
      alert(`${contact.name} is already in contacts!!!`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...contact },
    ]);
  };

  const deleteContacts = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.target.value.trim());
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <PhonebookForm addContacts={addContacts} />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter value={filter} onChangeFilter={changeFilter} />
        ) : (
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 20,
            }}
          >
            Your phonebook is empty. Add first contact!
          </p>
        )}
        <ContactsList
          contacts={getVisibleContacts()}
          deleteContacts={deleteContacts}
        />
      </div>
    </>
  );
};
