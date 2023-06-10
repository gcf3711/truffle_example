const json = require("/workdir/truffle_example/elysium/0x5027880b5A4C5BBB88D229a334Aa8F31e6e67197/build/contracts/HDLContract.json"); 
const contract = require('@truffle/contract'); 
const HDLContract = contract(json); 
HDLContract.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(HDLContract, accounts[84], web3.utils.toBN("1507744800"), web3.utils.toBN("13"), web3.utils.toBN("2250000"), web3.utils.toBN("300"), {from: accounts[0]})
};
