import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import RestaurantCarouselCard from "./RestaurantCarouselCard";

const RestaurantCarousel = () => {
  const restaurants = [
    {
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png",
      title: "McDonald's",
      distance: "29 min",
    },
    {
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017911.png",
      title: "La Pino'z Pizza",
      distance: "21 min",
    },
    {
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png",
      title: "Domino's Pizza",
      distance: "25 min",
    },
    {
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520651.png",
      title: "Subway",
      distance: "16 min",
    },
    {
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png",
      title: "Burger King",
      distance: "35 min",
    },
    {
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617874818.png",
      title: "KFC",
      distance: "36 min",
    },
    {
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715114.png",
      title: "FreshMenu",
      distance: "36 min",
    },
    {
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/3c2a7f7e5fc15add88437a4891a7c229_1675833518.png",
      title: "The Belgian Waffle Co.",
      distance: "29 min",
    },
    {
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179319.png",
      title: "Theobroma",
      distance: "15 min",
    },
    {
      image: "https://b.zmtcdn.com/data/brand_creatives/logos/7e4c022edf3d02b992442f3e94e9dbb6_1605071544.png",
      title: "Deliure & The Eatrium",
      distance: "33 min",
    },
  ];

  const slideConfig = {
    slidesPerView: 3,
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
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
    modules: [ Navigation ],
    className: "mySwiper",
    navigation: true,
  };

  return (
    <>
      <h1 className="text-xl mt-4 md:mt-8 md:text-3xl md:font-semibold mb-10 text-gray-800">
        Top brands for you
      </h1>
      <div className="w-full">
        <Swiper { ...slideConfig }>
          { restaurants.map((restaurant, index) => (
            <SwiperSlide key={ index }>
              <RestaurantCarouselCard { ...restaurant } />
            </SwiperSlide>
          )) }
        </Swiper>
      </div>
    </>
  );
};

export default RestaurantCarousel;