import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Hero = () => {
 

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" data-aos="fade-down">
        <div className="container">
          <TitleLogo title="zome" caption="" className="logobg" data-aos="fade-up" />
          <h1 className="hero-title" data-aos="fade-down">
            WE BUILD DIGITAL EXPERIENCES
          </h1>

          <div className="sub-heading">
            <TitleSm title="WEBSITES" data="fade-right"  /> <span data-aos="fade-right" >.</span>
            <TitleSm title="BRANDING" data="fade-left"  /> <span data-aos="fade-left" >.</span>
            <TitleSm title="DIGITAL MARKETING" data="fade-down"  />


          </div>
        </div>
      </section>

      {/* HERO CONTENT SECTION */}
      <section className="hero-sec" data-aos="fade-up">
        <div className="container">
          <div className="heading-title" data-aos="zoom-in">
            <Title title="Your One-Stop Digital Agency for Success" />
            <p>
              Unlock your brand's potential with tailored strategies and cutting-edge solutions. We bring ideas to life,
              ensuring impactful results and lasting impressions. Let's grow together!
            </p>
          </div>

          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div
                className="box"
                key={i}
                data-aos="flip-up"
                data-aos-delay={`${i * 100}`}
              >
                <span className="green">{item.icon}</span>
                <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <section data-aos="fade-up" data-aos-delay="100">
        <Expertise />
      </section>

      <section data-aos="zoom-in" data-aos-delay="200">
        <Banner />
      </section>

      <section data-aos="fade-right" data-aos-delay="300">
        <Testimonial />
      </section>

      <section data-aos="flip-left" data-aos-delay="500">
        <Brand />
      </section>
      
      <section data-aos="fade-left" data-aos-delay="400">
        <ShowCase />
      </section>

     

      {/* <div className="text-center" data-aos="fade-up">
        <Title title="Latest news & articles" />
      </div>

      <section data-aos="zoom-in" data-aos-delay="200">
        <BlogCard />
      </section> */}
    </>
  );
};

export default Hero;
