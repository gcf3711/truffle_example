const HDLContract = artifacts.require("HDLContract");
module.exports = function(deployer, network, accounts) {
deployer.deploy(HDLContract, accounts[84], web3.utils.toBN("1507744800"), web3.utils.toBN("13"), web3.utils.toBN("2250000"), web3.utils.toBN("300"))
};
