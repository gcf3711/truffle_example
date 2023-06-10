const CCindexToken = artifacts.require("CCindexToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(CCindexToken)
};
