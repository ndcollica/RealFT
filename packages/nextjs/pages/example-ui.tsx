import type { NextPage } from "next";
import Head from "next/head";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const ExampleUI: NextPage = () => {
  const { writeAsync: setGreeting } = useScaffoldContractWrite("YourContract", "setGreeting", ["Hello world !!"], "2");
  const { writeAsync: withDraw } = useScaffoldContractWrite("YourContract", "withdraw");

  const handleWrite = async () => {
    await setGreeting();
    await withDraw();
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
      <div className="grid lg:grid-cols-2 flex-grow" data-theme="exampleUi">
        <button className="btn btn-primary" onClick={handleWrite}>
          Set and Withdraw
        </button>
        {/* <ContractInteraction /> */}
        {/* <ContractData /> */}
      </div>
    </>
  );
};

export default ExampleUI;
