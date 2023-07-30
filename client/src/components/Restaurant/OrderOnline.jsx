import React, { useState } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../OrderOnline/FloatMenuBtn";
import FoodList from "../OrderOnline/FoodList";
import MenuListContainer from "../OrderOnline/MenuListContainer";

const OrderOnline = () => {
  const [ menu, setMenu ] = useState([
    {
      name: "Cakes",
      items: [
        {
          image: "https://b.zmtcdn.com/data/dish_photos/703/3c053cbebc21e826b6571229dbaed703.png",
          name: "Berrylicious",
          rating: 4.5,
          price: 788,
          description: "Vanilla sponge layered with mix berry mousse coated with white glaze.",
        },
        {
          image: "https://b.zmtcdn.com/data/dish_photos/6bf/196f18871b4954503e6ad835bc9c36bf.png",
          name: "Blueberry Cheese Cake",
          rating: 4.5,
          price: 867,
          description: "Creamy cheese cake made with belgium blue berries, cheese and buttery biscuit crust.",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/34a/dc7963fd283f9ebdcd0fa7979f33d34a.png",
          name: "Chocolate Nougat",
          rating: 4.1,
          price: 1103,
          description: "Dark and milk chocolate ganache with caramelized cashew crunch and chocolate sponge.",
        },
      ],
    },
    {
      name: "Cookies",
      items: [
        {
          image: "https://b.zmtcdn.com/data/dish_photos/a5a/b02d22970afae939b4d216ede82fda5a.png",
          name: "Almond Cookies",
          rating: 4.5,
          price: "172",
          description: "Crispy & buttery indian style cookies coated with almonds.",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/e16/9c795c484a306b0f5e3b5c7ff6502e16.png",
          name: "Chocolate Crackle Cookies",
          rating: 4,
          price: "145",
          description: "Chocolate cookie perfectly baked with white powdered sugar & chocolate dough.",
        },
        {
          image: "https://b.zmtcdn.com/data/dish_photos/d79/30ddc662dbcb03f46c4af7df981dcd79.png",
          name: "Dry Fruit Cookies",
          rating: 5,
          price: "185",
          description: "Crispy & buttery indian style cookies coated with dry fruits.",
        },
        {
          image: "https://b.zmtcdn.com/data/dish_photos/66c/3600acfcea71782051ca41f0fa51e66c.png",
          name: "Melting Moment Cookies",
          rating: 5,
          price: "172",
          description: "Double chocolate cookie made with combination of chocolate dough and choco chips.",
        },
      ],
    },
  ]);

  const [ selected, setSelected ] = useState("");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

  return (
    <>
      <div className="w-full flex items-start">
        <aside className="sticky top-16 hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200 w-1/4 h-screen">
          { menu.map((item, index) => (
            <MenuListContainer
              { ...item }
              key={ index }
              onClickHandler={ onClickHandler }
              selected={ selected }
              target={ index }
            />
          )) }
        </aside>
        <div className="w-full px-3 md:w-3/4 sticky overflow-auto h-screen top-16">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex  overflow-y-screen flex-col gap-3 md:gap-5">
            { menu.map((item, index) => (
              <FoodList key={ index } { ...item } target={ index } />
            )) }
          </section>
        </div>
      </div>
      <FloatMenuBtn
        menu={ menu }
        onClickHandler={ onClickHandler }
        selected={ selected }
      />
    </>
  );
};
export default OrderOnline;