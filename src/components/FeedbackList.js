import React, { useContext } from "react";

import { motion, AnimatePresence } from "framer-motion";

import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>no feedback yet</p>;
  }
  return isLoading ? (
    <>
      <Spinner />
    </>
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ delay: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={item} key={item.id} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
export default FeedbackList;
