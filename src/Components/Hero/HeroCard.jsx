const HeroCard = ({ heroCard }) => {
  return (
    <div
      className={`${heroCard.product} h-100 d-flex flex-column flex-wrap align-items-center justify-content-between position-relative`}
    >
      <div className="wrapper-product-top text-white text-center">
        <h2 className="pt-4">{heroCard.title}</h2>
        <p className="text-capitalize">{heroCard.topDescription}</p>
      </div>
      <div className="wrapper-product-bottom text-center ">
        <a
          href="#"
          className="btn btn-primary rounded-5 me-2 position-relative z-3"
        >
          {heroCard.more}
        </a>
        <a
          href="#"
          className="btn btn-outline-primary rounded-5 text-capitalize position-relative z-3"
        >
          {heroCard.buy}
        </a>
        <p className="text-secondary py-3">{heroCard.bottomDescription}</p>
      </div>
    </div>
  );
};

export default HeroCard;
