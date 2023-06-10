const ACCURAL_DEPOSIT = artifacts.require("ACCURAL_DEPOSIT")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await ACCURAL_DEPOSIT.deployed()
    address = await ACCURAL_DEPOSIT.address
    try{
      result[1] = await instance.Initialized({from: accounts[0], value: web3.utils.toWei("0")})
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
