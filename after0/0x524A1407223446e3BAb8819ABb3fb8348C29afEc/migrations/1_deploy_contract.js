const sumocoin = artifacts.require("sumocoin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(sumocoin)
};
