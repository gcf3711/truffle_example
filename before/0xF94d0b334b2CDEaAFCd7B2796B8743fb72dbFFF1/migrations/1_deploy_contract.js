const Jitech = artifacts.require("Jitech");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Jitech, web3.utils.toBN("50000000000000000000000000"), "Jitech", web3.utils.toBN("18"), "JTH")
};
