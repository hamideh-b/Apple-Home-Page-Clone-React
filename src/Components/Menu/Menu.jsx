import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../Redux/menu/menuSlice";
import "./menu.scss";
import { FaApple } from "react-icons/fa";
import RightSide from "./RightSide";
import NavMenu from "./NavMenu";
const Menu = () => {
  const { menu, loading, error } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top py-md-0">
      <div className="h-100 container-fluid col-12 col-md-12 col-lg-11 col-xl-9 col-xxl-8">
        <a href="#" className="navbar-brand align-middle">
          <FaApple className="text-light" style={{ marginBottom: "6px" }} />
        </a>
        <RightSide />
        <button
          className="navbar-toggler navbar-toggler-icon text-light"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        ></button>
        <div className="h-100 collapse navbar-collapse" id="menu">
          <ul className="h-100 navbar-nav w-100 justify-content-between">
            {menu?.map((li) => {
              return <NavMenu menu={li} key={li.id} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
