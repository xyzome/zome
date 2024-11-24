import React from 'react';
import hero from '../images/hero.png';
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <section className="bg-gray-900 pt-8"> {/* Ensure the background color is set at the section level */}
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div
          className="mr-auto place-self-center lg:col-span-7"
          data-aos="fade-right" // Add AOS attribute for animation
          data-aos-offset="200" // Offset from the viewport
          data-aos-delay="100" // Delay before the animation starts
        >
          <h1
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white" // Text color remains white for contrast
            data-aos="fade-up" // Add AOS attribute for animation
          >
            <Typewriter
              options={{
                strings: ['Innovative Web and App Development Services', 'Custom Software Solutions', 'Mobile App Development', 'Creative UI/UX Design', 'E-commerce Solutions', 'Tailored CRM Solutions'],
                autoStart: true,
                loop: true
              }}
            />
          </h1>
          <p
            className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl" // Make sure text color contrasts well with bg
            data-aos="fade-up" // Add AOS attribute for animation
            data-aos-delay="200" // Delay before the animation starts
          >
            Transforming your ideas into digital reality. From sleek websites to powerful mobile apps, we deliver tailored solutions that meet your business needs.
          </p>
          <a
            href="tel:+91 8657655887"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 hover:shadow-xl transition-all duration-300 focus:ring-4 focus:ring-gray-600"
            data-aos="fade-up"
            data-aos-delay="200"
            aria-label="Call us at +91 8657655887"
          >
            Call Us Now
          </a>
        </div>
        <div
          className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          data-aos="fade-left" // Add AOS attribute for animation
          data-aos-offset="200" // Offset from the viewport
          data-aos-delay="100" // Delay before the animation starts
        >
          <img src={hero} alt="mockup" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
