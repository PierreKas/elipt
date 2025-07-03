import React from "react";
import { teamMembers } from "../constants";

const TeamMembers = () => {
  return (
    <div className="mt-20 tracking-wide">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h06 text-sm font-medium px-2 py-1 uppercase">
          Notre équipe
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Voici notre équipe travailleuse, ambit
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {""}
            ieuse et multidisciplinaire
          </span>
        </h2>
      </div>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"></h2>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
            <div className=" rounded-md p-6  border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300 "
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h6>{testimonial.position}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
