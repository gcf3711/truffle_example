const json = require("/workdir/truffle_example/elysium/0x93c32845fae42c83a70e5f06214c8433665c2ab5/build/contracts/X_WALLET.json"); 
const contract = require('@truffle/contract'); 
const X_WALLET = contract(json); 
X_WALLET.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(X_WALLET, accounts[1], {from: accounts[0]})
};
