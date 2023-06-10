const json = require("/workdir/truffle_example/elysium/0x81d4703c5b3499B57397C999A72f492Fc681410D/build/contracts/CERB_Coin.json"); 
const contract = require('@truffle/contract'); 
const CERB_Coin = contract(json); 
CERB_Coin.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(CERB_Coin, {from: accounts[0]})
};
