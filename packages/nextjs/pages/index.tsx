import type { NextPage } from "next";
import Head from "next/head";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Collection from "../components/scaffold-eth/collection"
import React from "react";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RealFT</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <Collection />      
    </>
  );
};

export default Home;
