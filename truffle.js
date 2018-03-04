require('dotenv').config();
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');

const ropstenPrivateKey = new Buffer(process.env["ROPSTEN_PRIVATE_KEY"], "hex")
const ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
const ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/");

const mainNetPrivateKey = new Buffer(process.env["MAINNET_PRIVATE_KEY"], "hex")
const mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
const mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: ropstenProvider,
      gas: 4600000,
      gasPrice: 30,
      network_id: "3"
    },
    // mainnet: {
    //   provider: mainNetProvider,
    //   gas: 4600000,
    //   gasPrice: web3.toWei("20", "gwei"),
    //   network_id: "1",
    // }
  }
};
