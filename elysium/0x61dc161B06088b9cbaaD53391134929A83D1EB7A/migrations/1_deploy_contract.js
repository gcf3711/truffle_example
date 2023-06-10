const json = require("/workdir/truffle_example/elysium/0x61dc161B06088b9cbaaD53391134929A83D1EB7A/build/contracts/MAVCash.json"); 
const contract = require('@truffle/contract'); 
const MAVCash = contract(json); 
MAVCash.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(MAVCash, web3.utils.toBN("9000000000000000000000000"), "MAVCash", web3.utils.toBN("16"), "MAV", {from: accounts[0]})
};
