const CERB_Coin = artifacts.require("CERB_Coin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(CERB_Coin)
};
