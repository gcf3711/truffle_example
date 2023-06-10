const json = require("/workdir/truffle_example/elysium/0x7541b76cb60f4c60af330c208b0623b7f54bf615/build/contracts/U_BANK.json"); 
const contract = require('@truffle/contract'); 
const U_BANK = contract(json); 
U_BANK.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(U_BANK, accounts[1], {from: accounts[0]})
};
