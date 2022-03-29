import React, { useContext } from "react";

import FeedbackContext from "../context/FeedbackContext";

function RatingSelect() {
  const { rating, setRating } = useContext(FeedbackContext);
  const handleChange = (e) => {
    setRating(+e.currentTarget.value);
    console.log(e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            id={`num${i + 1}`}
            type="radio"
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={rating === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
