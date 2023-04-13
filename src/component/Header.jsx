import React, { useRef } from "react";
import account from "../Assets/account.png";
import Cart from "../Assets/cart.png";
import hamburger from "../Assets/hamburger.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import email from "../Assets/email.png";
import arrow from "../Assets/arrow.png";
import { Transition } from '@headlessui/react';

import {
  AiFillFacebook,
  AiFillHome,
  AiFillNotification,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IoChevronForwardOutline } from "react-icons/io5";
import { AiFillContacts } from "react-icons/ai";
import { IoMdCart, IoMdSettings } from "react-icons/io";
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
    ? (document.body.style.disabled = "true")
    : (document.body.style.overflow = "false");

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setopen(false);
      }
    };
    // docum ent.addEventListener("click", handler);
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  const navigate = useNavigate();
  return (
    <div   ref={menuRef} className="flex items-center  justify-between pt-10 px-14 h-32 sm:px-[10px]  sm:pt-[0px] sm:h-[100px] fixed top-0 bg-white z-10 w-[100%] shadow">
      <div>
        <h1
          className="font-display  cursor-pointer text-5xl font-medium sm:text-[30px] "
          onClick={() => {
            navigate("/");
          }}>
          NorthStar
        </h1>
      </div>
      <div className="flex   gap-7 font-Arimo font-bold text-[14px] mr-[200px] pt-[20px] sm:hidden md:flex md:mr-0 ">
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
      <div className="flex items-center gap-[10px] cursor-pointer md:mt-[10px] sm:gap-[2px] md:gap-[5px]">
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
   
        
          <div    onClick={() => {
            setopen(!open)
          }}>
            <img
              className="hidden sm:block ;"
              src={hamburger}
              alt="nav-icons "
            />
          </div>
       
      </div>
      {open ? (
        <>
     

          <div
          
            className={`absolute hidden  shadow z-14 right-0 bg-blue w-[100%] h-[230px]   mt-[40px]  z-10 sm:block transition-all  duration-150ms ease-in ${
              open ? "top-10" : "top-[490px]"
            }`}>
 <Transition
        show={open}
        enter="menu-enter"
        enterFrom="opacity-0 transform -translate-y-30"
        enterTo="opacity-100 transform translate-y-0"
        leave="menu-leave"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-10"
      >

            <div className="py-[50px] duration-500 ">
              <div className="px-[20px]  font-medium text-white text-right font-display text-[18px]">
                <div className="flex flex-col gap-[25px] pl-[180px]">
                  <h1  className="cursor-pointer"
                    onClick={() => {
                      if (open) {
                        navigate("/");
                      }
                      setopen(!open);
                    }}>
                    HOME
                  </h1>

                  <h1  className="cursor-pointer"
                    onClick={() => {
                      if (open) {
                        navigate("/about");
                      }
                      setopen(!open);
                    }}>
                    ABOUT
                  </h1>

                  <h1  className="cursor-pointer"
                    onClick={() => {
                      if (open) {
                        navigate("/contact");
                      }
                      setopen(!open);
                    }}>
                    CONTACT US
                  </h1>
                </div>

                
              </div>
            </div>
           </Transition>
          </div>
         
      

        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
