const ALUXToken = artifacts.require("ALUXToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(ALUXToken, web3.utils.toBN("0"), "Alux Digital", "ALUX")
};
