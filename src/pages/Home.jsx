import React from 'react'
import Hero from '../component/Hero';
import Divider from '../component/Divider';
import Card from '../component/Cards';
import Services from '../component/Services';
import Offer from '../component/Offer';
import Footer from '../component/Footer';
import Cards from '../component/Cards';
import CardsTwo from '../component/CardTwo';

const Home = () => {
  const Goto = () => {
    window.scrollTo({
      top: 630,
      behavior: "smooth",
    });
  };
  
  return (
    < >
      
    <div>

   
      <Hero />
      <Divider  text1="Discover NEW Arrivals" text2="Recently added shirts!"/>
      <Cards/>
      <Services/>
      <Offer/>
     
      <Divider  text1="Top Sellers" text2="Browse our top-selling products" />
    
      <Cards/>
     

      <Divider text3="SHOP NOW"/>
      <div className='text-center'>
      <button className='bg-blue h-[40px] w-[150px] text-white py-[10px] mt-[50px] sm:hidden' onClick={Goto}>SHOP NOW</button>
      </div>
      
      </div>
    </>
  );
}

export default Home