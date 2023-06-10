const PlazaToken = artifacts.require("PlazaToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(PlazaToken, web3.utils.toBN("960000000"), "Plaza Token", "PLAZA")
};
