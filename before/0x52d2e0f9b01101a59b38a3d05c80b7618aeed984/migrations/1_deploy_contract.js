const EtherGet = artifacts.require("EtherGet");
module.exports = function(deployer, network, accounts) {
deployer.deploy(EtherGet)
};
