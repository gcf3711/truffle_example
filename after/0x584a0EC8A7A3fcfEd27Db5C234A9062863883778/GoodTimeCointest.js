const GoodTimeCoin = artifacts.require("GoodTimeCoin")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await GoodTimeCoin.deployed()
    address = await GoodTimeCoin.address
    try{
      result[1] = await instance.transfer(accounts[51], web3.utils.toBN("184000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.transfer(accounts[11], web3.utils.toBN("50000000000000000000"), {from: accounts[51], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.transfer(accounts[6], web3.utils.toBN("100000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.transfer(accounts[6], web3.utils.toBN("420000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.transfer(accounts[6], web3.utils.toBN("1766000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.transfer(accounts[51], web3.utils.toBN("1914000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.transfer(accounts[34], web3.utils.toBN("427000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.transfer(accounts[41], web3.utils.toBN("1870000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.transfer(accounts[22], web3.utils.toBN("471000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.transfer(accounts[52], web3.utils.toBN("316000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.transfer(accounts[2], web3.utils.toBN("7000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await instance.transfer(accounts[40], web3.utils.toBN("1839000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await instance.transfer(accounts[24], web3.utils.toBN("517000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await instance.transfer(accounts[6], web3.utils.toBN("929000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await instance.transfer(accounts[20], web3.utils.toBN("1074000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await instance.transfer(accounts[17], web3.utils.toBN("258000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await instance.transfer(accounts[7], web3.utils.toBN("30000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await instance.transfer(accounts[1], web3.utils.toBN("112000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await instance.transfer(accounts[41], web3.utils.toBN("112000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("19")
    console.log(result[19])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[20] = await instance.transfer(accounts[42], web3.utils.toBN("155000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("20")
    console.log(result[20])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[21] = await instance.transfer(accounts[25], web3.utils.toBN("3207000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("21")
    console.log(result[21])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[22] = await instance.transfer(accounts[41], web3.utils.toBN("624000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("22")
    console.log(result[22])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[23] = await instance.transfer(accounts[8], web3.utils.toBN("76000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("23")
    console.log(result[23])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[24] = await instance.transfer(accounts[18], web3.utils.toBN("285000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("24")
    console.log(result[24])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[25] = await instance.transfer(accounts[45], web3.utils.toBN("134000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("25")
    console.log(result[25])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[26] = await instance.transfer(accounts[37], web3.utils.toBN("653000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("26")
    console.log(result[26])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[27] = await instance.transfer(accounts[55], web3.utils.toBN("335000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("27")
    console.log(result[27])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[28] = await instance.transfer(accounts[44], web3.utils.toBN("108000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("28")
    console.log(result[28])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[29] = await instance.transfer(accounts[37], web3.utils.toBN("1634000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("29")
    console.log(result[29])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[30] = await instance.transfer(accounts[18], web3.utils.toBN("291000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("30")
    console.log(result[30])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[31] = await instance.transfer(accounts[55], web3.utils.toBN("838000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("31")
    console.log(result[31])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[32] = await instance.transfer(accounts[29], web3.utils.toBN("2649000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("32")
    console.log(result[32])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[33] = await instance.transfer(accounts[43], web3.utils.toBN("396000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("33")
    console.log(result[33])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[34] = await instance.transfer(accounts[53], web3.utils.toBN("111000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("34")
    console.log(result[34])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[35] = await instance.transfer(accounts[44], web3.utils.toBN("272000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("35")
    console.log(result[35])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[36] = await instance.transfer(accounts[53], web3.utils.toBN("23000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("36")
    console.log(result[36])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[37] = await instance.transfer(accounts[36], web3.utils.toBN("7000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("37")
    console.log(result[37])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[38] = await instance.transfer(accounts[1], web3.utils.toBN("329000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("38")
    console.log(result[38])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[39] = await instance.transfer(accounts[8], web3.utils.toBN("76000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("39")
    console.log(result[39])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[40] = await instance.transfer(accounts[45], web3.utils.toBN("134000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("40")
    console.log(result[40])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[41] = await instance.transfer(accounts[18], web3.utils.toBN("285000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("41")
    console.log(result[41])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[42] = await instance.transfer(accounts[37], web3.utils.toBN("1634000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("42")
    console.log(result[42])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[43] = await instance.transfer(accounts[21], web3.utils.toBN("1644000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("43")
    console.log(result[43])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[44] = await instance.transfer(accounts[33], web3.utils.toBN("1066000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("44")
    console.log(result[44])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[45] = await instance.transfer(accounts[26], web3.utils.toBN("278000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("45")
    console.log(result[45])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[46] = await instance.transfer(accounts[39], web3.utils.toBN("238000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("46")
    console.log(result[46])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[47] = await instance.transfer(accounts[53], web3.utils.toBN("940000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("47")
    console.log(result[47])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[48] = await instance.transfer(accounts[28], web3.utils.toBN("7000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("48")
    console.log(result[48])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[49] = await instance.transfer(accounts[48], web3.utils.toBN("255000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("49")
    console.log(result[49])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[50] = await instance.transfer(accounts[4], web3.utils.toBN("4642000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("50")
    console.log(result[50])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[51] = await instance.transfer(accounts[47], web3.utils.toBN("2103000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("51")
    console.log(result[51])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[52] = await instance.transfer(accounts[14], web3.utils.toBN("1517000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("52")
    console.log(result[52])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[53] = await instance.transfer(accounts[27], web3.utils.toBN("1190000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("53")
    console.log(result[53])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[54] = await instance.transfer(accounts[46], web3.utils.toBN("1184000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("54")
    console.log(result[54])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[55] = await instance.transfer(accounts[16], web3.utils.toBN("868000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("55")
    console.log(result[55])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[56] = await instance.transfer(accounts[19], web3.utils.toBN("605000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("56")
    console.log(result[56])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[57] = await instance.transfer(accounts[35], web3.utils.toBN("6274000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("57")
    console.log(result[57])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[58] = await instance.transfer(accounts[46], web3.utils.toBN("2182000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("58")
    console.log(result[58])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[59] = await instance.transfer(accounts[50], web3.utils.toBN("494000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("59")
    console.log(result[59])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[60] = await instance.transfer(accounts[23], web3.utils.toBN("5492000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("60")
    console.log(result[60])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[61] = await instance.transfer(accounts[3], web3.utils.toBN("4157000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("61")
    console.log(result[61])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[62] = await instance.transfer(accounts[49], web3.utils.toBN("601000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("62")
    console.log(result[62])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[63] = await instance.transfer(accounts[30], web3.utils.toBN("1660000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("63")
    console.log(result[63])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[64] = await instance.transfer(accounts[35], web3.utils.toBN("13634000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("64")
    console.log(result[64])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[65] = await instance.transfer(accounts[54], web3.utils.toBN("33000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("65")
    console.log(result[65])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[66] = await instance.transfer(accounts[50], web3.utils.toBN("494000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("66")
    console.log(result[66])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[67] = await instance.transfer(accounts[23], web3.utils.toBN("5492000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("67")
    console.log(result[67])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[68] = await instance.transfer(accounts[35], web3.utils.toBN("13634000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("68")
    console.log(result[68])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[69] = await instance.transfer(accounts[3], web3.utils.toBN("4157000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("69")
    console.log(result[69])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[70] = await instance.transfer(accounts[54], web3.utils.toBN("33000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("70")
    console.log(result[70])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[71] = await instance.transfer(accounts[23], web3.utils.toBN("5492000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("71")
    console.log(result[71])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[72] = await instance.transfer(accounts[30], web3.utils.toBN("1660000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("72")
    console.log(result[72])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[73] = await instance.transfer(accounts[49], web3.utils.toBN("601000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("73")
    console.log(result[73])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[74] = await instance.transfer(accounts[34], web3.utils.toBN("855000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("74")
    console.log(result[74])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[75] = await instance.transfer(accounts[32], web3.utils.toBN("1853000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("75")
    console.log(result[75])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[76] = await instance.transfer(accounts[49], web3.utils.toBN("485000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("76")
    console.log(result[76])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[77] = await instance.transfer(accounts[49], web3.utils.toBN("485000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("77")
    console.log(result[77])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[78] = await instance.transfer(accounts[10], web3.utils.toBN("250000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("78")
    console.log(result[78])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[79] = await instance.transfer(accounts[34], web3.utils.toBN("855000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("79")
    console.log(result[79])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[80] = await instance.transfer(accounts[32], web3.utils.toBN("1853000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("80")
    console.log(result[80])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[81] = await instance.transfer(accounts[13], web3.utils.toBN("9017000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("81")
    console.log(result[81])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[82] = await instance.transfer(accounts[5], web3.utils.toBN("3694000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("82")
    console.log(result[82])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[83] = await instance.transfer(accounts[15], web3.utils.toBN("2837000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("83")
    console.log(result[83])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[84] = await instance.transfer(accounts[31], web3.utils.toBN("9471000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("84")
    console.log(result[84])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[85] = await instance.transfer(accounts[12], web3.utils.toBN("1455000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("85")
    console.log(result[85])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[86] = await instance.transfer(accounts[38], web3.utils.toBN("9000000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("86")
    console.log(result[86])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[87] = await instance.transfer(accounts[49], web3.utils.toBN("485000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("87")
    console.log(result[87])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[88] = await instance.transfer(accounts[9], web3.utils.toBN("1315000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("88")
    console.log(result[88])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[89] = await instance.transfer(accounts[49], web3.utils.toBN("601000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("89")
    console.log(result[89])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[90] = await instance.transfer(accounts[30], web3.utils.toBN("1660000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("90")
    console.log(result[90])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[91] = await instance.transfer(accounts[23], web3.utils.toBN("5492000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("91")
    console.log(result[91])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[92] = await instance.transfer(accounts[54], web3.utils.toBN("33000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("92")
    console.log(result[92])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[93] = await instance.transfer(accounts[3], web3.utils.toBN("4157000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("93")
    console.log(result[93])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[94] = await instance.transfer(accounts[35], web3.utils.toBN("13634000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("94")
    console.log(result[94])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[95] = await instance.transfer(accounts[50], web3.utils.toBN("494000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("95")
    console.log(result[95])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[96] = await instance.transfer(accounts[30], web3.utils.toBN("1660000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("96")
    console.log(result[96])
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
