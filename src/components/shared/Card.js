import PropTypes from "prop-types";
const Card = ({ children, reverse }) => {
  return <div className={`card ${reverse && "card_reverse"}`}>{children}</div>;
};
Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
  revese: PropTypes.bool,
};

export default Card;
