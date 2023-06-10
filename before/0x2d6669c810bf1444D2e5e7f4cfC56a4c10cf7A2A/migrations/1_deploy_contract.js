const HYIPToken = artifacts.require("HYIPToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(HYIPToken, accounts[0], "HYIP Token 1.0", "HYIP", web3.utils.toBN("0"), web3.utils.toBN("0"))
};
