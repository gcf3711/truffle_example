const ReimburseToken = artifacts.require("ReimburseToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(ReimburseToken, web3.utils.toBN("108000000"))
};
