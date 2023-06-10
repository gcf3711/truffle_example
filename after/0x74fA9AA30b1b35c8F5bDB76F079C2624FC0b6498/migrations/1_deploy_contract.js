const MoxyOnePresale = artifacts.require("MoxyOnePresale");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MoxyOnePresale)
};
