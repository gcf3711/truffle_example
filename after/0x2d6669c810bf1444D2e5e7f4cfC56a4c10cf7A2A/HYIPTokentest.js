const HYIPToken = artifacts.require("HYIPToken")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await HYIPToken.deployed()
    address = await HYIPToken.address
    try{
      result[1] = await instance.setMintAgent(accounts[1], true, {from: accounts[0], value: web3.utils.toWei("0")})
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
