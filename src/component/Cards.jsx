import React from "react";
import Card from "./Card";
import { Store } from "../component/product";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/init-firebase";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    // console.log(products)
  }, [products]);

  function getProducts() {
    const productCollectionRef = collection(db, "Products");

    getDocs(productCollectionRef)
      .then((response) => {
        const product = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setSkeleton(false)
        setProducts(product);
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <div class=" mt-20 px-14 grid grid-cols-4  gap-10 sm:grid-cols-2 gap-x-[20px] sm:px-[20px] md:w-[76]">
      {skeleton &&
        [...Array(8)].map((item, index) => {
          return (
           
            <div className=" animate-pulse flex items-center   flex-col sm:items-center"key={index}>
              
              <img 
              
                alt=""
                className=" w-[300px] h-[350px] sm:h-[200px] md:h-[200px] bg-[grey]/50 sm:w-[400px]"
              />
              <div className="font-display font-bold mt-[10px] bg-[grey]/50 h-[15px] w-[50%] text-[16px] sm:text-center">
            
              </div>
              <div className="font-display font-bold mt-[10px] bg-[grey]/50 h-[15px] w-[30%]  text-[16px] text-blue ">
               
              </div>
            </div>
          );
        })}

      {products.map((item, index) => {
        return <Card item={item} itemIndex={index} key={item.id} />
        ;
      })}
{/* 
      {
        !products &&
        window.location.reload()
      } */}

    
    </div>
  );
};

export default Cards;

// import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
// import { useHeroForm } from '../../context/heroFormContext'

// //Firebase
// import { db } from '../../firebase/config'
// import { collection, getDocs } from 'firebase/firestore'
// import { useState } from 'react'
// import RoomCard from '../simple/RoomCard.jsx'
// function SingleCategory() {
// 	const { form } = useHeroForm()
// 	console.log(form)

// 	const category = useLocation().pathname.split('/')[2]
// 	const [rooms, setRooms] = useState([])
// 	const [skeleton, setSkeleton] = useState(true)

// 	useEffect(() => {
// 		window.scrollTo(0, 0)
// 		const singleCategoryRef = collection(db, category)
// 		getDocs(singleCategoryRef)
// 			.then((response) => {
// 				const rooms = response.docs.map((doc) => {
// 					return doc.data()
// 				})
// 				setRooms(rooms)
// 				setSkeleton(false)
// 			})
// 			.catch((error) => {
// 				console.log(error)
// 			})
// 	}, [])
// 	return (
// 		<div>
// 			<div className='bg-cool h-[30vh] max-lgg:h-[25vh] max-[700px]:h-[20vh] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-left text-[#fff] '>
// 				<h1 className='text-4xl max-lgg:text-3xl font-medium px-32 max-xxl:px-16 max-tablet:px-10 max-mobile_xs:px-6 max-[700px]:text-2xl max-mobile:text-center font-millik uppercase'>
// 					{category.replace('-', ' ')}
// 				</h1>
// 			</div>

// 			<div className='mt-[3rem] px-60 max-[1450px]:px-32 max-xxl:px-16 max-tablet:px-10 max-mobile_xs:px-6 grid grid-cols-3 max-tablet:grid-cols-2 max-mobile:grid-cols-1 gap-8 max-lgg:gap-6 max-xsm:gap-4 max-mobile:gap-6'>
// 				{skeleton &&
// 					[...Array(4)].map((item, index) => {
// 						return (
// 							<div
// 								key={index}
// 								className=' animate-pulse  bg-[#F4EDED] max-mobile:w-[80%] max-[420px]:w-[100%] max-mobile:mx-auto'
// 							>
// 								<div className='h-[25rem] max-lg:h-[20rem] max-lgg:h-[16rem] max-tablet:h-[20rem] max-xsm:h-[16rem] max-mobile:h-[20rem]  relative'>
// 									<div className=' bg-[grey]/50 h-full w-full'></div>
// 								</div>
// 								<div className='h-4 bg-[grey]/50 mx-auto w-[60%] my-[2.5rem] rounded'></div>
// 							</div>
// 						)
// 					})}
// 				{rooms.map((item, index) => {
// 					return (
// 						<RoomCard
// 							key={index}
// 							item={item}
// 							category={category}
// 						/>
// 					)
// 				})}
// 			</div>
// 		</div>
// 	)
// }

// export default SingleCategory
