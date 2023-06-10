const Presale = artifacts.require("Presale");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Presale, web3.utils.toBN("1505397600"), accounts[24])
};
