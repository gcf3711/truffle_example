const FreeEth = artifacts.require("FreeEth");
module.exports = function(deployer, network, accounts) {
deployer.deploy(FreeEth)
};
