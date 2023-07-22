import React, { useState } from "react";

//components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {
  const [ restaurantList, setRestaurantList ] = useState([
    {
      _id: "124ksjf435245jv34fg1",
      isPro: true,
      isOff: true,
      name: "Dale's Eden",
      restaurantReviewValue: "3.3",
      cuisine: [ "Bakery", "Desserts", "Mithai", "Street Food", "Fast Food" ],
      averageCost: "100",
    },
    {
      _id: "124ksjf435245jv34fg2",
      isPro: true,
      isOff: false,
      name: "Maiz Mexican Kitchen",
      restaurantReviewValue: "4.0",
      cuisine: [ "Mexican", "Healthy Food", "Salad" ],
      averageCost: "100",
    },
    {
      _id: "124ksjf435245jv34fg3",
      isPro: true,
      isOff: true,
      name: "La Pino'z Pizza",
      restaurantReviewValue: "3.9",
      cuisine: [ "Pizza", "Italian", "Fast Food", "Beverages", "Pasta" ],
      averageCost: "100",
    },
  ]);
  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold text-gray-800">
        Delivery Restaurants in Mumbai
      </h1>
      <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        { restaurantList.map((restaurant) => (
          <RestaurantCard { ...restaurant } key={ restaurant._id } />
        )) }
      </div>
    </>
  );
};

export default Delivery;