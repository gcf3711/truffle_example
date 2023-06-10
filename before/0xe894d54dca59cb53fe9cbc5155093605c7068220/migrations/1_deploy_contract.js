const airDrop = artifacts.require("airDrop");
module.exports = function(deployer, network, accounts) {
deployer.deploy(airDrop)
};
