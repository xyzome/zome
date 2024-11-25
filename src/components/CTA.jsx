import React from 'react';

function CTA() {
  return (
    <section className="!bg-gray-900" aria-labelledby="cta-section">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2
            id="cta-section"
            className="mb-4 text-4xl tracking-tight font-extrabold text-white" // Ensure the text is visible on dark background
            data-aos="fade-up"
          >
            Let's find more that brings us together.
          </h2>
          <p
            className="mb-8 font-light text-gray-300 sm:text-xl" // Adjust text color for dark background
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Zome helps you connect with friends, family, and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch, and Marketplace.
          </p>
        </div>
        <div className="flex justify-center mt-4 lg:mt-0">
          <a
            href="tel:+91 8657655887"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gray-900 border border-gray-800 rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 focus:ring-4 focus:ring-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-500"
            data-aos="fade-up"
            data-aos-delay="200"
            aria-label="Call us at +91 8657655887"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
