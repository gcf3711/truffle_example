const json = require("/workdir/truffle_example/elysium/0x19cf8481ea15427a98ba3cdd6d9e14690011ab10/build/contracts/daoPOLSKAtokens.json"); 
const contract = require('@truffle/contract'); 
const daoPOLSKAtokens = contract(json); 
daoPOLSKAtokens.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(daoPOLSKAtokens, {from: accounts[0]})
};
