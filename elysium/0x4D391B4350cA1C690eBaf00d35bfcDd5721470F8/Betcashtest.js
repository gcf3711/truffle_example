const Betcash = artifacts.require("Betcash")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await Betcash.deployed()
    address = await Betcash.address
  }
catch(error) {
console.log(error)
  }
  callback()
}
