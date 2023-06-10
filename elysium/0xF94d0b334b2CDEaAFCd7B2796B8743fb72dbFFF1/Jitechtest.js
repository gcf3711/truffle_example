const Jitech = artifacts.require("Jitech")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await Jitech.deployed()
    address = await Jitech.address
  }
catch(error) {
console.log(error)
  }
  callback()
}
