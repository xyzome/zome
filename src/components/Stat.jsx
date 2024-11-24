import React from 'react';
import CountUp from 'react-countup';

function Stat() {
  return (
    <section className="bg-gray-900" id="about"> {/* Set bg-gray-900 to the root section */}
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        {/* Use flex-row for mobile, grid for larger screens */}
        <dl className="flex flex-row flex-wrap sm:grid sm:grid-cols-3 gap-8 mx-auto text-gray-900 dark:text-white">
          <div
            className="flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <dt className="mb-2 text-xl md:text-4xl font-extrabold">
              <CountUp start={0} end={50} duration={15} />+
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">Projects Completed</dd>
          </div>
          <div
            className="flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <dt className="mb-2 text-xl md:text-4xl font-extrabold">
              <CountUp start={0} end={30} duration={15} />+
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">Satisfied Clients</dd>
          </div>
          <div
            className="flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <dt className="mb-2 text-xl md:text-4xl font-extrabold">
              <CountUp start={0} end={10} duration={10} />+
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">Team Members</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Stat;
