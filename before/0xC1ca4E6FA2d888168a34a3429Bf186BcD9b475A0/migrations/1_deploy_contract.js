const HumanStandardToken = artifacts.require("HumanStandardToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(HumanStandardToken, web3.utils.toBN("1000000000"), "Pandora", web3.utils.toBN("6"), "PDX")
};
