import type { NextPage } from "next";
import Head from "next/head";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const ExampleUI: NextPage = () => {
  const { writeAsync, isLoading } = useScaffoldContractWrite("YourContract", "checkin", undefined, "0.01");
  const { writeAsync: checkoutFunc, isLoading: checkOutLoading } = useScaffoldContractWrite("YourContract", "checkout");
  return (
    <>
      <Head>
        <title>Scaffold-eth Example Ui</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>
      <div className=" flex flex-col space-y-4 items-center justify-center flex-grow" data-theme="exampleUi">
        <button className={`btn btn-primary ${isLoading ? "loading" : ""}`} onClick={async () => await writeAsync()}>
          Checkin
        </button>
        <button
          className={`btn btn-primary ${checkOutLoading ? "loading" : ""}`}
          onClick={async () => await checkoutFunc()}
        >
          CheckOut
        </button>
      </div>
    </>
  );
};

export default ExampleUI;
