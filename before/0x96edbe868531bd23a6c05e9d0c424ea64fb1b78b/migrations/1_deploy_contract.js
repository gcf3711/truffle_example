const PENNY_BY_PENNY = artifacts.require("PENNY_BY_PENNY");
module.exports = function(deployer, network, accounts) {
deployer.deploy(PENNY_BY_PENNY)
};
