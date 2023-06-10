const json = require("/workdir/truffle_example/elysium/0x6459fe2c8d7c26c0011772310d8ca0f570f1d667/build/contracts/ClassyCoinAirdrop.json"); 
const contract = require('@truffle/contract'); 
const ClassyCoinAirdrop = contract(json); 
ClassyCoinAirdrop.setProvider(this.web3._provider); 

const json_2 = require("/workdir/truffle_example/elysium/0x6459fe2c8d7c26c0011772310d8ca0f570f1d667/build/contracts/ClassyCoin.json"); 
const contract_2 = require('@truffle/contract'); 
const ClassyCoin = contract_2(json_2); 
ClassyCoin.setProvider(this.web3._provider);

module.exports = function(deployer, network, accounts) {
    deployer.deploy(ClassyCoin, {from: accounts[0]}).then(function (){
        return deployer.deploy(ClassyCoinAirdrop, accounts[418], ClassyCoin.address)
    })
};