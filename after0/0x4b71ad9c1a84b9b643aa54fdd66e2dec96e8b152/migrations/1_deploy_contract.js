const airPort = artifacts.require("airPort");
module.exports = function(deployer, network, accounts) {
deployer.deploy(airPort)
};
