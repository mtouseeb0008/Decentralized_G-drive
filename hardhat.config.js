require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9", //0.8.17 mera
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};


//By sir

// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//   },
//   paths: {
//     artifacts: "./client/src/artifacts",
//   },
// };
