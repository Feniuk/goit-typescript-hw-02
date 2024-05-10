import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  children: string;
  loadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <>
      <button className={styles.btn} onClick={loadMore}>
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
