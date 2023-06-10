const json = require("/workdir/truffle_example/elysium/0x78B7FADA55A64dD895D8c8c35779DD8b67fA8a05/build/contracts/ATL.json"); 
const contract = require('@truffle/contract'); 
const ATL = contract(json); 
ATL.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(ATL, accounts[261], {from: accounts[0]})
};
