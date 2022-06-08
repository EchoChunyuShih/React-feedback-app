import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [rating, setRating] = useState(10);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await fetch(`/feedback?_sort=created_at&_order=desc`);
      const data = await response.json();
      setFeedback(data);
    };
    fetchFeedback();
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);
  const deleteFeedback = async (id) => {
    if (window.confirm("are you sure you want to delete this comment?")) {
      await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });
      setFeedback(feedback.filter((v) => v.id !== id));
    }
  };
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    console.log("data", data);
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        rating,
        setRating,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
