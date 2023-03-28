import React from "react";
import woman from "../Assets/woman.png";
import man from "../Assets/man.png";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import founder1 from "../Assets/founder1.png";
import testimonial1 from "../Assets/testimonial1.png";
import quote from "../Assets/quote.png";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

const About = () => {
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      partialVisibilityGutter: 30,
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="bg-[url('./Assets/about.jpg')] h-[340px] bg-cover bg-center bg-no-repeat sm:h-[200px] ">
        <h1 className="text-white font-black text-[34px] font-display pt-[260px] pl-14 sm:text-[20px]  sm:pt-[140px] sm:pl-[20px]">
          ABOUT NORTHSTAR
        </h1>
      </div>
      <div className="px-14 mt-[100px] ">
        <div className="flex flex-row gap-[100px] sm:flex-col">
          <div className=" flex-1 relative ">
            <img src={woman} />
            <button
              className=" absolute bottom-[40px] left-[210px] bg-white text-blue w-[150px] h-[50px] rounded-[20px] sm:left-[70px] sm:bottom-[10px] md:left-[100px] md:w-[120px]"
              onClick={() => {
                navigate("/");
              }}>
              BUY NOW
            </button>
          </div>
          <div className=" flex-1 relative sm:hidden">
            <img src={man} />
            <button
              className=" absolute bottom-[40px] left-[210px] bg-white text-blue w-[150px] h-[50px] rounded-[20px] md:left-[100px] md:w-[120px]"
              onClick={() => {
                navigate("/");
              }}>
              BUY NOW
            </button>
          </div>
        </div>
        <div className="mt-[100px]">
          <h1 className="font-Arimo font-bold text-[34px] text-center">
            The Founders
          </h1>
        </div>
       <div className="mt-[100px]">
        {/* <div className="flex flex-row justify-between mt-[100px]"> */}
        <Carousel responsive={responsive} swipeable={true}  keyBoardControl={true} transitionDuration={500}  removeArrowOnDeviceType={["desktop", "mobile"]}>
          
          <div className="flex flex-col gap-[10px]">
            <img src={founder1} className="w-[300px]" />
            <h1 className="font-bold ">HM Jawad</h1>
          </div>
          <div className="flex flex-col gap-[10px]">
            <img src={founder1} className="w-[300px]" />
            <h1 className="font-bold ">Furqan Abid</h1>
          </div>
          <div className="flex flex-col gap-[10px]">
            <img src={founder1}className="w-[300px]" />
            <h1 className="font-bold ">Abdullah Ah</h1>
          </div>
          <div className="flex flex-col gap-[10px]">
            <img src={founder1} className="w-[300px]"/>
            <h1 className="font-bold ">Abrar Khan</h1>
          </div>
        
          </Carousel>
        {/* </div> */}
        </div>
     
        <div className="mt-[100px]">
          <h1 className="font-Arimo font-bold text-[34px] text-center">
            Testimonials
          </h1>
        </div>
        <div className="flex flex-col mt-[100px] items-center  gap-[100px]  ">
          <div className="flex flex-row gap-[20px] items-start">
            <div>
              <img src={testimonial1} className="md:w-[130px]"/>
            </div>
            <div className="flex flex-col gap-[30px]">
              <img src={quote} className="w-[22px]"/>
              <p className="text-darktext  font-semibold">
                Once we ordered some accessories items and we got <br></br>the products
                delivered in our doorstep, the customer support<br></br> was super
                helpful and they answered all my queries.
              </p>
              <p className="text-dark font-semibold text-[16px]">Stacy</p>
            </div>
          </div>
          <div className="flex flex-row gap-[20px] items-start">
            <div>
              <img src={testimonial1} className="md:w-[130px]"/>
            </div>
            <div className="flex flex-col gap-[30px]">
              <img src={quote} className="w-[22px]"/>
              <p className="text-darktext  font-semibold">
              I ordered 5 shirts from them and received them in no time.<br></br> The customer support was awesome!
               
              </p>
              <p className="text-dark font-semibold text-[16px]">Tiffany</p>
            </div>
          </div>
          <div className="flex flex-row gap-[20px] items-start">
            <div>
              <img src={testimonial1} className="md:w-[130px]" />
            </div>
            <div className="flex flex-col gap-[30px]">
              <img src={quote} className="w-[22px]"/>
              <p className="text-darktext  font-semibold">
              I got a wrong shirt so I contacted them and they happily<br></br> offered me a refund. I will surely shop from them again.
              </p>
              <p className="text-dark font-semibold text-[16px]">James</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
