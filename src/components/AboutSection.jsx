import React from "react";
import { features } from "../constants/index.jsx";
const AboutSection = () => {
  // return (
  //   <div className="relative mt-2 border-b border-neutral-800 min-h-[250px]">
  //     <div className="text-center">
  //       <span className="bg-neutral-900 text-orange-500 rounded-full  text-sm font-medium px-2 py-1 uppercase">
  //         à propos
  //       </span>
  //       <h2 className="text-xl sm:text-3xl lg:text-4xl mt-4 lg:mt-8 tracking-wide">
  //         Qui sommes
  //         <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
  //           {""}
  //           -nous ?
  //         </span>
  //       </h2>
  //     </div>
  //     <div className="flex flex-wrap mt-10 lg:mt-20">
  //       {features.map((feature, index) => (
  //         <div key={index} className="w-full">
  //           <div className="flex">
  //             <div className="flex mx-6 h-10 p-2 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
  //               {feature.icon}
  //             </div>
  //             <div>
  //               <h5 className="mt-1  text-xl">{feature.text}</h5>
  //               <p className="text-md p-2 mb-8 text-neutral-500">
  //                 {feature.description}
  //               </p>
  //               <p className="text-md p-2  text-neutral-500">
  //                 {feature.description2}
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="relative py-2  bg-blue-100 border-b border-black min-h-[250px]">
      <div className="text-center">
        <span className="bg-gradient-to-r from-blue-400 to-black text-white rounded-full text-sm font-medium px-2 py-1 uppercase border border-blue-400">
          à propos
        </span>
        <h2 className="text-xl sm:text-3xl lg:text-4xl mt-4 lg:mt-8 tracking-wide">
          Qui sommes
          <span className="bg-gradient-to-r from-blue-400 to-black text-transparent bg-clip-text">
            {""}
            -nous ?
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full">
            <div className="flex">
              <div className="flex mx-6 h-10 p-2 w-10 bg-black text-white justify-center items-center rounded-full border border-white">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 text-xl text-black">{feature.text}</h5>
                <p className="text-md p-2 mb-8 text-blue-400">
                  {feature.description}
                </p>
                <p className="text-md p-2 text-shadow-black">
                  {feature.description2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
