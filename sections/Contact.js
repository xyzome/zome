import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiHelpCircle, FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <section className="contact bg-top" data-aos="fade-up">
        <div className="container">
          <div className="heading-title" data-aos="fade-up" data-aos-delay="100">
            <TitleSm title="CONTACT" />
            <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>

          <div className="content py flex1">
            {/* LEFT SIDE (Contact Details) */}
            <div className="left w-30" data-aos="fade-right" data-aos-delay="200">
              <div className="contact-deatils">
                <div className="box">
                  <FiPhoneCall size={30} className="icons" />
                  <h3> 86576 55887 / 82861 94040</h3>
                  <span>Call us: Mon - Sat 11:00 - 9:00</span>
                </div>
                <div className="box" data-aos="fade-left" data-aos-delay="300">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>India</h3>
                  <span>Andheri West, Maharashtra Mumbai 400058</span>
                </div>
                <div className="box" data-aos="fade-left" data-aos-delay="400">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>zomeagency@gmail.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
              </div>

              <ul className="social-icons" data-aos="fade-up" data-aos-delay="500">
                <li className="icon">
                  <Link href="https://www.instagram.com/zome_agency">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li className="icon">
                  <Link href="https://www.linkedin.com/in/zome-tech-agency-949b24343/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
                <li className="icon">
                  <Link href="#">
                    <BsFacebook size={25} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE (Contact Form) */}
            <div className="right w-70" data-aos="fade-left" data-aos-delay="200">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our proposal.
              </p>

              <form data-aos="fade-up" data-aos-delay="300">
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input type="text" />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="inputs">
                    <span>Your budget</span>
                    <input type="text" />
                  </div>
                  <div className="inputs">
                    <span>Timeframe</span>
                    <input type="text" />
                  </div>
                </div>

                <div className="inputs">
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols="30" rows="10"></textarea>
                </div>

                <button className="button-primary" data-aos="zoom-in" data-aos-delay="400">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
