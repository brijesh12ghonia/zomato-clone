import React, { useState } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import { useParams } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import InfoButton from "../components/Restaurant/InfoButton";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import Tabs from "../components/Restaurant/Tabs";
import CartContainer from "../components/Cart/CartContainer";

const RestaurantLayout = ({ children: Component, ...props }) => {
  const [ restaurant, setRestaurant ] = useState({
    images: [
      {
        location: "https://b.zmtcdn.com/data/pictures/chains/5/18140605/531c128c78ea7481b8c1d2321cb73404.jpg",
      },
      {
        location: "https://b.zmtcdn.com/data/pictures/chains/5/18140605/2176bece2c953f11ac571677b70c8cda.jpg",
      },
      {
        location: "https://b.zmtcdn.com/data/reviews_photos/875/cd1fd7a5440851ea93d1a7d445523875_1580824229.jpg",
      },
      {
        location: "https://b.zmtcdn.com/data/reviews_photos/351/63f4ad1dea84f9a6b5f22d8aa312f351_1580824230.jpg",
      },
      {
        location: "https://b.zmtcdn.com/data/reviews_photos/70b/dcfe6d12adc66532d65b6d0fca8d270b_1580824232.jpg",
      },
    ],
    name: "Deliure & The Eatrium",
    cuisine: [ "Bakery", "Fast Food", "Pizza", "Sandwich", "Street Food", "Desserts", "Beverages", "Shake" ],
    address: "Mahim, Mumbai",
    restaurantRating: 3.9,
    deliveryRating: 4.3,
  });

  const { id } = useParams();
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
        <ImageGrid images={ restaurant.images } />
        <RestaurantInfo { ...restaurant } />
        <div className="my-4 flex flex-wrap gap-3 mx-auto">
          <InfoButton isActive="true">
            <TiStarOutline /> Add Review
          </InfoButton>
          <InfoButton>
            <RiDirectionLine /> Direction
          </InfoButton>
          <InfoButton>
            <BiBookmarkPlus /> Bookmark
          </InfoButton>
          <InfoButton>
            <RiShareForwardLine /> Share
          </InfoButton>
        </div>
        <div className="my-10 sticky bg-white top-0 pt-2 z-10">
          <Tabs />
        </div>
        { Component }
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;