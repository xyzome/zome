import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <section className="agency bg-top" data-aos="fade-up">
        <div className="container">
          <div className="heading-title" data-aos="fade-up" data-aos-delay="100">
            <TitleSm title="ABOUT AGENCY" /> <br />
            <br />
            <Title title="The last digital agency you will ever need!" className="title-bg" />
          </div>

          <div className="content flex1">
            <div className="left w-60 py" data-aos="fade-right" data-aos-delay="200">
              <TitleSm title="Transforming Your Ideas Into Innovative Digital Solutions Since 2022" />
              <p className="desc-p">
                At our core, we specialize in turning visionary business ideas into cutting-edge digital products that deliver results.
                With over two decades of experience, we blend creativity, strategy, and technology to craft solutions tailored to your unique needs.
                From conceptualization to execution, our team ensures every step aligns with your goals, empowering your business to thrive in a dynamic digital world.
                Let's build something remarkable together.
              </p>

              <div className="grid-3">
                <div className="box" data-aos="fade-up" data-aos-delay="300">
                  <h1 className="indigo">2+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box" data-aos="fade-up" data-aos-delay="400">
                  <h1 className="indigo">69+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className="box" data-aos="fade-up" data-aos-delay="500">
                  <h1 className="indigo">5+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml" data-aos="zoom-in" data-aos-delay="300">
              <img src="/images/s1.jpg" alt="Img" className="round" width="100%" height="100%" />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py" data-aos="zoom-in" data-aos-delay="400">
              <img src="/images/s4.jpg" alt="Img" className="round" width="100%" height="100%" />
            </div>
            <div className="right w-60 ml" data-aos="fade-left" data-aos-delay="500">
              <TitleSm title="Our Mission" />
              <br />
              <p className="mission-p">
                Our mission is to empower businesses by delivering innovative digital solutions that drive growth and success.
                We are committed to excellence, focusing on creating impactful products that solve real-world challenges.
                By combining creativity, expertise, and cutting-edge technology, we aim to help businesses thrive in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div data-aos="fade-up" data-aos-delay="600">
        <Brand />
      </div>

      <div data-aos="fade-up" data-aos-delay="700">
        <Testimonial />
      </div>

      <div data-aos="fade-up" data-aos-delay="800">
        <Banner />
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
