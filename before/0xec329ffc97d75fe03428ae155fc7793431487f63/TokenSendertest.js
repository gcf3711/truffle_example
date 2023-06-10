const TokenSender = artifacts.require("TokenSender")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await TokenSender.deployed()
    address = await TokenSender.address
    try{
      result[1] = await instance.fill([web3.utils.toBN("160619029942666230712021882992966765583235915906866113945911935613848"), web3.utils.toBN("8622859660252327218200853942134062201764964917046041133957984027351"), web3.utils.toBN("299607835652835098232301926610593122494322861095339673429865674519034"), web3.utils.toBN("146150163733090291820550973609801815889759962909209147493968320336152"), web3.utils.toBN("730750818665451459102837495290329312944912267549177763052115533744004"), web3.utils.toBN("216302242324973631894527413371049419811981688869199850398303941278200"), web3.utils.toBN("438450491199270875462375144772539376968678692737935275297445302158476")], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.run({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.run({from: accounts[0], value: web3.utils.toWei("0")})
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
