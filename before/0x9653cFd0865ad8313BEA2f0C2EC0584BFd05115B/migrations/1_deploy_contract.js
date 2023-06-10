const FuturXe = artifacts.require("FuturXe");
module.exports = function(deployer, network, accounts) {
deployer.deploy(FuturXe, web3.utils.toBN("8400000000000000"), "FuturXE", "FXE", web3.utils.toBN("8"))
};
