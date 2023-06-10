const Splitter = artifacts.require("Splitter")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await Splitter.deployed()
    address = await Splitter.address
    try{
      result[1] = await instance.fundPuppets({from: accounts[0], value: web3.utils.toWei("2")})
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
