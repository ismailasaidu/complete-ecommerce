import React from "react";

const Divider = ({ text1, text2, text3 }) => {
  return (
    <div>
      <div>
        <div className="text-center mt-[60px] ">
          <div className=" text-center">
            {" "}
            <h1 className="text-[40px] ">{text1}</h1>
          </div>
          <div>
            {" "}
            <p className="text-[18px] text-grey">{text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divider;
