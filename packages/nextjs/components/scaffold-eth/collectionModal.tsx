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
      img: "/assets/ethDenBottle.jpg",
      title: "Eth Denver Water Bottle",
      description: "Water Bottle from ETH Denver 2018",
    },
    {
      img: "/assets/tshirt.png",
      title: "Rare Vintage Signed 80s Germs Punk Band T Shirt",
      description: "Rare Vintage 80s Germs Punk Band GI T Shirt XL Signed Darby Crash Patt smear",
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
              <div>
                <span className="text-sm font-bold">From:</span>
              </div>
              <div>
                <span className="text-sm font-bold pl-3">Available:</span>
              </div>
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
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{val.title}</div>
                    <p className="mt-2 text-slate-500">{val.description}</p>
                    <input className="placeholder-shown:border-gray-50 w-50" placeholder="Transfer Address" />
                    <button className="shadow bg-base-100 rounded-box w-32">Start Transfer</button>
                  </div>
                </div>
              </div>
            )})}
            <div className="flex flex-col space-y-3">             
                <span>Send</span>             
            </div>
          </div>
        </label>
      </label>
    </div>
  );
}
