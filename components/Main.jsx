import React from "react";
import CustomButton from "./CustomButton";

function Main() {
  return (
    <div className="bg-amber-300 content text-center">
      <div className=" flex justify-center items-center">
       
        <div>
        <CustomButton
        bgColor="bg-blue-500  "
        textColor="text-white"
        lineColor="border-black"
        sideImage={  <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>}
        opacity="opacity-80"
      >
        Click Me
      </CustomButton>
                  
        </div>
       
      </div>
    </div>
  );
}

export default Main;
