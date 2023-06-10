const MESH = artifacts.require("MESH");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MESH, web3.utils.toBN("1000000000.0"))
};
