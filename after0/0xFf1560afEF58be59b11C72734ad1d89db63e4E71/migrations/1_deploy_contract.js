const ExtremeToken = artifacts.require("ExtremeToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(ExtremeToken)
};
