import { FaCircle } from "react-icons/fa";

const DotSlide = ({ dot }) => {
  return (
    <li className="dot px-2">
      <i data-slide-target={dot.slideTarget}>
        <FaCircle />
      </i>
    </li>
  );
};

export default DotSlide;
