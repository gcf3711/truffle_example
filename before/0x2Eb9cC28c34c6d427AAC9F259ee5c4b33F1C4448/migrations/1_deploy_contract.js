const Doftcoin = artifacts.require("Doftcoin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Doftcoin)
};
