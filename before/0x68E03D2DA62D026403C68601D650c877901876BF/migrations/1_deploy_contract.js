const ModiTokenERC20 = artifacts.require("ModiTokenERC20");
module.exports = function(deployer, network, accounts) {
deployer.deploy(ModiTokenERC20, web3.utils.toBN("10000"), "MODI Token", "MODI")
};
