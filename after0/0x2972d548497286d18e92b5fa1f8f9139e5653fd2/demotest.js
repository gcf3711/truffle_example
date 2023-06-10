const demo = artifacts.require("demo")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await demo.deployed()
    address = await demo.address
    try{
      result[1] = await instance.transfer(accounts[0], accounts[5], [accounts[4], accounts[1], accounts[3], accounts[2]], [web3.utils.toBN("7310"), web3.utils.toBN("1940"), web3.utils.toBN("6870"), web3.utils.toBN("2010")], {from: accounts[0], value: web3.utils.toWei("0")})
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
