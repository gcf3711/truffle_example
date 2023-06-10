const ETH_VAULT = artifacts.require("ETH_VAULT")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await ETH_VAULT.deployed()
    address = await ETH_VAULT.address
    try{
      result[1] = await instance.Deposit({from: accounts[0], value: web3.utils.toWei("1.000000012477328")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.withdraw({from: accounts[2], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.CashOut(web3.utils.toBN("1000000012477328000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
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
