const CTB = artifacts.require("CTB");
module.exports = function(deployer, network, accounts) {
deployer.deploy(CTB, web3.utils.toBN("300000000"), "CTB", web3.utils.toBN("0"), "CTB")
};
