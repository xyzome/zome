import React, { useRef, useEffect } from "react";
import carbon from '../images/carbonfix.png';
import funeral from '../images/funeral.png';
import perfume from '../images/perfume.png';
import dentist from '../images/dentist.png';

const CompletedProjects = () => {
    const scrollContainerRef = useRef(null);
    const autoScrollRef = useRef(null);

    const projects = [
        {
            id: 1,
            category: "NGO",
            title: "Carbon Compensation Platform",
            image: carbon,
            link: "https://carbonfix.in",
            alt: "Carbon Compensation Platform homepage screenshot showing an eco-friendly interface.",
        },
        {
            id: 2,
            category: "Compassionate Care",
            title: "Funeral Service",
            image: funeral,
            link: "https://shahfuneralservice.in",
            alt: "Funeral Service platform with organized service options for end-of-life arrangements.",
        },
        {
            id: 3,
            category: "Grocery",
            title: "Uimne Perfume",
            image: perfume,
            link: "https://perfume-reactwebsite.vercel.app",
            alt: "Uimne Perfume website with a luxurious collection of fragrances.",
        },
        {
            id: 4,
            category: "Health Care",
            title: "Orthosqure",
            image: dentist,
            link: "https://consult.orthosquare.com/",
            alt: "Orthosqure dental consultation website homepage featuring patient-focused services.",
        },
    ];

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.offsetWidth;
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const scrollWidth = scrollContainerRef.current.scrollWidth;

            if (direction === "next") {
                if (scrollLeft + scrollAmount >= scrollWidth - 1) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scrollContainerRef.current.scrollBy({
                        left: scrollAmount,
                        behavior: "smooth",
                    });
                }
            } else {
                scrollContainerRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: "smooth",
                });
            }
        }
    };

    const startAutoScroll = () => {
        if (autoScrollRef.current) return;
        autoScrollRef.current = setInterval(() => {
            handleScroll("next");
        }, 4000);
    };

    const stopAutoScroll = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
            autoScrollRef.current = null;
        }
    };

    useEffect(() => {
        startAutoScroll();
        return () => {
            stopAutoScroll();
        };
    }, []);

    return (
        <>
         

            <div className="bg-gray-900 text-white p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
                    Completed Projects
                </h2>
                <p className="mb-6 md:mb-8 text-sm md:text-base text-center">
                    Elevating success, one completed project at a time - where innovation meets
                    completion, and dreams turn into tangible achievements!
                </p>

                <div className="relative">
                    <div
                        className="overflow-x-auto no-scrollbar"
                        ref={scrollContainerRef}
                        onMouseEnter={stopAutoScroll}
                        onMouseLeave={startAutoScroll}
                        role="region"
                        aria-label="Scrollable list of completed projects"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "ArrowLeft") handleScroll("prev");
                            if (e.key === "ArrowRight") handleScroll("next");
                        }}
                    >
                        <div className="flex space-x-4 snap-x snap-mandatory" style={{ minWidth: "100%" }}>
                            {projects.map((project) => (
                                <article
                                    key={project.id}
                                    className="flex-shrink-0 w-[90%] sm:w-1/2 md:w-1/3 snap-start bg-gray-900 rounded-lg shadow-lg hover:scale-95 transition-transform duration-200 cursor-pointer overflow-hidden border-2 border-white"
                                    aria-labelledby={`project-title-${project.id}`}
                                    role="article"
                                >
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={project.image}
                                            alt={project.alt}
                                            className="w-full h-40 sm:h-48 object-cover"
                                        />
                                    </a>
                                    <div className="p-4">
                                        <h3
                                            id={`project-title-${project.id}`}
                                            className="text-sm sm:text-lg font-bold mb-2"
                                        >
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-xs sm:text-sm">
                                            {project.category}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompletedProjects;
