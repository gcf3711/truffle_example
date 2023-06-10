const GrowToken = artifacts.require("GrowToken")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await GrowToken.deployed()
    address = await GrowToken.address
    try{
      result[1] = await instance.transfer(accounts[86], web3.utils.toBN("100000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
  }
catch(error) {
console.log(error)
  }
  callback()
}
