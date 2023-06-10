const NexxusToken = artifacts.require("NexxusToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(NexxusToken)
};
