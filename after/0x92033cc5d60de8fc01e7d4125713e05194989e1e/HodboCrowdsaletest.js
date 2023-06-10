const HodboCrowdsale = artifacts.require("HodboCrowdsale")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await HodboCrowdsale.deployed()
    address = await HodboCrowdsale.address
    try{
      result[1] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("0.1")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("0.5")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await web3.eth.sendTransaction({to: address, from: accounts[22], value: web3.utils.toWei("0.5")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await web3.eth.sendTransaction({to: address, from: accounts[27], value: web3.utils.toWei("1")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await web3.eth.sendTransaction({to: address, from: accounts[5], value: web3.utils.toWei("0.02")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await web3.eth.sendTransaction({to: address, from: accounts[2], value: web3.utils.toWei("0.1")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await web3.eth.sendTransaction({to: address, from: accounts[2], value: web3.utils.toWei("1")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await web3.eth.sendTransaction({to: address, from: accounts[26], value: web3.utils.toWei("2.323")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await web3.eth.sendTransaction({to: address, from: accounts[11], value: web3.utils.toWei("0.469")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await web3.eth.sendTransaction({to: address, from: accounts[17], value: web3.utils.toWei("0.698584075")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await web3.eth.sendTransaction({to: address, from: accounts[4], value: web3.utils.toWei("1.3269")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await web3.eth.sendTransaction({to: address, from: accounts[7], value: web3.utils.toWei("0.246382351")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await web3.eth.sendTransaction({to: address, from: accounts[35], value: web3.utils.toWei("3.32")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await web3.eth.sendTransaction({to: address, from: accounts[9], value: web3.utils.toWei("1.069")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await web3.eth.sendTransaction({to: address, from: accounts[31], value: web3.utils.toWei("2.1")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await web3.eth.sendTransaction({to: address, from: accounts[19], value: web3.utils.toWei("1.1132")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await web3.eth.sendTransaction({to: address, from: accounts[2], value: web3.utils.toWei("23")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await web3.eth.sendTransaction({to: address, from: accounts[2], value: web3.utils.toWei("1.24")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await web3.eth.sendTransaction({to: address, from: accounts[11], value: web3.utils.toWei("3.69")})
    console.log("19")
    console.log(result[19])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[20] = await web3.eth.sendTransaction({to: address, from: accounts[26], value: web3.utils.toWei("1")})
    console.log("20")
    console.log(result[20])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[21] = await web3.eth.sendTransaction({to: address, from: accounts[17], value: web3.utils.toWei("0.228898886")})
    console.log("21")
    console.log(result[21])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[22] = await web3.eth.sendTransaction({to: address, from: accounts[4], value: web3.utils.toWei("0.121116569")})
    console.log("22")
    console.log(result[22])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[23] = await web3.eth.sendTransaction({to: address, from: accounts[7], value: web3.utils.toWei("4.448898886")})
    console.log("23")
    console.log(result[23])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[24] = await web3.eth.sendTransaction({to: address, from: accounts[35], value: web3.utils.toWei("0.5")})
    console.log("24")
    console.log(result[24])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[25] = await web3.eth.sendTransaction({to: address, from: accounts[35], value: web3.utils.toWei("1")})
    console.log("25")
    console.log(result[25])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[26] = await web3.eth.sendTransaction({to: address, from: accounts[9], value: web3.utils.toWei("7.9")})
    console.log("26")
    console.log(result[26])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[27] = await web3.eth.sendTransaction({to: address, from: accounts[31], value: web3.utils.toWei("0.508")})
    console.log("27")
    console.log(result[27])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[28] = await web3.eth.sendTransaction({to: address, from: accounts[19], value: web3.utils.toWei("3.21")})
    console.log("28")
    console.log(result[28])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[29] = await web3.eth.sendTransaction({to: address, from: accounts[15], value: web3.utils.toWei("0.349")})
    console.log("29")
    console.log(result[29])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[30] = await web3.eth.sendTransaction({to: address, from: accounts[33], value: web3.utils.toWei("0.43")})
    console.log("30")
    console.log(result[30])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[31] = await web3.eth.sendTransaction({to: address, from: accounts[32], value: web3.utils.toWei("0.23")})
    console.log("31")
    console.log(result[31])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[32] = await web3.eth.sendTransaction({to: address, from: accounts[12], value: web3.utils.toWei("6.332")})
    console.log("32")
    console.log(result[32])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[33] = await web3.eth.sendTransaction({to: address, from: accounts[3], value: web3.utils.toWei("4.8271")})
    console.log("33")
    console.log(result[33])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[34] = await web3.eth.sendTransaction({to: address, from: accounts[36], value: web3.utils.toWei("3.07")})
    console.log("34")
    console.log(result[34])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[35] = await web3.eth.sendTransaction({to: address, from: accounts[30], value: web3.utils.toWei("11.01")})
    console.log("35")
    console.log(result[35])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[36] = await web3.eth.sendTransaction({to: address, from: accounts[34], value: web3.utils.toWei("0.01")})
    console.log("36")
    console.log(result[36])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[37] = await web3.eth.sendTransaction({to: address, from: accounts[13], value: web3.utils.toWei("0.1")})
    console.log("37")
    console.log(result[37])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[38] = await web3.eth.sendTransaction({to: address, from: accounts[23], value: web3.utils.toWei("0.0660046291")})
    console.log("38")
    console.log(result[38])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[39] = await web3.eth.sendTransaction({to: address, from: accounts[21], value: web3.utils.toWei("1")})
    console.log("39")
    console.log(result[39])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[40] = await web3.eth.sendTransaction({to: address, from: accounts[20], value: web3.utils.toWei("0.001")})
    console.log("40")
    console.log(result[40])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[41] = await web3.eth.sendTransaction({to: address, from: accounts[14], value: web3.utils.toWei("1")})
    console.log("41")
    console.log(result[41])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[42] = await web3.eth.sendTransaction({to: address, from: accounts[5], value: web3.utils.toWei("0.02")})
    console.log("42")
    console.log(result[42])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[43] = await web3.eth.sendTransaction({to: address, from: accounts[14], value: web3.utils.toWei("1.5")})
    console.log("43")
    console.log(result[43])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[44] = await web3.eth.sendTransaction({to: address, from: accounts[29], value: web3.utils.toWei("1")})
    console.log("44")
    console.log(result[44])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[45] = await instance.transferFrom(accounts[24], accounts[20], web3.utils.toBN("1000"), {from: accounts[20], value: web3.utils.toWei("0")})
    console.log("45")
    console.log(result[45])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[46] = await web3.eth.sendTransaction({to: address, from: accounts[16], value: web3.utils.toWei("0.3")})
    console.log("46")
    console.log(result[46])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[47] = await web3.eth.sendTransaction({to: address, from: accounts[10], value: web3.utils.toWei("1")})
    console.log("47")
    console.log(result[47])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[48] = await web3.eth.sendTransaction({to: address, from: accounts[18], value: web3.utils.toWei("2.01")})
    console.log("48")
    console.log(result[48])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[49] = await web3.eth.sendTransaction({to: address, from: accounts[25], value: web3.utils.toWei("0.7")})
    console.log("49")
    console.log(result[49])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[50] = await web3.eth.sendTransaction({to: address, from: accounts[16], value: web3.utils.toWei("0.6")})
    console.log("50")
    console.log(result[50])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[51] = await web3.eth.sendTransaction({to: address, from: accounts[1], value: web3.utils.toWei("0.3")})
    console.log("51")
    console.log(result[51])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[52] = await web3.eth.sendTransaction({to: address, from: accounts[10], value: web3.utils.toWei("0.691")})
    console.log("52")
    console.log(result[52])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[53] = await web3.eth.sendTransaction({to: address, from: accounts[1], value: web3.utils.toWei("0.83")})
    console.log("53")
    console.log(result[53])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[54] = await web3.eth.sendTransaction({to: address, from: accounts[16], value: web3.utils.toWei("3")})
    console.log("54")
    console.log(result[54])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[55] = await web3.eth.sendTransaction({to: address, from: accounts[18], value: web3.utils.toWei("0.9")})
    console.log("55")
    console.log(result[55])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[56] = await web3.eth.sendTransaction({to: address, from: accounts[10], value: web3.utils.toWei("1.5")})
    console.log("56")
    console.log(result[56])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[57] = await web3.eth.sendTransaction({to: address, from: accounts[1], value: web3.utils.toWei("3.069")})
    console.log("57")
    console.log(result[57])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[58] = await web3.eth.sendTransaction({to: address, from: accounts[25], value: web3.utils.toWei("2.3")})
    console.log("58")
    console.log(result[58])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[59] = await web3.eth.sendTransaction({to: address, from: accounts[10], value: web3.utils.toWei("0.45")})
    console.log("59")
    console.log(result[59])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[60] = await web3.eth.sendTransaction({to: address, from: accounts[16], value: web3.utils.toWei("1.69")})
    console.log("60")
    console.log(result[60])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[61] = await web3.eth.sendTransaction({to: address, from: accounts[25], value: web3.utils.toWei("0.7023")})
    console.log("61")
    console.log(result[61])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[62] = await web3.eth.sendTransaction({to: address, from: accounts[18], value: web3.utils.toWei("1")})
    console.log("62")
    console.log(result[62])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[63] = await web3.eth.sendTransaction({to: address, from: accounts[1], value: web3.utils.toWei("0.25")})
    console.log("63")
    console.log(result[63])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[64] = await web3.eth.sendTransaction({to: address, from: accounts[10], value: web3.utils.toWei("1")})
    console.log("64")
    console.log(result[64])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[65] = await web3.eth.sendTransaction({to: address, from: accounts[16], value: web3.utils.toWei("1.443")})
    console.log("65")
    console.log(result[65])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[66] = await web3.eth.sendTransaction({to: address, from: accounts[25], value: web3.utils.toWei("1.2")})
    console.log("66")
    console.log(result[66])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[67] = await web3.eth.sendTransaction({to: address, from: accounts[18], value: web3.utils.toWei("0.193")})
    console.log("67")
    console.log(result[67])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[68] = await web3.eth.sendTransaction({to: address, from: accounts[10], value: web3.utils.toWei("0.762")})
    console.log("68")
    console.log(result[68])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[69] = await web3.eth.sendTransaction({to: address, from: accounts[25], value: web3.utils.toWei("0.1")})
    console.log("69")
    console.log(result[69])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[70] = await web3.eth.sendTransaction({to: address, from: accounts[25], value: web3.utils.toWei("1.172448897")})
    console.log("70")
    console.log(result[70])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[71] = await web3.eth.sendTransaction({to: address, from: accounts[1], value: web3.utils.toWei("1.66")})
    console.log("71")
    console.log(result[71])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[72] = await web3.eth.sendTransaction({to: address, from: accounts[28], value: web3.utils.toWei("0.01")})
    console.log("72")
    console.log(result[72])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[73] = await web3.eth.sendTransaction({to: address, from: accounts[28], value: web3.utils.toWei("0.01")})
    console.log("73")
    console.log(result[73])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[74] = await web3.eth.sendTransaction({to: address, from: accounts[16], value: web3.utils.toWei("32")})
    console.log("74")
    console.log(result[74])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[75] = await web3.eth.sendTransaction({to: address, from: accounts[8], value: web3.utils.toWei("0.1")})
    console.log("75")
    console.log(result[75])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[76] = await web3.eth.sendTransaction({to: address, from: accounts[8], value: web3.utils.toWei("0.7")})
    console.log("76")
    console.log(result[76])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[77] = await web3.eth.sendTransaction({to: address, from: accounts[6], value: web3.utils.toWei("0.1")})
    console.log("77")
    console.log(result[77])
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
