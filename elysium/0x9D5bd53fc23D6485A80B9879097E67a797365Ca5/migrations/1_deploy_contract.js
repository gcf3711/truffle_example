const json = require("/workdir/truffle_example/elysium/0x9D5bd53fc23D6485A80B9879097E67a797365Ca5/build/contracts/Coffeecoin.json"); 
const contract = require('@truffle/contract'); 
const Coffeecoin = contract(json); 
Coffeecoin.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Coffeecoin, web3.utils.toBN("330000000000000000000000000"), "Coffeecoin", web3.utils.toBN("18"), "COFFEE", {from: accounts[0]})
};
