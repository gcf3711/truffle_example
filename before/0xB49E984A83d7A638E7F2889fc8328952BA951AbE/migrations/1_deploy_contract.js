const MON = artifacts.require("MON");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MON, accounts[106], web3.utils.toBN("1518908400"), web3.utils.toBN("0"), web3.utils.toBN("0"))
};
