import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useBlockNumber } from "wagmi";

// So if we omit staleTime, useBlockNumber will make the request everytime component mounts
// with staleTime it will will actually use the cache data next time you visit the page

const Demo: NextPage = () => {
  const [blockNumber, setBlockNumber] = useState(0);

  const { data: fetchBlocknumber, isLoading } = useBlockNumber({
    watch: true,
    // cacheTime: 40_000,
    cacheTime: 40_000,
    staleTime: 5_000,
  });
  console.log("⚡️ ~ file: cacheDemo.tsx ~ line 13 ~ isLoading", isLoading);

  // We need to apply this pattern to avoid Hydration errors.
  useEffect(() => {
    if (fetchBlocknumber) {
      setBlockNumber(fetchBlocknumber);
    }
  }, [fetchBlocknumber]);

  return (
    <div>
      {blockNumber && <h1>{blockNumber}</h1>}
      <Link href="/">
        <a>TO the Home</a>
      </Link>
    </div>
  );
};
export default Demo;
