import React from 'react';

const OurOfferings = () => {
    const offerings = [
        {
            id: 1,
            icon: '/api/placeholder/72/72',
            title: 'UI And UX Design',
            description: 'UI dazzles with style; UX delights with substance—where aesthetics meet functionality for an unforgettable user experience. In this interplay of design and usability, every pixel evokes emotion, resonating deeply with users.',
            tools: ['Figma', 'Sketch', 'Photoshop Training'],
        },
        {
            id: 2,
            icon: '/api/placeholder/72/72',
            title: 'Cloud Hosting',
            description: 'Skyrocket your digital presence with our cloud hosting solutions - where speed, security, and scalability converge in the virtual sky. Elevate your website to new heights with seamless performance and 24/7 accessibility.',
            tools: ['AWS', 'Microsoft Azure', 'VPS'],
        },
        {
            id: 3,
            icon: '/api/placeholder/72/72',
            title: 'Digital Marketing',
            description: 'Dive into the dynamic world of digital marketing, where creativity meets strategy to amplify your online presence. Our solutions drive engagement, spark conversations, and fuel success in the ever-evolving digital landscape.',
            tools: ['SEO', 'SMM', 'Performance Marketing'],
        },
        {
            id: 3,
            icon: '/api/placeholder/72/72',
            title: 'Digital Marketing',
            description: 'Dive into the dynamic world of digital marketing, where creativity meets strategy to amplify your online presence. Our solutions drive engagement, spark conversations, and fuel success in the ever-evolving digital landscape.',
            tools: ['SEO', 'SMM', 'Performance Marketing'],
        },
        {
            id: 3,
            icon: '/api/placeholder/72/72',
            title: 'Digital Marketing',
            description: 'Dive into the dynamic world of digital marketing, where creativity meets strategy to amplify your online presence. Our solutions drive engagement, spark conversations, and fuel success in the ever-evolving digital landscape.',
            tools: ['SEO', 'SMM', 'Performance Marketing'],
        },
       
    ];

    return (
        <div className="bg-gray-900 text-white p-8 overflow-x-auto no-scrollbar ">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Offerings</h2>
            <p className="mb-8 text-center text-lg">*Turning Digital Dreams into Seamless Realities: Your Website, Our Expertise.*</p>

            {/* Scrollable Section */}
            <div className="relative">
                <div className="flex space-x-8  snap-x snap-mandatory p-4 mx-auto max-w-7xl   overflow-x-auto no-scrollbar ">
                    {offerings.map((offering) => (
                        <div key={offering.id} className="flex-shrink-0 w-80">
                            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <div className="bg-blue-600 w-18 h-18 rounded-full flex items-center justify-center mx-auto mt-6 mb-4">
                                    <img src={offering.icon} alt={offering.title} className="w-10 h-10 object-contain" />
                                </div>
                                <div className="flex-grow p-6">
                                    <h3 className="text-xl font-bold mb-2 text-white">{offering.title}</h3>
                                    <p className="text-gray-400 mb-4 text-sm">{offering.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {offering.tools.map((tool, index) => (
                                            <span key={index} className="bg-gray-800 rounded-full px-4 py-1 text-sm text-gray-400 transition-all hover:bg-blue-500 hover:text-white">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next and Previous Buttons */}
                <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default OurOfferings;
