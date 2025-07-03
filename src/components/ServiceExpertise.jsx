import React from "react";
import { CheckCircle2 } from "lucide-react";
import techSupport from "../assets/tech-support.jpg";
import { checklistItems } from "../constants";
const ServiceExpertise = () => {
  return (
    <div className="mt-2 text-center">
      <span className="bg-neutral-900 text-orange-500 rounded-full h06 text-sm font-medium px-2 py-1 uppercase">
        Services & Expertise
      </span>
      <div className=" text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Même si nos produits sont au cœur de notre mission,{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          nous accompagnons également nos clients avec
        </span>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={techSupport} alt="code" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className=" text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceExpertise;
