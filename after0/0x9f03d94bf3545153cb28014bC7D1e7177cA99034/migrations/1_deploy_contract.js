const MyYLCToken = artifacts.require("MyYLCToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyYLCToken, web3.utils.toBN("2000000000000000000"), "MyYLC", web3.utils.toBN("10"), "$")
};
