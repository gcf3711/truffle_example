const Freebie = artifacts.require("Freebie");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Freebie)
};
