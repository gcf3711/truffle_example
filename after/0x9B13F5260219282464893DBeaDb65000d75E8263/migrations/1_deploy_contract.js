const GFCB = artifacts.require("GFCB");
module.exports = function(deployer, network, accounts) {
deployer.deploy(GFCB)
};
