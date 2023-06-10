const CERB_Coin = artifacts.require("CERB_Coin")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await CERB_Coin.deployed()
    address = await CERB_Coin.address
    try{
      result[1] = await instance.transferOwnership(accounts[4], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.sellOffline(accounts[2], web3.utils.toBN("1337"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.sellOffline(accounts[5], web3.utils.toBN("19324605"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.sellOffline(accounts[5], web3.utils.toBN("999"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.sellOffline(accounts[3], web3.utils.toBN("1"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.sellOffline(accounts[3], web3.utils.toBN("19"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.sellOffline(accounts[5], web3.utils.toBN("16"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.sellOffline(accounts[5], web3.utils.toBN("2"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.sellOffline(accounts[6], web3.utils.toBN("1"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.sellOffline(accounts[1], web3.utils.toBN("5"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.sellOffline(accounts[7], web3.utils.toBN("10"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("11")
    console.log(result[11])
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
