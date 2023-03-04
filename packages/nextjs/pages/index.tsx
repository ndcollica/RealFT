import type { NextPage } from "next";
import Head from "next/head";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image"
import React from "react";

const Home: NextPage = () => {
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
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">              
              <Image
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="/assets/rolex.jpg"
                alt="rolex image"
                width={100}
                height={100}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Rolex</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
              <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
