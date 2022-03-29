import React, { useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const { addFeedback, updateFeedback, feedbackEdit } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
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
        <div
          // style={inputSection}
          className="input-group"
        >
          <input
            type="text"
            // style={inputSelf}
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
// const inputSection = {
//   display: "flex",
//   flexDirection: "row",
//   border: "1px solid #ccc",
//   padding: "8 10",
//   borderRadius: "8",
// };
// const inputSelf = {
//   flexGrow: "2",
//   border: "none",
//   fontSize: "16",
//   " :focus": { outline: "none" },
// };
export default FeedbackForm;
