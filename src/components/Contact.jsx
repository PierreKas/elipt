import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Youtube,
} from "lucide-react";

const ContactAndLocation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  //   return (
  //     <div className="py-16 mt-10 ">
  //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //         {/* Header */}
  //         <div className="text-center mb-16">
  //           <span className="bg-neutral-900 text-orange-500 rounded-full h06 text-sm font-medium px-2 py-1 uppercase">
  //             Nos coordonnées
  //           </span>
  //           <p className="text-xl text-gray-600 max-w-3xl mt-10 mx-auto">
  //             Souhaitez-vous en savoir plus ou prendre rendez-vous avec notre
  //             équipe ?
  //           </p>
  //         </div>

  //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
  //           {/* Contact Information */}
  //           <div className="space-y-8">
  //             {/* Contact Details */}
  //             <div className="bg-white rounded-2xl shadow-lg p-8">
  //               <h3 className="text-2xl font-bold text-gray-900 mb-6">
  //                 Gardons contact
  //               </h3>

  //               <div className="space-y-6">
  //                 {/* Phone Numbers */}
  //                 <div>
  //                   <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
  //                     <Phone className="w-5 h-5 mr-2 text-orange-500" />
  //                     Téléphone
  //                   </h4>
  //                   <div className="space-y-2 ml-7">
  //                     <a
  //                       href="tel:+243972779785"
  //                       className="block text-gray-600 hover:text-orange-500 transition-colors"
  //                     >
  //                       +243 972 779 785
  //                     </a>
  //                   </div>
  //                 </div>

  //                 {/* Email Addresses */}
  //                 <div>
  //                   <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
  //                     <Mail className="w-5 h-5 mr-2 text-orange-500" />
  //                     Adresse Email
  //                   </h4>
  //                   <div className="space-y-2 ml-7">
  //                     <a
  //                       href="mailto:contact@elipt.tech"
  //                       className="block text-gray-600 hover:text-orange-500 transition-colors"
  //                     >
  //                       contact@elipt.tech
  //                     </a>
  //                   </div>
  //                 </div>

  //                 {/* Address */}
  //                 <div>
  //                   <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
  //                     <MapPin className="w-5 h-5 mr-2 text-orange-500" />
  //                     Adresse
  //                   </h4>
  //                   <div className="ml-7">
  //                     <p className="text-gray-600">
  //                       Avenue Présidentielle n°124, Quartier Himbi
  //                       <br />
  //                       Goma, RDC
  //                     </p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  return (
    <div className="  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="text-center"> */}
          <span className="bg-gradient-to-r from-blue-400 to-black text-white rounded-full text-sm font-medium px-2 py-1 uppercase border border-blue-400">
            Nos coordonnées
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl mt-4 lg:mt-8 tracking-wide">
            Souhaitez-vous en savoir plus ou prendre
            <span className="bg-gradient-to-r from-blue-400 to-black text-transparent bg-clip-text">
              {" "}
              rendez-vous avec notre équipe ?
            </span>
          </h2>
          {/* </div> */}
          <p className="text-xl text-blue-400 max-w-3xl mt-10 mx-auto"></p>
        </div>

        <div className="flex items-center justify-center">
          {/* Contact Information */}
          <div className="">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-black text-transparent bg-clip-text mb-6">
                Gardons contact
              </h3>

              <div className="space-y-6">
                {/* Phone Numbers */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-black" />
                    Téléphone
                  </h4>
                  <div className="space-y-2 ml-7">
                    <a
                      href="tel:+243972779785"
                      className="block text-blue-400 hover:text-blue-800 transition-colors"
                    >
                      +243 972 779 785
                    </a>
                  </div>
                </div>

                {/* Email Addresses */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-black" />
                    Adresse Email
                  </h4>
                  <div className="space-y-2 ml-7">
                    <a
                      href="mailto:infoelipt@gmail.com"
                      className="block text-blue-400 hover:text-blue-800 transition-colors"
                    >
                      infoelipt@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-3 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-black" />
                    Adresse
                  </h4>
                  <div className="ml-7">
                    <p className="text-blue-400 hover:text-blue-800">
                      Avenue Présidentielle n°124, Quartier Himbi
                      <br />
                      Goma, RDC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAndLocation;
