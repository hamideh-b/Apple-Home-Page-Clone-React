import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterbreadcrumb } from "../../Redux/footerbreadcrumb/footerbreadcrumbSlice";
import Breadcrumb from "./breadcrumb";
import Skeleton from "react-loading-skeleton";
import Error from "../Error/Error";

const Footerbreadcrumb = () => {
  const { footerbreadcrumb, loading, error } = useSelector(
    (state) => state.footerbreadcrumb
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFooterbreadcrumb());
  }, [dispatch]);
  return (
    <section className="text-muted" style={{ fontSize: "12px" }}>
      <div className="footer-shop border-bottom ">
        <p className="text-muted mt-3">
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </p>
      </div>
      <div className="row m-0 mt-3">
        <div className="local col-12 col-md-2 col-lg-1 p-0 order-md-2 order-lg-3">
          <a href="#" className="nav-link text-muted text-md-end ">
            United States
          </a>
        </div>
        <div className="copy-right col-12 col-md-10 col-lg-4 p-0">
          Copyright &copy; 2024 Apple Inc. All rights reserved.
        </div>
        <nav
          className="col-12 col-md-8 col-lg-7 p-0 order-md-3 order-lg-2"
          style={{ "--bs-breadcrumb-divider": "'|'" }}
        >
          <ul className="list-unstyled text-muted breadcrumb" id="breadcrumb">
            {loading ? (
              <div className="row mx-0 justify-content-between">
                <Skeleton height={300} />
              </div>
            ) : null}

            {error ? <Error error={error} /> : null}
            {footerbreadcrumb?.map((elem) => {
              return <Breadcrumb breadcrumb={elem} key={elem.id} />;
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Footerbreadcrumb;
