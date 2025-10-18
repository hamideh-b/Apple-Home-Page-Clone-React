const WatchUltraPromo = ({ watchUltra }) => {
  return (
    <div className="wrapper-promo mb-2 position-relative">
      <a
        href="#"
        className="position-absolute bottom-0 start-0 w-100 h-100  z-2"
      ></a>
      <div
        className={`${watchUltra.product} h-100 d-flex flex-column flex-wrap justify-content-start align-items-center`}
      >
        <div className="wrapper-promo-section text-center text-white py-5">
          <div className={`${watchUltra.logo} w-100`}></div>
          <p>{watchUltra.description}</p>
          <a
            href="#"
            className="btn btn-primary position-relative z-3 rounded-5 px-3 me-2"
          >
            {watchUltra.more}
          </a>
          <a
            href="#"
            className="btn btn-outline-primary position-relative z-3 rounded-5 text-capitalize px-3"
          >
            {watchUltra.buy}
          </a>
        </div>
      </div>
    </div>
  );
};

export default WatchUltraPromo;
