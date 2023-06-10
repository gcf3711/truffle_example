const YobCoinCrowdsale = artifacts.require("YobCoinCrowdsale");
module.exports = function(deployer, network, accounts) {
deployer.deploy(YobCoinCrowdsale)
};
