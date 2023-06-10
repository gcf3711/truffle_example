const json = require("/workdir/truffle_example/elysium/0x05aAaA829Afa407D83315cDED1d45EB16025910c/build/contracts/SPXToken.json"); 
const contract = require('@truffle/contract'); 
const SPXToken = contract(json); 
SPXToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(SPXToken, accounts[361], accounts[243], {from: accounts[0]})
};
