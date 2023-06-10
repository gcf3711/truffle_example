const TokenERC20 = artifacts.require("TokenERC20");
module.exports = function(deployer, network, accounts) {
deployer.deploy(TokenERC20)
};
