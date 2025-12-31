namespace BlockchainConstants {
  export const chains = [
    {
      chainId: 1,
      name: "Ethereum",
      currency: "ETH",
      explorerUrl: "https://etherscan.io",
      rpcUrl: "https://cloudflare-eth.com",
    },
    {
      chainId: 11155111,
      name: "Sepolia",
      currency: "ETH",
      explorerUrl: "https://sepolia.etherscan.io",
      rpcUrl: "https://rpc.sepolia.org",
    },
  ];

  export const metadata = {
    name: "Web3Modal",
    description: "Web3Modal Laboratory",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  };

  export const Ipfs = {
    PATH: "https://ipfs.infura.io/ipfs",
    ADDRESS: "https://ipfs.infura.io:5001/api/v0",
  };
}

export default BlockchainConstants;
