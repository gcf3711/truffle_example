const Caller = artifacts.require("Caller");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Caller)
};
