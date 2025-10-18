import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const ColumnSection = ({ columnSection }) => {
  const [click, setClick] = useState(false);
  return (
    <div className="column-section">
      <h3
        className={`${
          click ? "" : "border-h3"
        } fw-bolder m-0 d-flex  justify-content-between`}
        onClick={() => setClick((prev) => !prev)}
      >
        {columnSection.title}
        <span className="d-block d-md-none">
          {click ? <FaAngleUp fontSize={14} /> : <FaAngleDown fontSize={14} />}
        </span>
      </h3>
      <ul
        className={`${
          click ? "d-block fadeIn" : "d-none"
        } list-unstyled  d-md-block ps-sm-2 ps-md-0 m-0`}
      >
        {columnSection.ul.map((li) => {
          return (
            <li className="mb-2" key={li.id}>
              <a href="#" className="nav-link lh-sm">
                {li.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColumnSection;
