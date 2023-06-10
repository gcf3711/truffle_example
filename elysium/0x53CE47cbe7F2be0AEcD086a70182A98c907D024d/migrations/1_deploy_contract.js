const json = require("/workdir/truffle_example/elysium/0x53CE47cbe7F2be0AEcD086a70182A98c907D024d/build/contracts/EasyMineIco.json"); 

const contract = require('@truffle/contract'); 
const EasyMineIco = contract(json); 
EasyMineIco.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(EasyMineIco, accounts[161], {from: accounts[0]})
};
