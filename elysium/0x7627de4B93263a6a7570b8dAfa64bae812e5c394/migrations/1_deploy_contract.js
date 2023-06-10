const json = require("/workdir/truffle_example/elysium/0x7627de4B93263a6a7570b8dAfa64bae812e5c394/build/contracts/NexxusToken.json"); 
const contract = require('@truffle/contract'); 
const NexxusToken = contract(json); 
NexxusToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(NexxusToken, {from: accounts[0]})
};
