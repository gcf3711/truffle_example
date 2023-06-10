const TokenBank = artifacts.require("TokenBank")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await TokenBank.deployed()
    address = await TokenBank.address
    try{
      result[1] = await instance.initTokenBank({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.Deposit({from: accounts[0], value: web3.utils.toWei("1.00000004367723")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.WithdrawToHolder(accounts[0], web3.utils.toBN("1000000043677230000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.initTokenBank({from: accounts[2], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.initTokenBank({from: accounts[1], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.WithdrawToken(accounts[3], web3.utils.toBN("1"), accounts[1], {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.WithdrawToken(accounts[3], web3.utils.toBN("1000000000000000000"), accounts[1], {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.WithdrawToken(accounts[3], web3.utils.toBN("1000000000000000000"), accounts[1], {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.WithdrawToken(accounts[1], web3.utils.toBN("1000000000000000000"), accounts[3], {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.WithdrawToken(accounts[1], web3.utils.toBN("1000000000000000000"), accounts[1], {from: accounts[1], value: web3.utils.toWei("0")})
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
