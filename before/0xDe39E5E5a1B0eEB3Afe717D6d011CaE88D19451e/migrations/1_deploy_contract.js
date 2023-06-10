const DimonCoin = artifacts.require("DimonCoin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(DimonCoin)
};
