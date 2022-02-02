import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  let avgRating =
    feedback
      .map((item) => item.rating)
      .reduce((sum, item) => {
        return sum + item;
      }, 0) / feedback.length;

  avgRating = avgRating.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length}</h4>
      <h4>average rating: {isNaN(avgRating) ? 0 : avgRating}</h4>
    </div>
  );
};

export default FeedbackStats;
