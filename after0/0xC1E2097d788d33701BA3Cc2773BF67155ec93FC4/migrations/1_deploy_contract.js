const IADOWR = artifacts.require("IADOWR");
module.exports = function(deployer, network, accounts) {
deployer.deploy(IADOWR)
};
