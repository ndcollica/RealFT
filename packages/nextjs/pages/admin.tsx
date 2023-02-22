import { ethers } from "ethers";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useAccount, useSigner } from "wagmi";
import { Address, Balance } from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useTransactor } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address } = useAccount();
  const [hideList, setHideList] = useState([]);
  const [addresses, setAddresses] = useState([]);

  const transactor = useTransactor();

  const getAdmin = async () => {
    console.log("ADMIN STUFF AS", address);
    const res = await fetch("/api/checkin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ admin: true }),
    });
    const data = await res.json();
    console.log("data", data);
    setAddresses(data.addresses);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getAdmin();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const { data: contractInfo } = useDeployedContractInfo("Credits");

  const { data: userSigner } = useSigner();

  const creditsContract =
    contractInfo && userSigner && new ethers.Contract(contractInfo?.address, contractInfo?.abi, userSigner);

  const [allBalances, setAllBalances] = useState({});

  useEffect(() => {
    const getBalances = async () => {
      const balances: any = {};
      for (let i = 0; i < addresses.length; i++) {
        const balance = await creditsContract?.balanceOf(addresses[i]);
        balances[addresses[i]] = balance;
      }
      setAllBalances(balances);
    };
    getBalances();
  }, [addresses]);

  return (
    <>
      <Head>
        <title>Scaffold-eth App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <pre>
          {addresses &&
            addresses.map((a, index) => {
              if (hideList.includes(a)) return null;
              return (
                <div key={index + a} className="p-3 flex gap-2">
                  <div className="flex items-center justify-center text-sm">
                    {allBalances && allBalances[a] && ethers.utils.formatEther(allBalances[a])} ⭐️ Credits
                  </div>
                  <Balance address={a} />
                  <Address key={index + a} address={a} />
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => {
                      setHideList([...hideList, a]);
                    }}
                  >
                    Hide
                  </button>
                  <button
                    className="btn btn-sm "
                    onClick={async () => {
                      await transactor({
                        to: a,
                        value: ethers.utils.parseEther("0.01"),
                      });
                      await creditsContract?.transfer(a, ethers.utils.parseEther("1"));
                    }}
                  >
                    Onboard
                  </button>
                </div>
              );
            })}
        </pre>
      </div>
    </>
  );
};

export default Home;
