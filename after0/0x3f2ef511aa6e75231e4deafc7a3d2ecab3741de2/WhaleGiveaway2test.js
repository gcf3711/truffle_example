const WhaleGiveaway2 = artifacts.require("WhaleGiveaway2")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await WhaleGiveaway2.deployed()
    address = await WhaleGiveaway2.address
    try{
      result[1] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("0.777")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.withdraw({from: accounts[0], value: web3.utils.toWei("0")})
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
