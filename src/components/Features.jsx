import React from 'react';

function Features() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2
            className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
            data-aos="fade-up"
          >
            Our Comprehensive Development Process
          </h2>
          <p
            className="text-gray-500 sm:text-xl dark:text-gray-400"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At ZOME, we follow a structured process to ensure the successful development of your app or website, from gathering requirements to final release.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-white lg:w-10 lg:h-10 dark:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Gathering Requirements</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Understanding your needs and defining the project scope to ensure we meet all your expectations and business goals.
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-white lg:w-10 lg:h-10 dark:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Design</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Creating intuitive and visually appealing designs that provide a seamless user experience and align with your brand identity.
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-white lg:w-10 lg:h-10 dark:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path
                  d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Development</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Writing clean and efficient code to bring your designs to life, ensuring functionality and scalability.
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-white lg:w-10 lg:h-10 dark:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582z"
                  clipRule="evenodd"
                />
                <path
                  d="M6 10.8a2 2 0 00-2-2v5a2 2 0 002-2v-1.2z"
                />
                <path
                  d="M10 9a1 1 0 01-1-1v-1.5a1 1 0 112 0V8a1 1 0 01-1 1zm1.5 1v4h-3v-4h3z"
                />
                <path
                  fillRule="evenodd"
                  d="M12.5 14h-1.586a1 1 0 01-.707-.293l-1.829-1.828a1 1 0 00-1.414 0l-1.828 1.828A1 1 0 014.086 14H2.5a.5.5 0 01-.5-.5V6.5a.5.5 0 01.5-.5h2.586a1 1 0 01.707.293L8 7.828l2.707-2.707a1 1 0 011.414 0l2.707 2.707L15.5 6h2.5a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Testing</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Performing rigorous testing to identify and fix any issues, ensuring your app or website is ready for launch.
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-white lg:w-10 lg:h-10 dark:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a7 7 0 00-7 7v5a7 7 0 007 7h6a7 7 0 007-7V10a7 7 0 00-7-7H10zM9 5h2v2H9V5zm2 8H9v-1h2v1zm-2-4h2v2H9V9z"
                  clipRule="evenodd"
                />
                <path
                  d="M6 10v5a6 6 0 006 6h6a6 6 0 006-6V10a6 6 0 00-6-6H12a6 6 0 00-6 6z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Deployment</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Deploying your application to a live environment and ensuring everything is functioning as expected.
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-white lg:w-10 lg:h-10 dark:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.5A1.5 1.5 0 013.5 3h13a1.5 1.5 0 011.5 1.5V15a1.5 1.5 0 01-1.5 1.5H3.5A1.5 1.5 0 012 15V4.5zM3.5 5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V5a.5.5 0 00-.5-.5H3.5zM15 6H9a1 1 0 00-1 1v8a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Maintenance</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Providing ongoing support and maintenance to ensure your app or website continues to perform well and meets your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
