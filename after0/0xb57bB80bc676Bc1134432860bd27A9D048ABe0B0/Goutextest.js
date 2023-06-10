const Goutex = artifacts.require("Goutex")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await Goutex.deployed()
    address = await Goutex.address
  }
catch(error) {
console.log(error)
  }
  callback()
}
