import { NextPage } from "next";
import Link from "next/link";
import { useBalance } from "wagmi";

const Demo: NextPage = () => {
  const { data: fetchedBalanceData } = useBalance({
    addressOrName: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    // ToDo: Read this value from config. Disabled for localhost.
    cacheTime: 30_000,
  });
  console.log("⚡️ ~ file: index.tsx ~ line 26 ~ fetchedBalanceData", fetchedBalanceData);

  return (
    <Link href="/">
      <a>TO the demo</a>
    </Link>
  );
};
export default Demo;
