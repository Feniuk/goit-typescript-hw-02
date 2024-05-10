import styles from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import toast from "react-hot-toast";

type SearchBarProps = {
  onSubmitQuery: (query: string) => void;
  isLoading: boolean;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmitQuery }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const query = (
      form.elements.namedItem("query") as HTMLInputElement
    ).value.trim();

    if (!query.length) {
      toast.error("Please, enter your query");
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
