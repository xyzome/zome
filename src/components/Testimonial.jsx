import React, { useState } from "react";

const FeedbackSection = () => {
  // Sample feedback data
  const feedbacks = [
    {
      "id": 1,
      "message": "Zome's software development team delivered our project on time and with exceptional quality. They truly understood our needs and exceeded expectations.",
      "name": "Rajeev Verma"
    },
    {
      "id": 2,
      "message": "Working with Zome was a seamless experience. Their attention to detail and problem-solving skills helped us build a robust application that performs flawlessly.",
      "name": "Neelam Reddy"
    },
    {
      "id": 3,
      "message": "The Zome team transformed our ideas into a fully functional software solution. Their expertise in development and client-focused approach was outstanding.",
      "name": "Amit Patel"
    },
    {
      "id": 4,
      "message": "We partnered with Zome for our software development needs, and the results were impressive. The team delivered high-quality work and excellent support.",
      "name": "Sanjay Kumar"
    },
    {
      "id": 5,
      "message": "Zome’s software development services helped us streamline our business processes. Their innovative solutions and timely delivery were truly valuable to our company.",
      "name": "Meena Iyer"
    },
    {
      "id": 6,
      "message": "The Zome team provided exceptional software development services. Their technical expertise, communication, and commitment to our project were top-notch.",
      "name": "Vikram Joshi"
    }
  ]


  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle navigation to previous feedback
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? feedbacks.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Handle navigation to next feedback
  const handleNext = () => {
    const newIndex = currentIndex === feedbacks.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      className="bg-gray-900 text-white py-12"
      aria-labelledby="feedback-heading"
    >
      <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Side - Heading and Navigation */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2
            id="feedback-heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Some Feedback From Client
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            We are proud to share the positive feedback we have received from
            many of the families and individuals who we supported during their
            difficult times.{" "}
            {/* <a
              className="text-blue-700 underline"
              href="https://www.google.com/search?q=shah+funeral+ser+ice&oq=shah+funeral+ser+ice&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yDQgCEAAYhgMYgAQYigUyDQgDEAAYhgMYgAQYigUyCggEEAAYgAQYogQyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQgyNDQ4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&lqi=ChRzaGFoIGZ1bmVyYWwgc2VydmljZUiJ1pH4rbqAgAhaIhAAEAEQAhgAGAEYAiIUc2hhaCBmdW5lcmFsIHNlcnZpY2WSARFhbWJ1bGFuY2Vfc2VydmljZaoBVxABKhgiFHNoYWggZnVuZXJhbCBzZXJ2aWNlKAAyHxABIhtDGt5-ILvxb-osuqZwjRO9-FK7Y8NB_TByqkQyGBACIhRzaGFoIGZ1bmVyYWwgc2VydmljZQ#lrd=0xa91473f1d36b6e23:0x654650597d9f379a,3,,,,&rlimm=7297608591490365338"
              target="_blank"
              rel="noopener noreferrer"
            >
              Share Your Experience
            </a> */}
          </p>
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrev}
              aria-label="Previous Feedback"
              className="w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-200 flex items-center justify-center shadow-lg"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Feedback"
              className="w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-200 flex items-center justify-center shadow-lg"
            >
              →
            </button>
          </div>
        </div>

        {/* Right Side - Feedback Cards */}
        <div className="w-full lg:w-2/3 flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6">
          {/* Feedback Card 1 */}
          <article
            className="bg-gray-600   rounded-lg p-6 flex-1 shadow-xl border border-gray-100"
            aria-label={`Feedback from ${feedbacks[currentIndex].name}`}
            data-aos="fade-up"

          >
            <p className="text-white text-lg mb-4">
              {feedbacks[currentIndex].message}
            </p>
            <p className="font-bold text-[#04083e]">{feedbacks[currentIndex].name}</p>
          </article>
          {/* Feedback Card 2 */}
          <article
            className="bg-gray-600 rounded-lg p-6 flex-1 shadow-xl border border-gray-100"
            aria-label={`Feedback from ${feedbacks[(currentIndex + 1) % feedbacks.length].name}`}
            data-aos="fade-down"

          >
            <p className="text-white text-lg mb-4">
              {feedbacks[(currentIndex + 1) % feedbacks.length].message}
            </p>
            <p className="font-bold text-[#04083e]">{feedbacks[(currentIndex + 1) % feedbacks.length].name}</p>
          </article>
        </div>
      </header>
    </section>
  );
};

export default FeedbackSection;
