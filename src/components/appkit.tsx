"use client";
// import BlockchainConstants from "@constants/blockchain";

import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { mainnet, sepolia } from "@reown/appkit/networks";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
// const metadata = BlockchainConstants.metadata;

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Laboratory",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

createAppKit({
  adapters: [new EthersAdapter()],
  networks: [mainnet, sepolia],
  metadata,
  projectId,
});

export default function AppKitProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
