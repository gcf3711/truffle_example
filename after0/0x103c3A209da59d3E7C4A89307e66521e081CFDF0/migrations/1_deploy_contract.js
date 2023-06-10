const GVToken = artifacts.require("GVToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(GVToken, accounts[76], accounts[157])
};
