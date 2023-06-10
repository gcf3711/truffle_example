const json = require("/workdir/truffle_example/elysium/0xb57bB80bc676Bc1134432860bd27A9D048ABe0B0/build/contracts/Goutex.json"); 
const contract = require('@truffle/contract'); 
const Goutex = contract(json); 
Goutex.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Goutex, web3.utils.toBN("6900000000000000000000000"), "Goutex", web3.utils.toBN("18"), "GTX", {from: accounts[0]})
};
