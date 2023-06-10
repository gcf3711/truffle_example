const MultiplicatorX3 = artifacts.require("MultiplicatorX3");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MultiplicatorX3)
};
