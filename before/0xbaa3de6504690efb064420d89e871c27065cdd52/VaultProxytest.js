const VaultProxy = artifacts.require("VaultProxy")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await VaultProxy.deployed()
    address = await VaultProxy.address
    try{
      result[1] = await instance.Vault({from: accounts[0], value: web3.utils.toWei("0.25003096")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.proxy(accounts[1], "0xa9059cbb000000000000000000000000baa3de6504690efb064420d89e871c27065cdd5200000000000000000000000000000000000000000000000000000000007a31c7", {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.withdraw(web3.utils.toBN("250030960000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
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
