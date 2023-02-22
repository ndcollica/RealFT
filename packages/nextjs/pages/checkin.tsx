import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import Blockies from "react-blockies";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { ethers } from "ethers";

const Home: NextPage = () => {
  const { address } = useAccount();

  const checkin = async () => {
    console.log("checking in as ", address);
    const res = await fetch("/api/checkin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
    });
    const data = await res.json();
    console.log("data", data);
  };

  //setup react to call checkin every 5 seconds and keeps the list of addresses in state
  useEffect(() => {
    if (address) {
      checkin();
      const interval = setInterval(() => {
        checkin();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [address]);

  const { data: creditBalance } = useScaffoldContractRead("Credits", "balanceOf", [address]);

  return (
    <>
      <Head>
        <title>Scaffold-eth App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      {address && (
        <div className="flex items-center flex-col pt-10">
          <Blockies seed={address?.toLowerCase() as string} scale={42} />
        </div>
      )}

      <div className="flex items-center flex-col pt-10">
        <div className="px-5">
          You are checked in as <Address address={address} />
        </div>
        {creditBalance && <div className="px-5">You have ⭐️{ethers.utils.formatEther(creditBalance)} credits</div>}
        {<div className="px-5">🙋 hold your blockie up so we can see it!</div>}
      </div>

      <div className="flex items-center flex-col pt-10">
        {creditBalance && (
          <a
            href={"https://punkwallet.io/pk#" + localStorage.getItem("scaffoldEth2.burnerWallet.sk")}
            target="_blank"
            rel="noreferrer"
          >
            export to punk wallet
          </a>
        )}
      </div>
    </>
  );
};

export default Home;
