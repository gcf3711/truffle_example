const JiucaiToken = artifacts.require("JiucaiToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(JiucaiToken, 1000, 1, "韭菜币", "JCT")
};
