import Hero from './Hero';
import Stat from './Stat';
import Features from './Features';
import CTA from './CTA';
import Testimonial from './Testimonial';
import Projects from './Projects';
// import Offering from './Offering';
function Homepage() {
  return (
    <>
      <Hero />
      <Stat />
      {/* <Offering /> */}
      <Features />
      <Projects />
      <CTA />
      <Testimonial />
    </>
  );
}

export default Homepage;
