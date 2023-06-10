const GoodTimeCoin = artifacts.require("GoodTimeCoin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(GoodTimeCoin, web3.utils.toBN("110000000"), "Good Time Coin", "GTY")
};
