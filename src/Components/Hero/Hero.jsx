import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHero } from "../../Redux/hero/heroSlice";
import "./hero.scss";
import Skeleton from "react-loading-skeleton";
import HeroCard from "./HeroCard";
import HeroLogo from "./HeroLogo";
import Error from "../Error/Error";
const Hero = () => {
  const { hero, loading, error } = useSelector((state) => state.hero);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHero());
  }, [dispatch]);

  return (
    <section className="mb-3" id="hero">
      {loading ? (
        <div className="row mx-0 justify-content-between">
          <Skeleton height={300} />
        </div>
      ) : null}

      {error ? <Error error={error} /> : null}
      {hero?.map((elem) => {
        return (
          <div
            className="wrapper-product w-100 mb-2 position-relative"
            key={elem.id}
          >
            <a
              href="#"
              className="position-absolute bottom-0 start-0 w-100 h-100 z-2"
            ></a>
            {elem.logo ? (
              <HeroLogo heroLogo={elem} />
            ) : (
              <HeroCard heroCard={elem} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Hero;
