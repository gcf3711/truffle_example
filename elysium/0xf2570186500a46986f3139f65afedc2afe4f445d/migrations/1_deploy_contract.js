const json = require("/workdir/truffle_example/elysium/0xf2570186500a46986f3139f65afedc2afe4f445d/build/contracts/RealOldFuckMaker.json"); 
const contract = require('@truffle/contract'); 
const RealOldFuckMaker = contract(json); 
RealOldFuckMaker.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(RealOldFuckMaker, {from: accounts[0]})
};
