const json = require("/workdir/truffle_example/elysium/0x07f7ecb66d788ab01dc93b9b71a88401de7d0f2e/build/contracts/PoCGame.json"); 
const contract = require('@truffle/contract'); 
const PoCGame = contract(json); 
PoCGame.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(PoCGame, accounts[12], web3.utils.toBN("10000000000000000"), {from: accounts[0]})
};
