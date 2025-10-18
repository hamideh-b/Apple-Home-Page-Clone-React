const IphoneTradeInPromo = ({ iphoneTradeInPromo }) => {
  return (
    <div className="wrapper-promo mb-2 position-relative">
      <a
        href="#"
        className="position-absolute bottom-0 start-0 w-100 h-100  z-2"
      ></a>
      <div
        className={`${iphoneTradeInPromo.product} h-100 d-flex flex-column flex-wrap justify-content-start align-items-center`}
      >
        <div className="wrapper-promo-section text-center text-black">
          <div className={`${iphoneTradeInPromo.logo} mt-4`}></div>
          <p>{iphoneTradeInPromo.description}</p>
          <a
            href="#"
            className="btn btn-primary position-relative z-3 rounded-5 px-3 me-2"
          >
            {" "}
            {iphoneTradeInPromo.more}
          </a>
        </div>
      </div>
    </div>
  );
};

export default IphoneTradeInPromo;
