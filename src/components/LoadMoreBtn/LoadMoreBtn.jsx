import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <>
      <button className={styles.btn} onClick={loadMore}>
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
