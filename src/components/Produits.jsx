import React from "react";
import {
  MessageCircle,
  Users,
  GraduationCap,
  BarChart3,
  Shield,
  CreditCard,
} from "lucide-react";

import { products } from "../constants";

function Produits() {
  return (
    <div className="relative mt-3 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h06 text-sm font-medium px-2 py-1 uppercase">
          Nos Produits
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Synoorg – Une marque,
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            plusieurs solutions
          </span>
        </h2>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl mx-auto">
          Synoorg est notre marque SaaS phare, une suite de logiciels
          intelligents destinée aux organisations communautaires, établissements
          scolaires, institutions sociales, médicales et bien plus encore.
        </p>
      </div>

      <div className="flex flex-col mt-10 lg:mt-20 space-y-16">
        {products.map((product, productIndex) => (
          <div key={product.id} className="w-full">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                📌{product.id}. {product.name}
              </h3>
              <p className="mt-4 text-lg text-neutral-500 max-w-3xl mx-auto">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex mx-6 h-12 p-3 w-12 bg-neutral-900 text-orange-700 justify-center items-center rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h5 className="text-lg font-medium mb-2">{feature.title}</h5>
                  <p className="text-sm text-neutral-500 px-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produits;
