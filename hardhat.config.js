require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    // goerli 추가
    goerli: {
      url: process.env.GOERLI_URL || "https://eth-goerli.g.alchemy.com/v2/Mnb_rfgqumHWL4P4BtjHI21lPTsqOwyv", // 이곳에 URL을 수정하세요
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
