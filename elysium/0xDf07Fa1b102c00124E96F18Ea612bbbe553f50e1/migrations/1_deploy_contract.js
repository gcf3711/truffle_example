const json = require("/workdir/truffle_example/elysium/0xDf07Fa1b102c00124E96F18Ea612bbbe553f50e1/build/contracts/YiTongCoin.json"); 
const contract = require('@truffle/contract'); 
const YiTongCoin = contract(json); 
YiTongCoin.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(YiTongCoin, web3.utils.toBN("21000000"), "YiTongCoin", "YTC", {from: accounts[0]})
};
