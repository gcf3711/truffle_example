const PRIVATE_ETH_CELL = artifacts.require("PRIVATE_ETH_CELL");
module.exports = function(deployer, network, accounts) {
deployer.deploy(PRIVATE_ETH_CELL)
};
