const sumocoin = artifacts.require("sumocoin")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await sumocoin.deployed()
    address = await sumocoin.address
  }
catch(error) {
console.log(error)
  }
  callback()
}
