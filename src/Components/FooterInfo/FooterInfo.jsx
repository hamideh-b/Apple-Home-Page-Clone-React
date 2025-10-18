import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterInfo } from "../../Redux/footerInfo/footerInfoSlice";
import "./footerInfo.scss";
import Skeleton from "react-loading-skeleton";
import Error from "../Error/Error";
const FooterInfo = () => {
  const { footerInfo, loading, error } = useSelector(
    (state) => state.footerInfo
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFooterInfo());
  }, [dispatch]);
  return (
    <section>
      {loading ? (
        <div className="row mx-0 justify-content-between">
          <Skeleton height={300} />
        </div>
      ) : null}

      {error ? <Error error={error} /> : null}
      <ul className="list-unstyled text-muted py-3 border-bottom global-footer-info">
        {footerInfo?.map((elem) => {
          return (
            <li
              className="pb-2"
              key={elem.id}
              dangerouslySetInnerHTML={{ __html: elem.li }}
            ></li>
          );
        })}
      </ul>
    </section>
  );
};

export default FooterInfo;
