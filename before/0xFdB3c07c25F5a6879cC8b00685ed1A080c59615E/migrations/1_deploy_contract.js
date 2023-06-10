const SpadeIco = artifacts.require("SpadeIco");
module.exports = function(deployer, network, accounts) {
deployer.deploy(SpadeIco, accounts[0], accounts[51], accounts[0])
};
