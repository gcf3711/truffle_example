const keepMyEther = artifacts.require("keepMyEther");
module.exports = function(deployer, network, accounts) {
deployer.deploy(keepMyEther)
};
