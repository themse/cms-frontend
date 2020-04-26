import React from "react";

import { SlideItem } from "./item";
import { slide } from "../../common/images";

// TODO get from db
const slides = [
  { uid: 1, name: "Apple iPad Pro", slug: "#", image: slide },
  //   { uid: 2, name: "Apple iPhone 6S", slug: "#", image: slide },
  //   { uid: 3, name: "Logitech K360", slug: "#", image: slide },
];

export const SlideShow = () => {
  return (
    <div id="slideshow0" className="owl-carousel" style={{ opacity: 1 }}>
      {slides.map((slide) => (
        <SlideItem
          key={slide.uid}
          name={slide.name}
          slug={slide.slug}
          image={slide.image}
        />
      ))}
    </div>
  );
};
