import type { NextPage } from "next";
import Head from "next/head";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image"
import React from "react";

const Home: NextPage = () => {

  const collections = [
    {
      img: "/assets/rolex.jpg",
      title: "Rolex Cosmograph Daytona",
      description: "New and unworn. An inspection by our certified watchmakers guarantees authenticity.",
      subNFTs: 3
    },
    {
      img: "/assets/ethDenBottle.jpg",
      title: "Eth Denver Water Bottle",
      description: "Water Bottle from ETH Denver 2018",
      subNFTs: 1
    },
    {
      img: "/assets/tshirt.png",
      title: "Rare Vintage Signed 80s Germs Punk Band T Shirt",
      description: "Rare Vintage 80s Germs Punk Band GI T Shirt XL Signed Darby Crash Patt smear",
      subNFTs: 2
    },
  ]

  return (
    <>
      <Head>
        <title>RealFT</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">RealFT</span>
          </h1>          
          {
            collections.map((val, i) => {
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
                    <button className="shadow bg-base-100 rounded-box w-40">View Collection</button>
                    <p className="mt-2 text-slate-500">subNFT's: {val.subNFTs}</p>
                    <p className="mt-2 text-slate-500">{val.description}</p>
                    <input className="placeholder-shown:border-gray-50 w-50" placeholder="Transfer Address" />
                    <button className="shadow bg-base-100 rounded-box w-32">Start Transfer</button>
                  </div>
                </div>
              </div>
            )})}
        </div>
      </div>
    </>
  );
};

export default Home;
