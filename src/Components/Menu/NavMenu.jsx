import { FaAngleRight } from "react-icons/fa";
import SubMenu from "./SubMenu";
import { useEffect, useRef, useState } from "react";

const NavMenu = ({ menu }) => {
  const subMenu = useRef();
  const [mouse, setMouse] = useState(false);
  const [subMenuHeight, setSubMenuHeight] = useState(0);
  useEffect(() => {
    setSubMenuHeight(subMenu.current.scrollHeight);
  }, [menu]);
  useEffect(() => {
    const handleScroll = () => {
      setMouse(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <li
      className="nav-item nav-hover "
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
    >
      <a
        href="#"
        className="h-100 py-md-0 nav-link d-flex justify-content-between align-items-baseline"
      >
        {menu.name}
        <FaAngleRight className="fa fa-angle-right d-none" />
      </a>
      <div
        className={`${
          mouse ? "nav-curtain" : ""
        } nav-blur w-100 d-none d-md-block position-absolute top-100 start-0`}
      ></div>
      <div
        className="sub-menu vw-100 bg-dark d-none d-md-block position-absolute top-100 start-0 z-n1 overflow-hidden"
        style={{ height: mouse ? `${subMenuHeight}px` : "0px" }}
        ref={subMenu}
        onMouseEnter={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
      >
        <div
          className={`${
            mouse ? "" : "invisible"
          } h-100 container-fluid col-12 col-md-12 col-lg-11 col-xl-9 col-xxl-8`}
        >
          <div className={`${mouse ? "opacity-sub-menu" : ""} d-flex py-4`}>
            {menu.subMenu.map((elem) => {
              return <SubMenu subMenu={elem} key={elem.id} />;
            })}
          </div>
        </div>
      </div>
    </li>
  );
};

export default NavMenu;
