const PRIVATE_ETH_CELL = artifacts.require("PRIVATE_ETH_CELL")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await PRIVATE_ETH_CELL.deployed()
    address = await PRIVATE_ETH_CELL.address
    try{
      result[1] = await instance.SetMinSum(web3.utils.toBN("1000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.SetLogFile(accounts[1], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.Initialized({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("1.00000000000235287")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.Collect(web3.utils.toBN("1000000000002352870"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
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
