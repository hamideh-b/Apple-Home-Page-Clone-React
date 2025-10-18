import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Error from "../Error/Error";
import { fetchFooterNav } from "../../Redux/footerNav/footerNavSlice";
import "./footerNav.scss";
import ColumnSection from "./ColumnSection";
const FooterNav = () => {
  const { footerNav, loading, error } = useSelector((state) => state.footerNav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFooterNav());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="row mx-0 justify-content-between">
          <Skeleton height={300} />
        </div>
      ) : null}

      {error ? <Error error={error} /> : null}
      <nav
        className="m-0 d-flex flex-wrap justify-content-between "
        id="nav-footer"
      >
        {footerNav?.map((elem) => {
          return (
            <div
              className="nav-column col-12 col-md-2 text-muted lh-lg"
              key={elem.id}
            >
              {elem.columnSection.map((colsec) => {
                return <ColumnSection columnSection={colsec} key={colsec.id} />;
              })}
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default FooterNav;
