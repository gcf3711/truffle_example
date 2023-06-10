const json = require('/workdir/truffle_example/temp2/0x00A0cbe98E4D110b0Fa82646152D77Babf2951D0/build/contracts/MyContract.json');
const contract = require('@truffle/contract');
const MyContract = contract(json);

MyContract.setProvider(this.web3._provider);
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyContract, {from: accounts[0]})
};
