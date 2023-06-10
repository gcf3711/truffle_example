const MyAdvancedToken = artifacts.require("MyAdvancedToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyAdvancedToken, web3.utils.toBN("20000000000"), "Target Coin", web3.utils.toBN("1"), "TGT")
};
