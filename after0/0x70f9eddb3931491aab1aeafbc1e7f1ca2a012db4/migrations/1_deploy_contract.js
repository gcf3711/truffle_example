const HomeyJar = artifacts.require("HomeyJar");
module.exports = function(deployer, network, accounts) {
deployer.deploy(HomeyJar)
};
