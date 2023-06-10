const TokenERC20 = artifacts.require("TokenERC20");
module.exports = function(deployer, network, accounts) {
deployer.deploy(TokenERC20, web3.utils.toBN("1000000000"), "Futures Pease", "FP")
};
