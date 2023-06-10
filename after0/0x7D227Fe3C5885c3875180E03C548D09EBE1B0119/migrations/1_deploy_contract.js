const EncryptedToken = artifacts.require("EncryptedToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(EncryptedToken)
};
