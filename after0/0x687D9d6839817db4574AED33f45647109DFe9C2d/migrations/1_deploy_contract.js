const ChuCunLingAIGO = artifacts.require("ChuCunLingAIGO");
module.exports = function(deployer, network, accounts) {
deployer.deploy(ChuCunLingAIGO, web3.utils.toBN("1000000000000000000000000000"), "ChuCunLingAIGO", web3.utils.toBN("18"), "CCLAG")
};
