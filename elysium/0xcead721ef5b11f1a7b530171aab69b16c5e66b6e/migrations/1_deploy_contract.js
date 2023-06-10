const json = require("/workdir/truffle_example/elysium/0xcead721ef5b11f1a7b530171aab69b16c5e66b6e/build/contracts/WALLET.json"); 
const contract = require('@truffle/contract'); 
const WALLET = contract(json); 
WALLET.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(WALLET, accounts[2], {from: accounts[0]})
};
