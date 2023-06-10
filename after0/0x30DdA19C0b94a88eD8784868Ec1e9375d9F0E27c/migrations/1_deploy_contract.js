const DSPXToken = artifacts.require("DSPXToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(DSPXToken, accounts[105], accounts[239])
};
