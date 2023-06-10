const Token = artifacts.require("Token");
module.exports = function(deployer, network, accounts) {
deployer.deploy(Token, web3.utils.toBN("2000000000"), "Social Chain", web3.utils.toBN("8"), "SCA", accounts[181])
};
