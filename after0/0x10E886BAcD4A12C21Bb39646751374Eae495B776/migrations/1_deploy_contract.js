const Krown = artifacts.require("Krown");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Krown, web3.utils.toBN("0"), "Krown", web3.utils.toBN("8"), "KRO", accounts[2])
};
