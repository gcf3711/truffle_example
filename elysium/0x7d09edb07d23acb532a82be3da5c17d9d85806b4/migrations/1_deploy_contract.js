const json = require("/workdir/truffle_example/elysium/0x7d09edb07d23acb532a82be3da5c17d9d85806b4/build/contracts/PoCGame.json"); 
const contract = require('@truffle/contract'); 
const PoCGame = contract(json); 
PoCGame.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(PoCGame, accounts[1], web3.utils.toBN("10000000000000000"), {from: accounts[0]})
};
