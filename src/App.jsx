import { useState, useEffect } from "react";
import "./components/App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./components/App.css";

function App() {
  const [types, setTypes] = useState(() => {
    const savedTypes = window.localStorage.getItem("saved-types");
    if (savedTypes) {
      return JSON.parse(savedTypes);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-types", JSON.stringify(types));
  }, [types]);

  const updateFeedback = (feedbackType) => {
    setTypes({
      ...types,
      [feedbackType]: types[feedbackType] + 1,
    });
  };

  const totalFeedback = types.good + types.neutral + types.bad;

  const updateTotalFeedback = () => {
    setTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const positiveStatistics = Math.round(
    ((types.good + types.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        updateTotalFeedback={updateTotalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          types={types}
          totalFeedback={totalFeedback}
          positiveStatistics={positiveStatistics}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
