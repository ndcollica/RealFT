import { NextPage } from "next";
import Link from "next/link";
import { useBalance } from "wagmi";

const Demo: NextPage = () => {
  const {
    data: fetchedBalanceData,
    isLoading,
    isFetching,
  } = useBalance({
    addressOrName: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    // ToDo: Read this value from config. Disabled for localhost.
    watch: true,
  });
  console.log("⚡️ ~ file: demo.tsx ~ line 12 ~ isFetching", isFetching);
  console.log("⚡️ ~ file: demo.tsx ~ line 12 ~ isLoading", isLoading);
  console.log("⚡️ ~ file: index.tsx ~ line 26 ~ fetchedBalanceData", fetchedBalanceData);

  return (
    <Link href="/">
      <a>TO the Home</a>
    </Link>
  );
};
export default Demo;
