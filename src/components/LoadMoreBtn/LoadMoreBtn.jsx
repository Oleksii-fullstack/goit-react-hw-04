import { FiChevronsDown } from "react-icons/fi";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load More
      <FiChevronsDown size="16px" />
    </button>
  );
};

export default LoadMoreBtn;
