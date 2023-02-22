import { NextApiRequest, NextApiResponse } from "next";

const addresses = new Set<string>();

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  console.log("HELLO!@!!!!", request.body);
  if (request.body.admin) {
    response.status(200).json({ addresses: Array.from(addresses) });
  } else {
    addresses.add(request.body.address);
    //addresses.push(request.body.address);

    response.status(200).json({ message: "ok" });
  }
}
