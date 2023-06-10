const Hexagon = artifacts.require("Hexagon");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Hexagon)
};
