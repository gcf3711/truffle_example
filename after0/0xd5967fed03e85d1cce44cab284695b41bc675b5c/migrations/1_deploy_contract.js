const demo = artifacts.require("demo");
module.exports = function(deployer, network, accounts) {
deployer.deploy(demo)
};
