import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, updateTotalFeedback }) => {
  return (
    <ul className={css.optionsList}>
      <li>
        <button
          className={css.optionsBtn}
          onClick={() => updateFeedback("good")}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.optionsBtn}
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.optionsBtn}
          onClick={() => updateFeedback("bad")}
        >
          Bad
        </button>
      </li>
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
