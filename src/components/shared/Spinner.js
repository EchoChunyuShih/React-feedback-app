import { ThreeDots } from "react-loader-spinner";
const Spinner = () => {
  return (
    <div className="spinner">
      <ThreeDots
        width="100"
        color="#fd6b9498"
        // strokeWidth="1"
        // animationDuration="2"
      />
    </div>
  );
};

export default Spinner;
