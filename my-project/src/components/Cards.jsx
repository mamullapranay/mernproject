import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <div className="items-center card w-70 bg-base-100 shadow-xl relative p-4 m-7 ">
      {/* Only the image is wrapped with the Link component */}
      <Link to={`/menu/${item._id}`}>
        <img src={item.image} alt={item.name} className="hover:scale-105 transition-all duration-200 md:h-52" />
      </Link>
      <div className="card-body items-center text-center">
        <h2 className="card-title ">{item.name}</h2>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="text-sm text-red-500"><span>$</span>{item.price}</h5>
          <button className="btn bg-[#C70039] text-white">Buy Now</button>
        </div>
      </div>
    </div>


  );
};

export default Cards;
