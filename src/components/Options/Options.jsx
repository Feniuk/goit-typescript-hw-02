import css from "./Options.module.css";

const Options = ({
  updateFeedback,
  totalFeedback,
  updateTotalFeedback,
  options,
}) => {
  return (
    <ul className={css.optionsList}>
      {options.map((option, index) => (
        <li key={index}>
          <button
            className={css.optionsBtn}
            onClick={() => updateFeedback(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <button
          className={css.optionsBtn}
          onClick={() => {
            updateTotalFeedback();
          }}
        >
          Reset
        </button>
      )}
    </ul>
  );
};

export default Options;
