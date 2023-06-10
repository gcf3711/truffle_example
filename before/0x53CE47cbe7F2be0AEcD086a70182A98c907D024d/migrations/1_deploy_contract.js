const EasyMineIco = artifacts.require("EasyMineIco");
module.exports = function(deployer, network, accounts) {
deployer.deploy(EasyMineIco, accounts[161])
};
