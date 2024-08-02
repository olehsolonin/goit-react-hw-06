import css from './SearchBox.module.css';

export default function SearchBox(onFilter) {
  return (
    <div className={css.filter}>
      <input
        type="text"
        value=""
        onChange={e => onFilter(e.target.value)}
        className={css.filterInput}
        placeholder="Search user"
      />
    </div>
  );
}
