const Honey = artifacts.require("Honey");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Honey)
};
