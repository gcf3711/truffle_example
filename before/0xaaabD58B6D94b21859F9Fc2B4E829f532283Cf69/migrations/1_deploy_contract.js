const UCoinToken = artifacts.require("UCoinToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(UCoinToken)
};
