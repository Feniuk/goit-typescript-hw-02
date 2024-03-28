import styles from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={styles.button}>
          Search
          <IoIosSearch className={styles.icon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
