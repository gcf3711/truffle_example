const MP3Coin = artifacts.require("MP3Coin");
module.exports = function(deployer, network, accounts) {
deployer.deploy(MP3Coin)
};
