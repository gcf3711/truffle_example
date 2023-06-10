const MalaysianCoin = artifacts.require("MalaysianCoin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MalaysianCoin)
};
