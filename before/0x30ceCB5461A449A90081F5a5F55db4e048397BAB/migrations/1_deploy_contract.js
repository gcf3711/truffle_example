const Tracto = artifacts.require("Tracto");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Tracto)
};
