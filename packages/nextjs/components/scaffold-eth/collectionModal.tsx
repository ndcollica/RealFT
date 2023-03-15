import React, { useEffect, useState } from "react";
import Image from "next/image"

export default function collectionModal() {   
  const collection = [
    {
      img: "/assets/rolex.jpg",
      title: "Rolex Cosmograph Daytona",
      description: "New and unworn. An inspection by our certified watchmakers guarantees authenticity.",
    },
    {
      img: "/assets/rolexBack.jpg",
      title: "Rolex Cosmograph Daytona Back",
      description: "New and unworn. An inspection by our certified watchmakers guarantees authenticity.",
    },
    {
      img: "/assets/rolexBottom.jpg",
      title: "Rolex Cosmograph Daytona Bottom",
      description: "New and unworn. An inspection by our certified watchmakers guarantees authenticity.",
    },
    {
      img: "/assets/rolexSide.jpg",
      title: "Rolex Cosmograph Daytona Side",
      description: "New and unworn. An inspection by our certified watchmakers guarantees authenticity.",
    },
  ]
  return (
    <div>
      <label
        htmlFor="collection-modal"
        className="btn btn-primary btn-sm px-2 rounded-full font-normal space-x-2 normal-case"
      >
        <span>View Collection</span>
      </label>
      <input type="checkbox" id="collection-modal" className="modal-toggle" />
      <label htmlFor="collection-modal" className="modal cursor-pointer">
        <label className="modal-box relative">
          {/* dummy input to capture event onclick on modal box */}
          <input className="h-0 w-0 absolute top-0 left-0" />
          <h3 className="text-xl font-bold mb-3">Collection</h3>
          <label htmlFor="collection-modal" className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3">
            ✕
          </label>
          <div className="space-y-3">
            <div className="flex space-x-4">
            <input className="placeholder-shown:border-gray-50 w-50" placeholder="Transfer Address" />
                    <button className="shadow bg-base-100 rounded-box w-32">Transfer Collection</button>
            </div>
            {
            collection.map((val, i) => {
              return (
              <div className="mt-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <Image
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={val.img}
                      alt="rolex image"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{val.title}</div>
                    <p className="mt-2 text-slate-500">{val.description}</p>
                  </div>
                </div>
              </div>
            )})}            
          </div>
        </label>
      </label>
    </div>
  );
}
