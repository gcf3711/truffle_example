const YiTongCoin = artifacts.require("YiTongCoin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(YiTongCoin, web3.utils.toBN("21000000"), "YiTongCoin", "YTC")
};
