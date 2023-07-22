import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// components
import PictureCarouselCard from "../PictureCarouselCard";

const DiningCarousel = () => {
  const [ dining ] = useState([
    {
      image: "	https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
      title: "6 Unique Dining Experiences",
      places: "6 Places",
    },
    {
      image: "https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252747.jpg",
      title: "16 Best Insta-worthy Places",
      places: "15 Places",
    },
    {
      image: "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674824266.jpg",
      title: "19 Newly Opened Restaurants",
      places: "15 Places",
    },
    {
      image: "https://b.zmtcdn.com/data/collections/1b191329f2c37a474c428131841d488b_1674826227.jpg",
      title: "13 Sea View Dining Places",
      places: "13 Places",
    },
    {
      image: "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247359.jpg",
      title: "10 Trending Restaurants",
      places: "9 Places",
    },
    {
      image: "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674824128.jpg",
      title: "14 Romantic Dining Places",
      places: "13 Places",
    },
    {
      image: "https://b.zmtcdn.com/data/collections/e001bf04df21d6d29048e8507a1fab80_1674825025.jpg",
      title: "18 Best Luxury Dining Places",
      places: "18 Places",
    },
    {
      image: "https://b.zmtcdn.com/data/collections/e6bfe8754351488bfd6b2ea3bf8963ab_1517385246.jpg",
      title: "7 Places Serving 24x7",
      places: "7 Places",
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

export default DiningCarousel;