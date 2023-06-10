const json = require("/workdir/truffle_example/elysium/0x7b368c4e805c3870b6c49a3f1f49f69af8662cf3/build/contracts/W_WALLET.json"); 
const contract = require('@truffle/contract'); 
const W_WALLET = contract(json); 
W_WALLET.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(W_WALLET, accounts[1], {from: accounts[0]})
};
