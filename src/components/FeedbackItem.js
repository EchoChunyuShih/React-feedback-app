import { useContext } from "react";
import PropTypes from "prop-types";

import { IoClose } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  const displayDateTime = new Date(item.created_at).toLocaleString();

  return (
    <>
      <Card>
        <div className="num-display">{item.rating}</div>
        <button
          className="close"
          onClick={() => {
            deleteFeedback(item.id);
          }}
        >
          <IoClose />
        </button>
        <button
          className="edit"
          onClick={() => {
            editFeedback(item);
          }}
        >
          <FiEdit />
        </button>
        <div className="text-display">
          <span> {displayDateTime}</span>
          <span> {item.text}</span>
        </div>
      </Card>
    </>
  );
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
