const TokenBank = artifacts.require("TokenBank");
module.exports = function(deployer, network, accounts) {
deployer.deploy(TokenBank)
};
