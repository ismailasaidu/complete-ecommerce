import axios from "axios";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../lib/init-firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { Navigate, useNavigate } from "react-router-dom";
export const NewProduct = () => {
  const [Delivery, setDelivery] = useState(false);
  const [description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [deliveryPrice, setDeliveryPrice] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagesForUpload, setImagesForUpload] = useState([]);
  const [Details, setDetails] = useState("");

  const navigate = useNavigate();
  const handleImageSelect = (e) => {
  setSelectedImages([...selectedImages, ...e.target.files]);
  console.log("New images selected");
  
};
  const User = localStorage.getItem("user");
  useEffect(() => {
    if (!User) {
      navigate("/login");
    }
  }, []);

  const upload = async (e) => {
    e.preventDefault();

    const images = [];
    selectedImages.map((image) => {
      const pathReference = ref(storage, `images/${image.name}`);
      uploadBytes(pathReference, image).then((snapshot) => {
        getDownloadURL(pathReference).then((res) => {
          images.push(res);
          console.log(res)
        
        
        });
      });
  
    })
    setImagesForUpload(images);
   
    console.log(imagesForUpload);
    if (
      description &&
      imagesForUpload.length &&
      Price &&
      quantity &&
      Details &&
      discount
    ) {
      
      const productRef = collection(db, "Products");
      addDoc(productRef, {
         Description: description,
         imgSrc: imagesForUpload,
         Price,
         quantity: quantity,
         Detail: Details,
         Discount: discount,
       })
       .then((res) => {
                console.log(res);
                alert("uploaded");
                window.location.reload()
                 
              })
              .catch((err) => {
                console.log(err);
              });
       
    } else if(imagesForUpload.length < 1){
      
     alert("please select image ")
    }else{
      alert("please fill empty fields");
    }

    
  };
  return (
    <div className="flex items-center    justify-center h-screen text bg-blue ">
      <div className=" w-[80%] text-grey  mt-[100px]">
        <form className="flex flex-col gap-[10px]">
          <div>
            <input
              className="w-[100%] px-[10px] outline-none"
              type="number"
              placeholder="Price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              className="w-[100%] outline-none px-[10px]"
              value={quantity}
            />
          </div>

          <div>
            <input
              type="number"
              className="w-[100%] px-[10px] outline-none"
              placeholder="Discount"
              onChange={(e) => {
                setDiscount(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="w-[100%] outline-none px-[10px]"
              type="text"
              placeholder=" Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              placeholder="Details"
              className="w-[100%] outline-none h-[100px] px-[10px]"
              type="text"
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="file"
              className="w-[100%] px-[10px] text-white"
              placeholder="Select"
              onChange={
                handleImageSelect
              }
            />
          </div>

          <button className="bg-white h-[30px] text-blue " onClick={upload}>
            Submit
          </button>
          <button
            onClick={() => {
              navigate("/");
              localStorage.removeItem("user");
            }}
            className="bg-white  h-[30px] mt-[20px] text-blue ">
            Logout
          </button>
        </form>

        <img width="100" />
      </div>
    </div>
  );
};

export default NewProduct;

// const [room, setRoom] = useState({
//   name: "",
//   category: "",
//   price: null,
//   details: "",
// });

// const [errorMessage, setErrorMessage] = useState("");

// const [selectedImages, setSelectedImages] = useState([]);

// const handleImageSelect = (e) => {
//   setSelectedImages([...selectedImages, ...e.target.files]);
//   console.log("New images selected");
// };
 
// const handleImageDelete = (index) => {
//   const updatedImages = [...selectedImages];
//   updatedImages.splice(index, 1);
//   setSelectedImages(updatedImages);
// };

// const [imagesForUpload, setImagesForUpload] = useState([]);

// const handleUpload = async (e) => {
//   e.preventDefault();

//   const images = [];
//   selectedImages.map((image) => {
//     const pathReference = ref(storage, `rooms/${image.name}`);
//     uploadBytes(pathReference, image).then((snapshot) => {
//       getDownloadURL(pathReference).then((res) => {
//         images.push(res);
//       });
//     });
//   });
//   setImagesForUpload(images);

//   if (room.category && imagesForUpload.length && room.price && room.name) {
//     const roomCollectionRef = collection(db, room.category);
//     console.log(roomCollectionRef);
//     const newObj = {
//       details: room.details,
//       images: imagesForUpload,
//       name: room.name,
//       price: room.price,
//     };
//     addDoc(roomCollectionRef, { ...newObj })
//       .then((res) => {
//         console.log(res);
//         setRoom({
//           name: "",
//           category: "",
//           price: null,
//           details: "",
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     setErrorMessage("Please fill all input fields before submitting!");
//   }
// };
