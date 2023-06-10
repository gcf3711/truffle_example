const BattleToken = artifacts.require("BattleToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(BattleToken)
};
