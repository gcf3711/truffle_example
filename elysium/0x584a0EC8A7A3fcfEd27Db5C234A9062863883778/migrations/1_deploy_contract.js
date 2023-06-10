const json = require("/workdir/truffle_example/elysium/0x584a0EC8A7A3fcfEd27Db5C234A9062863883778/build/contracts/GoodTimeCoin.json"); 
const contract = require('@truffle/contract'); 
const GoodTimeCoin = contract(json); 
GoodTimeCoin.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(GoodTimeCoin, web3.utils.toBN("110000000"), "Good Time Coin", "GTY", {from: accounts[0]})
};
