import React from "react";
// import pic1 from "../Assets/pic1.png";
import { Store } from "../component/product";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductDetails from "../pages/ProductDetails";
import { Link } from "react-router-dom";

const Card = ({ item, itemIndex }) => {

  console.log(item);

  return (
    <div>
     
        <>
          <Link to={`description/${itemIndex}`}>
            <div className="flex  items-center  flex-col sm:items-center">
              <img
                src={item.data.imgSrc}
                alt=""
                className=" w-[300px] h-[350px] object-cover sm:h-[200px] md:h-[200px] sm:w-[400px]"
              />
              <p className="font-display font-bold text-[16px] sm:text-center">
                {item.data.Description}
              </p>
              <p className="font-display font-bold text-[16px] text-blue ">
                ${item.data.Price}.00
              </p>
            </div>
          </Link>
        </>
      
     
    </div>
  );
};

export default Card;
