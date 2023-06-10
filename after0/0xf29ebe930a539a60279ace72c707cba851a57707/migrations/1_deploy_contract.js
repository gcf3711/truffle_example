const B = artifacts.require("B");
module.exports = function(deployer, network, accounts) {
deployer.deploy(B)
};
