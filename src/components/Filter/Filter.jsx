import css from './Filter.module.css';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
};
