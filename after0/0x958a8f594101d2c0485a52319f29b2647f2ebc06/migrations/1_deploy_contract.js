const Marriage = artifacts.require("Marriage");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Marriage, accounts[1])
};
