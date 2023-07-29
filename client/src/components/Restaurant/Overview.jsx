import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// components
import MenuCollection from "./MenuCollection";
import MenuSimilarRestaurantCard from "./MenuSimilarRestaurantCard";
import ReviewCard from "../Reviews/ReviewCard";
import MapView from "./MapView";

const Overview = () => {
  const [ restaurant, setRestaurant ] = useState({
    _id: "124ksjf435245jv34fg1",
    isPro: true,
    isOff: true,
    name: "Deliure & The Eatrium",
    restaurantReviewValue: "3.3",
    cuisine: [ "Bakery", "Fast Food", "Pizza", "Sandwich", "Street Food", "Desserts", "Beverages", "Shake" ],
    averageCost: "150",
  });
  const [ menuImages, setMenuImages ] = useState([
    "https://b.zmtcdn.com/data/menus/939/18691939/cef6946d38ec74df1cd34a737542ec89.jpg",
    "https://b.zmtcdn.com/data/menus/939/18691939/f54630805e17e28624c5dbc92243dc91.jpg",
    "https://b.zmtcdn.com/data/menus/939/18691939/eb367fb0bbf59c952a3b25f810074845.jpg",
    "https://b.zmtcdn.com/data/menus/939/18691939/602b8528ac6e45ffab1cd9179d9a3b0e.jpg",
    "https://b.zmtcdn.com/data/menus/939/18691939/9600aaae46b15d61abcbccc61c0c2405.jpg",
    "https://b.zmtcdn.com/data/menus/939/18691939/ff43e0494863f80b5e4abfbca3bb65e9.jpg",
  ]);
  const [ reviews, setReviews ] = useState([
    {
      rating: 3.5,
      isRestaurantReview: false,
      createdAt: "Sat Jul 29 2023 16:22:36 GMT+0530 (India Standard Time)",
      reviewText: "Very bad experience.",
    },
    {
      rating: 4.5,
      isRestaurantReview: false,
      createdAt: "Sat Jul 29 2023 16:22:36 GMT+0530 (India Standard Time)",
      reviewText: "Very good experience.",
    },
  ]);
  const { id } = useParams;

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
    modules: [ Navigation ],
    className: "diningSwiper",
    navigation: true,
  };

  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  return (
    <div className="flex flex-col gap-5 md:flex-row relative">
      <div className="w-full md:w-8/12">
        <h2 className="font-semibold text-lg md:text-xl my-4">
          About this place
        </h2>
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-medium">Menu</h4>
          <Link to={ `/restaurant/${id}/menu` }>
            <span className="flex items-center gap-1 text-zomato-400">
              See all menu <IoMdArrowDropright />
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 my-4">
          <MenuCollection menuTitle="Menu" pages={ menuImages.length } images={ menuImages } />
        </div>

        <h4 className="text-lg font-medium my-4">Cuisines</h4>
        <div className="flex flex-wrap gap-2">
          { restaurant?.cuisine.map((cuisineName, index) => (
            <span key={ index } className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full" >
              { cuisineName }
            </span>
          )) }
        </div>

        <div className="my-4">
          <h4 className="text-lg font-medium">Average Cost</h4>
          <h6>
            ₹{ restaurant.averageCost } for one order (approx.)
          </h6>
          <small className="text-gray-500">
            Exclusive of applicable taxes and charges, if any
          </small>
        </div>

        <div className="flex flex-col-reverse">
          <div className="my-4">
            <h4 className="text-lg font-medium">
              { restaurant.name } Reviews
            </h4>
            {/* <ReactStars count={ 5 } onChange={ (newRating) => console.log(newRating) } size={ 24 } activeColor="#ffd700" /> */ }
            { reviews.map((review, index) => (
              <ReviewCard { ...review } key={ index } />
            )) }
          </div>

          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Swiper { ...slideConfig }>
                <SwiperSlide>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/7/37567/44b11d4fc81176c56b5bf2e794565195_featured_v2.jpg"
                    title="Dale's Eden"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/7/34147/90a51ef8d5b39cb2e6594d0dfeae4492_featured_v2.jpg"
                    title="Brownie Point"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/9/32029/352ca1e600f5ea7fe9e39d8b1d940b08_featured_v2.jpg"
                    title="Birdy's"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/2/18647902/b002055529f04f172e4eb68b254aefc4_featured_v2.jpg"
                    title="Cakery Bakery"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="my-4 w-full md:hidden flex flex-col gap-4">
            <MapView title="Deliure & The Eatrium" phno="+919369368585" mapLocation={ getLatLong("19.04092391545002, 72.84190482766545") } address="Ground Floor, Geetanjali Building, LJ Road, Mahim, Mumbai" />
          </div>
        </div>
      </div>
      <aside style={ { height: "fit-content" } } className="hidden md:flex md:w-4/12 sticky rounded-xl top-20 bg-white p-3 shadow-md flex-col gap-4" >
        <MapView title="Deliure & The Eatrium" phno="+919369368585" mapLocation={ getLatLong("19.04092391545002, 72.84190482766545") } address="Ground Floor, Geetanjali Building, LJ Road, Mahim, Mumbai" />
      </aside>
    </div>
  );
};

export default Overview;