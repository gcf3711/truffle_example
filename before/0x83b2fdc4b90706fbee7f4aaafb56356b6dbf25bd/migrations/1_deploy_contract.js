const XgoldCrowdsale = artifacts.require("XgoldCrowdsale");
module.exports = function(deployer, network, accounts) {
deployer.deploy(XgoldCrowdsale)
};
