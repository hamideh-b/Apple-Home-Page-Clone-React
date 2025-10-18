import Hero from "../Hero/Hero";
import Promo from "../Promo/Promo";
import Slider from "../Slider/Slider";
const Main = () => {
  return (
    <main className="position-relative" style={{ paddingTop: "50px" }}>
      <Hero />
      <Promo />
      <Slider />
    </main>
  );
};

export default Main;
