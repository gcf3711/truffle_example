const json = require("/workdir/truffle_example/elysium/0x27f706edde3aD952EF647Dd67E24e38CD0803DD6/build/contracts/UselessEthereumToken.json"); 
const contract = require('@truffle/contract'); 
const UselessEthereumToken = contract(json); 
UselessEthereumToken.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(UselessEthereumToken, {from: accounts[0]})
};
