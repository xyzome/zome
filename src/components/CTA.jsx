import React from "react";

function CTA() {
  return (
    <>
    

      <section className="!bg-gray-900" aria-labelledby="cta-heading">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h1
              id="cta-heading"
              className="mb-4 text-4xl tracking-tight font-extrabold text-white"
              data-aos="fade-up"
            >
              Discover More That Brings Us Together
            </h1>
            <p
              className="mb-8 font-light text-gray-300 sm:text-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Zome connects you with friends, explores communities, and brings a seamless shopping experience. Everything you need is just a step away!
            </p>
          </div>
          <div className="flex justify-center mt-4 lg:mt-0">
            <a
              href="tel:+918657655887"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-600 border border-transparent rounded-lg shadow-lg hover:bg-blue-500 hover:shadow-xl transition-all duration-300 focus:ring-4 focus:ring-blue-300"
              data-aos="fade-up"
              data-aos-delay="200"
              aria-label="Call Zome at +91 8657655887 for more information"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
