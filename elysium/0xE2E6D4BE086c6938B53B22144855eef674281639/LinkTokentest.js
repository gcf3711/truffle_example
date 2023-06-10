const LinkToken = artifacts.require("LinkToken")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await LinkToken.deployed()
    address = await LinkToken.address
    try{
      result[1] = await instance.mint(accounts[104], web3.utils.toBN("17691812200000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.mint(accounts[0], web3.utils.toBN("3615004700000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.mint(accounts[3], web3.utils.toBN("1851851000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.mint(accounts[236], web3.utils.toBN("1276754800000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.mint(accounts[105], web3.utils.toBN("449761000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.mint(accounts[232], web3.utils.toBN("313745000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.mint(accounts[216], web3.utils.toBN("291372000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.mint(accounts[37], web3.utils.toBN("287000400000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.mint(accounts[121], web3.utils.toBN("267354000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.mint(accounts[189], web3.utils.toBN("438272200000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.mint(accounts[148], web3.utils.toBN("261326000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await instance.mint(accounts[81], web3.utils.toBN("256015500000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await instance.mint(accounts[156], web3.utils.toBN("254587000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await instance.mint(accounts[56], web3.utils.toBN("249037000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await instance.mint(accounts[262], web3.utils.toBN("234265000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await instance.mint(accounts[86], web3.utils.toBN("206461000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await instance.mint(accounts[233], web3.utils.toBN("205199000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await instance.mint(accounts[123], web3.utils.toBN("194307000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await instance.mint(accounts[128], web3.utils.toBN("193908000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("19")
    console.log(result[19])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[20] = await instance.mint(accounts[250], web3.utils.toBN("193420000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("20")
    console.log(result[20])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[21] = await instance.mint(accounts[169], web3.utils.toBN("192735000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("21")
    console.log(result[21])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[22] = await instance.mint(accounts[54], web3.utils.toBN("183620000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("22")
    console.log(result[22])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[23] = await instance.mint(accounts[52], web3.utils.toBN("183427000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("23")
    console.log(result[23])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[24] = await instance.mint(accounts[87], web3.utils.toBN("176246000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("24")
    console.log(result[24])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[25] = await instance.mint(accounts[46], web3.utils.toBN("189354000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("25")
    console.log(result[25])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[26] = await instance.mint(accounts[124], web3.utils.toBN("174295000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("26")
    console.log(result[26])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[27] = await instance.mint(accounts[271], web3.utils.toBN("173458000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("27")
    console.log(result[27])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[28] = await instance.mint(accounts[183], web3.utils.toBN("162807000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("28")
    console.log(result[28])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[29] = await instance.mint(accounts[79], web3.utils.toBN("162802000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("29")
    console.log(result[29])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[30] = await instance.mint(accounts[197], web3.utils.toBN("150000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("30")
    console.log(result[30])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[31] = await instance.mint(accounts[130], web3.utils.toBN("141187000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("31")
    console.log(result[31])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[32] = await instance.mint(accounts[53], web3.utils.toBN("138609000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("32")
    console.log(result[32])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[33] = await instance.mint(accounts[22], web3.utils.toBN("138426000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("33")
    console.log(result[33])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[34] = await instance.mint(accounts[191], web3.utils.toBN("138209000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("34")
    console.log(result[34])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[35] = await instance.mint(accounts[185], web3.utils.toBN("138106000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("35")
    console.log(result[35])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[36] = await instance.mint(accounts[221], web3.utils.toBN("137283000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("36")
    console.log(result[36])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[37] = await instance.mint(accounts[124], web3.utils.toBN("174295000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("37")
    console.log(result[37])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[38] = await instance.mint(accounts[183], web3.utils.toBN("162807000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("38")
    console.log(result[38])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[39] = await instance.mint(accounts[33], web3.utils.toBN("137269000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("39")
    console.log(result[39])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[40] = await instance.mint(accounts[267], web3.utils.toBN("136482000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("40")
    console.log(result[40])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[41] = await instance.mint(accounts[198], web3.utils.toBN("132765000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("41")
    console.log(result[41])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[42] = await instance.mint(accounts[255], web3.utils.toBN("129015000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("42")
    console.log(result[42])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[43] = await instance.mint(accounts[142], web3.utils.toBN("127306000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("43")
    console.log(result[43])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[44] = await instance.mint(accounts[63], web3.utils.toBN("125001000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("44")
    console.log(result[44])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[45] = await instance.mint(accounts[49], web3.utils.toBN("124588000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("45")
    console.log(result[45])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[46] = await instance.mint(accounts[184], web3.utils.toBN("124351000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("46")
    console.log(result[46])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[47] = await instance.mint(accounts[173], web3.utils.toBN("123542000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("47")
    console.log(result[47])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[48] = await instance.mint(accounts[94], web3.utils.toBN("109648000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("48")
    console.log(result[48])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[49] = await instance.mint(accounts[170], web3.utils.toBN("106473000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("49")
    console.log(result[49])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[50] = await instance.mint(accounts[161], web3.utils.toBN("105548000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("50")
    console.log(result[50])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[51] = await instance.mint(accounts[206], web3.utils.toBN("96245000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("51")
    console.log(result[51])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[52] = await instance.mint(accounts[205], web3.utils.toBN("96185600000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("52")
    console.log(result[52])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[53] = await instance.mint(accounts[44], web3.utils.toBN("95103000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("53")
    console.log(result[53])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[54] = await instance.mint(accounts[55], web3.utils.toBN("94627000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("54")
    console.log(result[54])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[55] = await instance.mint(accounts[209], web3.utils.toBN("92073000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("55")
    console.log(result[55])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[56] = await instance.mint(accounts[163], web3.utils.toBN("90000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("56")
    console.log(result[56])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[57] = await instance.mint(accounts[110], web3.utils.toBN("89625000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("57")
    console.log(result[57])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[58] = await instance.mint(accounts[130], web3.utils.toBN("86100100000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("58")
    console.log(result[58])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[59] = await instance.mint(accounts[0], web3.utils.toBN("86100100000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("59")
    console.log(result[59])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[60] = await instance.mint(accounts[166], web3.utils.toBN("85648800000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("60")
    console.log(result[60])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[61] = await instance.mint(accounts[212], web3.utils.toBN("83944000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("61")
    console.log(result[61])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[62] = await instance.mint(accounts[157], web3.utils.toBN("83619000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("62")
    console.log(result[62])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[63] = await instance.mint(accounts[69], web3.utils.toBN("83492000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("63")
    console.log(result[63])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[64] = await instance.mint(accounts[208], web3.utils.toBN("83461000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("64")
    console.log(result[64])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[65] = await instance.mint(accounts[265], web3.utils.toBN("82364000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("65")
    console.log(result[65])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[66] = await instance.mint(accounts[238], web3.utils.toBN("80741000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("66")
    console.log(result[66])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[67] = await instance.mint(accounts[226], web3.utils.toBN("77930000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("67")
    console.log(result[67])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[68] = await instance.mint(accounts[113], web3.utils.toBN("75536500000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("68")
    console.log(result[68])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[69] = await instance.mint(accounts[194], web3.utils.toBN("73858000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("69")
    console.log(result[69])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[70] = await instance.mint(accounts[280], web3.utils.toBN("73469000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("70")
    console.log(result[70])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[71] = await instance.mint(accounts[66], web3.utils.toBN("73150000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("71")
    console.log(result[71])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[72] = await instance.mint(accounts[195], web3.utils.toBN("73108000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("72")
    console.log(result[72])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[73] = await instance.mint(accounts[223], web3.utils.toBN("72400000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("73")
    console.log(result[73])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[74] = await instance.mint(accounts[266], web3.utils.toBN("72361000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("74")
    console.log(result[74])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[75] = await instance.mint(accounts[19], web3.utils.toBN("70988000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("75")
    console.log(result[75])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[76] = await instance.mint(accounts[168], web3.utils.toBN("70988000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("76")
    console.log(result[76])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[77] = await instance.mint(accounts[130], web3.utils.toBN("68880100000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("77")
    console.log(result[77])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[78] = await instance.mint(accounts[133], web3.utils.toBN("68314000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("78")
    console.log(result[78])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[79] = await instance.mint(accounts[7], web3.utils.toBN("67549000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("79")
    console.log(result[79])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[80] = await instance.mint(accounts[220], web3.utils.toBN("67324000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("80")
    console.log(result[80])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[81] = await instance.mint(accounts[114], web3.utils.toBN("67284000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("81")
    console.log(result[81])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[82] = await instance.mint(accounts[147], web3.utils.toBN("66154800000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("82")
    console.log(result[82])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[83] = await instance.mint(accounts[23], web3.utils.toBN("64539000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("83")
    console.log(result[83])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[84] = await instance.mint(accounts[78], web3.utils.toBN("64318000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("84")
    console.log(result[84])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[85] = await instance.mint(accounts[172], web3.utils.toBN("64297000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("85")
    console.log(result[85])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[86] = await instance.mint(accounts[15], web3.utils.toBN("63167000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("86")
    console.log(result[86])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[87] = await instance.mint(accounts[122], web3.utils.toBN("63129000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("87")
    console.log(result[87])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[88] = await instance.mint(accounts[27], web3.utils.toBN("63059000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("88")
    console.log(result[88])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[89] = await instance.mint(accounts[140], web3.utils.toBN("62148600000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("89")
    console.log(result[89])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[90] = await instance.mint(accounts[155], web3.utils.toBN("61475000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("90")
    console.log(result[90])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[91] = await instance.mint(accounts[91], web3.utils.toBN("61475000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("91")
    console.log(result[91])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[92] = await instance.mint(accounts[210], web3.utils.toBN("61452000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("92")
    console.log(result[92])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[93] = await instance.mint(accounts[126], web3.utils.toBN("61049000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("93")
    console.log(result[93])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[94] = await instance.mint(accounts[187], web3.utils.toBN("60649000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("94")
    console.log(result[94])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[95] = await instance.mint(accounts[245], web3.utils.toBN("59780000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("95")
    console.log(result[95])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[96] = await instance.mint(accounts[165], web3.utils.toBN("59348000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("96")
    console.log(result[96])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[97] = await instance.mint(accounts[89], web3.utils.toBN("57648600000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("97")
    console.log(result[97])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[98] = await instance.mint(accounts[59], web3.utils.toBN("57394000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("98")
    console.log(result[98])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[99] = await instance.mint(accounts[130], web3.utils.toBN("57342700000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("99")
    console.log(result[99])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[100] = await instance.mint(accounts[167], web3.utils.toBN("56370000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("100")
    console.log(result[100])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[101] = await instance.mint(accounts[8], web3.utils.toBN("56324000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("101")
    console.log(result[101])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[102] = await instance.mint(accounts[116], web3.utils.toBN("54876000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("102")
    console.log(result[102])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[103] = await instance.mint(accounts[179], web3.utils.toBN("54876000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("103")
    console.log(result[103])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[104] = await instance.mint(accounts[203], web3.utils.toBN("54391000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("104")
    console.log(result[104])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[105] = await instance.mint(accounts[10], web3.utils.toBN("53978000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("105")
    console.log(result[105])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[106] = await instance.mint(accounts[51], web3.utils.toBN("53067000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("106")
    console.log(result[106])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[107] = await instance.mint(accounts[45], web3.utils.toBN("53046000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("107")
    console.log(result[107])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[108] = await instance.mint(accounts[76], web3.utils.toBN("52649000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("108")
    console.log(result[108])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[109] = await instance.mint(accounts[130], web3.utils.toBN("51660100000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("109")
    console.log(result[109])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[110] = await instance.mint(accounts[240], web3.utils.toBN("51394000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("110")
    console.log(result[110])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[111] = await instance.mint(accounts[199], web3.utils.toBN("51340000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("111")
    console.log(result[111])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[112] = await instance.mint(accounts[77], web3.utils.toBN("50648000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("112")
    console.log(result[112])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[113] = await instance.mint(accounts[41], web3.utils.toBN("50194000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("113")
    console.log(result[113])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[114] = await instance.mint(accounts[80], web3.utils.toBN("49376000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("114")
    console.log(result[114])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[115] = await instance.mint(accounts[74], web3.utils.toBN("48367000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("115")
    console.log(result[115])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[116] = await instance.mint(accounts[82], web3.utils.toBN("48322000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("116")
    console.log(result[116])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[117] = await instance.mint(accounts[82], web3.utils.toBN("48321900000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("117")
    console.log(result[117])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[118] = await instance.mint(accounts[72], web3.utils.toBN("48305000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("118")
    console.log(result[118])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[119] = await instance.mint(accounts[269], web3.utils.toBN("48037000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("119")
    console.log(result[119])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[120] = await instance.mint(accounts[206], web3.utils.toBN("47412000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("120")
    console.log(result[120])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[121] = await instance.mint(accounts[30], web3.utils.toBN("46394000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("121")
    console.log(result[121])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[122] = await instance.mint(accounts[188], web3.utils.toBN("46380000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("122")
    console.log(result[122])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[123] = await instance.mint(accounts[93], web3.utils.toBN("46036000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("123")
    console.log(result[123])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[124] = await instance.mint(accounts[2], web3.utils.toBN("45920100000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("124")
    console.log(result[124])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[125] = await instance.mint(accounts[143], web3.utils.toBN("45702000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("125")
    console.log(result[125])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[126] = await instance.mint(accounts[21], web3.utils.toBN("45679000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("126")
    console.log(result[126])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[127] = await instance.mint(accounts[61], web3.utils.toBN("43610000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("127")
    console.log(result[127])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[128] = await instance.mint(accounts[68], web3.utils.toBN("43429000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("128")
    console.log(result[128])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[129] = await instance.mint(accounts[215], web3.utils.toBN("43158000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("129")
    console.log(result[129])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[130] = await instance.mint(accounts[138], web3.utils.toBN("43068000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("130")
    console.log(result[130])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[131] = await instance.mint(accounts[193], web3.utils.toBN("43000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("131")
    console.log(result[131])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[132] = await instance.mint(accounts[57], web3.utils.toBN("42672000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("132")
    console.log(result[132])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[133] = await instance.mint(accounts[117], web3.utils.toBN("42672000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("133")
    console.log(result[133])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[134] = await instance.mint(accounts[90], web3.utils.toBN("42618000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("134")
    console.log(result[134])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[135] = await instance.mint(accounts[231], web3.utils.toBN("42038000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("135")
    console.log(result[135])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[136] = await instance.mint(accounts[43], web3.utils.toBN("42023000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("136")
    console.log(result[136])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[137] = await instance.mint(accounts[241], web3.utils.toBN("41572000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("137")
    console.log(result[137])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[138] = await instance.mint(accounts[211], web3.utils.toBN("41349000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("138")
    console.log(result[138])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[139] = await instance.mint(accounts[16], web3.utils.toBN("39487900000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("139")
    console.log(result[139])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[140] = await instance.mint(accounts[154], web3.utils.toBN("39283000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("140")
    console.log(result[140])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[141] = await instance.mint(accounts[32], web3.utils.toBN("38810000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("141")
    console.log(result[141])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[142] = await instance.mint(accounts[144], web3.utils.toBN("38721000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("142")
    console.log(result[142])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[143] = await instance.mint(accounts[256], web3.utils.toBN("38515600000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("143")
    console.log(result[143])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[144] = await instance.mint(accounts[71], web3.utils.toBN("37394000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("144")
    console.log(result[144])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[145] = await instance.mint(accounts[261], web3.utils.toBN("37269000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("145")
    console.log(result[145])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[146] = await instance.mint(accounts[137], web3.utils.toBN("37263000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("146")
    console.log(result[146])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[147] = await instance.mint(accounts[227], web3.utils.toBN("37068000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("147")
    console.log(result[147])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[148] = await instance.mint(accounts[190], web3.utils.toBN("34762000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("148")
    console.log(result[148])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[149] = await instance.mint(accounts[112], web3.utils.toBN("34672000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("149")
    console.log(result[149])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[150] = await instance.mint(accounts[275], web3.utils.toBN("34601000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("150")
    console.log(result[150])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[151] = await instance.mint(accounts[70], web3.utils.toBN("34360000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("151")
    console.log(result[151])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[152] = await instance.transfer(accounts[101], web3.utils.toBN("1000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("152")
    console.log(result[152])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[153] = await instance.mint(accounts[103], web3.utils.toBN("34269000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("153")
    console.log(result[153])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[154] = await instance.mint(accounts[229], web3.utils.toBN("33672000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("154")
    console.log(result[154])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[155] = await instance.mint(accounts[58], web3.utils.toBN("33000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("155")
    console.log(result[155])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[156] = await instance.mint(accounts[234], web3.utils.toBN("32654000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("156")
    console.log(result[156])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[157] = await instance.mint(accounts[214], web3.utils.toBN("32484100000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("157")
    console.log(result[157])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[158] = await instance.mint(accounts[120], web3.utils.toBN("32484000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("158")
    console.log(result[158])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[159] = await instance.mint(accounts[237], web3.utils.toBN("31307000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("159")
    console.log(result[159])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[160] = await instance.mint(accounts[272], web3.utils.toBN("31250000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("160")
    console.log(result[160])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[161] = await instance.mint(accounts[164], web3.utils.toBN("31050000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("161")
    console.log(result[161])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[162] = await instance.mint(accounts[9], web3.utils.toBN("31050000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("162")
    console.log(result[162])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[163] = await instance.mint(accounts[107], web3.utils.toBN("30864800000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("163")
    console.log(result[163])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[164] = await instance.mint(accounts[146], web3.utils.toBN("30864000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("164")
    console.log(result[164])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[165] = await instance.mint(accounts[253], web3.utils.toBN("30864000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("165")
    console.log(result[165])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[166] = await instance.mint(accounts[248], web3.utils.toBN("30010000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("166")
    console.log(result[166])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[167] = await instance.mint(accounts[35], web3.utils.toBN("30000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("167")
    console.log(result[167])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[168] = await instance.mint(accounts[12], web3.utils.toBN("29648000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("168")
    console.log(result[168])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[169] = await instance.mint(accounts[84], web3.utils.toBN("29467000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("169")
    console.log(result[169])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[170] = await instance.mint(accounts[48], web3.utils.toBN("29438000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("170")
    console.log(result[170])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[171] = await instance.mint(accounts[62], web3.utils.toBN("29348000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("171")
    console.log(result[171])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[172] = await instance.mint(accounts[127], web3.utils.toBN("29135000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("172")
    console.log(result[172])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[173] = await instance.mint(accounts[47], web3.utils.toBN("29064000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("173")
    console.log(result[173])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[174] = await instance.mint(accounts[50], web3.utils.toBN("28700000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("174")
    console.log(result[174])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[175] = await instance.mint(accounts[162], web3.utils.toBN("28367000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("175")
    console.log(result[175])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[176] = await instance.mint(accounts[141], web3.utils.toBN("28349000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("176")
    console.log(result[176])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[177] = await instance.mint(accounts[219], web3.utils.toBN("27410000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("177")
    console.log(result[177])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[178] = await instance.mint(accounts[244], web3.utils.toBN("27309000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("178")
    console.log(result[178])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[179] = await instance.mint(accounts[243], web3.utils.toBN("27064000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("179")
    console.log(result[179])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[180] = await instance.mint(accounts[115], web3.utils.toBN("25930000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("180")
    console.log(result[180])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[181] = await instance.mint(accounts[136], web3.utils.toBN("25743900000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("181")
    console.log(result[181])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[182] = await instance.mint(accounts[153], web3.utils.toBN("25230000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("182")
    console.log(result[182])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[183] = await instance.mint(accounts[136], web3.utils.toBN("25031000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("183")
    console.log(result[183])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[184] = await instance.mint(accounts[192], web3.utils.toBN("24890000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("184")
    console.log(result[184])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[185] = await instance.mint(accounts[249], web3.utils.toBN("24840000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("185")
    console.log(result[185])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[186] = await instance.mint(accounts[28], web3.utils.toBN("24561800000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("186")
    console.log(result[186])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[187] = await instance.mint(accounts[180], web3.utils.toBN("23496000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("187")
    console.log(result[187])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[188] = await instance.mint(accounts[11], web3.utils.toBN("23462000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("188")
    console.log(result[188])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[189] = await instance.mint(accounts[83], web3.utils.toBN("23290000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("189")
    console.log(result[189])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[190] = await instance.mint(accounts[228], web3.utils.toBN("23290000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("190")
    console.log(result[190])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[191] = await instance.mint(accounts[38], web3.utils.toBN("23290000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("191")
    console.log(result[191])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[192] = await instance.mint(accounts[88], web3.utils.toBN("23290000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("192")
    console.log(result[192])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[193] = await instance.mint(accounts[132], web3.utils.toBN("23290000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("193")
    console.log(result[193])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[194] = await instance.mint(accounts[151], web3.utils.toBN("23290000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("194")
    console.log(result[194])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[195] = await instance.mint(accounts[34], web3.utils.toBN("23290000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("195")
    console.log(result[195])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[196] = await instance.mint(accounts[131], web3.utils.toBN("22970000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("196")
    console.log(result[196])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[197] = await instance.mint(accounts[181], web3.utils.toBN("22790000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("197")
    console.log(result[197])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[198] = await instance.mint(accounts[274], web3.utils.toBN("21440000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("198")
    console.log(result[198])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[199] = await instance.mint(accounts[134], web3.utils.toBN("21360000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("199")
    console.log(result[199])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[200] = await instance.mint(accounts[98], web3.utils.toBN("21000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("200")
    console.log(result[200])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[201] = await instance.mint(accounts[96], web3.utils.toBN("20664000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("201")
    console.log(result[201])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[202] = await instance.mint(accounts[235], web3.utils.toBN("20647000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("202")
    console.log(result[202])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[203] = await instance.mint(accounts[67], web3.utils.toBN("20384000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("203")
    console.log(result[203])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[204] = await instance.mint(accounts[139], web3.utils.toBN("20247000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("204")
    console.log(result[204])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[205] = await instance.mint(accounts[139], web3.utils.toBN("20247000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("205")
    console.log(result[205])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[206] = await instance.mint(accounts[196], web3.utils.toBN("20180000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("206")
    console.log(result[206])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[207] = await instance.mint(accounts[159], web3.utils.toBN("20180000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("207")
    console.log(result[207])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[208] = await instance.mint(accounts[64], web3.utils.toBN("19680000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("208")
    console.log(result[208])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[209] = await instance.mint(accounts[150], web3.utils.toBN("19565400000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("209")
    console.log(result[209])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[210] = await instance.mint(accounts[102], web3.utils.toBN("19403000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("210")
    console.log(result[210])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[211] = await instance.mint(accounts[217], web3.utils.toBN("19138000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("211")
    console.log(result[211])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[212] = await instance.mint(accounts[4], web3.utils.toBN("18630000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("212")
    console.log(result[212])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[213] = await instance.mint(accounts[20], web3.utils.toBN("18630000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("213")
    console.log(result[213])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[214] = await instance.mint(accounts[75], web3.utils.toBN("18518500000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("214")
    console.log(result[214])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[215] = await instance.mint(accounts[259], web3.utils.toBN("18512000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("215")
    console.log(result[215])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[216] = await instance.mint(accounts[263], web3.utils.toBN("18347000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("216")
    console.log(result[216])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[217] = await instance.mint(accounts[222], web3.utils.toBN("17394000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("217")
    console.log(result[217])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[218] = await instance.mint(accounts[204], web3.utils.toBN("16850500000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("218")
    console.log(result[218])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[219] = await instance.mint(accounts[258], web3.utils.toBN("16690000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("219")
    console.log(result[219])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[220] = await instance.mint(accounts[254], web3.utils.toBN("16318000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("220")
    console.log(result[220])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[221] = await instance.mint(accounts[149], web3.utils.toBN("15948400000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("221")
    console.log(result[221])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[222] = await instance.mint(accounts[279], web3.utils.toBN("15520000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("222")
    console.log(result[222])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[223] = await instance.mint(accounts[213], web3.utils.toBN("15384000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("223")
    console.log(result[223])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[224] = await instance.mint(accounts[135], web3.utils.toBN("15000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("224")
    console.log(result[224])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[225] = await instance.mint(accounts[130], web3.utils.toBN("14924000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("225")
    console.log(result[225])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[226] = await instance.mint(accounts[174], web3.utils.toBN("14350000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("226")
    console.log(result[226])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[227] = await instance.mint(accounts[40], web3.utils.toBN("14000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("227")
    console.log(result[227])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[228] = await instance.mint(accounts[60], web3.utils.toBN("14000000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("228")
    console.log(result[228])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[229] = await instance.mint(accounts[218], web3.utils.toBN("13672000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("229")
    console.log(result[229])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[230] = await instance.mint(accounts[92], web3.utils.toBN("13671000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("230")
    console.log(result[230])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[231] = await instance.mint(accounts[42], web3.utils.toBN("13648000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("231")
    console.log(result[231])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[232] = await instance.mint(accounts[111], web3.utils.toBN("13647000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("232")
    console.log(result[232])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[233] = await instance.mint(accounts[177], web3.utils.toBN("13640000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("233")
    console.log(result[233])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[234] = await instance.mint(accounts[5], web3.utils.toBN("13548700000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("234")
    console.log(result[234])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[235] = await instance.mint(accounts[176], web3.utils.toBN("13512000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("235")
    console.log(result[235])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[236] = await instance.mint(accounts[1], web3.utils.toBN("13504100000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("236")
    console.log(result[236])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[237] = await instance.mint(accounts[257], web3.utils.toBN("13148000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("237")
    console.log(result[237])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[238] = await instance.mint(accounts[225], web3.utils.toBN("12929000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("238")
    console.log(result[238])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[239] = await instance.mint(accounts[201], web3.utils.toBN("12901000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("239")
    console.log(result[239])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[240] = await instance.mint(accounts[201], web3.utils.toBN("12901000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("240")
    console.log(result[240])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[241] = await instance.mint(accounts[276], web3.utils.toBN("12528000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("241")
    console.log(result[241])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[242] = await instance.mint(accounts[152], web3.utils.toBN("12487000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("242")
    console.log(result[242])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[243] = await instance.mint(accounts[239], web3.utils.toBN("12420000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("243")
    console.log(result[243])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[244] = await instance.mint(accounts[73], web3.utils.toBN("12346000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("244")
    console.log(result[244])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[245] = await instance.mint(accounts[247], web3.utils.toBN("12154900000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("245")
    console.log(result[245])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[246] = await instance.mint(accounts[230], web3.utils.toBN("12054000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("246")
    console.log(result[246])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[247] = await instance.mint(accounts[130], web3.utils.toBN("11480000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("247")
    console.log(result[247])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[248] = await instance.mint(accounts[202], web3.utils.toBN("11480000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("248")
    console.log(result[248])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[249] = await instance.mint(accounts[268], web3.utils.toBN("11290000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("249")
    console.log(result[249])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[250] = await instance.mint(accounts[200], web3.utils.toBN("11267000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("250")
    console.log(result[250])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[251] = await instance.mint(accounts[119], web3.utils.toBN("11110000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("251")
    console.log(result[251])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[252] = await instance.mint(accounts[100], web3.utils.toBN("11110000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("252")
    console.log(result[252])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[253] = await instance.mint(accounts[264], web3.utils.toBN("10965000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("253")
    console.log(result[253])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[254] = await instance.mint(accounts[31], web3.utils.toBN("10870000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("254")
    console.log(result[254])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[255] = await instance.mint(accounts[277], web3.utils.toBN("10870000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("255")
    console.log(result[255])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[256] = await instance.mint(accounts[85], web3.utils.toBN("10870000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("256")
    console.log(result[256])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[257] = await instance.mint(accounts[260], web3.utils.toBN("10866000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("257")
    console.log(result[257])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[258] = await instance.mint(accounts[14], web3.utils.toBN("10730000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("258")
    console.log(result[258])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[259] = await instance.mint(accounts[118], web3.utils.toBN("10490000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("259")
    console.log(result[259])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[260] = await instance.mint(accounts[99], web3.utils.toBN("10370000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("260")
    console.log(result[260])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[261] = await instance.mint(accounts[26], web3.utils.toBN("10093000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("261")
    console.log(result[261])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[262] = await instance.mint(accounts[97], web3.utils.toBN("9750000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("262")
    console.log(result[262])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[263] = await instance.mint(accounts[278], web3.utils.toBN("9452900000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("263")
    console.log(result[263])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[264] = await instance.mint(accounts[108], web3.utils.toBN("9376000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("264")
    console.log(result[264])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[265] = await instance.mint(accounts[109], web3.utils.toBN("9347000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("265")
    console.log(result[265])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[266] = await instance.mint(accounts[242], web3.utils.toBN("9260000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("266")
    console.log(result[266])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[267] = await instance.mint(accounts[251], web3.utils.toBN("9259300000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("267")
    console.log(result[267])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[268] = await instance.mint(accounts[39], web3.utils.toBN("9247000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("268")
    console.log(result[268])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[269] = await instance.mint(accounts[175], web3.utils.toBN("9161000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("269")
    console.log(result[269])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[270] = await instance.mint(accounts[145], web3.utils.toBN("9148700000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("270")
    console.log(result[270])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[271] = await instance.mint(accounts[13], web3.utils.toBN("9040000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("271")
    console.log(result[271])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[272] = await instance.mint(accounts[125], web3.utils.toBN("9040000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("272")
    console.log(result[272])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[273] = await instance.mint(accounts[171], web3.utils.toBN("9034000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("273")
    console.log(result[273])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[274] = await instance.mint(accounts[130], web3.utils.toBN("8924600000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("274")
    console.log(result[274])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[275] = await instance.mint(accounts[186], web3.utils.toBN("8623000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("275")
    console.log(result[275])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[276] = await instance.mint(accounts[29], web3.utils.toBN("8610000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("276")
    console.log(result[276])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[277] = await instance.mint(accounts[272], web3.utils.toBN("8600000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("277")
    console.log(result[277])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[278] = await instance.mint(accounts[272], web3.utils.toBN("8600000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("278")
    console.log(result[278])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[279] = await instance.mint(accounts[129], web3.utils.toBN("8394000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("279")
    console.log(result[279])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[280] = await instance.mint(accounts[18], web3.utils.toBN("8379000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("280")
    console.log(result[280])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[281] = await instance.mint(accounts[36], web3.utils.toBN("8346000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("281")
    console.log(result[281])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[282] = await instance.mint(accounts[160], web3.utils.toBN("8309000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("282")
    console.log(result[282])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[283] = await instance.mint(accounts[207], web3.utils.toBN("8307000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("283")
    console.log(result[283])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[284] = await instance.mint(accounts[158], web3.utils.toBN("8127000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("284")
    console.log(result[284])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[285] = await instance.mint(accounts[24], web3.utils.toBN("7820000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("285")
    console.log(result[285])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[286] = await instance.mint(accounts[182], web3.utils.toBN("7819000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("286")
    console.log(result[286])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[287] = await instance.mint(accounts[150], web3.utils.toBN("7810000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("287")
    console.log(result[287])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[288] = await instance.mint(accounts[246], web3.utils.toBN("7810000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("288")
    console.log(result[288])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[289] = await instance.mint(accounts[178], web3.utils.toBN("7760000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("289")
    console.log(result[289])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[290] = await instance.mint(accounts[95], web3.utils.toBN("7760000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("290")
    console.log(result[290])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[291] = await instance.mint(accounts[17], web3.utils.toBN("7668000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("291")
    console.log(result[291])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[292] = await instance.mint(accounts[17], web3.utils.toBN("7668000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("292")
    console.log(result[292])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[293] = await instance.mint(accounts[25], web3.utils.toBN("7626000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("293")
    console.log(result[293])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[294] = await instance.mint(accounts[6], web3.utils.toBN("7514800000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("294")
    console.log(result[294])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[295] = await instance.mint(accounts[224], web3.utils.toBN("7369500000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("295")
    console.log(result[295])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[296] = await instance.mint(accounts[252], web3.utils.toBN("7346000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("296")
    console.log(result[296])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[297] = await instance.mint(accounts[273], web3.utils.toBN("7264800000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("297")
    console.log(result[297])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[298] = await instance.mint(accounts[270], web3.utils.toBN("7180000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("298")
    console.log(result[298])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[299] = await instance.mint(accounts[270], web3.utils.toBN("7114500000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("299")
    console.log(result[299])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[300] = await instance.mint(accounts[106], web3.utils.toBN("7099000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("300")
    console.log(result[300])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[301] = await instance.mint(accounts[65], web3.utils.toBN("7048000000000000000"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("301")
    console.log(result[301])
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
