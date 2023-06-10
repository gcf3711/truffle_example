const MyAdvancedToken = artifacts.require("MyAdvancedToken");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MyAdvancedToken, 1000000000, "le's token", "8")
};
