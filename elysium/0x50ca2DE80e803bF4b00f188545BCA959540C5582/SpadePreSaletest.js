const SpadePreSale = artifacts.require("SpadePreSale")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await SpadePreSale.deployed()
    address = await SpadePreSale.address
    try{
      result[1] = await instance.startPreSale({from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.buyPreSaleTokens(accounts[23], web3.utils.toBN("78560000000000000000"), web3.utils.toBN("8880"), "e2a873483052a4416f65c422b3c7bd853cff765cb652cd728890f0715269e50b#DdzFFzCqrhsh8ggyL4ZgzzNN4NMRwxgqWDf66BpadzH7yNho1bndxsfRszSH4kjXzBn5fw9S5mYBa5Ca8KKWkPP1R1qdhQinevLzctvA", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await instance.buyPreSaleTokens(accounts[14], web3.utils.toBN("20689640000000000000000"), web3.utils.toBN("8880"), "0xf17a3120034dde9d9647105c94f13c7e87d3157a1484fa50d70d6f700e5f9d4e", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.buyPreSaleTokens(accounts[122], web3.utils.toBN("4449960000000000000000"), web3.utils.toBN("8880"), "0xbafa1c2e3f10e5e51e1445c5fdebc03d8b40b0fbb2215fb441e20e150391d6e7", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.buyPreSaleTokens(accounts[15], web3.utils.toBN("20219850000000000000000"), web3.utils.toBN("8880"), "0xc9f34ec42108d9b51cfcc56903b6b89f2d7144932be9ebbb4e38df9bad4f27d5", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.buyPreSaleTokens(accounts[256], web3.utils.toBN("48949560000000000000000"), web3.utils.toBN("8880"), "0xac37b837c7d79d2080772af69d9494a4d77dd42e9d2320cde83db8c839e97958", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.buyPreSaleTokens(accounts[30], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0x706312f4737662c1e6a05021594026d297ed563d18aed0ef0eac1d05dd85d00a", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.buyPreSaleTokens(accounts[6], web3.utils.toBN("150836410000000000000000"), web3.utils.toBN("8880"), "2846A91C5B23E0456A6CD729229D0BB1FD97D5D856427362C4DCA1191ED11BDA#1Kyqq6V5sLaaWttpHTayUM6pmTb1HZvbFZ", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.buyPreSaleTokens(accounts[93], web3.utils.toBN("49444000000000000000000"), web3.utils.toBN("8880"), "0x0c4da8c82fdfd5f56a77cadba0cdb3d9af87469288a150f0ec222c2d8bc96549", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.buyPreSaleTokens(accounts[10], web3.utils.toBN("3870890000000000000000"), web3.utils.toBN("8880"), "0xa750c6e3b62cbe828dfc2454634ec9bf26c22e62f15faeedc17021e935345bb6", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.buyPreSaleTokens(accounts[48], web3.utils.toBN("56247490000000000000000"), web3.utils.toBN("8880"), "0xafdd0b1131ec44f0ab05d60d8490829254b6d0bc869c0710ecf5fd5415bd31ee", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await instance.buyPreSaleTokens(accounts[237], web3.utils.toBN("14833200000000000000000"), web3.utils.toBN("8880"), "0x8f553932af9ebab82e1b4b0572b46689f8bbce0c04d56e292c6471704e88c84b", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await instance.buyPreSaleTokens(accounts[237], web3.utils.toBN("24722000000000000000000"), web3.utils.toBN("8880"), "0x0ce32159b7b3fb66d4a2d30eaac610fb522b76b32eac08d59ebc51fd56626129", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await instance.buyPreSaleTokens(accounts[202], web3.utils.toBN("30951940000000000000000"), web3.utils.toBN("8880"), "0x98c98519676bf8a69052542f05f89b6431052701d0a42d9c5a02f208557674e3", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await instance.buyPreSaleTokens(accounts[64], web3.utils.toBN("19777600000000000000000"), web3.utils.toBN("8880"), "0xfb65f64b37cc415234c6693a926351c5fcf6c8a74c9b718359501c5323a96af4", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await instance.buyPreSaleTokens(accounts[182], web3.utils.toBN("26699760000000000000000"), web3.utils.toBN("8880"), "0x35da5436f57ff99b5dcb9ba0da3e68ca0e5c11a7f1451ed83131c84ab01af513", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await instance.buyPreSaleTokens(accounts[237], web3.utils.toBN("21755360000000000000000"), web3.utils.toBN("8880"), "0x32aa3eb242e8a5d3ccbcb678827a2fe0eb13e0ab885e2390d399e2c90b486296", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await instance.buyPreSaleTokens(accounts[182], web3.utils.toBN("22744240000000000000000"), web3.utils.toBN("8880"), "0x18e19e721becde99c478c7dca044b005a6632785ff3387c07d6e9d14c1533da7", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await instance.buyPreSaleTokens(accounts[182], web3.utils.toBN("22744240000000000000000"), web3.utils.toBN("8880"), "0x24d409d89dd194a6318a7d7b0fa2084408761edfdc6a9aa59932638482c8df29", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("19")
    console.log(result[19])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[20] = await instance.buyPreSaleTokens(accounts[182], web3.utils.toBN("76143760000000000000000"), web3.utils.toBN("8880"), "0xab4671636c2b3e58f3c054118d796bcd8acead135c14a207978d91835d856f71", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("20")
    console.log(result[20])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[21] = await instance.buyPreSaleTokens(accounts[77], web3.utils.toBN("50000000000000000000000"), web3.utils.toBN("8880"), "0xc1ff1de30fcbea8c759c0b81dc9fd700e275bc3d97feaf1a6003800a3dcadb9c", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("21")
    console.log(result[21])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[22] = await instance.buyPreSaleTokens(accounts[149], web3.utils.toBN("293029870000000000000000"), web3.utils.toBN("8880"), "CBAED9BF52BE7DA2D67E79799F72D548695DAF871ADE0AC2A1AA2480036D2C1E#1H6i6wL5ij2HRYGFTy9nf9rs9Pkiwwqtb9", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("22")
    console.log(result[22])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[23] = await instance.buyPreSaleTokens(accounts[97], web3.utils.toBN("19777600000000000000000"), web3.utils.toBN("8880"), "0x53f109c425fa450e766534aae82e7852882c30265ca0f6ccb79e319ccd409967", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("23")
    console.log(result[23])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[24] = await instance.buyPreSaleTokens(accounts[227], web3.utils.toBN("2205119330000000000000000"), web3.utils.toBN("8880"), "0xc77895c0e6a8228380e4173bf4c65320227d4cf8e6808d6251a5701bb2d71708", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("24")
    console.log(result[24])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[25] = await instance.buyPreSaleTokens(accounts[199], web3.utils.toBN("988880000000000000000000"), web3.utils.toBN("8880"), "0xd52658a99fa5b4a0ec6a146da91d60a545e94b894eb22aa33261acd34e0d034e", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("25")
    console.log(result[25])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[26] = await instance.buyPreSaleTokens(accounts[34], web3.utils.toBN("19777600000000000000000"), web3.utils.toBN("8880"), "0x72b7ff7f93a2c1180918f8f07f5c1e1f7274fa98c7d87d1dda8a75433b2cf8b0", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("26")
    console.log(result[26])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[27] = await instance.buyPreSaleTokens(accounts[148], web3.utils.toBN("9196580000000000000000"), web3.utils.toBN("8880"), "0x46ad92cd96b616fcf14bae9afa78c1c7bbbd3711b9017ae3928ef3d7429b303a", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("27")
    console.log(result[27])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[28] = await instance.buyPreSaleTokens(accounts[225], web3.utils.toBN("120050030000000000000000"), web3.utils.toBN("8880"), "86D9522649BFBD88D0B1F5C4793DF4F495981E94D56B02CB5C4AEF9B688B6B23#1NgU5BV4nXmtEgpBXoFG2S7MNrLLato6fk", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("28")
    console.log(result[28])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[29] = await instance.buyPreSaleTokens(accounts[204], web3.utils.toBN("9861470000000000000000"), web3.utils.toBN("8880"), "0xac80471f8bab66287924e7f8838c4a8a7b237f8480fec4fb30dfcea58c46fdca", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("29")
    console.log(result[29])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[30] = await instance.buyPreSaleTokens(accounts[253], web3.utils.toBN("5140860000000000000000"), web3.utils.toBN("8880"), "0441807930348CEB9818DAC761FF074704EABB0C7FCD8689A7B66F8B78E1EB67#1AQt4XKaHXLg2fPUzm3TzYNbMfLbjF4LMV", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("30")
    console.log(result[30])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[31] = await instance.buyPreSaleTokens(accounts[253], web3.utils.toBN("16390770000000000000000"), web3.utils.toBN("8880"), "0xc95987242692751f51e386f5012ad96dbb311be91d706020836e6e89b70e24ac", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("31")
    console.log(result[31])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[32] = await instance.buyPreSaleTokens(accounts[57], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x9fd88af41acf25f69027f7562fa8e21e1994d50d0d1be0d81002e0bfbe151e7f", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("32")
    console.log(result[32])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[33] = await instance.buyPreSaleTokens(accounts[253], web3.utils.toBN("3286950000000000000000"), web3.utils.toBN("8880"), "9C68AC630BCDF57BC344AACFEB40756373EE1A121786641CEAD1CACA95AB892C#1AQt4XKaHXLg2fPUzm3TzYNbMfLbjF4LMV", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("33")
    console.log(result[33])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[34] = await instance.buyPreSaleTokens(accounts[155], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0xd402726792b4c925b6eff5ea923475311071415b25d0c5e8ea710b761cbb5953", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("34")
    console.log(result[34])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[35] = await instance.buyPreSaleTokens(accounts[137], web3.utils.toBN("4944400000000000000000"), web3.utils.toBN("8880"), "0xe0d915304b03438051dcbe7d508b3cd12a302101df750431b0cbe3f5f8d874e5", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("35")
    console.log(result[35])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[36] = await instance.buyPreSaleTokens(accounts[69], web3.utils.toBN("1993580000000000000000"), web3.utils.toBN("8880"), "0x46db55528ffd751163469fd906be1cb4930b644375686c5d158b3cf83e22743b", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("36")
    console.log(result[36])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[37] = await instance.buyPreSaleTokens(accounts[65], web3.utils.toBN("39555200000000000000000"), web3.utils.toBN("8880"), "0xfc32afffbb055647efd696465fbbea673e26ebb8f27b7a5c209d5bbb11abefef", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("37")
    console.log(result[37])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[38] = await instance.buyPreSaleTokens(accounts[12], web3.utils.toBN("12084110000000000000000"), web3.utils.toBN("8880"), "F2590CBCF20D9C98B2C245478940BC65708DBA68C836DB33B21097409AF57B48#15LNfJRy3dQp44RVXZ1WbF1j6c1SL19xiJ", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("38")
    console.log(result[38])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[39] = await instance.buyPreSaleTokens(accounts[84], web3.utils.toBN("664873470000000000000000"), web3.utils.toBN("8880"), "DC0F92D311C811BCF8FA0D62EA2F3D7C10BC5CFB72218F7599664F336B1E57F3#135cvqnWPJYCAKC5DnHQBFS2V5rd6sYff3", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("39")
    console.log(result[39])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[40] = await instance.buyPreSaleTokens(accounts[50], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x771b92efde2c257b505480885f56b366d71c40bc7164c044bab7df7781cf3984", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("40")
    console.log(result[40])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[41] = await instance.buyPreSaleTokens(accounts[155], web3.utils.toBN("395552000000000000000000"), web3.utils.toBN("8880"), "0x3e401fb3ed8eec81465cfdd4f06ce647ce96bcc4b95c978a204750505d8e952a", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("41")
    console.log(result[41])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[42] = await instance.buyPreSaleTokens(accounts[116], web3.utils.toBN("615753820000000000000000"), web3.utils.toBN("8880"), "C12521BB3F437D1DEE7AE7A2FE8A3A27DE5CC2F59BF147A140215171BDFFA78A#1NMnfkvghaKh8ZNAHQ7x1CrATdUbQXemjC", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("42")
    console.log(result[42])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[43] = await instance.buyPreSaleTokens(accounts[116], web3.utils.toBN("328110380000000000000000"), web3.utils.toBN("8880"), "060BB904ED24BF1FA4F5525D9EC844A37F5FB939D6D0B90267E75B9A5F4FFB73#1NMnfkvghaKh8ZNAHQ7x1CrATdUbQXemjC", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("43")
    console.log(result[43])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[44] = await instance.buyPreSaleTokens(accounts[116], web3.utils.toBN("282685190000000000000000"), web3.utils.toBN("8880"), "1E92B443FFEF58E4D39512FD6773C43415C863841A0CAF316F55C5C43245F8D1#1NMnfkvghaKh8ZNAHQ7x1CrATdUbQXemjC", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("44")
    console.log(result[44])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[45] = await instance.buyPreSaleTokens(accounts[16], web3.utils.toBN("11704190000000000000000"), web3.utils.toBN("8880"), "2303E491D50C31B548A96E5ACACB4DBFD9ECB6A06C705555A2447C33CA1FF27D#14v7JPbRFiosQAD9NabTX5cbBqEjRqDpW5", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("45")
    console.log(result[45])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[46] = await instance.buyPreSaleTokens(accounts[152], web3.utils.toBN("3362190000000000000000"), web3.utils.toBN("8880"), "0x7d76d5a4e75943b40aba2fa07f7c66de34975c0bda34e096b9e82ba5248347c2", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("46")
    console.log(result[46])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[47] = await instance.buyPreSaleTokens(accounts[103], web3.utils.toBN("24722000000000000000000"), web3.utils.toBN("8880"), "0x5e41c069bfbbd7414a2156d0f72dea2f86ba2178e94a1b48c3de9ebd038fcf5a", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("47")
    console.log(result[47])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[48] = await instance.buyPreSaleTokens(accounts[167], web3.utils.toBN("9888800000000000000000"), web3.utils.toBN("8880"), "0x681f74901880cb66d5825a0d1add718ce9d4ad7ac533dadd360971bbf1e9e876", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("48")
    console.log(result[48])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[49] = await instance.buyPreSaleTokens(accounts[167], web3.utils.toBN("9888800000000000000000"), web3.utils.toBN("8880"), "0x57d3d6297a7772bf2f84795bfd2de1a2322971dcfcfafbc0fde3e1e5632e8f37", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("49")
    console.log(result[49])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[50] = await instance.buyPreSaleTokens(accounts[116], web3.utils.toBN("6681210000000000000000"), web3.utils.toBN("8880"), "9E00025DB8964199DEEDC2F84A66273FDAEBDED024CC97AECC870DA3FBDFD3FC#1NMnfkvghaKh8ZNAHQ7x1CrATdUbQXemjC", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("50")
    console.log(result[50])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[51] = await instance.buyPreSaleTokens(accounts[151], web3.utils.toBN("113918980000000000000000"), web3.utils.toBN("8880"), "0x436f60af601d04d18e1135968a1db8ad2e2820540ddaa711a57fe99a788eea90", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("51")
    console.log(result[51])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[52] = await instance.buyPreSaleTokens(accounts[111], web3.utils.toBN("621541790000000000000000"), web3.utils.toBN("8880"), "5E77B89030FF5FC113466E2F8CB262C3E4FEB42C6563D469A15B6DCE004F3ECF#1CWEDqBrdQCfUt9xsThMa6kdRYQ1L4tAkB", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("52")
    console.log(result[52])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[53] = await instance.buyPreSaleTokens(accounts[55], web3.utils.toBN("52273680000000000000000"), web3.utils.toBN("8880"), "0x070a5c60cab5a4ba38215440c761c3971b85a7925374178a929117ede9847478", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("53")
    console.log(result[53])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[54] = await instance.buyPreSaleTokens(accounts[24], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0xde61194009454896a4a328f3dbbf591c7662d11b0e81035f635a837f1b508032", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("54")
    console.log(result[54])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[55] = await instance.buyPreSaleTokens(accounts[127], web3.utils.toBN("4351070000000000000000"), web3.utils.toBN("8880"), "0x963621043110aec63a589c0301166e2801ee4eef4f8589f32e0a99229dc0ed28", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("55")
    console.log(result[55])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[56] = await instance.buyPreSaleTokens(accounts[190], web3.utils.toBN("9888800000000000000000"), web3.utils.toBN("8880"), "0x2907cc90579888457e53cd6a7f74397954975097d3c25e1b5cc7c2b3bc8e904b", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("56")
    console.log(result[56])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[57] = await instance.buyPreSaleTokens(accounts[60], web3.utils.toBN("679676600000000000000000"), web3.utils.toBN("8880"), "2867F15799A9D9CF438FDFD1ED5C198796C7DD3E62C68FE819C13B82B3322F02#1BCTCYxnHFdZGzN1dMeDfcG1cGnfU81Kta", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("57")
    console.log(result[57])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[58] = await instance.buyPreSaleTokens(accounts[111], web3.utils.toBN("514382150000000000000000"), web3.utils.toBN("8880"), "742566DC5CA147981EBD2F099A438BB75E95017CD590D496054578C8A4ED92A6#1CWEDqBrdQCfUt9xsThMa6kdRYQ1L4tAkB", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("58")
    console.log(result[58])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[59] = await instance.buyPreSaleTokens(accounts[212], web3.utils.toBN("227442400000000000000000"), web3.utils.toBN("8880"), "0x797cb316627bf691963b578ca37b376f06bb33810cf4a70708e822564d17dfbd", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("59")
    console.log(result[59])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[60] = await instance.buyPreSaleTokens(accounts[131], web3.utils.toBN("124560000000000000000"), web3.utils.toBN("8880"), "0xba325d903efde9e30b2a557e0040e7f3770bb290a2161b1684db99cf3feb4d39", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("60")
    console.log(result[60])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[61] = await instance.buyPreSaleTokens(accounts[100], web3.utils.toBN("21488360000000000000000"), web3.utils.toBN("8880"), "0x0ef3c7316b13560a7eedafd7fbbb179e8d09c43749efad71dd1e46255579f32e", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("61")
    console.log(result[61])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[62] = await instance.buyPreSaleTokens(accounts[187], web3.utils.toBN("30655280000000000000000"), web3.utils.toBN("8880"), "0xd6bbdeef75c755dc9cb3decf9cbbbdadda0107279792f366621984e41c90f1b5", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("62")
    console.log(result[62])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[63] = await instance.buyPreSaleTokens(accounts[187], web3.utils.toBN("30655280000000000000000"), web3.utils.toBN("8880"), "0x7a5c3cd1a18e2f97fce4497340661e9f0a4e9dc3228546488536e5e9c4cc2e0e", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("63")
    console.log(result[63])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[64] = await instance.buyPreSaleTokens(accounts[80], web3.utils.toBN("8899920000000000000000"), web3.utils.toBN("8880"), "0x318df25857f49c256f4357b34f287f61e0082e5bd46bdb790d2e0c9a35861334", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("64")
    console.log(result[64])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[65] = await instance.buyPreSaleTokens(accounts[192], web3.utils.toBN("1977760000000000000000"), web3.utils.toBN("8880"), "0xb5c47cba341a85e932599ac3b757cf31f448b3fd4c141e503964fda58940c67d", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("65")
    console.log(result[65])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[66] = await instance.buyPreSaleTokens(accounts[216], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x7b685bf1e489082c4b76dc2b72b232c5b99cadf41489d785b00375b08c666428", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("66")
    console.log(result[66])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[67] = await instance.buyPreSaleTokens(accounts[71], web3.utils.toBN("25893820000000000000000"), web3.utils.toBN("8880"), "ae924008f94cb9a67f701ce1d657f7c5f8f2ef72eb2c6591e063ca4a04f08a57#DdzFFzCqrhse7XWk8eFPgsDv72ehcjocLnqVZwTvDQPwns9VZG44v2GGSMFjSwUtyPpc73JLN8gAW6RCXkWyNuyu4NnrvHQ4uvXknBYw", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("67")
    console.log(result[67])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[68] = await instance.buyPreSaleTokens(accounts[164], web3.utils.toBN("988880000000000000000"), web3.utils.toBN("8880"), "0x2537310c9bad713063e73968fbcf8e5339855e7555a9af80c556cb33f31d0c2e", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("68")
    console.log(result[68])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[69] = await instance.buyPreSaleTokens(accounts[146], web3.utils.toBN("276886400000000000000000"), web3.utils.toBN("8880"), "0x87c29ca0af7cf4d5e66255ede207fd625d5abfc8211911e133c73da88ed7a211", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("69")
    console.log(result[69])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[70] = await instance.buyPreSaleTokens(accounts[27], web3.utils.toBN("8214540000000000000000"), web3.utils.toBN("8880"), "9b0a61619943fee39272de54df54bd21811da757ba175f778f3f8097f16c7aaa#DdzFFzCqrhskgdSKx1MZJ1yi9qAB1wonmN4BGRtwbgXMma1FASTDJZkDCNFyZe1MXrH5nHGEzBBcKU1D6A4eDdB6psAKMKf2aAWTqEfR", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("70")
    console.log(result[70])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[71] = await instance.buyPreSaleTokens(accounts[146], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x9732eeb45463e2e75795b5d1f5f0a6e3642941a966ec9d63e587fcd0a83f77aa", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("71")
    console.log(result[71])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[72] = await instance.buyPreSaleTokens(accounts[154], web3.utils.toBN("1483320000000000000000"), web3.utils.toBN("8880"), "0xfae3898bcacd6ae18ae54155b66551fbabecb7c799ad26db68f4053f9f13e666", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("72")
    console.log(result[72])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[73] = await instance.buyPreSaleTokens(accounts[38], web3.utils.toBN("2373310000000000000000"), web3.utils.toBN("8880"), "0xcf7bbbb493451f9bc812235d04849894cbcbb105e5b89adf107a28c0f66fd58c", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("73")
    console.log(result[73])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[74] = await instance.buyPreSaleTokens(accounts[259], web3.utils.toBN("50351050000000000000000"), web3.utils.toBN("8880"), "0x7c8a28b2540c0321bbdab410ab87e8df48d69b13cd6666acc2b64d03d8eb5996", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("74")
    console.log(result[74])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[75] = await instance.buyPreSaleTokens(accounts[7], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0x63005d66f645267deea933b0af921bfc96f3df96f73af3136cd4a58cf1348dbe", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("75")
    console.log(result[75])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[76] = await instance.buyPreSaleTokens(accounts[241], web3.utils.toBN("99827380000000000000000"), web3.utils.toBN("8880"), "f62fee5c075c86451c70570a9ba28be3f5e6d9146dba1c5edb61ea59af8e1c0b#DdzFFzCqrhswvMfDuaDnQ5Au3CFpiN2vLNGSKjhe6k2Hr9CA729pijNr7DNPQVytR2XUfbMeJgLvB2e1CrVJYi8UcSrv1hrR1rPgiXV2", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("76")
    console.log(result[76])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[77] = await instance.buyPreSaleTokens(accounts[124], web3.utils.toBN("179445020000000000000000"), web3.utils.toBN("8880"), "C9156BD8831520572740E67154A2AFCB7A1DF4E80DA029DF5FE7AF4E0568CB55#1JnDv6i2sMH9eVqSJpvNs1McnALjimyCTk", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("77")
    console.log(result[77])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[78] = await instance.buyPreSaleTokens(accounts[193], web3.utils.toBN("109963460000000000000000"), web3.utils.toBN("8880"), "F3A8A7B97D66C13BF04DA2761D9C97FE726EA0488436BD981D7FA038E124B39D#1ZYhhmQzfgYSew3gjsx4PN63wr5U3n8e1", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("78")
    console.log(result[78])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[79] = await instance.buyPreSaleTokens(accounts[242], web3.utils.toBN("1611840000000000000000"), web3.utils.toBN("8880"), "0x94854da8a39b2a8d45186f337ae4b41f8859b0c528a5a47b00526667f883adcc", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("79")
    console.log(result[79])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[80] = await instance.buyPreSaleTokens(accounts[233], web3.utils.toBN("5078290000000000000000"), web3.utils.toBN("8880"), "0x9e9263674074aee2afc05cbfacb3d2a035a3369f6545b7ba80c5b8f8b544a2c2", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("80")
    console.log(result[80])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[81] = await instance.buyPreSaleTokens(accounts[169], web3.utils.toBN("125696510000000000000000"), web3.utils.toBN("8880"), "748608c72b97e50b73d1c2493a197d1dda3fd28104878acf1a0c33c209420ade#DdzFFzCqrhso78mkHwKYW8Lrz6H1qLig1c8GosFvo6n3XeP4F7aVyJNEGFpGQY5sKXnJVqkKA9Uc465r8nsBrc33k7iaJRDk34JrTL3m", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("81")
    console.log(result[81])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[82] = await instance.buyPreSaleTokens(accounts[22], web3.utils.toBN("15961090000000000000000"), web3.utils.toBN("8880"), "3FBAE7224630987B7A3B9EAF5E7C0449D6EC9681FF461B49AEF75283E6158328#1NWbBVkmVRYezRXNmpnsg8ZbAUgs1cUDch", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("82")
    console.log(result[82])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[83] = await instance.buyPreSaleTokens(accounts[73], web3.utils.toBN("177009520000000000000000"), web3.utils.toBN("8880"), "0x7e462baa1eb4aceebb8860ee02d2ce6638e1e054c6742d71ca3139203e01a5bb", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("83")
    console.log(result[83])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[84] = await instance.buyPreSaleTokens(accounts[270], web3.utils.toBN("58343920000000000000000"), web3.utils.toBN("8880"), "0xbe1f326dfe02750a6b71dac961417ee71a30cf8ed437359b91aad2f53bd7880f", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("84")
    console.log(result[84])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[85] = await instance.buyPreSaleTokens(accounts[108], web3.utils.toBN("186097330000000000000000"), web3.utils.toBN("8880"), "4068acbd6028c8cc720ce88e69a556070a033fed299811e9bcd6d30ef9100a99#DdzFFzCqrhswYcGm8JEdiD9rQu14Y5H66SZwViLBTCqztY43VHHika8enkcUNyf9acZDz6eDJdB5WPKtshaDsyNWZHpNzuVBCdG1Q9vY", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("85")
    console.log(result[85])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[86] = await instance.buyPreSaleTokens(accounts[195], web3.utils.toBN("7500850000000000000000"), web3.utils.toBN("8880"), "7A08578093CA9E11C1CA890ED768D8C93162B686D12ED862F7C4ED8952179BFA#1EABiMG5BtUzPV3uztqwKiUaXHpX7wF7Y5", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("86")
    console.log(result[86])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[87] = await instance.buyPreSaleTokens(accounts[1], web3.utils.toBN("7911040000000000000000"), web3.utils.toBN("8880"), "0xd34d85740ae96d156589e7fcd42c22e8edcf97bebff789b4d1bfac5a76b48030", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("87")
    console.log(result[87])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[88] = await instance.buyPreSaleTokens(accounts[238], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0xe84e81125da200582323c583727f09f51ad59ce413891eb11ae4c390986ba632", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("88")
    console.log(result[88])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[89] = await instance.buyPreSaleTokens(accounts[267], web3.utils.toBN("13745430000000000000000"), web3.utils.toBN("8880"), "0xe099f8c4884347031038dc42f4342584f21f974c40baf6ef1f32c61c34e06981", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("89")
    console.log(result[89])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[90] = await instance.buyPreSaleTokens(accounts[165], web3.utils.toBN("296169560000000000000000"), web3.utils.toBN("8880"), "93882B9DD58555E8158B47A5CA704A21D53CB0FC95873A69AB192C32259CBEE4#16e3ucjXsGZTknDxofL4cf5rVMCoHrpWSM", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("90")
    console.log(result[90])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[91] = await instance.buyPreSaleTokens(accounts[11], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0xc64d4a3bbde98cee3ba3f7eef61f7ec90ebc2b1fe2a8eb7eff997fafd63e3934", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("91")
    console.log(result[91])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[92] = await instance.buyPreSaleTokens(accounts[160], web3.utils.toBN("4232410000000000000000"), web3.utils.toBN("8880"), "0x0468d131ce7d31dc42a315ec5bc62815b467c6986c0632ac496263b572f19878", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("92")
    console.log(result[92])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[93] = await instance.buyPreSaleTokens(accounts[220], web3.utils.toBN("11472990000000000000000"), web3.utils.toBN("8880"), "82d8286b833dd9d345d7a87d989569749e79f4daf6c1a696fad9cd79d95a72bc#DdzFFzCqrhsn9LsH6zjBy7SHdKXXuS4MRRWaWq2raYQdjAE7ytf6LsjHcrrzzAe4NHJyT84s1VjKfDSVHVB8J6mFseeS77cJxupcN95L", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("93")
    console.log(result[93])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[94] = await instance.buyPreSaleTokens(accounts[114], web3.utils.toBN("392189810000000000000000"), web3.utils.toBN("8880"), "0x4253533bd96e20eb9ff6b607ea9e01c09430cc66e01e2edbbac6c9e5b728ddec", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("94")
    console.log(result[94])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[95] = await instance.buyPreSaleTokens(accounts[240], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x92ae2e7fc2ac1996b910c193943bdca0fd5c3dbfd14c76ef0c881b46ea87c8d9", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("95")
    console.log(result[95])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[96] = await instance.buyPreSaleTokens(accounts[248], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0xe2bdc4f81ec754c1da04351b63010f80bade918f2f0ec37f4a1d3b4e05665a64", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("96")
    console.log(result[96])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[97] = await instance.buyPreSaleTokens(accounts[153], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0x39bbf458d49885073b05f15d1c9f762027bd9423456c26f9303e6d75e62f8aa7", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("97")
    console.log(result[97])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[98] = await instance.buyPreSaleTokens(accounts[59], web3.utils.toBN("9888800000000000000000"), web3.utils.toBN("8880"), "0x1b80e8a0a91e8a019b9e46ed3f7b2e2ef0e6ee0ea9d50ba84baa34915fd63ff0", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("98")
    console.log(result[98])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[99] = await instance.buyPreSaleTokens(accounts[138], web3.utils.toBN("296664000000000000000000"), web3.utils.toBN("8880"), "0x8a1c1efb584698f398f50d11673433b1e6a5c6e22c900bdc1c0c0ea041c6edcd", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("99")
    console.log(result[99])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[100] = await instance.buyPreSaleTokens(accounts[138], web3.utils.toBN("494440000000000000000000"), web3.utils.toBN("8880"), "0xb7f4920fdfd69e0043ec22df213b41ea26a1cf34f8a59cbd7a615c62536f8018", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("100")
    console.log(result[100])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[101] = await instance.buyPreSaleTokens(accounts[72], web3.utils.toBN("2427290000000000000000"), web3.utils.toBN("8880"), "5624422d2533a6fc4aaeff7c89f90ad97837a22d4bc3941fa4f1c80b9ffe21d3#DdzFFzCqrhsxicVBAu2hsMxyACXQbhsph9JycdPPxZREW3r5kxKc1Q94ANamvbWMGvAvA5rKnBjvSn9r7HzUAUNvRTUZDjNBcTYKqZt6", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("101")
    console.log(result[101])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[102] = await instance.buyPreSaleTokens(accounts[161], web3.utils.toBN("1950693710000000000000000"), web3.utils.toBN("8880"), "2A150E8EE4B4EE54FE93D42BDE4E30138F361745B65DB4E68A3D5D30DFCF22D2#1BMdRZEiN8QzPzbGziyn2wmAQdQCS1Staf", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("102")
    console.log(result[102])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[103] = await instance.buyPreSaleTokens(accounts[13], web3.utils.toBN("50432880000000000000000"), web3.utils.toBN("8880"), "0x9bda3ab1b6d807f122a7a7ca67716e1c1054b76817f7a38c95660cd59860ce5d", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("103")
    console.log(result[103])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[104] = await instance.buyPreSaleTokens(accounts[138], web3.utils.toBN("988880000000000000000000"), web3.utils.toBN("8880"), "0xce40cab7857eca57798f430d924ec201a75a7d616c36a089eb901e58c69ea55d", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("104")
    console.log(result[104])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[105] = await instance.buyPreSaleTokens(accounts[67], web3.utils.toBN("24634780000000000000000"), web3.utils.toBN("8880"), "0x51e2dd376bbd423049a9eaf82b19525d9f9cca8d8083df68f8fcafe512991973", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("105")
    console.log(result[105])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[106] = await instance.buyPreSaleTokens(accounts[82], web3.utils.toBN("1659224150000000000000000"), web3.utils.toBN("8880"), "952FF7472AA7D07B80BDBE565186C1CB02B27357BBC92ED686CC709BBEE2089A#1t3DXAxATB5NwsnQZQP5P5CzfBcXmrgWY", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("106")
    console.log(result[106])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[107] = await instance.buyPreSaleTokens(accounts[246], web3.utils.toBN("1977760000000000000000"), web3.utils.toBN("8880"), "0x3d11bfb99916741c80e99ee6c3803768be971e6661dbcba5b30abfa61ffd85bd", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("107")
    console.log(result[107])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[108] = await instance.buyPreSaleTokens(accounts[85], web3.utils.toBN("2422760000000000000000"), web3.utils.toBN("8880"), "0x43dd4da5408eaf4865590d2b99d7dbee41fa4ea9889d3507370433a9353dd589", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("108")
    console.log(result[108])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[109] = await instance.buyPreSaleTokens(accounts[99], web3.utils.toBN("34610800000000000000000"), web3.utils.toBN("8880"), "0x22595ab10280034c7c06e7634a1e420243f2777b318bdc99a84230587ebba855", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("109")
    console.log(result[109])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[110] = await instance.buyPreSaleTokens(accounts[208], web3.utils.toBN("73494550000000000000000"), web3.utils.toBN("8880"), "21696eee5c7bf5b65ac1fcf03ea76175a54baa17868292de0e3af08dfff965f9#DdzFFzCqrht2WNpUYKVDcGDjGbyUjBg9PQVMhTfupj3eNeHWtDuqSAcbw3cAEuzc4MfwUXoYGRe4Gjq9qUYj1CptJPtwczXDSDDmeSyV", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("110")
    console.log(result[110])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[111] = await instance.buyPreSaleTokens(accounts[173], web3.utils.toBN("508970960000000000000000"), web3.utils.toBN("8880"), "03109d4d312a14c9d82b33d022465c8c9ade172d022a7431136ca6402da08151#DdzFFzCqrhseCir47FA1wjKMhSp3RcHurtwk7NyS9z2zU7yoRk61iixbAZ1VtPzSCkLeHAZyM6sWc8uqmg4MXLZBRaH1qbtSDmFBuyrz", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("111")
    console.log(result[111])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[112] = await instance.buyPreSaleTokens(accounts[198], web3.utils.toBN("99876880000000000000000"), web3.utils.toBN("8880"), "0x1c8dae42b9a4ad705796b3fd27b229b29243dd3c13ae920185f1332e9843743f", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("112")
    console.log(result[112])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[113] = await instance.buyPreSaleTokens(accounts[210], web3.utils.toBN("395552000000000000000000"), web3.utils.toBN("8880"), "0xdac213fce20cd8e963e3d6d8b28b9c3ba42c386793d644813796320791800a39", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("113")
    console.log(result[113])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[114] = await instance.buyPreSaleTokens(accounts[9], web3.utils.toBN("9888800000000000000000"), web3.utils.toBN("8880"), "0x234868e2104f310614c2a2c67504fceab14c976a6a9ddb67b1ab27076376b2df", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("114")
    console.log(result[114])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[115] = await instance.buyPreSaleTokens(accounts[177], web3.utils.toBN("109059620000000000000000"), web3.utils.toBN("8880"), "F13141A506BC66DCA78CB550C87E3AFF08F0B76E44372B6BC0B0BD01DCDCC276#1719mnCCVTeQ9TPJGWSZEn2Z6kCh16PZTP", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("115")
    console.log(result[115])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[116] = await instance.buyPreSaleTokens(accounts[119], web3.utils.toBN("35003390000000000000000"), web3.utils.toBN("8880"), "0xccc4cd1628a8804239f0f48a9d582e14fd5a4c075a9e39ad7b0ca56f0548b1a9", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("116")
    console.log(result[116])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[117] = await instance.buyPreSaleTokens(accounts[43], web3.utils.toBN("38764100000000000000000"), web3.utils.toBN("8880"), "4BE5A9901ADFFD165CB3827E51621EDDB6422495DE0B07BD05C3BF810CA36B45#1NdksZjwGKzVXHuCBMMfWAHhXR98MZGpkf", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("117")
    console.log(result[117])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[118] = await instance.buyPreSaleTokens(accounts[176], web3.utils.toBN("14552360000000000000000"), web3.utils.toBN("8880"), "0x4d8cf1cdb54f804bf3ca785d400fa93118ae59db9f3e2248596c7e6474503428", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("118")
    console.log(result[118])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[119] = await instance.buyPreSaleTokens(accounts[252], web3.utils.toBN("7317710000000000000000"), web3.utils.toBN("8880"), "0xa59bcff7ea7ea7d6930431d876532a1b4473b6a99bdd59e3b8159e1731139cb8", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("119")
    console.log(result[119])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[120] = await instance.buyPreSaleTokens(accounts[113], web3.utils.toBN("100371320000000000000000"), web3.utils.toBN("8880"), "0xd429ffb75191c98de8acf7e5b73557e00182d8f10a1d456e559bf9a751e3397a", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("120")
    console.log(result[120])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[121] = await instance.buyPreSaleTokens(accounts[163], web3.utils.toBN("6897440000000000000000"), web3.utils.toBN("8880"), "957B001337969F1A6CE9306946853B69D6147742EB1C6BF3487712460E9EE935#1NNe1mJoxKspUuephGHHwjzYNB3Nh3Qo5Q", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("121")
    console.log(result[121])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[122] = await instance.buyPreSaleTokens(accounts[19], web3.utils.toBN("692216000000000000000000"), web3.utils.toBN("8880"), "0xede7dda5585744f03694af091758684d4bd4f4a632360325f4e26d61947f45f2", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("122")
    console.log(result[122])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[123] = await instance.buyPreSaleTokens(accounts[173], web3.utils.toBN("470263860000000000000000"), web3.utils.toBN("8880"), "fb74f291a4a527f054521c3603f8b280a22fbd907742bbf783f2cba4804b8913#DdzFFzCqrhseCir47FA1wjKMhSp3RcHurtwk7NyS9z2zU7yoRk61iixbAZ1VtPzSCkLeHAZyM6sWc8uqmg4MXLZBRaH1qbtSDmFBuyrz", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("123")
    console.log(result[123])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[124] = await instance.buyPreSaleTokens(accounts[106], web3.utils.toBN("1696720000000000000000"), web3.utils.toBN("8880"), "0x3ba7e138dbe5d24a622da12dc9c41de3c0d77a9a8f431771132321f90e31a860", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("124")
    console.log(result[124])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[125] = await instance.buyPreSaleTokens(accounts[117], web3.utils.toBN("43906270000000000000000"), web3.utils.toBN("8880"), "0x81e5b098917b13dfb8eecdaae62d594d5b0305e4cc044bf92461132e70dea8c3", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("125")
    console.log(result[125])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[126] = await instance.buyPreSaleTokens(accounts[47], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0xc3c5a4c3ddf5cfb4dedc4f7f145b454ffbe8d5cdcc8d484e943c2daab1648903", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("126")
    console.log(result[126])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[127] = await instance.buyPreSaleTokens(accounts[140], web3.utils.toBN("30816130000000000000000"), web3.utils.toBN("8880"), "B9A74C29707CEF2787C7AC5DEFD92361FC3F2774CE31B3259A43E0FFA7CF5C9D#16PexwDmVeem9iuitzqChJ7hLD3ALX4xCq", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("127")
    console.log(result[127])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[128] = await instance.buyPreSaleTokens(accounts[188], web3.utils.toBN("306552800000000000000000"), web3.utils.toBN("8880"), "0xa7934aef77156a6e3069462f04c5d21ee1ba0253dd97c04c155307cf3b37c61c", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("128")
    console.log(result[128])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[129] = await instance.buyPreSaleTokens(accounts[78], web3.utils.toBN("13844320000000000000000"), web3.utils.toBN("8880"), "0xdeddd229050d7e294d611626488219770565d7a45e7b14af529042d6ae5ce4d3", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("129")
    console.log(result[129])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[130] = await instance.buyPreSaleTokens(accounts[47], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0x6ea6a5f5166d1376e72321201b849a782cdd2d07d791137dfda97656bbb5c295", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("130")
    console.log(result[130])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[131] = await instance.buyPreSaleTokens(accounts[96], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0x786095e09f10c6bd6108b66aa1a3f6e0850fa8803d492b21972fbdd0c6238bc6", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("131")
    console.log(result[131])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[132] = await instance.buyPreSaleTokens(accounts[188], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0x3fd596fe3f6dafdf690b6cb0a4f7bd4f8d882d175f555c52803fef0ccb521c98", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("132")
    console.log(result[132])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[133] = await instance.buyPreSaleTokens(accounts[58], web3.utils.toBN("988880000000000000000000"), web3.utils.toBN("8880"), "0xc5a511b6085cdf0cd94dc22c32350b5198f147031abc4ef500268c5ef2c9af24", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("133")
    console.log(result[133])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[134] = await instance.buyPreSaleTokens(accounts[2], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0xe9a1736fd30cf1eeb9c249d52db45b1ad9103054ba53e97a306225e592dbf66f", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("134")
    console.log(result[134])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[135] = await instance.buyPreSaleTokens(accounts[40], web3.utils.toBN("3955520000000000000000000"), web3.utils.toBN("8880"), "0xdd4b3ee0dc8ebdebf201c557929dee6f1eac4830cdcf3073aff3760fce0b754e", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("135")
    console.log(result[135])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[136] = await instance.buyPreSaleTokens(accounts[205], web3.utils.toBN("3955520000000000000000000"), web3.utils.toBN("8880"), "0x19cbe438fa1a26cce6787f82c7556912f8fd8dce6e74832f31e8d4d496cdb112", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("136")
    console.log(result[136])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[137] = await instance.buyPreSaleTokens(accounts[124], web3.utils.toBN("173288760000000000000000"), web3.utils.toBN("8880"), "0x0c3b2c3af999d8fc6e3eb459875ba0cde4613dbc891b2df564a9cb90e6dbd2d8", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("137")
    console.log(result[137])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[138] = await instance.buyPreSaleTokens(accounts[66], web3.utils.toBN("494440000000000000000000"), web3.utils.toBN("8880"), "0x4290fdc8f5f863f55ccfc8ab94b133fc31da616e39c8ca291349a407a9dec37c", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("138")
    console.log(result[138])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[139] = await instance.buyPreSaleTokens(accounts[49], web3.utils.toBN("2175540000000000000000"), web3.utils.toBN("8880"), "0x1a70b1ab53487359e2a75b677e041e002eb0e9e18d7cc7d556beda231df597f6", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("139")
    console.log(result[139])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[140] = await instance.buyPreSaleTokens(accounts[251], web3.utils.toBN("296664000000000000000000"), web3.utils.toBN("8880"), "0x151795faf728e0ec242de047b851984272082e917600f6abb83acf11bdb164f9", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("140")
    console.log(result[140])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[141] = await instance.buyPreSaleTokens(accounts[156], web3.utils.toBN("226170600000000000000000"), web3.utils.toBN("8880"), "0x6eb0a09dbffb264c2bd0dc66f651d560d0b6acd3f1d8639b42ff760fab4a86c2", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("141")
    console.log(result[141])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[142] = await instance.buyPreSaleTokens(accounts[134], web3.utils.toBN("3460091120000000000000000"), web3.utils.toBN("8880"), "0x4449c10848c6a564f2ac543fe5ed3e4a90461442ae4a28b849b3648e70471d5a", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("142")
    console.log(result[142])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[143] = await instance.buyPreSaleTokens(accounts[102], web3.utils.toBN("4398060000000000000000"), web3.utils.toBN("8880"), "0x4910797bafcf06c8a6781b532533460cacb5ff349ea20f19ff8f1fd1e42d016d", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("143")
    console.log(result[143])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[144] = await instance.buyPreSaleTokens(accounts[150], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0xe0f25e7a66fa8293c26e30f809846449d75e870bbdfa3a2996f9cf10d6610cfc", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("144")
    console.log(result[144])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[145] = await instance.buyPreSaleTokens(accounts[163], web3.utils.toBN("10271500000000000000000"), web3.utils.toBN("8880"), "CCEEAA094CCC1E0C04DCFA2CB9A5B0C03D3C46427DB5F2156E3D87644D2D8A61#1NNe1mJoxKspUuephGHHwjzYNB3Nh3Qo5Q", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("145")
    console.log(result[145])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[146] = await instance.buyPreSaleTokens(accounts[168], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x48bba9c76de76b98b746751b6b5dfc5dbb73fb4436b1435f1813306da71b0b8c", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("146")
    console.log(result[146])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[147] = await instance.buyPreSaleTokens(accounts[4], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0x8295a4c781924cb1bf92f2b1196ce197b5d6ed090501a83037e17cd5ef811fd0", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("147")
    console.log(result[147])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[148] = await instance.buyPreSaleTokens(accounts[232], web3.utils.toBN("8733790000000000000000"), web3.utils.toBN("8880"), "F344412FD367ACF02EE61882903AF2CE28ED457454B18B426017C79FE29E257E#1K1zaUR2bmt3sXH75SZKGHj5U2T4aqvQGp", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("148")
    console.log(result[148])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[149] = await instance.buyPreSaleTokens(accounts[239], web3.utils.toBN("118665600000000000000000"), web3.utils.toBN("8880"), "0x534c5f47334103aab05885e3c765309c6b5ef03222f1c6890700f5922f1a6b14", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("149")
    console.log(result[149])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[150] = await instance.buyPreSaleTokens(accounts[4], web3.utils.toBN("232451720000000000000000"), web3.utils.toBN("8880"), "0x74097f9cea1e93bf69bac54899b558750b4caa0e56f603cf660c047f0c1f628b", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("150")
    console.log(result[150])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[151] = await instance.buyPreSaleTokens(accounts[264], web3.utils.toBN("350798850000000000000000"), web3.utils.toBN("8880"), "867BC08DF5A09BC82861A48D2DC37452B0258246F78CF509C2A58CB54D2FADC3#12AMcnx25YCZA4NS91nwPTGpMY6JEyVqho", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("151")
    console.log(result[151])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[152] = await instance.buyPreSaleTokens(accounts[269], web3.utils.toBN("101854640000000000000000"), web3.utils.toBN("8880"), "0xaad90790d1ce6bcc3b6b21dad071a01b7202b77958e590a933cf8102d41b6d3f", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("152")
    console.log(result[152])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[153] = await instance.buyPreSaleTokens(accounts[80], web3.utils.toBN("97899120000000000000000"), web3.utils.toBN("8880"), "0x267cd01ef3a2cdf4d01a123d35f9f0bf9df5e7084c20e3130b667e6ab4042fc4", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("153")
    console.log(result[153])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[154] = await instance.buyPreSaleTokens(accounts[89], web3.utils.toBN("2764670000000000000000"), web3.utils.toBN("8880"), "64C9DBB7B42F4AF275D387FB6EC98E68FF0E940FDBF512DCE858866F53560BF5#17GXwyMgUfx5qGhRKPmevAL4SbNQBW1v3b", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("154")
    console.log(result[154])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[155] = await instance.buyPreSaleTokens(accounts[235], web3.utils.toBN("21340030000000000000000"), web3.utils.toBN("8880"), "0x3de304020a2bb4e3c57eb475587bd3f66dda547db7e78db4f05051ee72ae8c8d", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("155")
    console.log(result[155])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[156] = await instance.buyPreSaleTokens(accounts[45], web3.utils.toBN("106799040000000000000000"), web3.utils.toBN("8880"), "0xf16e5e7071bb25cfbb3f47c7a9fcebb38bfb2ccc279746a34f5ad426c0e67aee", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("156")
    console.log(result[156])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[157] = await instance.buyPreSaleTokens(accounts[5], web3.utils.toBN("451736350000000000000000"), web3.utils.toBN("8880"), "0x1c04275fe0b5dae6f6fd4a17efc0f77aca342e000cdb7a8a8160775530b9dcc3", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("157")
    console.log(result[157])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[158] = await instance.buyPreSaleTokens(accounts[45], web3.utils.toBN("99524070000000000000000"), web3.utils.toBN("8880"), "0x0d20b054ce2096f9a8948b92088871b0f9693a4d63ed6060bc7f5977f9a5aab9", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("158")
    console.log(result[158])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[159] = await instance.buyPreSaleTokens(accounts[92], web3.utils.toBN("4944400000000000000000"), web3.utils.toBN("8880"), "0x4bb41a3541e284d074e03866af422168da6a4bcd394ef46a265b1cd7b4037750", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("159")
    console.log(result[159])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[160] = await instance.buyPreSaleTokens(accounts[176], web3.utils.toBN("2712970000000000000000"), web3.utils.toBN("8880"), "0xed7ad43806234ac469e1bf087887a303104e17e21d1b9c3272ce0e2088eaf56b", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("160")
    console.log(result[160])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[161] = await instance.buyPreSaleTokens(accounts[215], web3.utils.toBN("719390420000000000000000"), web3.utils.toBN("8880"), "5E494A963CC685B7E8F1E15C7F7836AD5E7D2CE65F080A8B7C80B7A707D4FBED#1D9vRziBnrdZtveu7hCHH5gdJBd4quyuW8", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("161")
    console.log(result[161])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[162] = await instance.buyPreSaleTokens(accounts[234], web3.utils.toBN("295675120000000000000000"), web3.utils.toBN("8880"), "0xe57e51c3f456ff3022ec426e972062d61d07fbe955a934a1222290165a8bc293", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("162")
    console.log(result[162])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[163] = await instance.buyPreSaleTokens(accounts[75], web3.utils.toBN("337210000000000000000"), web3.utils.toBN("8880"), "0x9cf4b3d9ec976d41b0c3f8c007969c11842a8dc7d6f3463f1a3ea03262d5ced3", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("163")
    console.log(result[163])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[164] = await instance.buyPreSaleTokens(accounts[36], web3.utils.toBN("572561520000000000000000"), web3.utils.toBN("8880"), "0x438cb9649c65830d27a6af4ac6e4d211cf0be1cda112c051228c74c7f340d651", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("164")
    console.log(result[164])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[165] = await instance.buyPreSaleTokens(accounts[189], web3.utils.toBN("69136460000000000000000"), web3.utils.toBN("8880"), "0x41bd5b735a2d617ab90afd3b9614bce513eddb377c39625b50bc6d8f79f120f5", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("165")
    console.log(result[165])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[166] = await instance.buyPreSaleTokens(accounts[136], web3.utils.toBN("9888800000000000000000"), web3.utils.toBN("8880"), "0xf4f41a0e994b29a4b7547633a968edee9054b04710b948e726e3c91649a37d01", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("166")
    console.log(result[166])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[167] = await instance.buyPreSaleTokens(accounts[18], web3.utils.toBN("9888800000000000000000"), web3.utils.toBN("8880"), "0x53d46777e7fbd3ce3c9ad65555cd572b7a4488956b41d197c3eb9e834e7eac58", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("167")
    console.log(result[167])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[168] = await instance.buyPreSaleTokens(accounts[154], web3.utils.toBN("17700950000000000000000"), web3.utils.toBN("8880"), "0x13ac78fbfae47af85d5c8e4d124c34a5f1d5745b1004cf8ac969a34d382378e2", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("168")
    console.log(result[168])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[169] = await instance.buyPreSaleTokens(accounts[61], web3.utils.toBN("8737730000000000000000"), web3.utils.toBN("8880"), "5ca01168193103c83289a8a0ba6231a48555e135a16575f5d9cb42359c0f19cc#DdzFFzCqrhsiMu6DEbv58meSmkZCV9yHt8NJy7JgnKj5vySVc2oL1s4jH4gyRmeeLTurZVoyfWUfjXYCtiLVwr5uACLgzaAML5Bd3eaR", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("169")
    console.log(result[169])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[170] = await instance.buyPreSaleTokens(accounts[74], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x70c0ea8459a76b3eefb210474b39857bd063453396d61c6f516195fc54c28eab", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("170")
    console.log(result[170])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[171] = await instance.buyPreSaleTokens(accounts[8], web3.utils.toBN("3955520000000000000000"), web3.utils.toBN("8880"), "0xc4885fdfee256c36333f075633b170de7b02f79bf7c659cc171ad32d33a9a708", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("171")
    console.log(result[171])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[172] = await instance.buyPreSaleTokens(accounts[211], web3.utils.toBN("88277320000000000000000"), web3.utils.toBN("8880"), "B4FDB7F7C85580F10BA395927C51F239C6D0B67F8FF2D662945AA4E7823C0C73#19p3y5oQFyrS47Wg5C1NfJ4YvEq2Z7wKqw", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("172")
    console.log(result[172])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[173] = await instance.buyPreSaleTokens(accounts[162], web3.utils.toBN("223486880000000000000000"), web3.utils.toBN("8880"), "0621212224E02D5E0077AA8DC620D468E6EFD563FE3AF433258CA4997F8D3734#1LnCujyJKkKcudogzUXWZyhWo5G8t2Tmgv", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("173")
    console.log(result[173])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[174] = await instance.buyPreSaleTokens(accounts[224], web3.utils.toBN("49444000000000000000000"), web3.utils.toBN("8880"), "0xa75e8ce888c829696efc926c01544a5ccef3892829c4a94d62728d734c69a57a", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("174")
    console.log(result[174])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[175] = await instance.buyPreSaleTokens(accounts[3], web3.utils.toBN("225860190000000000000000"), web3.utils.toBN("8880"), "4486369D055FB3E5042394E4D3D39AC9BA17A7DC9078AC36CCE287BEC073EE61#1HU1zsL93vdoJi6ayooEJKUcvzNgeFqHFg", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("175")
    console.log(result[175])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[176] = await instance.buyPreSaleTokens(accounts[91], web3.utils.toBN("25586390000000000000000"), web3.utils.toBN("8880"), "0xee8d91822ff4f8041a3b2539464c3ecfc137877ee93a857f408717462a93edeb", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("176")
    console.log(result[176])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[177] = await instance.buyPreSaleTokens(accounts[53], web3.utils.toBN("12152790000000000000000"), web3.utils.toBN("8880"), "0F75CEB2F518F8FF07726F7EF0AF6FAF27505479CEBCFEC6189006DCD8221AF3#12F1ETSSYwKNeFRkd77WESHgp6QozS6MmD", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("177")
    console.log(result[177])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[178] = await instance.buyPreSaleTokens(accounts[228], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0xa4947708eab459ee29d0bd68f52606fa4fb3105ac4a14e92bcb5a27bac164598", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("178")
    console.log(result[178])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[179] = await instance.buyPreSaleTokens(accounts[266], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x8683938227acfa1615fb52970e070647b5175d02b1d0d30a41df0f93d9425a27", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("179")
    console.log(result[179])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[180] = await instance.buyPreSaleTokens(accounts[30], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x43ab035474e3ea46e93fbb327baeff12ef01202e78e908bff2d0a6caa56169dc", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("180")
    console.log(result[180])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[181] = await instance.buyPreSaleTokens(accounts[87], web3.utils.toBN("7911040000000000000000"), web3.utils.toBN("8880"), "0x806effd8c742b21e53dd94034e1d2b0753ae91bb15e23b1777c9be295fa63305", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("181")
    console.log(result[181])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[182] = await instance.buyPreSaleTokens(accounts[41], web3.utils.toBN("57323800000000000000000"), web3.utils.toBN("8880"), "92daf97c9a5e0d5267d655529d2a53f995edace7374f08cbd6f2c1b319128c68#DdzFFzCqrhsjGtQg7cCx3nXD3XMrJuoAi5itwLnAWvF9Cv62iT4APXYQVRzE5UCEibELztyXBAgPuXULVKXpZxwfiJgQPpy5GXjCSrSv", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("182")
    console.log(result[182])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[183] = await instance.buyPreSaleTokens(accounts[54], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0xb7521ef1644aa7179a28402ec6c117f3524b3ae3770b680cc4aa7c13de5c0676", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("183")
    console.log(result[183])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[184] = await instance.buyPreSaleTokens(accounts[150], web3.utils.toBN("123610000000000000000000"), web3.utils.toBN("8880"), "0xe44e8d3c1d63f7bdf0e9edbebc249a3fa6da2afe846076bc3a1cbd1c7e744ea3", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("184")
    console.log(result[184])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[185] = await instance.buyPreSaleTokens(accounts[4], web3.utils.toBN("558717200000000000000000"), web3.utils.toBN("8880"), "0x05b1846afc200101b2a02745707b570dda1e182c7428dd845e112649be9b64ea", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("185")
    console.log(result[185])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[186] = await instance.buyPreSaleTokens(accounts[104], web3.utils.toBN("296664000000000000000000"), web3.utils.toBN("8880"), "0xe6c440a63d357a16ac43650df4a5c7ab7094ca1f00b8d3f215ee493fa035cf55", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("186")
    console.log(result[186])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[187] = await instance.buyPreSaleTokens(accounts[42], web3.utils.toBN("852977680000000000000000"), web3.utils.toBN("8880"), "5655a5edb4b36d86c188b254a5c9455bc371720a6febc94989b0812cdf2c2a15#DdzFFzCqrhsspsg8FwQQk5wixiGPRKBFytebkydeJujLiEGqJef9YMt3gR11gFttFNdHksZ32VGK7ViRpsVDHwGvcY2rwpQXwQci6Rdr", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("187")
    console.log(result[187])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[188] = await instance.buyPreSaleTokens(accounts[49], web3.utils.toBN("2175540000000000000000"), web3.utils.toBN("8880"), "0xb0d8a7207589db9dd8abd9b806d8803098825ad3dc794201d626f03ac780513a", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("188")
    console.log(result[188])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[189] = await instance.buyPreSaleTokens(accounts[130], web3.utils.toBN("51316940000000000000000"), web3.utils.toBN("8880"), "ac9bc28486b470e19fa2072b3ff1af4767c0be01ff6e6319d47042d3c754164a#DdzFFzCqrhszafMv5A5MD2o64BruZ1qMfLuh7J4gsaEvmLpAZzYSuCMDsyRGcrGz44DKygiYBYybqBiBqDxDfmyEh4GzbJms1jPgxTZx", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("189")
    console.log(result[189])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[190] = await instance.buyPreSaleTokens(accounts[172], web3.utils.toBN("74318720000000000000000"), web3.utils.toBN("8880"), "15413698f77b1d8f18909fcb650e23799986737cd9405c27a63620c49254e43e#DdzFFzCqrhtD5F1uMfJ9RS7cZE5C5wYmY4XKsj4UitgyeMqY8MzMg26RnCWGzzwGjz4o1Mrx34LYXwRYM6e5s6ZSLVEcTx6AXtZyHaag", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("190")
    console.log(result[190])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[191] = await instance.buyPreSaleTokens(accounts[51], web3.utils.toBN("198164040000000000000000"), web3.utils.toBN("8880"), "fad8f79f7aa7af6f357d1bfebf41a93267fac188d9994093926fa06f46a1da06#DdzFFzCqrht9uJ6nmorvh6gTvyQVBwTNWxFkrSSnbh3EJ26bywKGMi4LBXBugdo5bmJyyqPv7njsDjW2642B2jPib1QD38E5odbdp7Fx", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("191")
    console.log(result[191])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[192] = await instance.buyPreSaleTokens(accounts[217], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0x9e2be56361267d2a379fd0bfa7bfe56fb4140f3a7f98c6f4fc4018aa4acb751b", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("192")
    console.log(result[192])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[193] = await instance.buyPreSaleTokens(accounts[263], web3.utils.toBN("112226710000000000000000"), web3.utils.toBN("8880"), "0xfe58f53cccccdc256622fb828e3dd5334e840f7602dcec33c7415da85528ee5c", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("193")
    console.log(result[193])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[194] = await instance.buyPreSaleTokens(accounts[257], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0x68cdd040b9f35677440917268b8e91f0fd23186b00b8c0bf7fb363a7f251ce25", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("194")
    console.log(result[194])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[195] = await instance.buyPreSaleTokens(accounts[62], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x5c41bdb486b939bf6a4a5547c5487b1d489f658a7702fcff9e10ae23a6550c42", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("195")
    console.log(result[195])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[196] = await instance.buyPreSaleTokens(accounts[231], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x151ee9f62a2ef12634434ad65657721f63d841f49b0840d16c45f787b0b763a2", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("196")
    console.log(result[196])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[197] = await instance.buyPreSaleTokens(accounts[188], web3.utils.toBN("524106400000000000000000"), web3.utils.toBN("8880"), "0x15e0a594a31e3bf27eafb37158ef83db93157f3bcf0d2cbc880aa818ee2bc33f", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("197")
    console.log(result[197])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[198] = await instance.buyPreSaleTokens(accounts[174], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0xcc4bdb1ab9591b64b36916d4b2090a92630e78f7ddb577af4985efd36b9418a1", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("198")
    console.log(result[198])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[199] = await instance.buyPreSaleTokens(accounts[46], web3.utils.toBN("128688540000000000000000"), web3.utils.toBN("8880"), "50B0D73FB57F19B6DF0C96DE8B4731F902967B323DAA362B6E426E5A8E76A435#18Y9dbVqw3cVvMVBFQZEoLNqrXyDGgFs3W", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("199")
    console.log(result[199])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[200] = await instance.buyPreSaleTokens(accounts[193], web3.utils.toBN("650755830000000000000000"), web3.utils.toBN("8880"), "0xec040257e4df908366f110195460633fbbe994298295e5a6a07032e6dc14bb43", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("200")
    console.log(result[200])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[201] = await instance.buyPreSaleTokens(accounts[129], web3.utils.toBN("111017600000000000000000"), web3.utils.toBN("8880"), "D534D9811FA58B0417F90333210E3444E32565489B45E3575A9D4690D71571C2#15nAMDQimJdf3RKFtk4k3fxTCok7mUNDPY", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("201")
    console.log(result[201])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[202] = await instance.buyPreSaleTokens(accounts[133], web3.utils.toBN("1451231890000000000000000"), web3.utils.toBN("8880"), "19654126058934184224d56470c322cf59b6bf8cf1535a25ca17c60d8120d628#DdzFFzCqrht1UHUFvTuHi3vKkcNWP1aGVYwfKjq612jS4iteZwKPEN2h9GV8t11HgbwvyQp8wD557Wv7s3DSy1nCzvcpWmk4RPArD26w", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("202")
    console.log(result[202])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[203] = await instance.buyPreSaleTokens(accounts[257], web3.utils.toBN("555355010000000000000000"), web3.utils.toBN("8880"), "85fb34e1669b23306b9a2fd7e421c2e6f90d1c89124940c290b4528cb9b32cf3#DdzFFzCqrht4G9ukMHdNweyEwPJxJb6foijvECA3nBVvRTWQ77ppfnuE2X7GKLbYAUYHi15HBT5wpnp97ndfkKjp8TNWnedvgBNWdfar", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("203")
    console.log(result[203])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[204] = await instance.buyPreSaleTokens(accounts[245], web3.utils.toBN("279100220000000000000000"), web3.utils.toBN("8880"), "87a8db71270d4763452cc757d691b870dc2f8318c6e973a155e040051cfd3798#DdzFFzCqrht8We3AeVZTDXupf7H3f5Ds8Rt8eu4pi4DHE1LTSHbeRy5YBgfSfiArYAgnFxXZghx5jF8dCF6DbVGe9wfs1N1BeeDfMiLD", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("204")
    console.log(result[204])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[205] = await instance.buyPreSaleTokens(accounts[33], web3.utils.toBN("296976490000000000000000"), web3.utils.toBN("8880"), "0xa8c579e0a693c3da47f6c9b884d891c97c12fb479200eb5cec8ffe3da39bb296", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("205")
    console.log(result[205])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[206] = await instance.buyPreSaleTokens(accounts[53], web3.utils.toBN("62577860000000000000000"), web3.utils.toBN("8880"), "41A515BF22BE2867321AEA275BEBE70F1DBA65B5462857C4E323A86C44CC71B7#12F1ETSSYwKNeFRkd77WESHgp6QozS6MmD", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("206")
    console.log(result[206])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[207] = await instance.buyPreSaleTokens(accounts[141], web3.utils.toBN("37374720000000000000000"), web3.utils.toBN("8880"), "0x68e9da660317d601388af0196580dda0e282b92cabe300008f856207f450e844", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("207")
    console.log(result[207])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[208] = await instance.buyPreSaleTokens(accounts[29], web3.utils.toBN("2950620000000000000000"), web3.utils.toBN("8880"), "0x73aa42c0b1a1b4fb7607c4175935ad918c1c4cd1290c55313589432332f7bea7", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("208")
    console.log(result[208])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[209] = await instance.buyPreSaleTokens(accounts[125], web3.utils.toBN("569001550000000000000000"), web3.utils.toBN("8880"), "af1e069d525a744476b1dc571516dc28f6fa4db348df9ab04bab0bd6002d9c56#DdzFFzCqrhskc84sXyj6qXb5NmQzWUS5kqWZeza2e7grBeJCTsZqW3JQJkXqhENkGVZ4c2cSP9bSpiH1r5kF9J9wqXHF7Jp5qnk2C8Yn", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("209")
    console.log(result[209])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[210] = await instance.buyPreSaleTokens(accounts[249], web3.utils.toBN("296664000000000000000000"), web3.utils.toBN("8880"), "0x0e389e0a396f27c8084c29fc4953b0dc3c93c83e4d80f8cf72751555162a5c87", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("210")
    console.log(result[210])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[211] = await instance.buyPreSaleTokens(accounts[99], web3.utils.toBN("72880460000000000000000"), web3.utils.toBN("8880"), "0xdfa8a6bec34ae7386f37886fd6d98c2be717e3d0d2c1b6c89f23f372bd04a32c", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("211")
    console.log(result[211])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[212] = await instance.buyPreSaleTokens(accounts[180], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0xbf559b0f9d9b789f3ef6c31fb627d6f71e95b396728c46d93a67b468910912d2", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("212")
    console.log(result[212])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[213] = await instance.buyPreSaleTokens(accounts[49], web3.utils.toBN("24722000000000000000000"), web3.utils.toBN("8880"), "0x9ff2aa288a56028be6ed18092efdfdb69ae7626989c58f4f74e03e3ac46c3714", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("213")
    console.log(result[213])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[214] = await instance.buyPreSaleTokens(accounts[214], web3.utils.toBN("99041080000000000000000"), web3.utils.toBN("8880"), "3fe54ba49e4e9067a3f2a9b0226f1ef5492b3aa141a520845ce01141e1efc589#DdzFFzCqrhsmYc9XtK5tGtJ45vaj3pQkeyU1yQPVztiBL1urPEt3oaNh2fxUW1J9JWGnf3KXtjcoQNfyAGbDamX3XuLSKMXYAxpSj4q9", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("214")
    console.log(result[214])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[215] = await instance.buyPreSaleTokens(accounts[144], web3.utils.toBN("149666990000000000000000"), web3.utils.toBN("8880"), "8544980b9ddf37e69a0d18cc9667e80f60182cad062d69d9e0c7ae63b9ff077d#DdzFFzCqrhsutSAfor5TX7Vwhaq1hhmpj9QZG3tUafqHUZCoE5RSoitFSKgwSiPJwjWhYAGiyJegoUmSQygLb59H73e8gw4wrFUuVjJw", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("215")
    console.log(result[215])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[216] = await instance.buyPreSaleTokens(accounts[262], web3.utils.toBN("8814780000000000000000"), web3.utils.toBN("8880"), "0x844671624592794697b36275a8c7fb2eeb22dc9b50de572efd1fba5778c49d7b", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("216")
    console.log(result[216])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[217] = await instance.buyPreSaleTokens(accounts[201], web3.utils.toBN("197776000000000000000000"), web3.utils.toBN("8880"), "0xbafa027196baa0ca27caca83a16f5f044468ce7e453eebddaa5e3c085538df17", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("217")
    console.log(result[217])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[218] = await instance.buyPreSaleTokens(accounts[79], web3.utils.toBN("295329010000000000000000"), web3.utils.toBN("8880"), "de00ba1805846452ebcad26b38d5c6dcf3e247770b131138d1c4cab52b309067#DdzFFzCqrhtBvjcpvFWjT6DjmV9VTLapxD9cJFYAGG1Xe4NVjsiXUfbSZJeCxk6h9gyi2a8oBNambnv68756usAd4L4AFAKiojUeAtE6", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("218")
    console.log(result[218])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[219] = await instance.buyPreSaleTokens(accounts[203], web3.utils.toBN("984765150000000000000000"), web3.utils.toBN("8880"), "8689799af03e21bcf78712bde226ad168c4be38096eca5cc17d3015f44cf85c4#DdzFFzCqrhsiB5W3KmvZYQa4KUPd7dTEavgZVAtgTikKuKSaN1ZvQH5acEqnH1VHH5FDtSAUfARxx7XVNZe2Ft4yhitBsBfTUaZDqUvi", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("219")
    console.log(result[219])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[220] = await instance.buyPreSaleTokens(accounts[130], web3.utils.toBN("44246070000000000000000"), web3.utils.toBN("8880"), "8322c2ebdd48cc4df4866594c338ec9c98679f9766f9e9a0d80dbb5ebbb18a10#DdzFFzCqrhszafMv5A5MD2o64BruZ1qMfLuh7J4gsaEvmLpAZzYSuCMDsyRGcrGz44DKygiYBYybqBiBqDxDfmyEh4GzbJms1jPgxTZx", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("220")
    console.log(result[220])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[221] = await instance.buyPreSaleTokens(accounts[105], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x08490b50278fecee313ae4344bf707392c68c9e9a6989924b471b36e3e2d5394", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("221")
    console.log(result[221])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[222] = await instance.buyPreSaleTokens(accounts[206], web3.utils.toBN("19777600000000000000000"), web3.utils.toBN("8880"), "0x267ceec5cfcef6447e413d19c74574ef8c640e8c3df2c8c19a5abcccfc131b1e", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("222")
    console.log(result[222])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[223] = await instance.buyPreSaleTokens(accounts[262], web3.utils.toBN("85877320000000000000000"), web3.utils.toBN("8880"), "0x747572d2000d777a40fb55ff007ee1b293e135763effbc76cebbc0f1bbd91384", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("223")
    console.log(result[223])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[224] = await instance.buyPreSaleTokens(accounts[191], web3.utils.toBN("147738670000000000000000"), web3.utils.toBN("8880"), "0xb4a0edb4d4550d6166bf5f90ca4befcaf3eff1a5a6591de04d134674427303a7", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("224")
    console.log(result[224])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[225] = await instance.buyPreSaleTokens(accounts[121], web3.utils.toBN("67995390000000000000000"), web3.utils.toBN("8880"), "00B243C4D2156E5F8A501B3336CDA98BA62B54EF651EA35979400CF38958DC40#1M8Av5Eo3ZBmfidWHiPURHBtMCVFR8RHDC", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("225")
    console.log(result[225])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[226] = await instance.buyPreSaleTokens(accounts[213], web3.utils.toBN("34818460000000000000000"), web3.utils.toBN("8880"), "0xe4e9cfbe6889cbd867e4d63a70c827143d8b7c75ef4ecd2f2a2de57bdd839e04", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("226")
    console.log(result[226])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[227] = await instance.buyPreSaleTokens(accounts[174], web3.utils.toBN("594910210000000000000000"), web3.utils.toBN("8880"), "cf6d3fd3476259808777fe80491b095e5ef94b2b95f6ea8ddda68a848138e014#DdzFFzCqrhtAq4ognuJfZBR8ZH6syL3r9WzwMWmQk47BZw4BkD2PaZVw4nyCrPthSxXqj5ieWrrBpf4WiHBsTuDwKSpNXSQYNvzwXa2V", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("227")
    console.log(result[227])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[228] = await instance.buyPreSaleTokens(accounts[90], web3.utils.toBN("196787120000000000000000"), web3.utils.toBN("8880"), "0x6bdcfc95406fb71efc28d1eb0648d1ce0c52519d9525910a0294e65cb106a3a2", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("228")
    console.log(result[228])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[229] = await instance.buyPreSaleTokens(accounts[121], web3.utils.toBN("15030980000000000000000"), web3.utils.toBN("8880"), "0x933f833c297e4b9ec356320b947051df38ade5c2230676890ad97b019cfc8a1b", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("229")
    console.log(result[229])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[230] = await instance.buyPreSaleTokens(accounts[230], web3.utils.toBN("287310000000000000000"), web3.utils.toBN("8880"), "171b2cc2c513cd3818044f5c4054f70c88e24423a2fe84d7023d5540ccea3d1f#DdzFFzCqrhshmzLgDio9Cc6a1gk3oYGvdMkAxJMawRxMJ3PGUvShZgEBQ4aACsgW6vyP1hY2XxMeRTbpa2jSA5ZUKi4y8CdLu6Su56Bv", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("230")
    console.log(result[230])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[231] = await instance.buyPreSaleTokens(accounts[18], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x883ba70bc965f875543fb9d665a5f91802cce3a566e88c99ae292fe1833f4e28", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("231")
    console.log(result[231])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[232] = await instance.buyPreSaleTokens(accounts[171], web3.utils.toBN("57990480000000000000000"), web3.utils.toBN("8880"), "0xc4d8d588f3cee3f7a2f20aa931dfb3973c91008c08a4bdd8885e9c654dc69d94", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("232")
    console.log(result[232])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[233] = await instance.buyPreSaleTokens(accounts[21], web3.utils.toBN("106425240000000000000000"), web3.utils.toBN("8880"), "8bdc79f4db3a139a84c49f647a13e71aa88c8f67d07bff1578b5f6170d8c6c05#DdzFFzCqrhszWYepxJbKFU5uLD4sQsCyjhSxtpWaJ3MgHLMSFhCTcwf8AoQ9nquBJmhMyXuwjz4rYwM7NHybWGFt5xT88oXBUATb8H3Y", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("233")
    console.log(result[233])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[234] = await instance.buyPreSaleTokens(accounts[32], web3.utils.toBN("14833200000000000000000"), web3.utils.toBN("8880"), "0xd8b48e371eeeda687e6961fb40d7efaa45aeeee0dd7f42171b42ee852bbeb0e5", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("234")
    console.log(result[234])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[235] = await instance.buyPreSaleTokens(accounts[128], web3.utils.toBN("492877560000000000000000"), web3.utils.toBN("8880"), "0x6a1d568f24915036a4f06dd85cd98c1021f044c24cfb40164e04093e2a222f69", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("235")
    console.log(result[235])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[236] = await instance.buyPreSaleTokens(accounts[247], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x53a1b4a390ddd3bf2c47c8ec115addf27eb04d8249c022857de7e9a781de9452", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("236")
    console.log(result[236])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[237] = await instance.buyPreSaleTokens(accounts[68], web3.utils.toBN("1243820000000000000000"), web3.utils.toBN("8880"), "0x8dee6718103d48c6d8d2c7edd9b6c14c79fffdbffbd42592cf0caf85fdab4bb0", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("237")
    console.log(result[237])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[238] = await instance.buyPreSaleTokens(accounts[196], web3.utils.toBN("6066780000000000000000"), web3.utils.toBN("8880"), "3afc54c87481146db3f13c9b0ff56961486a4ccb36079c4c0e04b981b5367bd9#DdzFFzCqrhtAKgTrWfhaPoQ3UuNx7ibBSZ4mBzxT71zwJyPn45CMrMqdV9vS6r4NWU4e2wc7xcxyQYftTR4tT3ACwr69dqrjtcv8eSrM", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("238")
    console.log(result[238])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[239] = await instance.buyPreSaleTokens(accounts[95], web3.utils.toBN("1103163970000000000000000"), web3.utils.toBN("8880"), "0x5be373a9a9f29e24e9c5e7a9d19397e2750474c99bbdac39902ace8b84360da9", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("239")
    console.log(result[239])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[240] = await instance.buyPreSaleTokens(accounts[94], web3.utils.toBN("12855440000000000000000"), web3.utils.toBN("8880"), "0x707a0ffb7f608a620f170a5ae483b3ccebdeeb20e59370136651a80a57d230a5", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("240")
    console.log(result[240])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[241] = await instance.buyPreSaleTokens(accounts[76], web3.utils.toBN("148332000000000000000000"), web3.utils.toBN("8880"), "0x5538e537087dffa02f83303dafc57e0aba0ac5adb93dc7fdceab873bd45ec107", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("241")
    console.log(result[241])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[242] = await instance.buyPreSaleTokens(accounts[244], web3.utils.toBN("1285544000000000000000000"), web3.utils.toBN("8880"), "0x1dc3c66557bd6c5eae6279f78d5131cd83f06c2002f785779362a0f7e2b5df8a", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("242")
    console.log(result[242])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[243] = await instance.buyPreSaleTokens(accounts[98], web3.utils.toBN("999760000000000000000"), web3.utils.toBN("8880"), "0xda0bdc006ffd5c8ce88a6d6a28d2716660a068e38fb8d4a9b1d81f9879a5b063", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("243")
    console.log(result[243])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[244] = await instance.buyPreSaleTokens(accounts[63], web3.utils.toBN("49444000000000000000000"), web3.utils.toBN("8880"), "0x16d73419fbccf79d777d071ad2a826ee6a5f00908204cc49b3fe05ac939d302b", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("244")
    console.log(result[244])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[245] = await instance.buyPreSaleTokens(accounts[110], web3.utils.toBN("346108000000000000000000"), web3.utils.toBN("8880"), "0xbdd9f3b5b6cafb4675063e4b63911b38f17f2d10b03c91f66c6cd0df8acbe6bc", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("245")
    console.log(result[245])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[246] = await instance.buyPreSaleTokens(accounts[110], web3.utils.toBN("346108000000000000000000"), web3.utils.toBN("8880"), "0xbc87cbebb3d77561b92c9ca6f0ad5d880522bd4a3c411d8e306dc8cf4a8c9892", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("246")
    console.log(result[246])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[247] = await instance.buyPreSaleTokens(accounts[26], web3.utils.toBN("98802860000000000000000"), web3.utils.toBN("8880"), "0xdc221a26b122af3281cfe9a59c80567e693711f7982a6d6edd3a19dfa41ae895", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("247")
    console.log(result[247])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[248] = await instance.buyPreSaleTokens(accounts[26], web3.utils.toBN("53409170000000000000000"), web3.utils.toBN("8880"), "0x5f0583402532a84fd11a3c60edcdaa115b3b3ff9c3c1584a62e39f4f2e3aacdf", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("248")
    console.log(result[248])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[249] = await instance.buyPreSaleTokens(accounts[147], web3.utils.toBN("103832400000000000000000"), web3.utils.toBN("8880"), "0x105c9c908b3e43720507b5afe8678799ebda7ff0d81b155492980e259892eeac", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("249")
    console.log(result[249])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[250] = await instance.buyPreSaleTokens(accounts[230], web3.utils.toBN("593328000000000000000000"), web3.utils.toBN("8880"), "0x6e7ef6f27ca01cf86c16583b4dd42cb212a00131d28b628c4667a2e3c5948fe8", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("250")
    console.log(result[250])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[251] = await instance.buyPreSaleTokens(accounts[72], web3.utils.toBN("1795480000000000000000"), web3.utils.toBN("8880"), "f797c76d7afcbe45176c8e9b29cb83ac6b7355267f6b0f3545025d0948d7f2f5#DdzFFzCqrhsxicVBAu2hsMxyACXQbhsph9JycdPPxZREW3r5kxKc1Q94ANamvbWMGvAvA5rKnBjvSn9r7HzUAUNvRTUZDjNBcTYKqZt6", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("251")
    console.log(result[251])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[252] = await instance.buyPreSaleTokens(accounts[31], web3.utils.toBN("2867750000000000000000"), web3.utils.toBN("8880"), "0xffd2ed823e8496e67636cf06d54a5741eb7bc8c4dbb76a9f667758a0c284e6de", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("252")
    console.log(result[252])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[253] = await instance.buyPreSaleTokens(accounts[81], web3.utils.toBN("2966640000000000000000"), web3.utils.toBN("8880"), "0xaf4a181dc22cdfc882871a30a11ec3b9a4991f801bd765d6115703a29a36df9e", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("253")
    console.log(result[253])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[254] = await instance.buyPreSaleTokens(accounts[200], web3.utils.toBN("119951140000000000000000"), web3.utils.toBN("8880"), "0x0cecffbfc29e6c29af5e9023744d84f81afd759c4746a28241f6221aceaaaf34", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("254")
    console.log(result[254])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[255] = await instance.buyPreSaleTokens(accounts[254], web3.utils.toBN("6105000000000000000000"), web3.utils.toBN("8880"), "CFF994BE2FD2BFFD4AFCE0F32CD95C06B46643D928EF0DBF37CA7E8FA6668A75#1HdUN9MAheNxd11xdegyJw2My7aH1N2fNq", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("255")
    console.log(result[255])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[256] = await instance.buyPreSaleTokens(accounts[222], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0xa9c9311c5f2248c247d26ddc457efa015575610e161e39ce6ff2bd99fd473d33", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("256")
    console.log(result[256])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[257] = await instance.buyPreSaleTokens(accounts[166], web3.utils.toBN("791104000000000000000000"), web3.utils.toBN("8880"), "0x3355d28341bebefa146585a2cb4f466a9bfcd5e93f58f2a0c4add436c417fd51", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("257")
    console.log(result[257])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[258] = await instance.buyPreSaleTokens(accounts[120], web3.utils.toBN("494440000000000000000000"), web3.utils.toBN("8880"), "0x80c9d888726d62633370c2c4a3253a8592515b53f9052fbff7e4193baa1e55f6", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("258")
    console.log(result[258])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[259] = await instance.buyPreSaleTokens(accounts[268], web3.utils.toBN("988880000000000000000000"), web3.utils.toBN("8880"), "0x4c76892661ffb100429353e4a11520e8850ba3f1764f6d94beaa629f7ff1a4d3", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("259")
    console.log(result[259])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[260] = await instance.buyPreSaleTokens(accounts[86], web3.utils.toBN("39555200000000000000000"), web3.utils.toBN("8880"), "0x051a24d39ec864ce811cb4e8d8adb39adf5279ab6ff30d7a8ca97679d0329a13", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("260")
    console.log(result[260])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[261] = await instance.buyPreSaleTokens(accounts[123], web3.utils.toBN("10877680000000000000000"), web3.utils.toBN("8880"), "0xf50e972c862b999008f65c22865ee10aea627383de609b1ee01aa64ce236dbc5", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("261")
    console.log(result[261])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[262] = await instance.buyPreSaleTokens(accounts[83], web3.utils.toBN("129385060000000000000000"), web3.utils.toBN("8880"), "0xa70b66c6283046eba86a30a99598e4b4a6fd38e65ca4ece1a27b528360ffc8a0", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("262")
    console.log(result[262])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[263] = await instance.buyPreSaleTokens(accounts[89], web3.utils.toBN("10935040000000000000000"), web3.utils.toBN("8880"), "71849A8B18EB148D136B199ED1BD1459255A96DB5E421BF91CD915153D8D829D#17GXwyMgUfx5qGhRKPmevAL4SbNQBW1v3b", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("263")
    console.log(result[263])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[264] = await instance.buyPreSaleTokens(accounts[194], web3.utils.toBN("2409010000000000000000"), web3.utils.toBN("8880"), "24e6334f891e2a04dbf40adbdcda75e9380dd19e6b434882db67f54457f6dc65#DdzFFzCqrhswzMTo9cRhTSwGu31aUdTR5wKs21beNSMyJvHWaoEGVLvDcZJfPDeYXZNsNt5cXvLSPwigGZCr5Ri7jaMyWtCbviSe2qEf", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("264")
    console.log(result[264])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[265] = await instance.buyPreSaleTokens(accounts[200], web3.utils.toBN("392879260000000000000000"), web3.utils.toBN("8880"), "0xc1a386592720629aa688b2d5d23f76d7eeaeeac5990b10a4018dedb47ec385b0", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("265")
    console.log(result[265])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[266] = await instance.buyPreSaleTokens(accounts[209], web3.utils.toBN("122526090000000000000000"), web3.utils.toBN("8880"), "0x8ce08ebc3e11ac98bf07042fb05483fe6a79a0b21f98f3c632db807f7116f19a", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("266")
    console.log(result[266])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[267] = await instance.buyPreSaleTokens(accounts[35], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x00b26a719de1722cbf829538f5dff3a5965341d39dda2a9ad095ac1b75f3c3e8", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("267")
    console.log(result[267])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[268] = await instance.buyPreSaleTokens(accounts[207], web3.utils.toBN("99250560000000000000000"), web3.utils.toBN("8880"), "0xf3b110bff0fd4286464dc792734dc0facde42762116cb3dd19d760a104db5252", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("268")
    console.log(result[268])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[269] = await instance.buyPreSaleTokens(accounts[52], web3.utils.toBN("26437530000000000000000"), web3.utils.toBN("8880"), "0x79835df980949a42def50b3f05fc10bb93f9289a74bb20e1360ee6593c102881", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("269")
    console.log(result[269])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[270] = await instance.buyPreSaleTokens(accounts[118], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x10258121c282cd6e9cd79997129bb01736d2b655e8e9afc94fba03b2805b6d83", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("270")
    console.log(result[270])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[271] = await instance.buyPreSaleTokens(accounts[20], web3.utils.toBN("103766380000000000000000"), web3.utils.toBN("8880"), "0x99649b6b699377bd0ea72ad3e4b8ca9552b31b14575a34d8ef01620c4cff3bc3", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("271")
    console.log(result[271])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[272] = await instance.buyPreSaleTokens(accounts[179], web3.utils.toBN("745229860000000000000000"), web3.utils.toBN("8880"), "83f03d4fc7d66075c91e1079468a95d79940f3829268a3a5f508a266b0238fcd#DdzFFzCqrht9DwH9sBND8uiGWPxMn1B63GDqNycw1SUVy6KYhTfVi162A7zfMN6LuaruKkwWNXQuibMjh2LeCpcTQUV8GBYp1EzryVdb", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("272")
    console.log(result[272])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[273] = await instance.buyPreSaleTokens(accounts[118], web3.utils.toBN("118680430000000000000000"), web3.utils.toBN("8880"), "423C3EFEF5DB68937D7F9D2EF46CA60DCEFE5F20FA955C757A69D84531374272#1BpSGkVAkKTMQZH4rke8jrjzz3MEmkv9BD", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("273")
    console.log(result[273])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[274] = await instance.buyPreSaleTokens(accounts[243], web3.utils.toBN("6144800000000000000000"), web3.utils.toBN("8880"), "0xf284e75a89a95823ae8e11df2c6841eec7c1ed2306ea2d622c3b6d12b8570181", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("274")
    console.log(result[274])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[275] = await instance.buyPreSaleTokens(accounts[62], web3.utils.toBN("296664000000000000000000"), web3.utils.toBN("8880"), "0x64fa988dbb39cc07e08cafefe6abbfb4f2f8082af41a408161ea166fa6d5ddc0", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("275")
    console.log(result[275])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[276] = await instance.buyPreSaleTokens(accounts[126], web3.utils.toBN("336416980000000000000000"), web3.utils.toBN("8880"), "A5EF810ED0181EA952146D14D43E912E4F6A366BE4E2F62E008EF8CDAB4A532E#1AXwJdAbKdffFaEVYgohGPjhT892oeGtBc", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("276")
    console.log(result[276])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[277] = await instance.buyPreSaleTokens(accounts[170], web3.utils.toBN("692216000000000000000000"), web3.utils.toBN("8880"), "0x341dc08d9b84b63893b58d4779ded9fc558ccaa39fcb2ef60372231a428452a0", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("277")
    console.log(result[277])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[278] = await instance.buyPreSaleTokens(accounts[219], web3.utils.toBN("2100280000000000000000"), web3.utils.toBN("8880"), "0xa477135e36e4a609f0f25072f2302bb1db09710bbba49ca94f6fc083cfebdbc9", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("278")
    console.log(result[278])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[279] = await instance.buyPreSaleTokens(accounts[226], web3.utils.toBN("494440000000000000000000"), web3.utils.toBN("8880"), "0x09a1ba8842f0789d1baeac72e065557187491c6b98a1e87e5889aa6a340b3078", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("279")
    console.log(result[279])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[280] = await instance.buyPreSaleTokens(accounts[255], web3.utils.toBN("21953140000000000000000"), web3.utils.toBN("8880"), "921097E33E823BEDA8F63A9BBC44EFB5F6748361003F5DA11F5EA78D110DD13C#1AHHgtmsTjx775tTW8wqCUHMwUTcB5srd1", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("280")
    console.log(result[280])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[281] = await instance.buyPreSaleTokens(accounts[218], web3.utils.toBN("108776800000000000000000"), web3.utils.toBN("8880"), "0x1586c057017f5ca7ab70e71c30857f597c03e5e791bb1976f18dfc86ef89c910", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("281")
    console.log(result[281])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[282] = await instance.buyPreSaleTokens(accounts[107], web3.utils.toBN("111347890000000000000000"), web3.utils.toBN("8880"), "1D434A6C8BD9DAD6CB364A9367D39858651759B898EC781EF6D1857999D656F1#1McPzSg1HZEwLaUzhugopQbVb4NLmK2eAt", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("282")
    console.log(result[282])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[283] = await instance.buyPreSaleTokens(accounts[258], web3.utils.toBN("128554400000000000000000"), web3.utils.toBN("8880"), "0xa0477e4ae8b1ae4a358f55a0845823132aa13002428723cf917e1a43aa6c5950", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("283")
    console.log(result[283])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[284] = await instance.buyPreSaleTokens(accounts[142], web3.utils.toBN("97543120000000000000000"), web3.utils.toBN("8880"), "0x8707b147c45e058dc7cb22819570e5118e7b5ce26174dbc241b75cfd098e27dc", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("284")
    console.log(result[284])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[285] = await instance.buyPreSaleTokens(accounts[261], web3.utils.toBN("9888800000000000000000"), web3.utils.toBN("8880"), "0xeff2593282ab84e0391e2df62cca657ab4619f9ac917f45bc55f4857a3dd6f8c", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("285")
    console.log(result[285])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[286] = await instance.buyPreSaleTokens(accounts[221], web3.utils.toBN("4944400000000000000000"), web3.utils.toBN("8880"), "0x987737d3822a722e1f5e4a2308f3a9379132790c69fe2352ecbd6918907ae1b9", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("286")
    console.log(result[286])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[287] = await instance.buyPreSaleTokens(accounts[56], web3.utils.toBN("494440000000000000000000"), web3.utils.toBN("8880"), "0xd6785750c3e2d53adc30f2a7e97a53ccceadabde49f957b125f796c853af7d3f", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("287")
    console.log(result[287])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[288] = await instance.buyPreSaleTokens(accounts[112], web3.utils.toBN("692216000000000000000000"), web3.utils.toBN("8880"), "0x5451605cd4e8a3e689936afec421ac353408c1b744d3af890732f9cd10b305cd", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("288")
    console.log(result[288])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[289] = await instance.buyPreSaleTokens(accounts[70], web3.utils.toBN("6661320000000000000000"), web3.utils.toBN("8880"), "763c8e7be545c346c3c8092ce37b4eaf5a7dbb06fc4d0622b4fe026473d7a120#DdzFFzCqrhsgT7v7Ps4TLRrUuvVeMi63nQkM7ujzxkc7Veh8D4CSJAxRPHcoQAEkKFWpvr1oZhP3ztr7CUHyGs9oMRTP6RkMsZB46L8s", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("289")
    console.log(result[289])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[290] = await instance.buyPreSaleTokens(accounts[145], web3.utils.toBN("99876880000000000000000"), web3.utils.toBN("8880"), "0xf699cd9fa25374aa48d28cdf4a302c52950673fc6df5c81a7fd5f3afed47c86e", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("290")
    console.log(result[290])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[291] = await instance.buyPreSaleTokens(accounts[139], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x88b3cc606b6bfb6689dae3c0f17b90d4d9de0047b533d77b2b43b118d00fdcd6", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("291")
    console.log(result[291])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[292] = await instance.buyPreSaleTokens(accounts[44], web3.utils.toBN("20103930000000000000000"), web3.utils.toBN("8880"), "0x9f27b6e002a034ed0f3306199da02f78c5826fbef50c0b4fa1eea17b609e4c89", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("292")
    console.log(result[292])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[293] = await instance.buyPreSaleTokens(accounts[98], web3.utils.toBN("9955050000000000000000"), web3.utils.toBN("8880"), "0x111f86c1bc1b4c835236995f511297f61b080dd7077d8b07fba350fc2f4581f9", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("293")
    console.log(result[293])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[294] = await instance.buyPreSaleTokens(accounts[17], web3.utils.toBN("5933280000000000000000"), web3.utils.toBN("8880"), "0x28061efb321b361288b341f7aa156943f32f3fd64c2e500e23a8fe8ec38391e7", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("294")
    console.log(result[294])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[295] = await instance.buyPreSaleTokens(accounts[181], web3.utils.toBN("493492650000000000000000"), web3.utils.toBN("8880"), "0xb88a9a5b5666ea9042d48b6da2aec447823fe9293423e10e50403ee66cb02799", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("295")
    console.log(result[295])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[296] = await instance.buyPreSaleTokens(accounts[28], web3.utils.toBN("494440000000000000000"), web3.utils.toBN("8880"), "0x94041d7a196bde24ce8e13f06c61d1ddd429d94a6fca4301c9d90bcc85d8377e", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("296")
    console.log(result[296])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[297] = await instance.buyPreSaleTokens(accounts[17], web3.utils.toBN("5933280000000000000000"), web3.utils.toBN("8880"), "0x0507ab9d9354aab6f4fb39ba746e3bf93667c5ffec3404e3cde7fa60c7c91a7d", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("297")
    console.log(result[297])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[298] = await instance.buyPreSaleTokens(accounts[101], web3.utils.toBN("84114480000000000000000"), web3.utils.toBN("8880"), "0xa827b997e67ff8d67e8bc1e663d6e44e8b01fd75488e56a8f9fa5e0b33f89412", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("298")
    console.log(result[298])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[299] = await instance.buyPreSaleTokens(accounts[28], web3.utils.toBN("98915490000000000000000"), web3.utils.toBN("8880"), "0x978bd7a50cd9a498c82fa1abdc7a12f33eccf706c6fb5be58bc86a79225af07c", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("299")
    console.log(result[299])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[300] = await instance.buyPreSaleTokens(accounts[101], web3.utils.toBN("82880360000000000000000"), web3.utils.toBN("8880"), "D18DD35CEB08F4634F24F21F77D1B0551534D699717A9B0D37663BA0A9F7DD50#16a8sEzrHMFDhQesZzEHTnsLQhwYMxfpUb", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("300")
    console.log(result[300])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[301] = await instance.buyPreSaleTokens(accounts[184], web3.utils.toBN("72979340000000000000000"), web3.utils.toBN("8880"), "0xfa632a58365394c163bc255b516aed86da73baa712f9160763acdc76c3b2821c", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("301")
    console.log(result[301])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[302] = await instance.buyPreSaleTokens(accounts[236], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x536ab80d0025f146b9f70f98567dd4d1ed7a1e943c8019d5e5f9ea23f6a536d5", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("302")
    console.log(result[302])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[303] = await instance.buyPreSaleTokens(accounts[260], web3.utils.toBN("3485940000000000000000"), web3.utils.toBN("8880"), "0x314f77ab23b10a8bf6015e979dea7b5495b8899ea2a96db521ac716fb021442c", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("303")
    console.log(result[303])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[304] = await instance.buyPreSaleTokens(accounts[101], web3.utils.toBN("126548890000000000000000"), web3.utils.toBN("8880"), "0xf30bb147c692ae7e9267981d4fcf71a27a85c3d955264efdd9555d7d47c29b9a", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("304")
    console.log(result[304])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[305] = await instance.buyPreSaleTokens(accounts[265], web3.utils.toBN("49444000000000000000000"), web3.utils.toBN("8880"), "0x6430ef9a417214268fe43e28f47297ea08450828c7d09f3010c92c1de5ea4001", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("305")
    console.log(result[305])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[306] = await instance.buyPreSaleTokens(accounts[178], web3.utils.toBN("138890690000000000000000"), web3.utils.toBN("8880"), "0x6a3205a9d5220eb3e15cda788737ed78692cbff562415ac5fd95edaabff36031", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("306")
    console.log(result[306])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[307] = await instance.buyPreSaleTokens(accounts[4], web3.utils.toBN("161187440000000000000000"), web3.utils.toBN("8880"), "0x1875222e3a43a8a16fe60dc61a29c4e6f9fa94052b0a42cffbf511fe33a203aa", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("307")
    console.log(result[307])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[308] = await instance.buyPreSaleTokens(accounts[143], web3.utils.toBN("493195990000000000000000"), web3.utils.toBN("8880"), "0x6fe7012e118ff33a5a9046970dc85c8490cf3e02d536b0059009f3e30d9ec04f", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("308")
    console.log(result[308])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[309] = await instance.buyPreSaleTokens(accounts[54], web3.utils.toBN("9888800000000000000000"), web3.utils.toBN("8880"), "0xa3a61d5721be7e3abf5147260303583c0198a7cc2fdc91d50c3ac5fefc0889bc", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("309")
    console.log(result[309])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[310] = await instance.buyPreSaleTokens(accounts[115], web3.utils.toBN("586801390000000000000000"), web3.utils.toBN("8880"), "819060c140e98da230aa02dfe9ccee01b9a4c3ee2bc0ee8145eb566a7fa0cc3a#DdzFFzCqrhsxSvoWSuZ8kRk6uAa9aYpfGWd5r6aW6DwMZm9CGouEi4yaq3q5w1k3MPxVdDs827qtrda8sL2wD38bdZpfpvEuigNwASxc", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("310")
    console.log(result[310])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[311] = await instance.buyPreSaleTokens(accounts[197], web3.utils.toBN("3731630000000000000000"), web3.utils.toBN("8880"), "0x5149f77c0afa033841f90ea41691de8a33d33f4d161fbbbf702a4e06964a3fa6", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("311")
    console.log(result[311])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[312] = await instance.buyPreSaleTokens(accounts[159], web3.utils.toBN("5814610000000000000000"), web3.utils.toBN("8880"), "0x6f4acaab90840ae1e3ba5e6660b4d8f8f0736bc392a2cd7a398b613fdb7f8723", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("312")
    console.log(result[312])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[313] = await instance.buyPreSaleTokens(accounts[132], web3.utils.toBN("118744710000000000000000"), web3.utils.toBN("8880"), "4aedca4ba2e1fb855374921ee70cdca266f1e4ef6972b60fa7944f6fbfc58afe#DdzFFzCqrhsoPYt7pMwaeZHW6BRtpkbDFeL1JJa1bq8VXw34kLQAbJphWtekKKg1BhmqfpCFyAdRQzxXJsA9FhVQuNf3BjgNLDgQrnvD", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("313")
    console.log(result[313])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[314] = await instance.buyPreSaleTokens(accounts[4], web3.utils.toBN("595800200000000000000000"), web3.utils.toBN("8880"), "72435cdeede4bcd3f6a4edde009852feff18c1e39c25714717d06391d93c7466#DdzFFzCqrht7xGPeuhrc4yasc4cWan36RVJF7HTWK8eBQyzEkLsTNhbWmvUp3BkUxNqmBFCYxkmKkceDRuxyJLYnodePgNNaeCKyEYkN", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("314")
    console.log(result[314])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[315] = await instance.buyPreSaleTokens(accounts[157], web3.utils.toBN("28288590000000000000000"), web3.utils.toBN("8880"), "269af099646c44309c3f046c4c3c4f2983a82f7d56dc4f42b870c8a566825216#DdzFFzCqrht5GE7ydCH4vcjN5uLSsB3VaMhZN4JHzqTU2NXFojcSsZcmxdaV8ajJ2q4KMPm75ZCwoNJGVBqbvUmWrZSM9q5HhHTs5saM", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("315")
    console.log(result[315])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[316] = await instance.buyPreSaleTokens(accounts[37], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x65a51fa9b2687162f90c0475e52306da8e6527c51ffb632dd6487c750b9f09d0", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("316")
    console.log(result[316])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[317] = await instance.buyPreSaleTokens(accounts[250], web3.utils.toBN("19708940000000000000000"), web3.utils.toBN("8880"), "0x3220bd2faf697d004385f730a47b35950c7234bd553b6f52b8a79d76337c3f11", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("317")
    console.log(result[317])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[318] = await instance.buyPreSaleTokens(accounts[105], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0x53ea58676cb0ac1898b590ab14144366b12b98c22a58430d19e25d9ecff297ff", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("318")
    console.log(result[318])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[319] = await instance.buyPreSaleTokens(accounts[25], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0xf06c8f1dbfff442fd4647108c1eaf04d4cc8482408c8456fea48798f2d0355f0", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("319")
    console.log(result[319])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[320] = await instance.buyPreSaleTokens(accounts[223], web3.utils.toBN("2149830000000000000000"), web3.utils.toBN("8880"), "0x4987517ba9cf8bc2d7f759ba242f2f115805c8e7405f1cbce06b59d4c2a20733", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("320")
    console.log(result[320])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[321] = await instance.buyPreSaleTokens(accounts[186], web3.utils.toBN("1203466960000000000000000"), web3.utils.toBN("8880"), "30fbdd503d91195fc95593825aa8339f5f3f9ae20e83c75dc1fb71544755df70#DdzFFzCqrht8vyz9ufRsgFJKnKeLY31RTXriNhupfvcaWT4QLhWTekjdjanfJrjQDVHo8Vi9oK6QNJ5sgWpopKWoakx4LSMS8Mr5PbHb", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("321")
    console.log(result[321])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[322] = await instance.buyPreSaleTokens(accounts[158], web3.utils.toBN("300866740000000000000000"), web3.utils.toBN("8880"), "98f4cbcd62ba46f9c1a1f6b18a2dfc3b9d2fe56938cb879d717e91051b6bef0f#DdzFFzCqrhspets8J4JabdaWBkpMY1ppktQiB4AgZmSKuAGukG3ep4XvG1VjjcFjAUHeEAudqkWbsNLwUkRzuELF8LPcr9TvtLr3dVUK", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("322")
    console.log(result[322])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[323] = await instance.buyPreSaleTokens(accounts[53], web3.utils.toBN("64704200000000000000000"), web3.utils.toBN("8880"), "AC9DF05C0E9480046289427F9693E4DE1A5EFFE279F7DC3394EB60C1B9397195#12F1ETSSYwKNeFRkd77WESHgp6QozS6MmD", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("323")
    console.log(result[323])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[324] = await instance.buyPreSaleTokens(accounts[175], web3.utils.toBN("44499600000000000000000"), web3.utils.toBN("8880"), "0x8f49fcf1116a91bd62421e13c9239985ea9d60caa4b0e1996a690879a013cf5f", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("324")
    console.log(result[324])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[325] = await instance.buyPreSaleTokens(accounts[88], web3.utils.toBN("3262315120000000000000000"), web3.utils.toBN("8880"), "0x7f568b49d7951b400808953e803a0ed0bfc8b51120c0f78433eb42de47bc8a15", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("325")
    console.log(result[325])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[326] = await instance.buyPreSaleTokens(accounts[185], web3.utils.toBN("9888800000000000000000"), web3.utils.toBN("8880"), "0x6dd3e17b6ea818f7b2c76228ab1697233c27ad067f0389782c25da267095d975", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("326")
    console.log(result[326])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[327] = await instance.buyPreSaleTokens(accounts[135], web3.utils.toBN("2954280000000000000000"), web3.utils.toBN("8880"), "374467b3605680769e7c7e405b6f067cef1ef728757015f7b48ce555e226b289#DdzFFzCqrht1LQjMiKqe8KWQUBzd2Kj7gfXFgF73GzwYr36B4whzLoM4kyqp35epPAbvTin9NswyyRLb1LzQoTKS91UaCvavhdvXi86N", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("327")
    console.log(result[327])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[328] = await instance.buyPreSaleTokens(accounts[158], web3.utils.toBN("323359660000000000000000"), web3.utils.toBN("8880"), "328d530b7ba9cb048c7582348c4931f1b1e21bd2858d3d44bb2a5637885fbe7b#DdzFFzCqrhspets8J4JabdaWBkpMY1ppktQiB4AgZmSKuAGukG3ep4XvG1VjjcFjAUHeEAudqkWbsNLwUkRzuELF8LPcr9TvtLr3dVUK", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("328")
    console.log(result[328])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[329] = await instance.buyPreSaleTokens(accounts[23], web3.utils.toBN("594810000000000000000"), web3.utils.toBN("8880"), "add7f1d9742d3b8d1aceab83aa7fabe00269328d9c9e82ca7c4ce5220e0d5cfe#DdzFFzCqrhsh8ggyL4ZgzzNN4NMRwxgqWDf66BpadzH7yNho1bndxsfRszSH4kjXzBn5fw9S5mYBa5Ca8KKWkPP1R1qdhQinevLzctvA", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("329")
    console.log(result[329])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[330] = await instance.buyPreSaleTokens(accounts[109], web3.utils.toBN("9888800000000000000000"), web3.utils.toBN("8880"), "0x61cfe43d6c32654789c8a6136a09cd1a4af6ab1b6d42cbfaeb9e9a8e5b2dce01", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("330")
    console.log(result[330])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[331] = await instance.buyPreSaleTokens(accounts[229], web3.utils.toBN("98888000000000000000000"), web3.utils.toBN("8880"), "0xb4bc58fd5d68dddca67563c720ad61391c266527f72d60976247ee6e4ba8afdf", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("331")
    console.log(result[331])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[332] = await instance.buyPreSaleTokens(accounts[183], web3.utils.toBN("76559090000000000000000"), web3.utils.toBN("8880"), "9797C0F3502985D36E19B4FFFD7E169BCFD1C8D6C10735A1A112384BE09CC930#151bsjxbi7F6fiQMUbiwxD89dvzn2aLeiU", {from: accounts[39], value: web3.utils.toWei("0")})
    console.log("332")
    console.log(result[332])
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
