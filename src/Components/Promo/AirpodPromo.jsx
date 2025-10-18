const AirpodPromo = ({ airpodPromo }) => {
  return (
    <div className="wrapper-promo mb-2 position-relative">
      <a
        href="#"
        className="position-absolute bottom-0 start-0 w-100 h-100 z-2"
      ></a>
      <div
        className={`${airpodPromo.product} h-100 d-flex flex-column flex-wrap justify-content-end align-items-center`}
      >
        <div className="wrapper-promo-section text-center py-5 text-white">
          <h3>{airpodPromo.title}</h3>
          <p className="px-4">{airpodPromo.description}</p>
          <a
            href="#"
            className="btn btn-primary rounded-5 px-3 me-2 position-relative z-3"
          >
            {airpodPromo.more}
          </a>
          <a
            href="#"
            className="btn btn-outline-primary rounded-5 text-capitalize px-3 position-relative z-3"
          >
            {airpodPromo.buy}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AirpodPromo;
