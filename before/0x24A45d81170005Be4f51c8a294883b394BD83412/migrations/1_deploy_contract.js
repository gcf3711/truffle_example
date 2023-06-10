const FIBToken = artifacts.require("FIBToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(FIBToken)
};
