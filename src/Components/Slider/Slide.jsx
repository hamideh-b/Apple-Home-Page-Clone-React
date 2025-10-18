import { FaCircle } from "react-icons/fa";

const Slide = ({ slide }) => {
  return (
    <div
      className="slide h-100 position-absolute top-0 mx-auto overflow-hidden"
      id={`slide${slide.id}`}
      style={{ transform: "translateX(7.5px)" }}
    >
      <picture>
        <source media="(max-width: 767.8px)" srcSet={slide.srcset1} />
        <source
          media="(min-width:768px) and (max-width: 1067.8px)"
          srcSet={slide.srcset2}
        />
        <source
          media="(min-width:1068px) and (max-width: 1444px)"
          srcSet={slide.srcset3}
        />
        <img src={slide.img} alt="" />
      </picture>
      <div className="inner px-3 ps-md-4 ps-lg-5 position-absolute w-100 d-block text-center d-md-flex flex-wrap align-items-md-center  justify-content-md-start">
        <div className="text-white d-md-flex justify-content-md-start align-items-md-baseline order-md-1">
          <h4 className="m-0 h-100  text-center mx-md-2 ">{slide.title}</h4>
          <p className="h-100 my-2 m-md-0">
            <i
              className="d-none d-md-inline align-middle
                            "
            >
              <FaCircle fontSize={8} />
            </i>
            {slide.description}
          </p>
        </div>
        <a
          href=""
          className="d-inline-block px-3 py-1 py-xl-2 btn btn-light rounded-5 order-md-0 me-md-2 position-relative z-3"
        >
          {slide.button}
        </a>
      </div>
    </div>
  );
};

export default Slide;
