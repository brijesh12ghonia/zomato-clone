import React from "react";
import { AiOutlineCamera } from "react-icons/ai";

const ImageGrid = (props) => {
  return (
    <>
      <div className="w-full h-60 md:hidden">
        <img src="https://b.zmtcdn.com/data/pictures/7/37857/440f6e2cb2f4dc7e2f5aeb421cc23106_featured_v2.jpg" alt="restaurant" className="w-full h-full object-cover object-center rounded-lg" />
      </div>
      <div className="hidden w-full h-96 md:flex gap-1">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img src="https://b.zmtcdn.com/data/pictures/7/37857/440f6e2cb2f4dc7e2f5aeb421cc23106_featured_v2.jpg" alt="restaurant" className="w-full h-full object-cover object-center rounded-lg" />
        </div>
        <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
          <div className="w-full h-2/4 overflow-hidden rounded-lg">
            <img src="https://b.zmtcdn.com/data/pictures/4/37854/6e09b465d42a247ec947c972402691de_featured_v2.jpg" alt="restaurant" className="w-full h-full object-cover object-center rounded-lg transition duration-700 hover:scale-110" />
          </div>
          <div className="w-full h-2/4 overflow-hidden rounded-lg">
            <img src="https://b.zmtcdn.com/data/pictures/6/37856/d35d62c6d0437dc9869db01127f60a07_featured_v2.jpg" alt="restaurant" className="w-full h-full object-cover object-center rounded-lg transition duration-700 hover:scale-110" />
          </div>
        </div>
        <div className="w-1/4 h-full flex flex-col gap-1 overflow-hidden">
          <div className="w-full h-2/4 relative">
            <img src="https://b.zmtcdn.com/data/pictures/4/37914/11614c4978d3aa0064899857775a3658_featured_v2.jpg" alt="restaurant" className="w-full h-full object-cover object-center rounded-lg" />
            <div className="absolute inset-0 bg-opacity-40 bg-black h-full rounded-lg" />
            <h4 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-full text-center text-white font-semibold">
              View Gallery
            </h4>
          </div>
          <div className="w-full h-2/4 relative">
            <img src="https://b.zmtcdn.com/data/pictures/3/20071263/a433b54e86e61870ec71fc209492505e_featured_v2.jpg" alt="restaurant"
              className="w-full h-full object-cover object-center rounded-lg" />
            <div className="absolute inset-0 bg-opacity-40 bg-black h-full rounded-lg" />
            <div className="absolute flex flex-col items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center text-white font-semibold">
              <div className="bg-black p-3 rounded-full bg-opacity-50">
                <AiOutlineCamera className="text-white" />
              </div>
              <h4>View Gallery</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;