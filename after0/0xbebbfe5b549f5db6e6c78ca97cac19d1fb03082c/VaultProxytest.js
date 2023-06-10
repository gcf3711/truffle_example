const VaultProxy = artifacts.require("VaultProxy")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await VaultProxy.deployed()
    address = await VaultProxy.address
    try{
      result[1] = await instance.Vault({from: accounts[0], value: web3.utils.toWei("0.50663922")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.withdraw(web3.utils.toBN("506639220000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
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
