import {HardhatUserConfig, task} from "hardhat/config";

import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    hardhat: {
      accounts: {
        count: 70,
      }
    },
    ARB_MAINNET: {
      accounts: [`0x${ process.env.PRIVATE_KEY }`],
      url: `https://arb-mainnet.g.alchemy.com/v2/${ process.env.ALCHEMY_API_KEY }`,
    },
    ARB_GOERLI: {
      accounts: [`0x${ process.env.PRIVATE_KEY }`],
      url: `https://arb-goerli.g.alchemy.com/v2/${ process.env.ALCHEMY_API_KEY }`,
    },
    ETH_MAINNET: {
      accounts: [`0x${ process.env.PRIVATE_KEY }`],
      url: `https://eth-mainnet.g.alchemy.com/v2/${ process.env.ALCHEMY_API_KEY }`,
    },
    ETH_GOERLI: {
      accounts: [`0x${ process.env.PRIVATE_KEY }`],
      url: `https://eth-goerli.g.alchemy.com/v2/${ process.env.ALCHEMY_API_KEY }`,
    },
    BSC_MAINNET: {
      accounts: [`0x${ process.env.PRIVATE_KEY }`],
      url: "https://rpc.ankr.com/bsc/593f8b90ce34e79ca40dcd9a571fc6e4c9d0d8030a929e6b896d1bcedb6516dd",
    },

  },
  gasReporter: {
    outputFile: "gas-report.txt",
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    noColors: true,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY || "",
    token: "ETH",
  },
  etherscan: {
    // apiKey: `${ process.env.BSCSCAN_API_KEY }`,
    apiKey: `${ process.env.ETHERSCAN_API_KEY }`,
  },
  paths: {tests: "tests"},
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

export default config;
