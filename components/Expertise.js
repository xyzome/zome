import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className="expertise"  >
        <div className="container">
          <div className="heading-title" data-aos-delay="100">
            <Title title="Our Expertise" />
            <p data-aos-delay="200">
              Empowering your vision with innovative solutions and strategic precision. From concept to execution, we
              deliver excellence that drives success.
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item, index) => (
              <div
                key={item.id}
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`} // Dynamic delay for staggered animations
              >
                <Card data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
