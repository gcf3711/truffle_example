const MyToken = artifacts.require("MyToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyToken, web3.utils.toBN("18000000000"), "SingaporeCoinOrigin", web3.utils.toBN("2"), "SCO", accounts[0])
};
