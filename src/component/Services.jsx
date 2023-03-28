import React from "react";
import car from "../Assets/car.png";
import support from "../Assets/support.png";
import deliver from "../Assets/deliver.png"
import payment from "../Assets/payment.png"

const Services = () => {
  return (
    <div className="flex justify-between mt-[100px] sm:hidden  ">
      <div className="flex flex-row gap-4 items-start pl-14 pr-14">
        <div>
          <img src={car} alt="" />
        </div>
        <div>
          <h1 className="font-display font-bold text-[16px]">FREE SHIPPING</h1>
          <p className="text-grey md:text-left">
            Enjoy Free Shipping on all<br></br> orders above $100
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-start pl-14 pr-14 sm:hidden md:hidden">
        <div>
          <img src={support} alt="" />
        </div>
        <div>
          <h1 className="font-display font-bold text-[16px]">SUPPORT 24/7</h1>
          <p className="mt-2 text-grey md:text-left">
          Our support team is there <br></br>to help you for queries
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-start pl-14 pr-14">
        <div>
          <img src={deliver} alt="" />
        </div>
        <div>
          <h1 className="font-display font-bold text-[16px]">30 DAYS RETURN</h1>
          <p className="mt-2 text-grey md:text-left">
          Simply return it within 30<br></br> days for an exchange.
          </p>
        </div>
        
      </div>
      <div className="flex flex-row gap-4 items-start pl-14 pr-14">
        <div>
          <img src={payment} alt="" />
        </div>
        <div>
          <h1 className="font-display font-bold text-[16px]">100% PAYMENT SECURE</h1>
          <p className=" text-grey md:text-left">
          Our payments are secured <br></br>with 256 bit encryption
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
