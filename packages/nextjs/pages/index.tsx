import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import QRCode from "react-qr-code";

const Home: NextPage = () => {
  //get the current url
  const url = window.location.href + "checkin";

  return (
    <>
      <Head>
        <title>Scaffold-eth App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="flex items-center flex-col pt-10">
        <QRCode value={url} style={{ height: "auto", maxWidth: "40%", width: "40%" }} />
        <div>{url}</div>
      </div>
      <div className="flex items-center flex-col pt-10">
        {"👋 hey! come Play! Use your phone's camera to scan ☝️ this QR!"}
      </div>
    </>
  );
};

export default Home;
