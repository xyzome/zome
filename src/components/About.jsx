import { Users, CheckCircle, Award, Briefcase } from 'lucide-react';
import CountUp from 'react-countup';
import methodology from '../images/methodology.png';
import { Link } from 'react-router-dom';
import scrollToTop from '../hooks/Scroll';


const AboutUs = () => {
   

    return (
        <div className="bg-gray-900 text-gray-100 ">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white" data-aos="fade-up">
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-300">
                        We don’t follow trends; we set them. Our innovative approach is tailored to help your business unlock its fullest potential.
                    </p>
                </div>
                <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-gray-700 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -top-20 -right-40 w-80 h-80 bg-gray-600 rounded-full opacity-20 blur-3xl"></div>
            </section>

            {/* Methodology Section */}
            <section className="py-16 px-4 lg:px-20 bg-gray-800" data-aos="fade-right">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Methodology</h2>
                <div className="relative flex flex-wrap lg:flex-nowrap items-center lg:space-x-10">
                    <div className="lg:w-1/2">
                        <img
                            src={methodology}
                            alt="Our Process"
                            className="w-full rounded-lg shadow-lg"
                            data-aos="fade-left"
                        />
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0 space-y-6">
                        <div data-aos="fade-up">
                            <h3 className="text-2xl font-semibold text-indigo-400">Unleash Success</h3>
                            <p className="text-gray-300">
                                A synergy of innovation and precision. We don’t follow trends; we set them.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-2xl font-semibold text-indigo-400">Maximize Potential</h3>
                            <p className="text-gray-300">
                                Every challenge becomes an opportunity. Unleash untapped power and soar to new heights.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <h3 className="text-2xl font-semibold text-indigo-400">Unique Solutions</h3>
                            <p className="text-gray-300">
                                Where uniqueness meets functionality and aspirations find their bespoke reality.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <h3 className="text-2xl font-semibold text-indigo-400">Our Precision</h3>
                            <p className="text-gray-300">
                                Precision you can trust. Reliability you can depend on – because quality is our commitment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 bg-gray-700" data-aos="zoom-in-up">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">Achievements</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12">
                        {[
                            { number: 2, label: 'Years', icon: Briefcase, description: 'Working With Passion' },
                            { number: 69, label: 'Customers', icon: Users, description: 'Satisfied Customers' },
                            { number: 50, label: 'Projects', icon: CheckCircle, description: 'We Have Completed' },
                            { number: 10, label: 'Awards', icon: Award, description: 'Achievement For Service' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center space-y-2" data-aos="fade-up">
                                <div className="w-16 h-16 flex items-center justify-center bg-gray-600 rounded-full text-white mb-4">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-4xl font-bold text-gray-200">
                                    <CountUp start={0} end={item.number} duration={15} /><sup>+</sup>
                                </h3>
                                <p className="text-xl font-semibold">{item.label}</p>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* WHY CHOOSE US Section */}
            <section className="py-16 px-4 bg-gray-800 text-gray-100 cursor-pointer">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-left">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group relative bg-gray-700 rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
                            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-70 transition duration-300"></div>
                            <div className="p-8 space-y-4 relative z-10">
                                <h3 className="text-3xl font-bold text-indigo-300">
                                    <CountUp start={0} end={98} duration={10} suffix="%" />
                                </h3>
                                <p className="font-medium text-gray-300">Viewers</p>
                                <p className="text-gray-400">
                                    Unlocking the extraordinary requires an audience as diverse and dynamic as the dreams we dare to chase.
                                </p>
                            </div>
                        </div>
                        <div className="group relative bg-gray-700 rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-70 transition duration-300"></div>
                            <div className="p-8 space-y-4 relative z-10">
                                <h3 className="text-3xl font-bold text-indigo-300">
                                    <CountUp start={0} end={9} duration={10} suffix="%" />
                                </h3>
                                <p className="font-medium text-gray-300">Keyword</p>
                                <p className="text-gray-400">
                                    Unlocking potential, one keyword at a time – where relevance becomes resonance.
                                </p>
                            </div>
                        </div>
                        <div className="group relative bg-gray-700 rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay="400">
                            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-70 transition duration-300"></div>
                            <div className="p-8 space-y-4 relative z-10">
                                <h3 className="text-3xl font-bold text-indigo-300">
                                    <CountUp start={0} end={10} duration={10} suffix="%" />
                                </h3>
                                <p className="font-medium text-gray-300">Time</p>
                                <p className="text-gray-400">
                                    The clock ticks, but with us, time accelerates – from conception to innovation, we’re always ahead of the game.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Us Section */}
            <section className="relative w-full h-[500px]">
                {/* Background Image with Blur and Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{
                        backgroundImage: 'url("https://lightleader.in/wp-content/uploads/2018/11/contactus-background.png")', // Replace with your desired image URL
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>

                {/* Circle Text Overlay */}
                <Link
                    to="/contact"
                    className="relative z-10 flex items-center justify-center w-full h-full"
                    onClick={scrollToTop}
                    data-aos="fade-up" data-aos-delay="400">
                    <div className="flex items-center justify-center w-32 sm:w-48 md:w-60 lg:w-60 h-32 sm:h-48 md:h-60 lg:h-60 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <span className="text-sm sm:text-lg md:text-2xl font-extrabold text-white drop-shadow-lg cursor-pointer">
                            Contact with Us
                        </span>
                    </div>
                </Link>
            </section>

        </div>
    );
};

export default AboutUs;
