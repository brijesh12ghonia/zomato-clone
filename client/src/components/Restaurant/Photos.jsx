import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollection from "./PhotoCollection";

const Photos = () => {
  const [ photos, setPhotos ] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/5/18140605/2176bece2c953f11ac571677b70c8cda.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/5/18140605/9453157cb5494fadf50d159b3fe6222f.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/94d/da123798c6a897b7d7f844c8262db94d_1627047619.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/c43/ac5c8a7d0cbf938b14bdf0869ce79c43_1580824231.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/075/c2f0bd92fc7bb1cf9330428f7779f075_1580824232.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/5/18140605/2764cc7290547a6c58055cfa9f5ea46d.jpg",
  ]);
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ currentImage, setCurrentImage ] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      { isMenuOpen && (
        <ImageViewer src={ photos } currentIndex={ currentImage } disableScroll={ false } onClose={ closeViewer } />
      ) }

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        { photos.map((photo, index) => (
          <PhotoCollection key={ index } openViewer={ openViewer } index={ index } image={ photo } setCurrentImage={ setCurrentImage } />
        )) }
      </div>
    </>
  );
};
export default Photos;