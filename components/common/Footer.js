import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <footer data-aos="fade-up">
        <div className="container">
          <div className="grid-4">
            <div className="logo" data-aos="fade-right" data-aos-delay="100">
              <TitleLogo title="zome" caption="" className="logobg" />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Saturday from 11 am to 10 pm
              </span>
              <br />
              <br />
              <h3>+91 86576 55887</h3>
              <h3>+91 82861 94040</h3>
              <br />
              <a href="tel:+918657655887">
                <button className="button-primary" data-aos="zoom-in" data-aos-delay="200">
                  Call For Audit
                </button>
              </a>

            </div>

            <ul data-aos="fade-up" data-aos-delay="300">
              <h3>COMPANY</h3>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/agency">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/showcase">Showcase</Link></li>
              {/* <li><Link href="/blogs">Blog</Link></li> */}
              <li><Link href="/contact">Contact</Link></li>
            </ul>

            <ul data-aos="fade-up" data-aos-delay="400">
              <h3>SERVICES</h3>
              <li><Link href="#">Web Design & Development</Link></li>
              <li><Link href="#">Branding & Creative Services</Link></li>
              <li><Link href="#">Digital Marketing</Link></li>
              <li><Link href="#">E-Commerce</Link></li>
            </ul>

            <ul data-aos="fade-left" data-aos-delay="500">
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="https://www.instagram.com/zome_agency/">
                    <AiFillInstagram size={25} data-aos="zoom-in" data-aos-delay="600" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/zome-tech-agency-949b24343/">
                    <AiFillLinkedin size={25} data-aos="zoom-in" data-aos-delay="700" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <BsFacebook size={25} data-aos="zoom-in" data-aos-delay="800" />
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          <div className="legal connect py" data-aos="fade-up" data-aos-delay="900">
            <div className="text">
              {/* <span>© 2023 THE SEVEN. ALL RIGHTS RESERVED.</span> */}
            </div>
            <div className="connect">
              <span>ZOME</span>
              <span> &nbsp; | &nbsp; </span>
              <span>IT SOLUTIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
