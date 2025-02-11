import Link from "next/link";
import { TitleSm } from "./Title";

export const Card = ({ data, show, path }) => {
  return (
    <>
      <div className="card" data-aos="fade-up" data-aos-duration="1000">
        <div className="card-img" data-aos="zoom-in" data-aos-duration="1200">
          <img src={data.cover} alt={data.title} />
        </div>
        <div className="card-details" data-aos="fade-up" data-aos-delay="200">
          <Link href={`${path}/${data.id}`} className="title-link">
            <TitleSm title={data.title} data="fade-right" data-aos-duration="1000" />
          </Link>

          <div className="flex" data-aos="fade-up" data-aos-delay="300">
            <span>{data.catgeory}</span> {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul data-aos="fade-left" data-aos-delay="400">
              {data.desc.map((text, i) => (
                <li key={i} data-aos="fade-left" data-aos-delay={i * 100 + 500}>
                  - {text.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
