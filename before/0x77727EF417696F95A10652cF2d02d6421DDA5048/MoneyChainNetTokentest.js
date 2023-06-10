const MoneyChainNetToken = artifacts.require("MoneyChainNetToken")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await MoneyChainNetToken.deployed()
    address = await MoneyChainNetToken.address
    try{
      result[1] = await instance.transfer(accounts[1], web3.utils.toBN("2100000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
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
