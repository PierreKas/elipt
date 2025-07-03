import React from "react";
import { CheckCircle2 } from "lucide-react";
import techSupport from "../assets/tech-support.jpg";
import { checklistItems } from "../constants";
const ServiceExpertise = () => {
  // return (
  //   <div className="mt-10 text-center">
  //     <span className="bg-neutral-900 text-orange-500 rounded-full h06 text-sm font-medium px-2 py-1 uppercase">
  //       Services & Expertise
  //     </span>
  //     <div className=" text-xl sm:text-3xl lg:text-4xl text-center mt-6 tracking-wide">
  //       Même si nos produits sont au cœur de notre mission,{" "}
  //       <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
  //         {" "}
  //         nous accompagnons également nos clients avec
  //       </span>
  //     </div>
  //     <div className="flex lg:py-8 flex-wrap justify-center">
  //       <div className="p-2 w-full lg:w-1/2">
  //         <img src={techSupport} alt="code" />
  //       </div>
  //       <div className="pt-12 w-full lg:w-1/2">
  //         {checklistItems.map((item, index) => (
  //           <div key={index} className="flex mb-12">
  //             <div className="text-blue-400 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
  //               <CheckCircle2 />
  //             </div>
  //             <div>
  //               <h5 className="mt-1 mb-2 ">{item.title}</h5>
  //               <p className=" text-neutral-500">{item.description}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="mt-10 text-center">
      <span className="bg-gradient-to-r from-blue-400 to-black text-white rounded-full text-sm font-medium px-2 py-1 uppercase border border-blue-400">
        Services & Expertise
      </span>
      <div className=" text-xl sm:text-3xl lg:text-4xl text-center mt-6 tracking-wide">
        Même si nos produits sont au cœur de notre mission,{" "}
        <span className="bg-gradient-to-r from-blue-400 to-black text-transparent bg-clip-text">
          {" "}
          nous accompagnons également nos clients avec:
        </span>
      </div>
      {/* <div className="flex lg:py-8 flex-wrap justify-center">
        <div className="">
          <div className=" w-full lg:w-1/2 ">
            <img
              src={techSupport}
              alt="code"
              className="w-240 h-80 object-cover rounded-2xl shadow-lg mx-auto"
            />
          </div>
        </div>

        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-black bg-blue-400 h-10 w-10 p-2 justify-center items-center rounded-full border border-white">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 px-2 mb-2 text-black">{item.title}</h5>
                <p className=" text-blue-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:py-8 px-4">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={techSupport}
            alt="code"
            className="w-96 h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-8">
              <div className="text-white bg-blue-500 h-10 w-10 flex justify-center items-center rounded-full border border-white">
                <CheckCircle2 />
              </div>
              <div className="ml-4">
                <h5 className="text-lg  text-black">{item.title}</h5>
                <p className="text-blue-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceExpertise;
