const FiftyFlip = artifacts.require("FiftyFlip");
module.exports = function(deployer, network, accounts) {
deployer.deploy(FiftyFlip, accounts[3], accounts[4], accounts[4])
};
