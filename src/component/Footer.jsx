import React from 'react'
import arrow from "../Assets/arrow.png"
import visa from "../Assets/visa.png"
import electron from "../Assets/electron.png"
import paypal from "../Assets/paypal.png"
import master from "../Assets/master card.png"

const Footer = () => {
 
  return (
  
    <div >
     
      <div className="h-[300px]  flex flex-row justify-between px-14 mt-[120px] bg-lightGrey pt-[30px] py-0 sm:flex-col sm:mt-[150px] sm:px-[20px]  gap-[10px] sm:h-[600px] md:flex-col md:gap-[20px] md:px-14 md:h-[600px]">
        <div className="flex flex-col gap-[20px] text-grey md:gap-[10px]">
          <div>
            <h1 className="font-display font-bold text-[16px] sm:text-[12px] ">
              COMPANY INFO
            </h1>
          </div>
          <div className='sm:text-[14px] md:text-[12px]'>
            <p>About Us</p>
            <p>Latest Post</p>
            <p>Contact Us</p>
            <p>Shop</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]  text-grey">
          <div>
            <h1 className="font-display font-bold text-[16px]  sm:text-[12px]">HELP LINK</h1>
          </div>
          <div className='sm:text-[14px] md:text-[12px]'>
            <p>Tracking</p>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Shipping Info</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]  text-grey">
          <div>
            <h1 className="font-display font-bold text-[16px] sm:text-[12px]">
              USEFUL LINKS
            </h1>
          </div>
          <div className='sm:text-[14px] md:text-[12px]'>
            <p>Special Offers</p>
            <p>Gift Cards</p>
            <p>Advetising</p>
            <p>Terms of Use</p>
          </div>
        </div>
        <div className="flex flex-col  gap-[20px]  text-grey sm:gap-[10px]" >
          <div>
            <h1 className="font-display font-bold text-[16px] sm:text-[12px] w-[200px] md:text-[12px]">
              GET IN THE KNOW
            </h1>
          </div>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="  outline-none   font-thin sm:text-[10px] px-[10px] bg-lightGrey border-b border-divider "
            />
            <img src={arrow} alt="" className='sm:w-[20px] mt-[10px]'  />
          </div>
        </div>
      </div>
      <div className="mx-14 border-t-[1px] border-divider h-[100px] flex justify-between pt-[25px] sm:mx-[10px]  ">
        <div className='text-grey sm:text-[10px] md:text-[10px]'>
          <p>© 2020 NorthStar eCommerce</p>
          <p>Privacy Policy Terms & Conditions</p>
        </div>
        <div className='flex gap-[10px] items-start sm:gap-[20px] sm:hidden '>
            <img src={visa}  className="w-[50px] h-[40px]"/>
            <img src={master} className="w-[50px] h-[40px]"/>
            <img src={paypal} className="w-[50px] h-[40px]"/>
            <img src={electron} className="w-[50px] h-[40px]"/>
        </div>
      </div>

    </div>
  
  );
};

export default Footer