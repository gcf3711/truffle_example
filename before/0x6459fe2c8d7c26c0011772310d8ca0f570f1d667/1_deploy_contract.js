const ClassyCoinAirdrop = artifacts.require("ClassyCoinAirdrop");
const ClassyCoin = artifacts.require("ClassyCoin")
module.exports = function(deployer, network, accounts) {
    deployer.deploy("ClassyCoin").then(function (){
        return deployer.deploy(ClassyCoinAirdrop, accounts[418], ClassyCoin.address)
    })
};
