import React from "react";
import { Title } from "./common/Title";
import { brand } from "@/assets/data/dummydata";

const Brand = () => {
  return (
    <>
      <section className='brand'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='WE ARE PROUD TO WORK WITH THESE BRANDS' />
          </div>
          <div className='brand-content grid-6 py' >
            {brand.map((item) => (
              <div className='images' key={item.id} >
                <img src={item.cover} alt={item.id} width='60%' height='60%' />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
