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
      description: "New and unworn. An inspection by our certified watchmakers guarantees authenticity."
    },
    {
      img: "/assets/rolex.jpg",
      title: "Rolex Cosmograph Daytona",
      description: "New and unworn. An inspection by our certified watchmakers guarantees authenticity."
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
