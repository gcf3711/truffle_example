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
      result[2] = await instance.Deposit({from: accounts[0], value: web3.utils.toWei("1.000000004327232")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.initTokenBank({from: accounts[4], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.WithdrawToken(accounts[2], web3.utils.toBN("2000000000000000000"), accounts[4], {from: accounts[4], value: web3.utils.toWei("0")})
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
      result[6] = await instance.WithdrawToHolder(accounts[1], web3.utils.toBN("1000000000000"), {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.WithdrawToHolder(accounts[1], web3.utils.toBN("100004327232000"), {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.changeOwner(accounts[1], {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.WithdrawToken(accounts[1], web3.utils.toBN("1000000000"), accounts[3], {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.confirmOwner({from: accounts[1], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.changeOwner(accounts[1], {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await instance.WithdrawToken(accounts[1], web3.utils.toBN("10000000"), accounts[3], {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await instance.WithdrawToHolder(accounts[1], web3.utils.toBN("1"), {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await instance.confirmOwner({from: accounts[1], value: web3.utils.toWei("0")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await instance.WithdrawToHolder(accounts[0], web3.utils.toBN("1000000004327232000"), {from: accounts[5], value: web3.utils.toWei("0")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await instance.WithdrawToHolder(accounts[2], web3.utils.toBN("1000000004327232000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await instance.WithdrawToHolder(accounts[0], web3.utils.toBN("1000000004327232000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("17")
    console.log(result[17])
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
