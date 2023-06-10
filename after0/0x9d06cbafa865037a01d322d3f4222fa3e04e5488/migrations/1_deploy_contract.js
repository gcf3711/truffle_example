const Delta = artifacts.require("Delta");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Delta)
};
