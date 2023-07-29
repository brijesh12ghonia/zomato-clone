import React from "react";

const RestaurantSmCard = ({ image, title, distance }) => {
  return (
    <>
      <div className="lg:hidden rounded-md w-full cursor-pointer">
        <div className="w-full h-26">
          <img className="w-full h-full object-center rounded-full shadow-lg" src={ image } alt={ title } />
        </div>
        <div>
          <h3 className="text-sm my-1 text-center font-medium text-gray-900">
            { title }
          </h3>
        </div>
        <div>
          <h3 className="text-sm my-1 text-center font-light">
            { distance }
          </h3>
        </div>
      </div>
    </>
  );
};

const RestaurantLgCard = ({ image, title, distance }) => {
  return (
    <>
      <div className="hidden lg:block rounded-md w-full cursor-pointer">
        <div className="w-full h-26">
          <img className="w-full h-full object-center rounded-full shadow-lg" src={ image } alt={ title } />
        </div>
        <div>
          <h3 className="text-xl my-2 text-center font-medium text-gray-800">
            { title }
          </h3>
        </div>
        <div>
          <h3 className="text-md my-2 text-center text-gray-600">
            { distance }
          </h3>
        </div>
      </div>
    </>
  );
};

const RestaurantCarouselCard = (props) => {
  return (
    <div>
      <RestaurantSmCard { ...props } />
      <RestaurantLgCard { ...props } />
    </div>
  );
};

export default RestaurantCarouselCard;