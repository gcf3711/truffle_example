const SiringClockAuction = artifacts.require("SiringClockAuction");
module.exports = function(deployer, network, accounts) {
deployer.deploy(SiringClockAuction, accounts[86], web3.utils.toBN("300"))
};
