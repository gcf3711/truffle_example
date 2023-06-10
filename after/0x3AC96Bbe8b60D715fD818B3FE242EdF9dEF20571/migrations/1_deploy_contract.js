const MyBoToken = artifacts.require("MyBoToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyBoToken, web3.utils.toBN("2000000000000000000"), "MyBO", web3.utils.toBN("10"), "$")
};
