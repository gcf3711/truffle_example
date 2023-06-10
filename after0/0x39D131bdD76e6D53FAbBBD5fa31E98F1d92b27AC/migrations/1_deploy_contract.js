const Bittelux = artifacts.require("Bittelux");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Bittelux)
};
