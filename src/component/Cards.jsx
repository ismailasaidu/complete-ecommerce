import React from "react";
import Card from "./Card";
import { Store } from "../component/product";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/init-firebase";

const Cards = () => {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    // console.log(products)
  }, [products])
  

  function getProducts() {
    const productCollectionRef = collection(db, "Products");
   
    getDocs(productCollectionRef)
      .then((response) => {
        // console.log(response);
        const product = response.docs.map(doc => ({
          data:doc.data(),
          id:doc.id,
        }));
      
        setProducts(product)


      })
      .catch((error) => console.log(error.message));
  }
  return (
    <div className=" mt-20 px-14 grid grid-cols-4 gap-10 sm:grid-cols-2 gap-x-[20px] sm:px-[20px] md:w-[76]">
      {products.map((item, index) => {
        return <Card item={item}  itemIndex={index} key={item.id} />;
      })}
    </div>
  );
};

export default Cards;
