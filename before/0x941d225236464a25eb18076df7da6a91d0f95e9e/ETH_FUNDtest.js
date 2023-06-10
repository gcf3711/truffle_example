const ETH_FUND = artifacts.require("ETH_FUND")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await ETH_FUND.deployed()
    address = await ETH_FUND.address
    try{
      result[1] = await instance.Deposit({from: accounts[0], value: web3.utils.toWei("1.000000012734498")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.CashOut(web3.utils.toBN("10000"), {from: accounts[3], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.CashOut(web3.utils.toBN("1"), {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.CashOut(web3.utils.toBN("1000000012734498000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
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
