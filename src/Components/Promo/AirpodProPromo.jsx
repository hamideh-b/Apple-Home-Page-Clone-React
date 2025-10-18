const AirpodProPromo = ({ airpodProPromo }) => {
  return (
    <div className="wrapper-promo mb-2 position-relative">
      <a
        href="#"
        className="position-absolute bottom-0 start-0 w-100 h-100 z-2"
      ></a>
      <div
        className={`${airpodProPromo.product} h-100 d-flex flex-column flex-wrap justify-content-end align-items-center`}
      >
        <div className="wrapper-promo-section text-center text-white py-5">
          <h3>{airpodProPromo.title}</h3>
          <p className="px-4">{airpodProPromo.description}</p>
          <a
            href="#"
            className="btn btn-primary position-relative z-3 rounded-5 px-3 me-2"
          >
            {airpodProPromo.more}
          </a>
          <a
            href="#"
            className="btn btn-outline-primary position-relative z-3 rounded-5 text-capitalize px-3"
          >
            {airpodProPromo.buy}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AirpodProPromo;
