const ETY = artifacts.require("ETY");
module.exports = function(deployer, network, accounts) {
deployer.deploy(ETY, accounts[63])
};
