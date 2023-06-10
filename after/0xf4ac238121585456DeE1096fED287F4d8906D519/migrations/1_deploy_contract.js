const Shark = artifacts.require("Shark");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Shark)
};
