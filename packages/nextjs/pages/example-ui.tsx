import type { NextPage } from "next";
import Head from "next/head";
import { useDeployedContractInfo, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";
import { BigNumber } from "ethers";

const ExampleUI: NextPage = () => {
  const { address } = useAccount();
  const { data: erc20Spender } = useDeployedContractInfo("ERC20Transfer");
  const { data: balance } = useScaffoldContractRead<BigNumber>("MyToken", "balanceOf", [address]);

  const { writeAsync: mintTokens } = useScaffoldContractWrite("MyToken", "mint", [address]);
  const { writeAsync: approveTokens } = useScaffoldContractWrite("MyToken", "approve", [erc20Spender?.address, "100"]);
  const { writeAsync: transfer } = useScaffoldContractWrite("ERC20Transfer", "transferTokens", [
    "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    "100",
  ]);

  const handleWrite = async () => {
    await approveTokens();
    await transfer();
  };

  return (
    <>
      <Head>
        <title>Scaffold-eth Example Ui</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex items-center flex-col flex-grow pt-10">
        <p>Balance: {balance?.toString()}</p>
        <button className="btn btn-primary mb-4" onClick={mintTokens}>
          Mint
        </button>
        <button className="btn btn-primary" onClick={handleWrite}>
          Approve and Transfer
        </button>
      </div>
    </>
  );
};

export default ExampleUI;
