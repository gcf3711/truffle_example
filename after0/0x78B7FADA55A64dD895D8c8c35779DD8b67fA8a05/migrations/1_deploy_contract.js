const ATL = artifacts.require("ATL");
module.exports = function(deployer, network, accounts) {
deployer.deploy(ATL, accounts[261])
};
