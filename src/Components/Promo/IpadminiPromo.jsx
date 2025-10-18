const IpadminiPromo = ({ ipadminiPromo }) => {
  return (
    <div className="wrapper-promo mb-2 position-relative">
      <a
        href="#"
        className="position-absolute bottom-0 start-0 w-100 h-100  z-2"
      ></a>
      <div className={`${ipadminiPromo.product} h-100 align-items-center`}>
        <div className="wrapper-promo-section h-100 text-center  text-black d-flex flex-column justify-content-between pt-5 pb-4">
          <div className="top">
            <h3>{ipadminiPromo.title}</h3>
            <p>{ipadminiPromo.description}</p>
            <a
              href="#"
              className="btn btn-primary rounded-5 px-3 position-relative z-3 me-2"
            >
              {ipadminiPromo.more}
            </a>
            <a
              href="#"
              className="btn btn-outline-primary rounded-5 text-capitalize px-3 position-relative z-3"
            >
              {ipadminiPromo.buy}
            </a>
          </div>
          <div className="bottom">
            <p className="text-muted" style={{ fontSize: "14px" }}>
              {ipadminiPromo.intelligenceDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpadminiPromo;
