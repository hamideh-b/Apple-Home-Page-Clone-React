const HeroLogo = ({ heroLogo }) => {
  return (
    <div
      className={`${heroLogo.product} d-flex h-100 flex-column flex-wrap align-items-center justify-content-start`}
    >
      <div className="wrapper-product-top pt-4 w-100">
        <div className={`${heroLogo.logo} p-md-5`}></div>
      </div>
      <div className="wrapper-product-bottom text-center">
        <p className="text-capitalize fw-medium" style={{ fontSize: "28px" }}>
          thinstant classNameic
        </p>
        <a
          href="#"
          className="btn btn-primary rounded-5 me-2 position-relative z-3"
        >
          {heroLogo.more}
        </a>
        <a
          href="#"
          className="btn btn-outline-primary rounded-5 text-capitalize position-relative z-3"
        >
          {heroLogo.buy}
        </a>
      </div>
    </div>
  );
};

export default HeroLogo;
