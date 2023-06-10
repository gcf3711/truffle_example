const HodboCrowdsale = artifacts.require("HodboCrowdsale");
module.exports = function(deployer, network, accounts) {
deployer.deploy(HodboCrowdsale)
};
