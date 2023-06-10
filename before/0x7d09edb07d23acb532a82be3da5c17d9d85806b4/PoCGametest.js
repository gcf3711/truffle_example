const PoCGame = artifacts.require("PoCGame")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await PoCGame.deployed()
    address = await PoCGame.address
    try{
      result[1] = await instance.AdjustDifficulty(web3.utils.toBN("8"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("0.25")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.OpenToThePublic({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.wager({from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.play({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.wager({from: accounts[2], value: web3.utils.toWei("0.01")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.play({from: accounts[2], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.wager({from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.wager({from: accounts[2], value: web3.utils.toWei("0.01")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.play({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.play({from: accounts[2], value: web3.utils.toWei("0")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await instance.donate({from: accounts[0], value: web3.utils.toWei("0.05")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await instance.wager({from: accounts[2], value: web3.utils.toWei("0.01")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await instance.play({from: accounts[2], value: web3.utils.toWei("0")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await instance.wager({from: accounts[3], value: web3.utils.toWei("0.01")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await instance.play({from: accounts[3], value: web3.utils.toWei("0")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await instance.wager({from: accounts[3], value: web3.utils.toWei("0.01")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await instance.play({from: accounts[3], value: web3.utils.toWei("0")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await instance.wager({from: accounts[3], value: web3.utils.toWei("0.01")})
    console.log("19")
    console.log(result[19])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[20] = await instance.play({from: accounts[3], value: web3.utils.toWei("0")})
    console.log("20")
    console.log(result[20])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[21] = await instance.wager({from: accounts[3], value: web3.utils.toWei("0.01")})
    console.log("21")
    console.log(result[21])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[22] = await instance.play({from: accounts[3], value: web3.utils.toWei("0")})
    console.log("22")
    console.log(result[22])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[23] = await instance.AdjustDifficulty(web3.utils.toBN("2"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("23")
    console.log(result[23])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[24] = await instance.wager({from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("24")
    console.log(result[24])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[25] = await instance.play({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("25")
    console.log(result[25])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[26] = await instance.wager({from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("26")
    console.log(result[26])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[27] = await instance.play({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("27")
    console.log(result[27])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[28] = await instance.wager({from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("28")
    console.log(result[28])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[29] = await instance.play({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("29")
    console.log(result[29])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[30] = await instance.wager({from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("30")
    console.log(result[30])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[31] = await instance.play({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("31")
    console.log(result[31])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[32] = await instance.wager({from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("32")
    console.log(result[32])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[33] = await instance.play({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("33")
    console.log(result[33])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[34] = await instance.wager({from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("34")
    console.log(result[34])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[35] = await instance.play({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("35")
    console.log(result[35])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[36] = await instance.wager({from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("36")
    console.log(result[36])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[37] = await instance.play({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("37")
    console.log(result[37])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[38] = await instance.wager({from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("38")
    console.log(result[38])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[39] = await instance.play({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("39")
    console.log(result[39])
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
