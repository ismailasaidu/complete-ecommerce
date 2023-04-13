import React, { useState, useEffect } from "react";

import { db } from "../lib/init-firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  // const [Email, setEmail] = useState("")
  // const [Name, setName] = useState("")
  // const [Text,setText] = useState("")
  const [errors, seterrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log();
    }
  }, [errors]);

  const initialValues = {
    Name: "",
    Text: "",
    Email: "",
  };
  console.log(initialValues);
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const upload = async (e) => {
    e.preventDefault();
    // let ErrorValue = JSON.stringify(errors)
    // console.log(ErrorValue)
    seterrors(validate(formValues));
    if (
      !formValues.Name ||
      !formValues.Email ||
      !errors.email ||
      !formValues.Text
    ) {
      toast.error("Please Fill Empty Fields ");
    } else {
      const productRef = collection(db, "Queries and suggestions");
      addDoc(productRef, {
        formValues,
      })
        .then((response) => {
          console.log(response);
          toast.success("Sent Successfully");
          navigate("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {};
    // const regex
    if (!values.Name) {
      errors.Name = "Fullname required!";
    }

    if (!values.Text) {
      errors.Text = "Please input your message";
    }

    if (!values.Email) {
      errors.Email = "Email required";
    } else if (!regex.test(values.Email)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };
  return (
    <div>
      <div className="bg-[url('./Assets/cont.png')] h-[340px] bg-cover bg-center  relative top-[80px] bg-no-repeat sm:h-[200px] sm:relative ">
        <h1 className="text-white font-black text-[34px] font-display pt-[260px] pl-14  sm:text-[20px]  sm:pt-[140px] sm:pl-[20px]">
          CONTACT US
        </h1>
      </div>
      <div className="flex  mt-[160px] px-14 items-start gap-[70px] sm:flex sm:flex-col  sm:px-[30px] md:px-14 sm:mt-[-40px] md:flex-col md:pt-[20px]">
        <div className="flex-[2]">
          <div className="sm:mt-[140px]">
            <h1 className="font-bold  font-display text-[34px] text-darktext sm:text-[28px] text-center">
              We would love to hear from you.
            </h1>
            <p className="font-light text-grey md:text-center mt-[50px]">
              If you have any query or any type of suggestion, you can contact
              us here. We would love to hear from you.
            </p>
          </div>
          <div className="mt-[60px]  ">
            <div className="flex gap-[20px] sm:flex-col w-full   md:gap-[47px]">

                <div className="flex w-[100%]  sm:w-[100%] flex-col  text-grey">
                  <label
                    htmlFor="Name"
                    className="text-grey  text-[12px] font-semibold">
                    Name
                  </label>
                  <input
                    id="Name"
                    type="text"
                    name="Name"
                    className="border-divider border-[1px]  h-[60px] text-grey outline-none px-[20px]"
                    value={formValues.Name}
                    onChange={handleChange}
                  />
                  <p className="text-red text-[12px]">{errors.Name}</p>
                </div>
           
                <div className="flex w-[100%] sm:w-[100%] text-grey flex-col">
                  <label
                    htmlFor="Email"
                    className="text-grey  text-[12px] font-semibold">
                    Email
                  </label>
                  <input
                    id="Email"
                    type="email"
                    name="Email"
                    className="border-divider border-[1px] h-[60px] outline-none px-[20px] "
                    value={formValues.Email}
                    onChange={handleChange}
                  />
                  <p className="text-red text-[12px]">{errors.Email}</p>
                  <p className="text-red text-[12px]">{errors.email}</p>
                </div>

            </div>
            <div className="mt-[50px] sm:w-[100%]    w-full flex flex-col">
              <label
                htmlFor="Text"
                className="text-grey  text-[12px] font-semibold">
                Text
              </label>
              <input
                id="Text"
                type="text"
                name="Text"
                className="border-divider border-[1px]  text-grey  h-[200px] outline-none px-[20px] "
                value={formValues.Text}
                onChange={handleChange}
              />
              <p className="text-red text-[12px]">{errors.Text}</p>
            </div>
            <div className="mt-[50px]">
              <button
                className="bg-blue text-white h-[60px] w-[180px]"
                onClick={upload}>
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
        <div className=" sm:mt-[30px]">
          <div>
            <h1 className="font-bold text-darktext text-[22px] font-display">
              Visit Us
            </h1>
            <p className="font-light mt-[20px] text-grey">
              UET Lahore, Punjab, Pakistan<br></br> Phone: +923039898987
            </p>
          </div>
          <div className="mt-[50px]">
            <h1 className="font-bold text-darktext text-[22px] font-display">
              Get In Touch
            </h1>
            <p className="font-light mt-[20px] text-grey">
              You can get in touch with us on this provided<br></br> email.
            </p>
            <p className="font-light mt-[20px] text-grey">
              {" "}
              Email: hmjawad087@gmail.com
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
