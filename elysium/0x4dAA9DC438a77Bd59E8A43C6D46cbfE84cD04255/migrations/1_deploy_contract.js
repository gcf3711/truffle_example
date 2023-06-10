const json = require("/workdir/truffle_example/elysium/0x4dAA9DC438a77Bd59E8A43C6D46cbfE84cD04255/build/contracts/BattleToken.json"); 
const contract = require('@truffle/contract'); 
const BattleToken = contract(json); 
BattleToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(BattleToken, {from: accounts[0]})
};
