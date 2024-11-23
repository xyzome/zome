import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import servicesData from './service.json';

const HeroSection = ({ service }) => (
  <section
    className="hero-section flex flex-wrap items-center justify-between py-20 px-10 bg-gray-900 text-white"
    data-aos="fade-up"
  >
    <div className="hero-image w-full md:w-1/2 mb-10 md:mb-0" data-aos="fade-left">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
    <div className="hero-content w-full md:w-1/2 pl-0 md:pl-10" data-aos="fade-right">
      <h2 className="text-4xl font-bold text-orange-500 mb-4">{service.title}</h2>
      <p className="text-lg text-gray-300 mb-6">{service.description}</p>
      <ul className="service-list space-y-3 text-gray-300">
        {service.bullets.map((bullet, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-orange-500">✔</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const StepsSection = ({ steps }) => (
  <section className="text-gray-600 body-font" data-aos="fade-up">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto"
        >
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-orange-200 pointer-events-none"></div>
          </div>
          <div
            className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm"
            data-aos="fade-left"
          >
            {index + 1}
          </div>
          <div
            className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
            data-aos="fade-right"
          >
            <div className="flex-shrink-0 w-24 h-24 bg-orange-100 text-orange-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{step.step}</h2>
              <p className="leading-relaxed">{step.detail}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Accordion = ({ items, open, toggleAccordion }) => (
  <div className="w-full">
    {items.map((item, index) => (
      <div key={index} className="mb-4">
        <button
          className={`w-full text-left px-4 py-3 text-lg font-medium bg-gray-700 rounded-lg focus:outline-none hover:bg-gray-600 ${open === index ? "text-orange-500" : "text-white"
            }`}
          onClick={() => toggleAccordion(index)}
          data-aos="fade-up"
        >
          {item.title}
        </button>
        {open === index && (
          <div className="px-4 py-3 text-gray-300 bg-gray-800 rounded-b-lg">
            {item.content}
          </div>
        )}
      </div>
    ))}
  </div>
);

const DevelopmentProcess = ({ service, open, toggleAccordion }) => (
  <section className="text-gray-300 bg-gray-900 body-font" data-aos="fade-up">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0" data-aos="zoom-in">
        <img
          className="object-cover object-center rounded shadow-lg"
          alt="Development Process"
          src={service.image}
        />
      </div>
      <div
        className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
        data-aos="fade-left"
      >
        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-white">
          Explore {service.title} Development Process
        </h1>
        <Accordion items={service.accordion} open={open} toggleAccordion={toggleAccordion} />
      </div>
    </div>
  </section>
);

function Common() {
  const location = useLocation();
  const { serviceId } = location.state || {};
  const [service, setService] = useState(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (serviceId) {
      const foundService = servicesData.services.find((s) => s.id === serviceId);
      setService(foundService);
    }
  }, [serviceId]);

  if (!service) return <p>Service not found.</p>;

  return (
    <>
      <HeroSection service={service} />
      <StepsSection steps={service.howWeWork} />
      <DevelopmentProcess service={service} open={open} toggleAccordion={setOpen} />
    </>
  );
}

export default Common;
