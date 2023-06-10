const Crowdnext = artifacts.require("Crowdnext");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Crowdnext)
};
