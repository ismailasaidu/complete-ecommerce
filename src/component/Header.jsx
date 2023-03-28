import React from "react";
import account from "../Assets/account.png";
import Cart from "../Assets/cart.png";
import hamburger from "../Assets/hamburger.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import email from "../Assets/email.png";
import arrow from "../Assets/arrow.png";


import {
  AiFillFacebook,
  AiFillHome,
  AiFillNotification,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import {IoChevronForwardOutline} from "react-icons/io5"
import { AiFillContacts } from "react-icons/ai";
import { IoMdCart, IoMdSettings ,} from "react-icons/io";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { MdEmail, MdEmailMdEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
const Header = () => {
  const cart = useSelector((item) => {
    return item.cart.value;
  });
  const [open, setopen] = useState(false);
  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  open
    ? (document.body.style.disbled = "true")
    : (document.body.style.overflow = "false");

  const navigate = useNavigate();
  return (
    <div className="flex items-center  justify-between pt-10 px-14 h-32 sm:px-[10px]  ">
      <div>
        <h1
          className="font-display text-5xl font-medium sm:text-[30px] "
          onClick={() => {
            navigate("/");
          }}>
          NorthStar
        </h1>
      </div>
      <div className="flex   gap-7 font-Arimo font-bold text-[14px] mr-[500px] pt-[20px] sm:hidden md:flex md:mr-0 ">
        <p
          className="cursor-pointer  "
          onClick={() => {
            navigate("/");
          }}>
          HOME
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/about");
          }}>
          ABOUT
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/contact");
          }}>
          CONTACT US
        </p>
      </div>
      <div className="flex items-center gap-[10px] md:mt-[10px] sm:gap-[2px] md:gap-[5px]">
        <img src={account} alt="nav-icons" className="sm:hidden" />
        <div
          className="relative sm:w-[40px]"
          onClick={() => {
            navigate("/cart");
          }}>
          <img src={Cart} alt="nav-icons" />
          <div className="absolute bottom-3 left-3 bg-blue rounded-full w-4 h-4 ">
            <p className="ml-1 text-xs  text-white">{cart.length}</p>
          </div>
        </div>
        <div className="sm:hidden">
          <img src={hamburger} alt="nav-icons" />
        </div>
        <div
          className="hidden sm:block"
          onClick={() => {
            if (!open) {
              setopen(true)
            } else {
              setopen(false)
            }
          }}>
          <img src={hamburger} alt="nav-icons " />
        </div>
      </div>
      {open ? (
        <>
          <div className="absolute hidden z-14 right-0 bg-blue w-[100%] h-[230px] top-[68px] mt-[40px] z-10 sm:block transition-opacity duration-1500 ease-in">
            <div className="py-[50px] ">
              

              <div className="px-[20px]  font-medium text-white text-right font-display text-[18px]">
                <div className="flex flex-col gap-[25px] pl-[180px]">
                  
                    
                    <h1
                      onClick={() => {
                        if (open) {
                          navigate("/");
                        }
                        setopen(!open);
                      }}>
                      HOME
                    </h1>
                 
              
                    
                    <h1
                      onClick={() => {
                        if (open) {
                          navigate("/about");
                        }
                        setopen(!open);
                      }}>
                      ABOUT
                    </h1>
                
                  
                   
                    <h1
                      onClick={() => {
                        if (open) {
                          navigate("/contact");
                        }
                        setopen(!open);
                      }}>
                      CONTACT US
                    </h1>
                
                 
                  
                 
                  
                   
                    
                
                </div>
               
                {/* <div className="flex gap-[30px] items-center px-[20px] mt-[65px] ">
                  <h1>
                    <AiFillTwitterSquare className="w-[20px] h-[25px]" />
                  </h1>
                  <h1>
                    <AiFillFacebook className="w-[20px] h-[25px]" />
                  </h1>

                  <h1>
                    <MdEmail className="w-[20px] h-[25px]" />
                  </h1>

                  <h1>
                    <GrInstagram className="w-[20px] h-[25px]" />
                  </h1>
                </div> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
