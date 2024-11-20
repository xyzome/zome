import React from 'react';

function Testimonial() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Testimonial 1 */}
          <figure
            className="flex-1 max-w-screen-md mx-auto lg:mx-0 mb-8 lg:mb-0"
            data-aos="fade-up"
          >
            <svg
              className="h-12 w-12 mx-auto mb-3 text-gray-400 dark:text-gray-600 sm:h-10 sm:w-10 md:h-8 md:w-8" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
            </svg>
            <blockquote>
              <p className="text-l font-medium text-gray-900 dark:text-white">
                ZOME solutions have been instrumental in revolutionizing our operations. Our innovative technology and dedicated support team made our transition to a new system seamless and efficient.
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">Sam Shaikh</div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Manager Of ZOME</div>
              </div>
            </figcaption>
          </figure>

          {/* Testimonial 2 */}
          <figure
            className="flex-1 max-w-screen-md mx-auto lg:mx-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <svg className="h-12 w-12 mx-auto mb-3 text-gray-400 dark:text-gray-600 sm:h-10 sm:w-10 md:h-8 md:w-8" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
            </svg>
            <blockquote>
              <p className="text-l font-medium text-gray-900 dark:text-white">
                An incredible tool that offers a wide range of customizable features. The user-friendly interface and comprehensive documentation make it ideal for both beginners and advanced users.
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">Badsha Shaikh</div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO Of ZOME</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
