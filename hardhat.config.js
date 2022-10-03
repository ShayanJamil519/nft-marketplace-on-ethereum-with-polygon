// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const privateKey = process.env.privateKey;
const infuraId = process.env.infuraId;

module.exports = {
    networks: {
        localhost: {
            chainId: 31337,
        },
        hardhat: {
            chainId: 1337,
        },

        mumbai: {
            // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`,
            url: "https://rpc-mumbai.matic.today",
            accounts: [privateKey],
        },
        mainnet: {
            // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
            url: "https://rpc-mainnet.maticvigil.com",
            accounts: [privateKey],
        },
    },
    solidity: "0.8.4",
};