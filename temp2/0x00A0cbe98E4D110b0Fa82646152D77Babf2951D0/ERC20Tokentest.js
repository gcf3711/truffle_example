const MyContract = artifacts.require("MyContract")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await MyContract.deployed()
    address = await MyContract.address
    try{
      result[1] = await instance.sendTo(accounts[6], 0, {from: accounts[0], value: web3.utils.toWei("0")})
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
