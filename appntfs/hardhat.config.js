require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/d175321ab1d44db884e4c1e59b7c3ee0",
      accounts: ['0xe519f4861aa81310f2e2d1d91d25aa436b2e35f2943d021a0eea43dad8ddb554']
    }
  }
};
