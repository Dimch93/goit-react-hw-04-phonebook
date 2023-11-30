import css from './PhonebookForm.module.css';
import { useState } from 'react';

export const PhonebookForm = ({ addContacts }) => {
  const [value, setValue] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    addContacts(value);
    reset();
  };

  const handleChange = ({ target: { value, name } }) => {
    setValue(prev => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setValue({ name: '', number: '' });
  };

  const { name, number } = value;

  return (
    <form className={css.form} type="submit" onSubmit={handleSubmit}>
      <div className={css.input}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.input}>
        <label>Number</label>
        <input
          name="number"
          type="tel"
          onChange={handleChange}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};
