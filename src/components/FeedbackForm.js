import React, { useState, useEffect, useContext } from "react";

import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { addFeedback, updateFeedback, feedbackEdit, rating, setRating } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value.length);
    if (text === "") {
      setBtnDisabled(true);
      setErrMsg(null);
    } else if (text.trim().length < 10) {
      setErrMsg("text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setErrMsg(null);
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
      setRating("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>How would you rate your service with us?</h3>
        <RatingSelect rating={rating} setRating={setRating} />
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        {errMsg && <div className="err-msg">{errMsg}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
