const RRToken = artifacts.require("RRToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(RRToken)
};
