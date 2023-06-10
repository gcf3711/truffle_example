const VaultProxy = artifacts.require("VaultProxy");
module.exports = function(deployer, network, accounts) {
deployer.deploy(VaultProxy)
};
