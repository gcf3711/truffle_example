const Coffeecoin = artifacts.require("Coffeecoin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Coffeecoin, web3.utils.toBN("330000000000000000000000000"), "Coffeecoin", web3.utils.toBN("18"), "COFFEE")
};
