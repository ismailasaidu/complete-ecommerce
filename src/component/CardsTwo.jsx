// import React from "react";
// import Card from "./Card";
// import { Store } from "../component/product";
// import { useState, useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../lib/init-firebase";

// const CardsTwo = () => {
//   const [topSellers, SetTopSellers] = useState([]);
//   const [duplicates, setDuplicates] = useState([]);
//   // console.log(topSellers)
//   useEffect(() => {
//     const count = {};
//     topSellers.map((item) => {
//       count[item] = (count[item] || 0) + 1;
//     });
//     const duplicatesArray = Object.keys(count).filter(
//       (key) => count[key] === 2
//     );
//     setDuplicates(duplicatesArray);
//   }, []);

//   useEffect(() => {
//     getPurchase();
//     console.log(topSellers);
//   }, []);

//   //   useEffect(()=>{
//   //     console.log(duplicates)
//   //   },[])

//   useEffect(() => {
//     console.log(duplicates);
//   }, [topSellers]);

//   function getPurchase() {
//     const topSellersCollectionRef = collection(db, "PurchaseDetails");
//     getDocs(topSellersCollectionRef)
//       .then((response) => {
//         console.log(response);

//         const topSeller = response.docs.map((doc) => ({
//           data: doc.data(),
//           id: doc.id,
//         }));

//         SetTopSellers(topSeller);
//       })
//       .catch((error) => console.log(error.message));
//   }
//   return (
//     <div className=" mt-20 px-14 grid grid-cols-4 gap-10 sm:grid-cols-2 gap-x-[20px] px-[20px]">
//       {duplicates.map((item, index) => {
//         return <Card item={item} itemIndex={index} key={item.id} />;
//       })}
//     </div>
//   );
// };

// export default CardsTwo;
