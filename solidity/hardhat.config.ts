import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// load env variables
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/" + process.env.INFLURA_KEY,
      accounts: {
        mnemonic: process.env.MNEMONIC_KEY,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
      },
    },

    hardhat: {
      chainId: 1337,
    },
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
  solidity: "0.8.17",
};

export default config;
