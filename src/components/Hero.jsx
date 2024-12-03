import React from 'react';
import hero from '../images/hero.png';
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <section
      className="bg-gray-900 pt-8"
      role="region"
      aria-labelledby="hero-heading"
    >
      {/* ARIA landmarks for improved accessibility */}
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div
          className="mr-auto place-self-center lg:col-span-7"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
        >
          {/* Add h1 for SEO with descriptive content */}
          <h1
            id="hero-heading"
            className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl text-white"
            data-aos="fade-up"
          >
            <Typewriter
              options={{
                strings: [
                  'Website Development',
                  'Custom Software Solutions',
                  'Mobile App Development',
                  'Creative UI/UX Design',
                  'E-Commerce Solutions',
                  'Tailored CRM Solutions'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p
            className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Transforming your ideas into digital reality. From sleek websites to powerful mobile apps, we deliver tailored solutions that meet your business needs.
          </p>
          <a
            href="tel:+918657655887"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-600 border border-transparent rounded-lg shadow-lg hover:bg-blue-500 hover:shadow-xl transition-all duration-300 focus:ring-4 focus:ring-blue-300"
            data-aos="fade-up"
            data-aos-delay="200"
            aria-label="Call us at +91 8657655887"
          >
            Call Us Now
          </a>
        </div>
        <div
          className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="100"
        >
          <img
            src={hero}
            alt="Professional mockup showcasing digital solutions by our team"
            loading="lazy"  // Improves performance
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
