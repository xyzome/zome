import React, { useRef, useEffect } from "react";
import carbon from '../images/carbonfix.png';
import funeral from '../images/funeral.png';
import perfume from '../images/perfume.png';
import dentist from '../images/dentist.png';
const CompletedProjects = () => {
    const scrollContainerRef = useRef(null); // Reference to the scrollable container
    const autoScrollRef = useRef(null); // To keep track of the auto-scroll interval

    const projects = [
        {
            id: 1,
            category: "NGO",
            title: "Carbon Compensation Platform",
            image: carbon,
            link:"https://carbonfix.in"
        },
        {
            id: 2,
            category: "Compassionate Care",
            title: "Funeral Service",
            image: funeral,
            link:"https://shahfuneralservice.in"
        },
        {
            id: 3,
            category: "Grocery",
            title: "Uimne Perfume ",
            image: perfume,
            link:"https://perfume-reactwebsite.vercel.app"
        },
        {
            id: 4,
            category: "Health Care",
            title: "Orthosqure ",
            image: dentist,
            link:"https://consult.orthosquare.com/"
        },
    ];

    // Function to handle manual scroll
    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.offsetWidth; // Scroll by the width of the container
            const scrollLeft = scrollContainerRef.current.scrollLeft; // Current scroll position
            const scrollWidth = scrollContainerRef.current.scrollWidth; // Total scrollable width

            if (direction === "next") {
                // If at the last card, reset to the first card without scrolling left
                if (scrollLeft + scrollAmount >= scrollWidth - 1) {
                    // Scroll back to the first card by resetting scroll position
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    // Scroll to the next card
                    scrollContainerRef.current.scrollBy({
                        left: scrollAmount,
                        behavior: "smooth",
                    });
                }
            } else {
                // Scroll backward (previous card)
                scrollContainerRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: "smooth",
                });
            }
        }
    };

    // Auto scroll functionality
    const startAutoScroll = () => {
        if (autoScrollRef.current) return; // Prevent multiple intervals
        autoScrollRef.current = setInterval(() => {
            handleScroll("next"); // Auto scroll to the next card
        }, 3000); // Scroll every 2 seconds
    };

    const stopAutoScroll = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current); // Stop auto scroll
            autoScrollRef.current = null;
        }
    };

    useEffect(() => {
        startAutoScroll(); // Start auto scroll when the component mounts

        // Cleanup on unmount to stop auto scroll
        return () => {
            stopAutoScroll();
        };
    }, []);

    return (
        <div className="bg-gray-900 text-white p-6 md:p-8">
            {/* Heading Section */}
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
                Completed Projects
            </h2>
            <p className="mb-6 md:mb-8 text-sm md:text-base text-center">
                *Elevating success, one completed project at a time - where innovation meets
                completion, and dreams turn into tangible achievements!*
            </p>

            {/* Scroll Buttons */}
            <div className="relative">
            
                {/* Horizontal Scroll Section */}
                <div
                    className="overflow-x-auto no-scrollbar " 
                    ref={scrollContainerRef} // Reference for scrolling
                    onMouseEnter={stopAutoScroll} // Stop auto scroll on hover
                    onMouseLeave={startAutoScroll} // Restart auto scroll on mouse leave
                >
                    <div
                        className="flex space-x-4 snap-x snap-mandatory"
                        style={{ minWidth: "100%" }}
                        
                    >
                        {projects.map((project) => (
                            <a
                                href={project.link}
                                target="_blank"
                                key={project.id}
                                className="flex-shrink-0 w-[90%] sm:w-1/2 md:w-1/3 snap-start bg-gray-900 rounded-lg shadow-lg hover:scale-90 transition-transform duration-200 cursor-pointer overflow-hidden border-2 border-white"

                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 sm:h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-sm sm:text-lg font-bold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-sm">
                                        {project.category}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedProjects;
