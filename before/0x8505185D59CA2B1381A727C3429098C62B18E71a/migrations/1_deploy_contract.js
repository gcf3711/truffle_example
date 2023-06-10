const NGToken = artifacts.require("NGToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(NGToken)
};
