const json = require("/workdir/truffle_example/elysium/0x9653cFd0865ad8313BEA2f0C2EC0584BFd05115B/build/contracts/FuturXe.json"); 
const contract = require('@truffle/contract'); 
const FuturXe = contract(json); 
FuturXe.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(FuturXe, web3.utils.toBN("8400000000000000"), "FuturXE", "FXE", web3.utils.toBN("8"), {from: accounts[0]})
};
