import css from "./Feedback.module.css";
const Feedback = ({ types, totalFeedback, positiveStatistics }) => {
  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackItem}>Good: {types.good}</li>
      <li className={css.feedbackItem}>Neutral: {types.neutral}</li>
      <li className={css.feedbackItem}>Bad: {types.bad}</li>
      <li className={css.feedbackItem}>Total: {totalFeedback}</li>
      <li className={css.feedbackItem}>Positive: {positiveStatistics} %</li>
    </ul>
  );
};

export default Feedback;
