import styles from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmitQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const query = e.target.elements.query.value.trim();

    if (!query.length) {
      toast.error("Please enter a topic to search!");
      return;
    }
    onSubmitQuery(query);
    form.reset();
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
