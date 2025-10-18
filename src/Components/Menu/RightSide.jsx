import { IoBagOutline, IoSearchSharp } from "react-icons/io5";
const RightSide = () => {
  return (
    <div className="ms-auto order-md-2 ps-md-1">
      <ul className="nav ">
        <li className="nav-item">
          <a href="#" className="nav-link pe-0 px-md-2 px-lg-3">
            <IoSearchSharp
              style={{ marginBottom: "3px" }}
              fontSize={16}
              color="#ffffff8c"
            />
          </a>
        </li>
        <li className="nav-item text-end">
          <a href="#" className="nav-link pe-md-0 ps-md-1 ">
            <IoBagOutline
              fontSize={16}
              style={{ marginBottom: "6px" }}
              color="#ffffff8c"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RightSide;
