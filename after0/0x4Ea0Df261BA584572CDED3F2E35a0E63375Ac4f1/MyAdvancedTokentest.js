const MyAdvancedToken = artifacts.require("MyAdvancedToken")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await MyAdvancedToken.deployed()
    address = await MyAdvancedToken.address
  }
catch(error) {
console.log(error)
  }
  callback()
}
