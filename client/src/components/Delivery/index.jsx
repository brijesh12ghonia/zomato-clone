import React, { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard";

// components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCarousel from "./RestaurantCarousel";

// redux
import { useSelector } from "react-redux";

const Delivery = () => {
  const [ restaurantList, setRestaurantList ] = useState([]);

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.restaurants
  );

  useEffect(() => {
    reduxState && setRestaurantList(reduxState);
  }, [ reduxState ]);

  return (
    <>
      <DeliveryCarousel />
      <RestaurantCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
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