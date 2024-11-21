import React from "react";

const ScrollButton = ({ direction, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 focus:outline-none`}
            aria-label={direction === "next" ? "Scroll Next" : "Scroll Previous"}
        >
            {direction === "next" ? (
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
            ) : (
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
            )}
        </button>
    );
};

export default ScrollButton;
