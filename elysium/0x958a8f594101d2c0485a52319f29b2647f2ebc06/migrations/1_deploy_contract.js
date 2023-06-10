const json = require("/workdir/truffle_example/elysium/0x958a8f594101d2c0485a52319f29b2647f2ebc06/build/contracts/Marriage.json"); 
const contract = require('@truffle/contract'); 
const Marriage = contract(json); 
Marriage.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Marriage, accounts[1], {from: accounts[0]})
};
