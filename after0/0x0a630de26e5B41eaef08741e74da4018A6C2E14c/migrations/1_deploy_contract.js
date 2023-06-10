const dgame = artifacts.require("dgame");
module.exports = function(deployer, network, accounts) {
deployer.deploy(dgame)
};
