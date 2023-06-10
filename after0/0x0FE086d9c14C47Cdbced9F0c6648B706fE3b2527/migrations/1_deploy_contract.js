const HashnodeTestCoin = artifacts.require("HashnodeTestCoin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(HashnodeTestCoin)
};
