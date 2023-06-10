const airdrop = artifacts.require("airdrop");
module.exports = function(deployer, network, accounts) {
deployer.deploy(airdrop)
};
