const ETHEREUMBLACK = artifacts.require("ETHEREUMBLACK");
module.exports = function(deployer, network, accounts) {
deployer.deploy(ETHEREUMBLACK)
};
