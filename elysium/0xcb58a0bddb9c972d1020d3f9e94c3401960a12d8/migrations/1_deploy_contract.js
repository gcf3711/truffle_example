const json = require("/workdir/truffle_example/elysium/0xcb58a0bddb9c972d1020d3f9e94c3401960a12d8/build/contracts/Crowdsale.json"); 
const contract = require('@truffle/contract'); 
const Crowdsale = contract(json); 
Crowdsale.setProvider(this.web3._provider); 
module.exports = function(deployer, network, accounts) {
deployer.deploy(Crowdsale, "PRESale", "PRE1", "PRE1", web3.utils.toBN("1000"), {from: accounts[0]})
};
