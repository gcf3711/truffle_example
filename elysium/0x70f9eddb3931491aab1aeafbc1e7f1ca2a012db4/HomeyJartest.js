const HomeyJar = artifacts.require("HomeyJar")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await HomeyJar.deployed()
    address = await HomeyJar.address
    try{
      result[1] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("0.1")})
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
