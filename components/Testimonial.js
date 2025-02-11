import React, { useEffect } from "react";
import { TitleSm } from "./common/Title";
import { testimonial } from "@/assets/data/dummydata";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow">
      <button className="next" onClick={onClick}>
        <RiArrowRightSLine size={25} />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow">
      <button className="prev" onClick={onClick}>
        <RiArrowLeftSLine size={25} />
      </button>
    </div>
  );
}

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="testimonial"  >
        <div className="container">
          <div className="heading-title"  >
            <TitleSm title="WHAT CLIENTS SAY ABOUT OUR WORK" />
          </div>
          <div className="cards">
            <Slider {...settings}>
              {testimonial.map((user, index) => (
                <div key={user.id} data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div className="card">
                    <div className="image" data-aos="flip-left">
                      <div className="img">
                        <img src={user.cover} alt={user.name} />
                      </div>
                      <div className="img-text">
                        <h3>{user.name}</h3>
                        <span>{user.post}</span>
                      </div>
                    </div>
                    <div className="details"  >
                      <p>{user.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
