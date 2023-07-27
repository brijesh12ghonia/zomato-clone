import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// components
import PictureCarouselCard from "../PictureCarouselCard";

const NightLifeCarousel = () => {
  const [ dining ] = useState([
    {
      image: "https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674824942.jpg",
      title: "18 Lit Party Places",
      places: "18 Places",
    },
    {
      image: "https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078887.jpg",
      title: "12 Finest Microbreweries",
      places: "10 Places",
    },
    {
      image: "https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674824942.jpg",
      title: "18 Lit Party Places",
      places: "18 Places",
    },
    {
      image: "https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078887.jpg",
      title: "12 Finest Microbreweries",
      places: "10 Places",
    },
    {
      image: "https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674824942.jpg",
      title: "18 Lit Party Places",
      places: "18 Places",
    },
    {
      image: "https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078887.jpg",
      title: "12 Finest Microbreweries",
      places: "10 Places",
    },
  ]);

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
    modules: [ Navigation ],
    className: "diningSwiper",
    navigation: true,
  };

  return (
    <div className="w-full">
      <Swiper { ...slideConfig }>
        { dining.map((item, index) => (
          <SwiperSlide key={ index }>
            <PictureCarouselCard { ...item } />
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
  );
};

export default NightLifeCarousel;