import React from "react"
import { Title } from "./common/Title"
import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const ShowCase = () => {
  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Selected cases' />
          </div>
          <div className='hero-content grid-3 py' >
            {showcase.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
          
        </div>
      </section>
    </>
  )
}

export default ShowCase
