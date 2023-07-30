import React, { useState } from "react";

// components
import MenuCollection from "./MenuCollection";

const Menu = () => {
  const [menus, setMenus] = useState([
    "https://b.zmtcdn.com/data/menus/939/18691939/cef6946d38ec74df1cd34a737542ec89.jpg",
    "https://b.zmtcdn.com/data/menus/939/18691939/f54630805e17e28624c5dbc92243dc91.jpg",
    "https://b.zmtcdn.com/data/menus/939/18691939/eb367fb0bbf59c952a3b25f810074845.jpg",
    "https://b.zmtcdn.com/data/menus/939/18691939/602b8528ac6e45ffab1cd9179d9a3b0e.jpg",
    "https://b.zmtcdn.com/data/menus/939/18691939/9600aaae46b15d61abcbccc61c0c2405.jpg",
    "https://b.zmtcdn.com/data/menus/939/18691939/ff43e0494863f80b5e4abfbca3bb65e9.jpg",
  ]);

  return (
    <div className="flex flex-wrap gap-3">
      <MenuCollection menuTitle="Menu" pages={menus.length} images={menus} />
    </div>
  );
};
export default Menu;