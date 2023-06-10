const Krown = artifacts.require("Krown")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await Krown.deployed()
    address = await Krown.address
    try{
      result[1] = await instance.transfekbolOwnership(accounts[1], {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.mintlvlToken(accounts[1], web3.utils.toBN("204800000000000000000"), {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.setlvlSign("k", {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.setlvlWebsite("https://www.plutocracy.co", {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.setlvlNfee(web3.utils.toBN("5438177127"), {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.setlvlUpdate("Krown Crowdsale Coming Soon.", {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.transfer(accounts[0], web3.utils.toBN("102400000000000000000"), {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.setlvlNominalValue("0.10038980 USD", {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.transfer(accounts[1], web3.utils.toBN("500000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.transfer(accounts[0], web3.utils.toBN("500000000000"), {from: accounts[1], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.notifyAuthority("First Authority Notification.", "0x0000000000000000000000000000000000000000000000000000000000000000", {from: accounts[0], value: web3.utils.toWei("0")})
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
