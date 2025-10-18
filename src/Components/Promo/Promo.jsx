import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPromo } from "../../Redux/promo/promoSlice";
import "./promo.scss";
import Skeleton from "react-loading-skeleton";
import AirpodPromo from "./AirpodPromo";
import AirpodProPromo from "./AirpodProPromo";
import IpadminiPromo from "./ipadminiPromo";
import WatchUltraPromo from "./WatchUltraPromo";
import IphoneTradeInPromo from "./IphoneTradeInPromo";
import CardPromo from "./CardPromo";
import Error from "../Error/Error";
const Promo = () => {
  const { promo, loading, error } = useSelector((state) => state.promo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPromo());
  }, [dispatch]);
  return (
    <section className="mb-2" id="promo">
      {loading ? <div className="row mx-0 px-2 justify-content-around">
      {Array(6)
        .fill()
        .map((_, i) => (
          <div className="col-12 col-md-5" key={i}>
            <Skeleton height={300} />
          </div>
        ))}
    </div> : null}

      {error ? <Error error={error} /> : null}
      <div className="promo-container">
        {promo?.map((elem) => {
          switch (elem.product) {
            case "airpod-promo": {
              return <AirpodPromo airpodPromo={elem} key={elem.id} />;
            }
            case "airpod-pro-promo": {
              return <AirpodProPromo airpodProPromo={elem} key={elem.id} />;
            }
            case "promo-ipad-mini": {
              return <IpadminiPromo ipadminiPromo={elem} key={elem.id} />;
            }
            case "watch-ultra": {
              return <WatchUltraPromo watchUltra={elem} key={elem.id} />;
            }
            case "iphone-tradeIn": {
              return (
                <IphoneTradeInPromo iphoneTradeInPromo={elem} key={elem.id} />
              );
            }
            case "card-promo": {
              return <CardPromo cardPromo={elem} key={elem.id} />;
            }
          }
        })}
      </div>
    </section>
  );
};

export default Promo;
