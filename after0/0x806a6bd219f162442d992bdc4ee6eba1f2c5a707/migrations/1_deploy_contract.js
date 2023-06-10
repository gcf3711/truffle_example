const Pie = artifacts.require("Pie");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Pie)
};
