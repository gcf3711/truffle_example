const AirDrop = artifacts.require("AirDrop");
const EqualToken = artifacts.require("EqualToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(AirDrop)
deployer.deploy(EqualToken)
};
