const Goutex = artifacts.require("Goutex");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Goutex, web3.utils.toBN("6900000000000000000000000"), "Goutex", web3.utils.toBN("18"), "GTX")
};
