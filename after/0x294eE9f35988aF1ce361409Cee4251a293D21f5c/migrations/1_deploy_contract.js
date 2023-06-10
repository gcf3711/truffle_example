const MyAdvancedToken = artifacts.require("MyAdvancedToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyAdvancedToken, web3.utils.toBN("1000000000"), "Coinstar", "CSTR")
};
