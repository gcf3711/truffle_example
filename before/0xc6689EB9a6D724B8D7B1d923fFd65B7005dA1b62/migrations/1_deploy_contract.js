const SEC = artifacts.require("SEC");
module.exports = function(deployer, network, accounts) {
deployer.deploy(SEC)
};
