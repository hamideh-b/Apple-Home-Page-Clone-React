import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSlider } from "../../Redux/slider/sliderSlice";
import "./slider.scss";
import Slide from "./Slide";
import DotSlide from "./DotSlide";
import Skeleton from "react-loading-skeleton";
import Error from "../Error/Error";

const Slider = () => {
  const { slider, loading, error } = useSelector((state) => state.slider);
  const dispatch = useDispatch();
  const sliderRef = useRef();

  useEffect(() => {
    dispatch(fetchSlider());
  }, [dispatch]);
  useEffect(() => {
    if (!slider || slider.length === 0) return;
    let timer;
    let time;
    let slides = document.querySelector(".slider");
    let dotSlide = document.querySelector(".dot-slide");
    let dot = [...document.querySelectorAll(".dot i")];
    let item = [...document.querySelectorAll(".slide")];
    item.forEach((elem) => {
      elem.style.left = "200%";
    });
    slides.firstElementChild.style.left = "0%";
    slides.firstElementChild.nextElementSibling.style.left = "100%";
    slides.lastElementChild.style.left = "-100%";
    const sliderStyle = () => {
      item.forEach((elem, index) => {
        if (elem.style.left == "0%") {
          elem.style.opacity = 1;
          elem.lastElementChild.classList.add("innerStyle");
          elem.parentElement.nextElementSibling.children[index].style.color =
            "#333333";
        } else {
          elem.style.opacity = 0.5;
          elem.lastElementChild.classList.remove("innerStyle");
          elem.parentElement.nextElementSibling.children[index].style.color =
            "#757575";
        }
      });
    };
    sliderStyle();
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }
    function next(transition, delay) {
      item.forEach((elem) => {
        elem.style.display = "block";
        elem.style.transitionDuration = transition;
      });
      slides.lastElementChild.style.left = "-200%";
      slides.firstElementChild.style.left = "-100%";
      slides.firstElementChild.nextElementSibling.style.left = `0%`;
      slides.firstElementChild.nextElementSibling.nextElementSibling.style.left =
        "100%";
      sliderStyle();
      let firstSlide = slides.firstElementChild;
      setTimeout(() => {
        slides.lastElementChild.style.display = "none";
        slides.lastElementChild.style.left = "200%";
        slides.append(firstSlide);
      }, delay);
    }
    function addClassOnScroll() {
      time = 1000;
      if (isElementInViewport(slides)) {
        timer = setTimeout(nextSlide, time);
      }
    }
    function nextSlide() {
      next(`300ms`, 300);
      time = 5000;
      timer = setTimeout(nextSlide, time);
    }
    function previousSlide(transition) {
      item.forEach((elem) => {
        elem.style.display = "block";
        elem.style.transitionDuration = transition;
      });
      let last = slides.lastElementChild;
      slides.insertBefore(last, slides.firstElementChild);
      slides.lastElementChild.style.display = "none";
      slides.lastElementChild.style.left = "-200%";
      setTimeout(() => {
        slides.lastElementChild.style.display = "block";
      }, 5);
      setTimeout(() => {
        slides.firstElementChild.style.left = "0%";
        slides.firstElementChild.nextElementSibling.style.left = "100%";
        slides.firstElementChild.nextElementSibling.nextElementSibling.style.left =
          "200%";
        slides.lastElementChild.style.left = "-100%";
        sliderStyle();
      }, 25);
    }
    slides.addEventListener("click", (e) => {
      let left = e.target.parentElement.parentElement.style.left;
      if (left == "-100%") {
        clearTimeout(timer);
        previousSlide(`300ms`);
        timer = setTimeout(nextSlide, time);
      } else if (left == "100%") {
        clearTimeout(timer);
        nextSlide();
      }
    });
    dot.forEach((elem) => {
      elem.addEventListener("click", () => {
        let dotTarget = elem.getAttribute("data-slide-target");
        let idSlide = document.querySelector(`${dotTarget}`);
        let IdSlideNumber = parseInt(idSlide.getAttribute("id").match(/\d+/g));
        let item = [...document.querySelectorAll(".slide")];
        let currentIdSlide = item[0].getAttribute("id").match(/\d+/g);
        let currentIdSlideNumber = parseInt(currentIdSlide[0]);
        let differ = Math.abs(IdSlideNumber - currentIdSlideNumber);
        clearTimeout(timer);
        if (currentIdSlideNumber < IdSlideNumber) {
          for (let i = 0; i < differ; i++) {
            setTimeout(() => {
              next(`50ms`, `50`);
            }, 100 * i);
          }
        } else {
          for (let i = 0; i < differ; i++) {
            setTimeout(() => {
              previousSlide(`50ms`);
            }, 100 * i);
          }
        }
      });
    });
    window.addEventListener("load", () => {
      clearTimeout(timer);
      addClassOnScroll();
    });
    window.addEventListener("scroll", () => {
      clearTimeout(timer);
      addClassOnScroll();
    });
  }, [slider]);

  return (
    <section id="slider" className="mb-3">
      <div className="100vw overflow-hidden" id="swiper">
        <div ref={sliderRef} className="slider mx-auto position-relative mb-3">
          {loading ? (
                        <div className="row mx-0 justify-content-between">
                          <Skeleton height={500} />
                        </div>
                      ) : null}
                      {error ? <Error error={error} /> : null}
          {slider?.map((elem, index) => {
            return <Slide slide={elem} index={index} key={elem.id} />;
          })}
        </div>
        <ul className="dot-slide d-flex justify-content-center list-unstyled m-0 ">
          {slider?.map((elem) => {
            return <DotSlide dot={elem} key={elem.id} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Slider;
