const json = require("/workdir/truffle_example/elysium/0x6994699c731dd7e389c209201ec51e8aff283bf9/build/contracts/tokensale.json"); 
const contract = require('@truffle/contract'); 
const tokensale = contract(json); 
tokensale.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(tokensale, accounts[17], web3.utils.toBN("179200000"), web3.utils.toBN("192522320000000"), {from: accounts[0]})
};
