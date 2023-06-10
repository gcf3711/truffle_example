const FiftyFlip = artifacts.require("FiftyFlip")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await FiftyFlip.deployed()
    address = await FiftyFlip.address
    try{
      result[1] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("0.1")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.wager(false, web3.utils.toBN("97876366391217234055295967545666772260954424766879432202423665884691681403443"), web3.utils.toBN("6276849"), web3.utils.toBN("28"), "0x99d23737994a90cf515dd46eb961f907a62aaed4bacb166e2302709e967c3893", "0x48ad677b668fc64251e17173a554a7e7b3befcf0ddad940f5b243cf1f89fa8da", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("2")
    console.log(result[2])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[3] = await web3.eth.sendTransaction({to: address, from: accounts[0], value: web3.utils.toWei("1")})
    console.log("3")
    console.log(result[3])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[4] = await instance.wager(false, web3.utils.toBN("21487182416520168519447562780862332547521010799447244084026444132297145815363"), web3.utils.toBN("6277483"), web3.utils.toBN("27"), "0x5929ac8e4af44178d49d4386759285fd09a909b5dd7a7b57a759cb33abab2873", "0x36fdb6025bd37aef8951b01ae6a802369cd163cbf019baa44df4c3d99ef4e741", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("4")
    console.log(result[4])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[5] = await instance.wager(false, web3.utils.toBN("65543694880899726342099656453716118593327622842741706880724796757175804914951"), web3.utils.toBN("6277654"), web3.utils.toBN("27"), "0xb48ff3a7fb3489c1a5d240b2f14b61c3ec8d02d6da1e9da2f853abc2ce2f126b", "0x63ead31e33abf00f33ba4854b3405d572afd249c3ceeab39a34fa37b926cdfb2", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("5")
    console.log(result[5])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[6] = await instance.play(web3.utils.toBN("68756148004058138110188321990100972716123881047373608668832049004425810954564"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("6")
    console.log(result[6])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[7] = await instance.refund(web3.utils.toBN("21487182416520168519447562780862332547521010799447244084026444132297145815363"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("7")
    console.log(result[7])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[8] = await instance.refund(web3.utils.toBN("97876366391217234055295967545666772260954424766879432202423665884691681403443"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("8")
    console.log(result[8])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[9] = await instance.wager(false, web3.utils.toBN("52433737979561772525661656314243169212071315406252728149963205771652367514929"), web3.utils.toBN("6277857"), web3.utils.toBN("27"), "0x06028617e1e34c4fd3db19444ece4881726d12b5b92c9ee92fce16496edfbc2f", "0x5b06aef90b0cf412b4143c45a4ae554636654bb3f9f3250a3a2ee105bfdede85", {from: accounts[4], value: web3.utils.toWei("0.01")})
    console.log("9")
    console.log(result[9])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[10] = await instance.play(web3.utils.toBN("422237266092749751692497353079133683490720831702348644037471440768516584800"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("10")
    console.log(result[10])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[11] = await instance.wager(false, web3.utils.toBN("65360026612988397127616983125677949681657086726436162451596102638842284463098"), web3.utils.toBN("6277893"), web3.utils.toBN("28"), "0xaf7108827b904ca7573925cacafc63a964799def8b70cb13037e195204d70c84", "0x070a7fde4fbd215f781a48b5f3b6045eb4c5df49c45d680e92a254f7aaa3b58d", {from: accounts[17], value: web3.utils.toWei("0.03")})
    console.log("11")
    console.log(result[11])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[12] = await instance.play(web3.utils.toBN("4386188409559897601664982968875852302283087028869233702482264154936821412230"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("12")
    console.log(result[12])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[13] = await instance.wager(true, web3.utils.toBN("72875486266856712381703581189407577274045454737546646985402517611294247879826"), web3.utils.toBN("6277918"), web3.utils.toBN("27"), "0xc2ca7cbe03a01b84e7ae779328286c44e8b14e6efe500248501726de71d6b9bf", "0x6e0f038108d7b0d818563636265256de8002b2e3aaca8e7621bd5c8bb21c06a1", {from: accounts[4], value: web3.utils.toWei("0.03")})
    console.log("13")
    console.log(result[13])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[14] = await instance.play(web3.utils.toBN("19828105645620550755841010080722346879775929284550948862488556318071269498786"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("14")
    console.log(result[14])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[15] = await instance.wager(false, web3.utils.toBN("112307803492301807476098787545065272973257823658068604124083672208513878684792"), web3.utils.toBN("6277929"), web3.utils.toBN("28"), "0xfe09778ff7f1b135144c929d98a7ce9e94ae420b80f710ed5688374990b6758a", "0x36463cc775675abba19e6fe88ba48652139293c78a5b0c6dc9a03f1a1e7c8ef2", {from: accounts[17], value: web3.utils.toWei("0.03")})
    console.log("15")
    console.log(result[15])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[16] = await instance.play(web3.utils.toBN("110036249185290994847625456912835255299015556323005051475449057804320634733366"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("16")
    console.log(result[16])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[17] = await instance.wager(false, web3.utils.toBN("20585547836211891941015000554631487925620764162154172042634186049888593952252"), web3.utils.toBN("6277940"), web3.utils.toBN("28"), "0x92449e58684c61be31cb3f120018e81a2afcb1558aff20a329dcf20eca0cfdf7", "0x74917c3acc0fc3d615ddaad25946d2446aa225996809fcbe312dc1078622c02d", {from: accounts[4], value: web3.utils.toWei("0.04")})
    console.log("17")
    console.log(result[17])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[18] = await instance.play(web3.utils.toBN("64873044712552869989301653329071178300635739997539145391800454606537309699386"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("18")
    console.log(result[18])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[19] = await instance.wager(false, web3.utils.toBN("59465367945672863915531021610668676113220631021925324087843930003862339514644"), web3.utils.toBN("6277956"), web3.utils.toBN("28"), "0x335764c96955d6aa5fa0321bb3a3388734db6dd566cab98abbc02b4522cde200", "0x6860fac9817e90387208f515b4196ceffe504a49ab629121d4f7cc2a0c927621", {from: accounts[17], value: web3.utils.toWei("0.03")})
    console.log("19")
    console.log(result[19])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[20] = await instance.play(web3.utils.toBN("104521605887400409518485592405910935295544564379350099410589474504514897087396"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("20")
    console.log(result[20])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[21] = await instance.wager(false, web3.utils.toBN("21487949428226439280583041281534928714634831587672972504477212343534116275472"), web3.utils.toBN("6277965"), web3.utils.toBN("28"), "0xb63153004399af7eddea336aec9902530fb66b451065d4276f4ec2c6bd589c77", "0x244c772f79643a7db403c17a12104b15c1841cdc7fff2475252a0717e768de48", {from: accounts[17], value: web3.utils.toWei("0.03")})
    console.log("21")
    console.log(result[21])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[22] = await instance.play(web3.utils.toBN("38141467165133809037235266083272441619895792177393274109657385188207033312245"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("22")
    console.log(result[22])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[23] = await instance.wager(false, web3.utils.toBN("94492942964234118534344030851633355704405534909658330366360583751358359715441"), web3.utils.toBN("6278065"), web3.utils.toBN("28"), "0xd84a76179f3f4e2b6500b5e30d7d0ace3241b581027ce3d8ee2d8460d43bce09", "0x600a9216b99afb9fff6c87c99f82c7a3e808346b508c56c2ca4f2ff29b818f9d", {from: accounts[17], value: web3.utils.toWei("0.05")})
    console.log("23")
    console.log(result[23])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[24] = await instance.play(web3.utils.toBN("95847963896794926121453048849752164584665144119035077562506244118224641299384"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("24")
    console.log(result[24])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[25] = await instance.wager(false, web3.utils.toBN("30207521022419555340606336878227748119023344994013902613916505178223399819227"), web3.utils.toBN("6278075"), web3.utils.toBN("27"), "0x8e3390738cebb2c0a4b411598bef1f3bb59c30d9e8f5e0dc65285374dad501a6", "0x6e75b9ee52a52f569896ce1275ed4edcf49f21bc95a463e2d46846819587b52d", {from: accounts[17], value: web3.utils.toWei("0.1")})
    console.log("25")
    console.log(result[25])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[26] = await instance.play(web3.utils.toBN("46903324321060579456973304614686738374374638339083166990877249822218822228450"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("26")
    console.log(result[26])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[27] = await instance.wager(true, web3.utils.toBN("4106214570646048984673568316589352446979718154542281186394067871965852883446"), web3.utils.toBN("6278149"), web3.utils.toBN("27"), "0x56109b0886b77ed462d35fe69b36e85650d1c9de983b1b1ceb2a9c95267f24f2", "0x0ca1b41be9df7d92eee34982290fde3ee984a381dbc943bbf5b6662900bab8ba", {from: accounts[17], value: web3.utils.toWei("0.03")})
    console.log("27")
    console.log(result[27])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[28] = await instance.play(web3.utils.toBN("31718039108186904447472108281831681327055447502153971494323191487907013484874"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("28")
    console.log(result[28])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[29] = await instance.wager(true, web3.utils.toBN("104171432428423944752458452084220576528926748310573212367055546430317537469828"), web3.utils.toBN("6278163"), web3.utils.toBN("28"), "0x51c1f35f0779014bd7743349d7cf23f6e63dd3e08cbd9327270d54f044362ded", "0x2a77b288bb4f706e10995699a40797558ddbb2101a832bdc6a527b2e674436c9", {from: accounts[17], value: web3.utils.toWei("0.06")})
    console.log("29")
    console.log(result[29])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[30] = await instance.play(web3.utils.toBN("35769932306636159916672980724366956956706290829696686711581496817207277942326"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("30")
    console.log(result[30])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[31] = await instance.wager(true, web3.utils.toBN("44505506247037736565506329478479671859157179133093679336063782679333510701234"), web3.utils.toBN("6278187"), web3.utils.toBN("28"), "0x7c0b0ae6463f9d9dff048ed2857a1d98e8de112b4bd00562a2d7df729927c987", "0x4efd8b6eab298682a49cd788a0da8c2b34b776f504a9b3ddc25f0571c7e5dc74", {from: accounts[17], value: web3.utils.toWei("0.1")})
    console.log("31")
    console.log(result[31])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[32] = await instance.play(web3.utils.toBN("47463378068685818830920327908450025344167269813399765497426787321135646448838"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("32")
    console.log(result[32])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[33] = await instance.wager(true, web3.utils.toBN("16979708137461830833973241492864838147535825923690116112184577498999640413346"), web3.utils.toBN("6278208"), web3.utils.toBN("27"), "0xae9048eb89363a787e6f782bee360c0420d5706f8e0be147e543c75a4a1f7e8c", "0x13c9c4d15b800aef43fda3a2539b7d95dc69f28765f2323c2fd56c60975118d2", {from: accounts[17], value: web3.utils.toWei("0.1")})
    console.log("33")
    console.log(result[33])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[34] = await instance.play(web3.utils.toBN("98221355416277532528928823680911254131400885884180730078724237740206309081740"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("34")
    console.log(result[34])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[35] = await instance.wager(false, web3.utils.toBN("45765199914035072795398231858405917587764007247950603606755614324659133787182"), web3.utils.toBN("6278317"), web3.utils.toBN("27"), "0x1f423ed9f847c9dc8d259fdba6a7f1714fbc9f9d9ead3e8c5ce5baad09982fd1", "0x527fdea59fa8429f35ebb84887a505cd4bd5d914e50832323a66b7b1291d4b02", {from: accounts[17], value: web3.utils.toWei("0.06")})
    console.log("35")
    console.log(result[35])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[36] = await instance.play(web3.utils.toBN("105380463250032192271661659407189714183190369504838686864105811898839851032598"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("36")
    console.log(result[36])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[37] = await instance.wager(false, web3.utils.toBN("90059815500377732915989961638202689204163670402957411493848869955162500896154"), web3.utils.toBN("6278687"), web3.utils.toBN("28"), "0xcc2e265cc1a743ba4f1d2af615993c19a0e7fb4c9654d04450c3baae95cc02f1", "0x12095017acd13db32be8f50ab1697376d86563148f227662ce3010ce887562e0", {from: accounts[0], value: web3.utils.toWei("0.03")})
    console.log("37")
    console.log(result[37])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[38] = await instance.wager(true, web3.utils.toBN("78616262863033940036051430702168366775697559446740299103845680142777589218498"), web3.utils.toBN("6278694"), web3.utils.toBN("27"), "0x27d6e35bb447e343a75e36649c71579b0f714ce019d68e6cecef74d961c60e10", "0x0e84fd1691871976f6690988b707daaf70e3af9206c0b5f74531968144bbe3cc", {from: accounts[20], value: web3.utils.toWei("0.01")})
    console.log("38")
    console.log(result[38])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[39] = await instance.play(web3.utils.toBN("6396461028418324497302779827802871491124311564434413283766844323450882429349"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("39")
    console.log(result[39])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[40] = await instance.wager(false, web3.utils.toBN("59224592346612490632716128934455200356595842683254985009359154234688667660881"), web3.utils.toBN("6278715"), web3.utils.toBN("28"), "0x426f8ccc6093e36b3b9083699b8be4b4ca0d70d3598688dfead7f66a20b079ab", "0x7d80ecca11c643126e745f8e7cf3a474a963444f305313e5bf9544b2fc966681", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("40")
    console.log(result[40])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[41] = await instance.play(web3.utils.toBN("99824422091356059867792573274050754393979740540629553273027756747779814443835"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("41")
    console.log(result[41])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[42] = await instance.wager(false, web3.utils.toBN("53628519313553761280968708440424416176198963645048269853886399879475254215107"), web3.utils.toBN("6278744"), web3.utils.toBN("28"), "0x21ee415b1792cb0d3a4070a58577e68de28e436831edfe0a51d514bed52bff1b", "0x57a43620c4b65aca998e178b063a25ccb328a55f21d7e2154df622d489ca0393", {from: accounts[0], value: web3.utils.toWei("0.03")})
    console.log("42")
    console.log(result[42])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[43] = await instance.play(web3.utils.toBN("58232518305008312956456679997142634029777669236757830528536061062356158458963"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("43")
    console.log(result[43])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[44] = await instance.play(web3.utils.toBN("64340098902006210011034596025226656240755652617907466384629819994633394118017"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("44")
    console.log(result[44])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[45] = await instance.wager(false, web3.utils.toBN("16651675780446874367641229879792706475383022072427678708883807317193466393724"), web3.utils.toBN("6278783"), web3.utils.toBN("28"), "0xba7cd332c318e71b40b3e9bf13477a3a07fdb0851dc741fa16b29a9febe65cb3", "0x4410d57e3de3dcedc3c02884390c791d8da97682a10c70073261e9d38650c660", {from: accounts[0], value: web3.utils.toWei("0.03")})
    console.log("45")
    console.log(result[45])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[46] = await instance.play(web3.utils.toBN("27727928913502466130364231192899028995476535053560416187401672235179913379026"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("46")
    console.log(result[46])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[47] = await instance.wager(true, web3.utils.toBN("27376376463359122103547438224007302192050079975866519497677588506432406631851"), web3.utils.toBN("6278804"), web3.utils.toBN("27"), "0xbb182ab02aa25746301e228f3892cc6ad95ef9aa13f3da23884dfa63299e3330", "0x228a5d3f9b966b9eefc143508ca27a4828e76fda8789c00b89bd954a111c56fa", {from: accounts[18], value: web3.utils.toWei("0.01")})
    console.log("47")
    console.log(result[47])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[48] = await instance.wager(false, web3.utils.toBN("75440531068205237819227597637711537346092429460455581880436766818371349199457"), web3.utils.toBN("6278877"), web3.utils.toBN("28"), "0x64c1e5f3f98d940c6ae3dfdb5017d1e73a8e17127168551ed68c83a5b07382b6", "0x011afed1934d92551d3280447c607b4a6bc54a38c994cf6298a1019caf8b53c8", {from: accounts[10], value: web3.utils.toWei("0.05")})
    console.log("48")
    console.log(result[48])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[49] = await instance.wager(true, web3.utils.toBN("62986062841593472012636426102325427935426808661704586214355623489987137941803"), web3.utils.toBN("6278897"), web3.utils.toBN("28"), "0xd90dfff293299d276c37c68b99945580e6c63224e20337463ba399d84b21c8ea", "0x6823fafb87a0983138802920754630b5f1f6bfa9fd60ce97fc77934fcfb6a57b", {from: accounts[10], value: web3.utils.toWei("0.05")})
    console.log("49")
    console.log(result[49])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[50] = await instance.wager(false, web3.utils.toBN("30561031453318673383236676703599586415454883629357040669105016785590350499435"), web3.utils.toBN("6278896"), web3.utils.toBN("28"), "0xc85371221b2557a6ff7ecd0d2857babe01705cc80f656d0a815fe1c99631ccbf", "0x17eb33f02688432cb4d8c741c40dc40e72e5362c1c80f719d3b53bfbe1120beb", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("50")
    console.log(result[50])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[51] = await instance.play(web3.utils.toBN("53721219429535618507078613622803753438086987069137454245584682397367893899103"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("51")
    console.log(result[51])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[52] = await instance.wager(false, web3.utils.toBN("35883208048853422107782242744417705463880678278334531785212842621488216848365"), web3.utils.toBN("6278930"), web3.utils.toBN("27"), "0x45f820dc39fc6c18c7fd32626a5234ce8922a3acaeb0bad1037a95d761dd621f", "0x050aad6769f20c52fff991b2af6662934e6434df7f325a117dc80c1fe256b849", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("52")
    console.log(result[52])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[53] = await instance.play(web3.utils.toBN("8019284379143603846773478574961908930880649586320235865447484423748691773601"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("53")
    console.log(result[53])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[54] = await instance.play(web3.utils.toBN("89355636793260972354694081927750009442208723643874173640960820003245357123003"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("54")
    console.log(result[54])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[55] = await instance.wager(true, web3.utils.toBN("3920514905065005382857598270480852726599000844822854940507954309878539042455"), web3.utils.toBN("6279015"), web3.utils.toBN("27"), "0x16a742c5062ada5661d774a747c9bf830868073aa17dd5c6a7859dc0296ead27", "0x2996c3273f1351f0f8b1c983afdcc9bf273b8f3351399f494b2b8581ed1bdfcb", {from: accounts[17], value: web3.utils.toWei("0.04")})
    console.log("55")
    console.log(result[55])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[56] = await instance.play(web3.utils.toBN("18195083603628177641533242590384972009399301823072621093881156620322905646899"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("56")
    console.log(result[56])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[57] = await instance.wager(false, web3.utils.toBN("66847162649857824892208731536074673918531880047350688871736744029309808647337"), web3.utils.toBN("6279023"), web3.utils.toBN("27"), "0x2257343ea812079096715726d718f613cb3d20c60d1021adca5f00cabd014d2b", "0x039061c16bbab5ec99f594f580dfe99eaf26d7362909ac61283d2eb6168c4f9d", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("57")
    console.log(result[57])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[58] = await instance.play(web3.utils.toBN("97794018353040378265549342916717449587959098555999258123356370515141020199346"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("58")
    console.log(result[58])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[59] = await instance.wager(false, web3.utils.toBN("45845277092141380562318274089750762827026553747561509114143433560009004820798"), web3.utils.toBN("6279060"), web3.utils.toBN("28"), "0xebdd49f16c91fa96542c8e8ba5b895334c3eb3d350977f3e06dccadbb806891d", "0x6fdc78dec02ab03560cfcad01cc57127647c49895bdabe08fe31984f05e3a335", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("59")
    console.log(result[59])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[60] = await instance.wager(true, web3.utils.toBN("50345057764842066269115048481719462846243648807061511768774497935207090477432"), web3.utils.toBN("6279072"), web3.utils.toBN("27"), "0x62bd69f4bc088532af9f5c673002588e3cee435288f2ca8815a26e8fc7e03e41", "0x107ffcc57b5da7d1835e7224ab75ec66c7ed86aa9b8fcaff17953c82ec62a1f0", {from: accounts[17], value: web3.utils.toWei("0.07000000000000001")})
    console.log("60")
    console.log(result[60])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[61] = await instance.play(web3.utils.toBN("13522746942457294021213236072559355702438902714119927553346351316602545085570"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("61")
    console.log(result[61])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[62] = await instance.play(web3.utils.toBN("11644779404597648747114637451637896726180192573015170200623589480367873902428"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("62")
    console.log(result[62])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[63] = await instance.wager(false, web3.utils.toBN("38221646685327897410123759877427872674610599747298889409300616567620288365355"), web3.utils.toBN("6279137"), web3.utils.toBN("28"), "0x06d7bde92c6a4bd58c359836aa70ea9a313dc67f4535fefdf0043311dfaa88a1", "0x621f973ea8a1939cef33aa446a8c119460ac8558f1658c222a14016cd5925049", {from: accounts[0], value: web3.utils.toWei("0.03")})
    console.log("63")
    console.log(result[63])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[64] = await instance.play(web3.utils.toBN("96955512447279744649983240121985269715704329408973900703083602432933152504290"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("64")
    console.log(result[64])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[65] = await instance.play(web3.utils.toBN("96955512447279744649983240121985269715704329408973900703083602432933152504290"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("65")
    console.log(result[65])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[66] = await instance.wager(false, web3.utils.toBN("28182836587792966022446406758629179159528555738707293329917506940394355650198"), web3.utils.toBN("6279528"), web3.utils.toBN("27"), "0x38bd358073cfea2165b452fdb8fb6713f3232f24c30a52225811c345903d4282", "0x59091f2ed8befbfec0e17d6a386d57ad71fecec95723366e60a024cc1602d977", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("66")
    console.log(result[66])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[67] = await instance.play(web3.utils.toBN("4964909894444179210855223974087873460660147942173903176264711260407982141170"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("67")
    console.log(result[67])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[68] = await instance.wager(true, web3.utils.toBN("49753236590047623758973911311507313430396079671703323819729033129790186330450"), web3.utils.toBN("6280009"), web3.utils.toBN("28"), "0xb9fd36b7655cdd629e1f57d481ff9b31e03b1d98a17c3fce4d7c0d31562b737d", "0x5130af82c5d148694c79045cd5778f8b249a5c7a24f75942eb0a842ba6d8e55f", {from: accounts[4], value: web3.utils.toWei("0.03")})
    console.log("68")
    console.log(result[68])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[69] = await instance.play(web3.utils.toBN("27195539121994241586189008573209629730030508616893902099496730773761835099919"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("69")
    console.log(result[69])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[70] = await instance.wager(true, web3.utils.toBN("63536478822943792855268131082227214303624117608934609451921253379139984091772"), web3.utils.toBN("6280025"), web3.utils.toBN("27"), "0x086ae25f3db18c0e3f1a651dbbcf1b5be2ae2883197ebccb7a6784752ed9a561", "0x2324645e20dbff2040852055a3ac78040442e224e9504138b695bdef5c94eef7", {from: accounts[4], value: web3.utils.toWei("0.03")})
    console.log("70")
    console.log(result[70])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[71] = await instance.play(web3.utils.toBN("19016597316082881532873910857919328596977790016593861473244633819027284419172"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("71")
    console.log(result[71])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[72] = await instance.wager(true, web3.utils.toBN("11640686623893046934662893614627213265963138078041447239053394456798940084343"), web3.utils.toBN("6280051"), web3.utils.toBN("28"), "0xecc1e2d6cac0ed0a098ee6bdcedbb87d7cc234252be9592987dfa7c0ce0b6668", "0x1e17c09365cef75797a6e555c4ba502fc0cbc3b7e2d07dbdbc32f2d47486fc94", {from: accounts[4], value: web3.utils.toWei("0.04")})
    console.log("72")
    console.log(result[72])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[73] = await instance.play(web3.utils.toBN("12602342181313178813624713426803425779532351017885112097072406363593294556159"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("73")
    console.log(result[73])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[74] = await instance.wager(false, web3.utils.toBN("111171713560500045234234115401967690170707222301467945653391269439328218265352"), web3.utils.toBN("6280360"), web3.utils.toBN("27"), "0xc2cea3883d6c96e8225d5d200796a7920c87b373d285884af476437e91db01dc", "0x3f71a0518298b556c351240db1a1e36323ff5e84572d9b693b6b2939a8b2c99f", {from: accounts[0], value: web3.utils.toWei("0.03")})
    console.log("74")
    console.log(result[74])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[75] = await instance.play(web3.utils.toBN("70477931568373917057135678069606879650566351368479055428766494317860105762380"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("75")
    console.log(result[75])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[76] = await instance.wager(false, web3.utils.toBN("83120102326251981429587355349158341112337550972659897335298680986025980222403"), web3.utils.toBN("6280491"), web3.utils.toBN("27"), "0x35109294d0ec96b5670748ae5da3dc9fc5d65162e58fd403179af32964e879f4", "0x271626b0db5e1509c9bd8a942a00343006778f708635dd4790f1487e3d7aeb10", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("76")
    console.log(result[76])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[77] = await instance.play(web3.utils.toBN("13652213175292178039417938713396712666859629440907078647687531532382591133402"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("77")
    console.log(result[77])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[78] = await instance.wager(false, web3.utils.toBN("3679919023337703747362531503330842860085518743444697985354296821788218467839"), web3.utils.toBN("6280508"), web3.utils.toBN("27"), "0x64ca5b5ebf61b7731a42a031b457ee40aec0ae3ecfbee64d08403f401286df7f", "0x002691134b3c5ea7c626582dc57ead8fd3d1fa65bbb60253af7f7355f96fb6e3", {from: accounts[0], value: web3.utils.toWei("0.03")})
    console.log("78")
    console.log(result[78])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[79] = await instance.play(web3.utils.toBN("23307873103911343864016201335888609417058838502293850550319964347517619102730"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("79")
    console.log(result[79])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[80] = await instance.wager(false, web3.utils.toBN("93157035281635092547048531063219817583947238057513070029025793477469629679500"), web3.utils.toBN("6282625"), web3.utils.toBN("27"), "0xe6b19c5725a6a93c7f6ef961edd4e42c9a936f8ac40fca75a6bebab25d35d286", "0x339a765e0818a128dfe4fecf30b854c9ea87bbc33f92a8657f2940cb2406169f", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("80")
    console.log(result[80])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[81] = await instance.play(web3.utils.toBN("18654284156902461783076523871208026948537158543376199524291398064102028169990"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("81")
    console.log(result[81])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[82] = await instance.wager(false, web3.utils.toBN("11683463370473606911368977198150436434346853519372601189734383633872132731219"), web3.utils.toBN("6282646"), web3.utils.toBN("27"), "0x2bc0eddf3b9a6f942d852c651b5185fcafefc446debd36baf1f1050f9596f2e4", "0x4388b793680da86174cd099202419c4d4faee14e7d3f96085c3fc32f4e73b8e9", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("82")
    console.log(result[82])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[83] = await instance.play(web3.utils.toBN("104526522066974767399037088356824655806447067394793071072580836742043326133123"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("83")
    console.log(result[83])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[84] = await instance.wager(true, web3.utils.toBN("62332280803614990222008539105010989272163228358826858205750860832820755559931"), web3.utils.toBN("6282705"), web3.utils.toBN("27"), "0xc875d2ba8657064ba2f1c00a6656b36dc88271cf0b976626e5cbb0cdf605d186", "0x4e165afc6ffa7c30025542172d1902863e1e914bedf9d8243d1d017dc6d8aa61", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("84")
    console.log(result[84])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[85] = await instance.play(web3.utils.toBN("87033879660639478144204206775063021840367069750100057160471885653386688083378"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("85")
    console.log(result[85])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[86] = await instance.wager(true, web3.utils.toBN("37170812769800160017539249330994064140208770716825357884986979206328425587406"), web3.utils.toBN("6282760"), web3.utils.toBN("27"), "0xf34f1d3832634cd610318a35a875bc88039a4b3822954ddfe9cd141a52785999", "0x355e5fc63a04200769aef8ba3e9da7ff2bed30db0420d7ac6824cf01545cf168", {from: accounts[0], value: web3.utils.toWei("0.02")})
    console.log("86")
    console.log(result[86])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[87] = await instance.play(web3.utils.toBN("42114694246019567162706649509576993431492128470024120810624471637052144643787"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("87")
    console.log(result[87])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[88] = await instance.wager(true, web3.utils.toBN("14859648956826246325899609151473822906719703682568890220628775502174711876127"), web3.utils.toBN("6282809"), web3.utils.toBN("28"), "0x717420cf2d72c5bd07bf2af02c107c0fcffcf29f939d0cdf299845e0456e79bc", "0x402904fad003f8f637111ef5aeb0f8c4bf733bac143981ef47b3a2b927ec2ef7", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("88")
    console.log(result[88])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[89] = await instance.play(web3.utils.toBN("56541207682090551291205646751198812170591382165678746015746827068856002420429"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("89")
    console.log(result[89])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[90] = await instance.play(web3.utils.toBN("42114694246019567162706649509576993431492128470024120810624471637052144643787"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("90")
    console.log(result[90])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[91] = await instance.wager(true, web3.utils.toBN("40018142374867329609468939410226648694995183408974004081655775282821451579041"), web3.utils.toBN("6290504"), web3.utils.toBN("27"), "0x47a4bddb9808d1a431c01caf6d913d0dfbbc1480c56b621ed916f5b0f9564581", "0x4e6b48e4b0fc555ad1760b1624420cf314636b13a3fd4568bfcbfe389ab7e7fb", {from: accounts[4], value: web3.utils.toWei("0.04")})
    console.log("91")
    console.log(result[91])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[92] = await instance.wager(true, web3.utils.toBN("111593944022248320406888091302426756951883017490601447295739246077684398684049"), web3.utils.toBN("6290505"), web3.utils.toBN("27"), "0xdb377ea44fb4254c1401833f9531c042565ca9321b310145425dcfe5327c8cd1", "0x10aa3097521a0b80e62cc393839cb9ce34264eec536a7c59a1528f375aab6ec2", {from: accounts[4], value: web3.utils.toWei("0.04")})
    console.log("92")
    console.log(result[92])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[93] = await instance.wager(true, web3.utils.toBN("76843613769779242585977909514903056299504103012021651278607073492635913467591"), web3.utils.toBN("6290505"), web3.utils.toBN("27"), "0x8fed1614400959645d9709e4a752c39b7611164df14a8d97d173e5f6d64dd788", "0x50d0104c08a3a54018ea0201f89c1f7d2f914083ae1e06404cffe32eb2c2b4c1", {from: accounts[4], value: web3.utils.toWei("0.04")})
    console.log("93")
    console.log(result[93])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[94] = await instance.play(web3.utils.toBN("35709689050106899488405489204506596453411337084914781393542357831062829933619"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("94")
    console.log(result[94])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[95] = await instance.play(web3.utils.toBN("27725366046920373918015243082664789260806749890949496967000378200720794163521"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("95")
    console.log(result[95])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[96] = await instance.wager(true, web3.utils.toBN("56775031137037693700072771793612707651928832476136570860718712203361731035398"), web3.utils.toBN("6290548"), web3.utils.toBN("28"), "0xf9efcf4fe7438ab46a152d96fc487adcbb40a3aa25ea31b3c5ecaccc33349165", "0x7246f3b1bd4b3c2c5c7fa027b59e6d03e3b170acd0f803d31893a02fae608434", {from: accounts[4], value: web3.utils.toWei("0.01")})
    console.log("96")
    console.log(result[96])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[97] = await instance.play(web3.utils.toBN("37461034461134255886878396400080254341131244883291960618817282253018311122942"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("97")
    console.log(result[97])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[98] = await instance.wager(true, web3.utils.toBN("14527673387823261368605984017036522511802861678536442600301891324163073096351"), web3.utils.toBN("6290636"), web3.utils.toBN("27"), "0x9d92a9b51a9062108551be9ff437ba794a4c2f07cc728a9a063177187bbaaa2e", "0x5119b10c938d38522cdde1a7763b036dd5fb47374b3fc4dd65456361266e4a4b", {from: accounts[4], value: web3.utils.toWei("0.03")})
    console.log("98")
    console.log(result[98])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[99] = await instance.play(web3.utils.toBN("15038169271972714307176273287801420951040004566767400186833533642071954369068"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("99")
    console.log(result[99])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[100] = await instance.wager(true, web3.utils.toBN("94308656326517252707179683974010265212723269056542151787064714875607589574194"), web3.utils.toBN("6290664"), web3.utils.toBN("27"), "0x15eee1b61b6fb3d9107f4a2e49e8588e79c96bd886dbed065eb48d6f651df59d", "0x1cdbac0d35f6692b6c8342394ab3999d3527f44a430ab8a8fe22b578018b36d9", {from: accounts[4], value: web3.utils.toWei("0.03")})
    console.log("100")
    console.log(result[100])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[101] = await instance.play(web3.utils.toBN("47851770337898425435987030301966535039908467934531157253327152999850081167133"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("101")
    console.log(result[101])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[102] = await instance.wager(true, web3.utils.toBN("89245955541542977815216011344463656241282620030025001027082977554161292509247"), web3.utils.toBN("6290680"), web3.utils.toBN("27"), "0xa05042a258ac70561219a97e37a59422871c3048b79aed23d0b627adc275a766", "0x3ae25f2b0fdefccceffd1f9b3fc4281db98fb4cac7325469daa7a09f63721422", {from: accounts[4], value: web3.utils.toWei("0.03")})
    console.log("102")
    console.log(result[102])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[103] = await instance.play(web3.utils.toBN("73178368745044231296229164618827135298037120256925262624090227935715393961603"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("103")
    console.log(result[103])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[104] = await instance.wager(true, web3.utils.toBN("79569527475211706137386053067963260859133237593429308562325334835182952142648"), web3.utils.toBN("6290708"), web3.utils.toBN("27"), "0x2baedb9467df1d420de0692dfe83097a4a240b7647b778b7020ef98c41f7a6aa", "0x3b49ef7ac157e087eff134a4d3778e8036189b7c7eda63e3affd04d13a592475", {from: accounts[4], value: web3.utils.toWei("0.01")})
    console.log("104")
    console.log(result[104])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[105] = await instance.play(web3.utils.toBN("102939062220356515446044894791506620283887511897743595969908493497950547119578"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("105")
    console.log(result[105])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[106] = await instance.wager(true, web3.utils.toBN("45687830376478231493665849089142837411576919431611967884582176580124386603667"), web3.utils.toBN("6290723"), web3.utils.toBN("28"), "0xe9d51ec0d7299a05cf466b9ab07b5ff9a743d21d7776afe49dcf9c5fd4b7b0a2", "0x41f2be2467b83ecb82b7c0165be56815e9672e85ae9dd06b7d00b791e4ecffd9", {from: accounts[4], value: web3.utils.toWei("0.03")})
    console.log("106")
    console.log(result[106])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[107] = await instance.play(web3.utils.toBN("63219111981874790605469288384739150572520602664691264960177778609252680322175"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("107")
    console.log(result[107])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[108] = await instance.wager(true, web3.utils.toBN("53607733214558145753235199570329188859291755145817566802413523814359602444183"), web3.utils.toBN("6290746"), web3.utils.toBN("28"), "0x8a4523efc22e6923cc59e494bfc7b0944137d6c9b878f1b72ffd3a2c541efee0", "0x780ddd7d3273d8f8968a1a6c80cf4d8cc083501783d46ed86d42adaf9da1231c", {from: accounts[4], value: web3.utils.toWei("0.03")})
    console.log("108")
    console.log(result[108])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[109] = await instance.wager(true, web3.utils.toBN("108491569178623915968636362685835492856204988055431688462708476805171679231986"), web3.utils.toBN("6290764"), web3.utils.toBN("27"), "0xe060cf3c92351b83e24ab8b9bc3483a45b076e3883483b531eb1c5d30ebc64e2", "0x3bdbc07787a3fbf5a9308d9036a6af1a68c4323a996174ef1fd4b300b03dce29", {from: accounts[4], value: web3.utils.toWei("0.03")})
    console.log("109")
    console.log(result[109])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[110] = await instance.play(web3.utils.toBN("27922242304530643188561770534760503417746798768566145672673633252626836030543"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("110")
    console.log(result[110])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[111] = await instance.play(web3.utils.toBN("58723558956321286576730888105351213713781923087337045305108519358837097790880"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("111")
    console.log(result[111])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[112] = await instance.wager(true, web3.utils.toBN("35323800673093771646694092357260665661402458824798003426807923801943892988152"), web3.utils.toBN("6290812"), web3.utils.toBN("28"), "0x254bf8a0e12f63c5683988ff91871e5b102668e6399135a5d78c0d6ed97e2223", "0x185980a34911823f362f0159173cd0c54fd2bf6206ac6fcc39081534e6d2b81a", {from: accounts[4], value: web3.utils.toWei("0.02")})
    console.log("112")
    console.log(result[112])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[113] = await instance.play(web3.utils.toBN("56359644295094020306910785895458936059848270940434364326256049541853506228559"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("113")
    console.log(result[113])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[114] = await instance.wager(false, web3.utils.toBN("13987121868810386546895115992536769689507224208748816945232597714245861088693"), web3.utils.toBN("6291076"), web3.utils.toBN("27"), "0x268a1c40f33c6770fffb1884b070b39d2e8087eaffed67c28ed6f6e193e64a7b", "0x5be71a9ac2e1dcaf9cc260bc607f3b3a9b4902b53a1aa781849de1cd299ab268", {from: accounts[21], value: web3.utils.toWei("0.01")})
    console.log("114")
    console.log(result[114])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[115] = await instance.play(web3.utils.toBN("110390073556581700818348286468650806900756883458396002865640876933857497902513"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("115")
    console.log(result[115])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[116] = await instance.wager(false, web3.utils.toBN("65575730409214866089306762446395330237086211217297788891481978048408414865062"), web3.utils.toBN("6291077"), web3.utils.toBN("27"), "0x1902a0f026e4829d4e31a8188b87b2887e227595e35ebd9a77f4c314969accf3", "0x6b8951305902a8b0b2c25448f444e6f0425a9200fa2a531a9c17c612f5d9d0c0", {from: accounts[21], value: web3.utils.toWei("0.01")})
    console.log("116")
    console.log(result[116])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[117] = await instance.wager(false, web3.utils.toBN("76741105833104333373837612378203747393401207226646729068939208190766166731718"), web3.utils.toBN("6291246"), web3.utils.toBN("27"), "0x00266c6855a39546c013594dc96848551a120349bab46a17bb50227f2674dc8f", "0x52c3cd42dfe727fef10180cda3ebbc5227f7fa062d7b2b6f7a61fb4dd131fb59", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("117")
    console.log(result[117])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[118] = await instance.play(web3.utils.toBN("78167449265277983310079367100582292343000542269731685767033026638683959311365"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("118")
    console.log(result[118])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[119] = await instance.wager(false, web3.utils.toBN("17316283046916749516843784590206275361979163252944153917562515498738796273559"), web3.utils.toBN("6291261"), web3.utils.toBN("28"), "0x37b3e8d8ba4a0a154efadfd5351b2be82b00aa385fc5e6c1d433e022c9303c09", "0x0f9c232d66953564505358acb8bb040dd26671c5c0d663c5d1b4853f310561d2", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("119")
    console.log(result[119])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[120] = await instance.play(web3.utils.toBN("51554297565065729862431396149036252452714431157716743295974736013252347397676"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("120")
    console.log(result[120])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[121] = await instance.wager(false, web3.utils.toBN("198539131309908848224122979035832537088619128461659767819895201426295903995"), web3.utils.toBN("6291272"), web3.utils.toBN("28"), "0x87e5631ee613d25288971e45b8cb9a9387cb1ee13fed7375846697092bf2fbcd", "0x77fc38f29f96e6be7ab7cc983e3204b39a8d8480f76d3457dd9e18ee7b28c707", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("121")
    console.log(result[121])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[122] = await instance.play(web3.utils.toBN("67038569466368799086948115935784647280389955284691460401487871265546785751"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("122")
    console.log(result[122])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[123] = await instance.wager(false, web3.utils.toBN("12853642590306657288534595157013873271977377272278500282068299417667606592146"), web3.utils.toBN("6291290"), web3.utils.toBN("28"), "0x87f2f396f8e6fbd4c207eee221ac2b626c3adaab93e4dde916d048ebc2386867", "0x34939682bc524c1e41dfe8c0d953cad788e091a544ced96f39d9fe21260229c5", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("123")
    console.log(result[123])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[124] = await instance.wager(false, web3.utils.toBN("83169339158935768876918702184173601182089979173229885406332155456132844443606"), web3.utils.toBN("6291296"), web3.utils.toBN("27"), "0xde3676332521a60cf5c6628a70c7018507a1829404d8f908c5d4cbef2b57e05a", "0x32542afae458c7ee2400fd09cd050e9bf7c5a10207eaba9443533bc98da295f4", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("124")
    console.log(result[124])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[125] = await instance.play(web3.utils.toBN("36217582286413930639513012101444149149283478014921829545796047495573569310866"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("125")
    console.log(result[125])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[126] = await instance.play(web3.utils.toBN("22219148311359589350995696644402442516791878004125922846137492867204906615827"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("126")
    console.log(result[126])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[127] = await instance.wager(true, web3.utils.toBN("17590589637303945467683464603458763271117893055249196233322565046860099025258"), web3.utils.toBN("6291313"), web3.utils.toBN("27"), "0x53f551c733a37ff801c1789b66534c25681bba7ca1c2946ff114325388927e67", "0x4fc2238910ad8f756c714db723f7bb4a09a5a54ac2ad627f53714f6dd67892bd", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("127")
    console.log(result[127])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[128] = await instance.play(web3.utils.toBN("90980890779354546267558292045206569513519981043208499483649300864469883016259"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("128")
    console.log(result[128])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[129] = await instance.wager(true, web3.utils.toBN("24494151918569684243165417206901089244293146234614974394664902974785490084565"), web3.utils.toBN("6291325"), web3.utils.toBN("28"), "0x6b33df4ac3f179d42cd229e8aac3563d365485803af94951df4d38ae3e7b9c89", "0x500920e0fd21870a5cf60ed4b6d2f337db7b44fe9dc986b81133ca16423e808a", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("129")
    console.log(result[129])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[130] = await instance.play(web3.utils.toBN("60394828901560300191422613603096812248031059156959148556332949821762947787769"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("130")
    console.log(result[130])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[131] = await instance.wager(true, web3.utils.toBN("109383234084050633502754767054013918497558685083794660654609318519200986297785"), web3.utils.toBN("6291365"), web3.utils.toBN("27"), "0x6b578e4bbf29dababcf494c6cbbdb28f22983e5d03bed2008449544f685fd101", "0x2c66eb67628b4953ccd808a7ab00e1445a58ba88a4ca31ac732fa1566fdc65ad", {from: accounts[0], value: web3.utils.toWei("0.02")})
    console.log("131")
    console.log(result[131])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[132] = await instance.play(web3.utils.toBN("6537467932017069662765470468151515882153520016546745062089746405315079801052"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("132")
    console.log(result[132])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[133] = await instance.wager(true, web3.utils.toBN("24645214394028920954721377293326562730225194560623291895530358764416757088585"), web3.utils.toBN("6291395"), web3.utils.toBN("27"), "0x5a888d6a3b5b540d422c4486e715a493bfd301513dd4e62f94b379fc7ccdbf43", "0x14357a2471b6eb6a48aa4a9da6cd454337931af7aa5498c02cfa3397c3826fe9", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("133")
    console.log(result[133])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[134] = await instance.play(web3.utils.toBN("51224747318113555808988232261002292460391706262150674313181899833287927799832"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("134")
    console.log(result[134])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[135] = await instance.wager(false, web3.utils.toBN("67722615232233736294325592007137495233617808194566513047666371732653103851917"), web3.utils.toBN("6292241"), web3.utils.toBN("27"), "0xd819d99b949fd97bbd359e55fcf9eac2aeef44a9fe9e25a3097d83007d9d37ff", "0x76a90f2c199a008cb506feebc11ffbfee94fb41f44cec5b62f08b46bb856f86c", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("135")
    console.log(result[135])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[136] = await instance.play(web3.utils.toBN("83667504170505276118574969899746220587440240371765544736791008138539215490340"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("136")
    console.log(result[136])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[137] = await instance.play(web3.utils.toBN("83667504170505276118574969899746220587440240371765544736791008138539215490340"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("137")
    console.log(result[137])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[138] = await instance.play(web3.utils.toBN("83667504170505276118574969899746220587440240371765544736791008138539215490340"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("138")
    console.log(result[138])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[139] = await instance.play(web3.utils.toBN("83667504170505276118574969899746220587440240371765544736791008138539215490340"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("139")
    console.log(result[139])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[140] = await instance.play(web3.utils.toBN("83667504170505276118574969899746220587440240371765544736791008138539215490340"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("140")
    console.log(result[140])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[141] = await instance.refund(web3.utils.toBN("67722615232233736294325592007137495233617808194566513047666371732653103851917"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("141")
    console.log(result[141])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[142] = await instance.wager(false, web3.utils.toBN("87204003013588170825698388475977974068015387908815992198734685562527793423472"), web3.utils.toBN("6296927"), web3.utils.toBN("27"), "0x71bb114db5c1e090a9272fc8a8e19f9718f23d8ed099d9a07f55de7a3431919b", "0x36e2883330f2eeff9594e7c0075c90756f2a35511af628f34f5ec3e1d3e58e97", {from: accounts[17], value: web3.utils.toWei("0.01")})
    console.log("142")
    console.log(result[142])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[143] = await instance.wager(true, web3.utils.toBN("55829078423077891291590533173945461321709547500184319230001223002600375237758"), web3.utils.toBN("6297097"), web3.utils.toBN("28"), "0xa781c56a878ced3f7a4916bf144de5498a62a357374ade6b511ea55402e69fc2", "0x0f3dfd558d832780d1df0b6fac23c3620b6fe4a89c1294195af1f19d228e0032", {from: accounts[17], value: web3.utils.toWei("0.01")})
    console.log("143")
    console.log(result[143])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[144] = await instance.play(web3.utils.toBN("94177678044869708186268614135586274839342904648733473285400453180586187500457"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("144")
    console.log(result[144])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[145] = await instance.play(web3.utils.toBN("94177678044869708186268614135586274839342904648733473285400453180586187500457"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("145")
    console.log(result[145])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[146] = await instance.wager(true, web3.utils.toBN("66767109289355532179223627216720904850295310101713056677224808750686436181288"), web3.utils.toBN("6297173"), web3.utils.toBN("28"), "0xcabf61abff9758e578de795edf9a9f8ff15c55294852ce9c6acef7d453e177d6", "0x7aaf84e0ac46e36e8a620b617615bdfa711265daa8246e854bab4eaaccfc3321", {from: accounts[17], value: web3.utils.toWei("0.01")})
    console.log("146")
    console.log(result[146])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[147] = await instance.play(web3.utils.toBN("94177678044869708186268614135586274839342904648733473285400453180586187500457"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("147")
    console.log(result[147])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[148] = await instance.play(web3.utils.toBN("30279143102245901493909204915190633629456854233203829911360495038739001328317"), {from: accounts[17], value: web3.utils.toWei("0")})
    console.log("148")
    console.log(result[148])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[149] = await instance.play(web3.utils.toBN("94177678044869708186268614135586274839342904648733473285400453180586187500457"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("149")
    console.log(result[149])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[150] = await instance.refund(web3.utils.toBN("55829078423077891291590533173945461321709547500184319230001223002600375237758"), {from: accounts[17], value: web3.utils.toWei("0")})
    console.log("150")
    console.log(result[150])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[151] = await instance.wager(false, web3.utils.toBN("88068098724642017971784405574535758677943450890735280166015672482326691113148"), web3.utils.toBN("6298138"), web3.utils.toBN("28"), "0x2d5cb747bd9ae143a954d08830f549091834f2641d125d9d2351b2aa7c708e47", "0x759fda6de90495b5177491ba44d25d050113cc2e2657c4353e5624843118eeb8", {from: accounts[17], value: web3.utils.toWei("0.01")})
    console.log("151")
    console.log(result[151])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[152] = await instance.play(web3.utils.toBN("107669679203460400728524716380939565735579411741438509693190122887956447107405"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("152")
    console.log(result[152])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[153] = await instance.play(web3.utils.toBN("107669679203460400728524716380939565735579411741438509693190122887956447107405"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("153")
    console.log(result[153])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[154] = await instance.play(web3.utils.toBN("30279143102245901493909204915190633629456854233203829911360495038739001328317"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("154")
    console.log(result[154])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[155] = await instance.play(web3.utils.toBN("107669679203460400728524716380939565735579411741438509693190122887956447107405"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("155")
    console.log(result[155])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[156] = await instance.play(web3.utils.toBN("30279143102245901493909204915190633629456854233203829911360495038739001328317"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("156")
    console.log(result[156])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[157] = await instance.play(web3.utils.toBN("107669679203460400728524716380939565735579411741438509693190122887956447107405"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("157")
    console.log(result[157])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[158] = await instance.play(web3.utils.toBN("30279143102245901493909204915190633629456854233203829911360495038739001328317"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("158")
    console.log(result[158])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[159] = await instance.play(web3.utils.toBN("107669679203460400728524716380939565735579411741438509693190122887956447107405"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("159")
    console.log(result[159])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[160] = await instance.play(web3.utils.toBN("28024225580602369339246770265742900953665664614115827049894730218322459356312"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("160")
    console.log(result[160])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[161] = await instance.refund(web3.utils.toBN("88068098724642017971784405574535758677943450890735280166015672482326691113148"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("161")
    console.log(result[161])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[162] = await instance.wager(false, web3.utils.toBN("56745484092796469558218306261713038938557894941950333005734781512598764294220"), web3.utils.toBN("6320910"), web3.utils.toBN("27"), "0xe2d9c5c3760c09e18161d5c0291c91c56a07f5eda46fc4a2c738270b82861e18", "0x410dbe17de3fcc23aedd127dd58cbfd643e3240d8f3412cf918e6042eba01948", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("162")
    console.log(result[162])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[163] = await instance.refund(web3.utils.toBN("56745484092796469558218306261713038938557894941950333005734781512598764294220"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("163")
    console.log(result[163])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[164] = await instance.wager(true, web3.utils.toBN("69328207260902454829222137481380747761779829960446394267446263416043389129322"), web3.utils.toBN("6331142"), web3.utils.toBN("28"), "0xfe21b1992cb902be86b5462f9c41aebaefa0e42db4b11bd92f026266c076af8e", "0x3d8916ad68e65b2445cef83c305ed4e9e262abf98e57dda018df7a7fc3c88b9d", {from: accounts[2], value: web3.utils.toWei("0.03")})
    console.log("164")
    console.log(result[164])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[165] = await instance.play(web3.utils.toBN("28024225580602369339246770265742900953665664614115827049894730218322459356312"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("165")
    console.log(result[165])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[166] = await instance.refund(web3.utils.toBN("69328207260902454829222137481380747761779829960446394267446263416043389129322"), {from: accounts[23], value: web3.utils.toWei("0")})
    console.log("166")
    console.log(result[166])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[167] = await instance.play(web3.utils.toBN("28024225580602369339246770265742900953665664614115827049894730218322459356312"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("167")
    console.log(result[167])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[168] = await instance.play(web3.utils.toBN("98422108243880988718636692735553811103800142654246819923484406805958993554541"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("168")
    console.log(result[168])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[169] = await instance.play(web3.utils.toBN("98422108243880988718636692735553811103800142654246819923484406805958993554541"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("169")
    console.log(result[169])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[170] = await instance.play(web3.utils.toBN("98422108243880988718636692735553811103800142654246819923484406805958993554541"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("170")
    console.log(result[170])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[171] = await instance.play(web3.utils.toBN("98422108243880988718636692735553811103800142654246819923484406805958993554541"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("171")
    console.log(result[171])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[172] = await instance.play(web3.utils.toBN("1474780549866315724371322324056577138011036754777477040745462108364642254939"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("172")
    console.log(result[172])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[173] = await instance.play(web3.utils.toBN("1474780549866315724371322324056577138011036754777477040745462108364642254939"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("173")
    console.log(result[173])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[174] = await instance.play(web3.utils.toBN("1474780549866315724371322324056577138011036754777477040745462108364642254939"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("174")
    console.log(result[174])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[175] = await instance.play(web3.utils.toBN("1474780549866315724371322324056577138011036754777477040745462108364642254939"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("175")
    console.log(result[175])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[176] = await instance.play(web3.utils.toBN("1474780549866315724371322324056577138011036754777477040745462108364642254939"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("176")
    console.log(result[176])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[177] = await instance.wager(true, web3.utils.toBN("33183251091170943433323209144155981242356148332983471817943337336796979815275"), web3.utils.toBN("6361883"), web3.utils.toBN("27"), "0x7bf8f0cdff4ef79a9c9af93ebb886b481bb596b690e6e58f91776b9df5cf2727", "0x2de76ea1eab1f1f3266954f41b67f869fb54d405cdf79bb3f165a14904ce9c3d", {from: accounts[21], value: web3.utils.toWei("0.01")})
    console.log("177")
    console.log(result[177])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[178] = await instance.play(web3.utils.toBN("98023983559047094472792537737435271445083082744548056478516929342534968921354"), {from: accounts[21], value: web3.utils.toWei("0")})
    console.log("178")
    console.log(result[178])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[179] = await instance.wager(false, web3.utils.toBN("12287430009519183418527867918559781449293928727443750334984111441244382681939"), web3.utils.toBN("6361932"), web3.utils.toBN("28"), "0x6edef7d56f7e6b98f93fb936e6f76460e6beaad57b3f5a0f9d9b13a56d8ec841", "0x06479b08b3e89a0d258c053b4010ee7aee26e3a44e20bf9871939242ca95cdc6", {from: accounts[21], value: web3.utils.toWei("0.01")})
    console.log("179")
    console.log(result[179])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[180] = await instance.play(web3.utils.toBN("102106640947926360694021443835777817628833520784604714608800601102174150092820"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("180")
    console.log(result[180])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[181] = await instance.wager(false, web3.utils.toBN("61331836139015541526871867305057264903773930119779952675354948549389489452310"), web3.utils.toBN("6361975"), web3.utils.toBN("27"), "0x5a4bf0b14d945d9395a5d1fb9efb08d74498af4eec41735c9a2d721e644c727b", "0x63fde92589468f10a1b5f0467c5e55192b3dfee16d8e291e4fb7617a3749a0dd", {from: accounts[21], value: web3.utils.toWei("0.01")})
    console.log("181")
    console.log(result[181])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[182] = await instance.play(web3.utils.toBN("65777697998696821964667237425579865028602817010018545506060617888442601634649"), {from: accounts[21], value: web3.utils.toWei("0")})
    console.log("182")
    console.log(result[182])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[183] = await instance.wager(false, web3.utils.toBN("55733576739978488990420034885693418827973903471521550794673923253391529662555"), web3.utils.toBN("6371965"), web3.utils.toBN("28"), "0x91d82d8092b82d68423c0d362222ca1bca7599593c4a8c5638cf63d8f03f5ba5", "0x21d903c27aca7820f4a2ae262ea29cab46716f93d7c38b7302122f348a187018", {from: accounts[0], value: web3.utils.toWei("0.02")})
    console.log("183")
    console.log(result[183])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[184] = await instance.play(web3.utils.toBN("93486703925497986684482632961715694573865278803251388090304428670725450535479"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("184")
    console.log(result[184])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[185] = await instance.wager(false, web3.utils.toBN("80932528098960396692988424362996825327736702766355826255060373931235996711165"), web3.utils.toBN("6391355"), web3.utils.toBN("27"), "0xc93ec1240c1545a0fc01030d708fd55d1b4f6bbf6ec024a19e74fd04c81c7d45", "0x713be9de213048f5da6eb218125db35778bb3208bcbe69fd3e0e458d8470cdbc", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("185")
    console.log(result[185])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[186] = await instance.play(web3.utils.toBN("20744195682423863215993383937502938695261830645923894654225748610089372906487"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("186")
    console.log(result[186])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[187] = await instance.wager(false, web3.utils.toBN("6822128277891286680933302272202264026521548853937635729036185590479479711661"), web3.utils.toBN("6391364"), web3.utils.toBN("28"), "0x49a3b3a4180c7ca5d70b930d57a8cfe550edfb7e294d4f200932e032bc053d8e", "0x5d1108b8dcf9c21642867ca399d352d04126aa7de83047d9cbc22dc9b56228af", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("187")
    console.log(result[187])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[188] = await instance.play(web3.utils.toBN("34493926732261976699300299354645957718146259248232390516068398458397071122149"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("188")
    console.log(result[188])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[189] = await instance.wager(false, web3.utils.toBN("65350421042491037368101290205852102735253695486424968173952243999650930145083"), web3.utils.toBN("6391374"), web3.utils.toBN("27"), "0xc14624c8aa7f7175803e4cdf9d411adf0dfeff14a935e4b30e51a7a00a67f3ef", "0x05140d81e8996538489807a78e845ff2f0f282cb85d7c5eae34bffecfeb11181", {from: accounts[0], value: web3.utils.toWei("0.02")})
    console.log("189")
    console.log(result[189])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[190] = await instance.play(web3.utils.toBN("75939427442973058454966361299070754498458609946689560473328060637527209758490"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("190")
    console.log(result[190])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[191] = await instance.wager(false, web3.utils.toBN("3521271842684035090509476985336654961532682543184020937901865609178874306450"), web3.utils.toBN("6391383"), web3.utils.toBN("27"), "0xe2c6b752b3b8e93073de3e0dfe12e5f7679bb90ce034fbbc7916fa00b91c102f", "0x46d1d2eece67005701ee79b5fddfe5c64c6f6b1ea1c8e0b5a43df34fdee01771", {from: accounts[0], value: web3.utils.toWei("0.02")})
    console.log("191")
    console.log(result[191])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[192] = await instance.play(web3.utils.toBN("108692289838302820895496467442281869622399302564966702372019723583822532569640"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("192")
    console.log(result[192])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[193] = await instance.wager(false, web3.utils.toBN("90600703982793526896041283012406179000971994719469502837113892475376062881964"), web3.utils.toBN("6393293"), web3.utils.toBN("28"), "0xe145b993f67b73728e0cffaee4c93f602169b733066381b793510a46706ebc7a", "0x718af550207ae4976ae79a10564c71e231f46472784499aa103169537e5396eb", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("193")
    console.log(result[193])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[194] = await instance.play(web3.utils.toBN("87886779034194565152997554368338107824049918732192226230256496188566538979872"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("194")
    console.log(result[194])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[195] = await instance.wager(false, web3.utils.toBN("6713888088944151140921517676418545160148174327520723936702784125408316568372"), web3.utils.toBN("6393329"), web3.utils.toBN("28"), "0x0fdbd7efd8ac92f680d0ad300c76c2d2655153e714d60a3c218e228bbd258e1b", "0x0d4b831cedb533bd42073c470babf1c7ec64b86a486f0e7960110be6f65490fd", {from: accounts[0], value: web3.utils.toWei("0.02")})
    console.log("195")
    console.log(result[195])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[196] = await instance.play(web3.utils.toBN("33346125643129750822308581913398097792275780217678889116494778253977491388278"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("196")
    console.log(result[196])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[197] = await instance.wager(false, web3.utils.toBN("101012053819146852240383058953108989065352681685374560598033951318212038083921"), web3.utils.toBN("6393503"), web3.utils.toBN("28"), "0x41dd9c5e6c94336cb83a6394226a60f5dc493bf40e589fd5635046c30cda66eb", "0x027992d75d3d548a33d01ce0b80738c713ab434a5b6c61bbbc7a10c58a8b1765", {from: accounts[19], value: web3.utils.toWei("0.01")})
    console.log("197")
    console.log(result[197])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[198] = await instance.play(web3.utils.toBN("112187307248805417918747694044207344124285334308730118646829625026434486460871"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("198")
    console.log(result[198])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[199] = await instance.wager(true, web3.utils.toBN("33519864558829523351017901782538912877342199291595410799165952969810658131368"), web3.utils.toBN("6393742"), web3.utils.toBN("27"), "0x837049b4174d486a1b31cc74482e279410adb598d42f54a7dec118f188af1d15", "0x16896efb535ef459a9f8451d9c12850096aca0e6aa718ed28dfa0df0d3bac1a5", {from: accounts[9], value: web3.utils.toWei("0.01")})
    console.log("199")
    console.log(result[199])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[200] = await instance.wager(true, web3.utils.toBN("72652362885699360404962338546464055161899140696619422629256093244112812162450"), web3.utils.toBN("6395089"), web3.utils.toBN("28"), "0x021033e1e694eb16956a9de0b26208a7c432f4e24e26f989b0c01affad3b046f", "0x2969cdfc96449200fa9ccd58f22122c40aefd952344b0e330957cd091bc1d643", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("200")
    console.log(result[200])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[201] = await instance.play(web3.utils.toBN("107592060107942858613341938659321489056830795119435718175317346261869083690316"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("201")
    console.log(result[201])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[202] = await instance.wager(true, web3.utils.toBN("82503545143344300792339425122772275198791239137566842670224669323240882000824"), web3.utils.toBN("6395101"), web3.utils.toBN("27"), "0x7bebea6d0b192a1aadac65335d6ace5a444063153b2ac95ed5c55fa16ccdbfa1", "0x4b14cb7e77985684d250d91f2b1350e3044310539b263ba6a8da08376cf9cfe6", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("202")
    console.log(result[202])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[203] = await instance.play(web3.utils.toBN("53144991795350697024387484352766091435743889162798476051382411727964091566442"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("203")
    console.log(result[203])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[204] = await instance.wager(true, web3.utils.toBN("98641624383839606306747685425928688375461565840118681395192205273885773121254"), web3.utils.toBN("6396152"), web3.utils.toBN("28"), "0x1639b25325ab507c39c1df6c8addc8d8841484888bbd4895d73e4761dc269f64", "0x646e4d461b266ca4455af4836bf57cfb1561d60549740cec8ac99f9a8a5dd946", {from: accounts[11], value: web3.utils.toWei("0.01")})
    console.log("204")
    console.log(result[204])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[205] = await instance.play(web3.utils.toBN("54423939876961634613896613479236807280950061384163434267667766991190368955539"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("205")
    console.log(result[205])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[206] = await instance.wager(true, web3.utils.toBN("90486621667078752414247734169107117043676467877480807336436249740757599591228"), web3.utils.toBN("6397470"), web3.utils.toBN("27"), "0x76178ee27fd5d7b8ceb3be8d0d7e89813cc062c92a848e891e139a53e06f8136", "0x3bf352009b1a421b5746b8b27d8033408d32964c4f8dff0c05e5629c59b90310", {from: accounts[17], value: web3.utils.toWei("0.01")})
    console.log("206")
    console.log(result[206])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[207] = await instance.play(web3.utils.toBN("55261527504409172358398100495389280673507645887787404913009617775706414178368"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("207")
    console.log(result[207])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[208] = await instance.wager(true, web3.utils.toBN("34127021511684703733866275147131855349055466724224238167615842951704097382402"), web3.utils.toBN("6399435"), web3.utils.toBN("27"), "0xf9f9350911dc503d1e71db77c4e5a23720a08a99e1967ef0a1c5c653de3cd088", "0x255fe84e0bb3e10114fa2d95f18e100bc9b9d154a4ff032dbdab2d8976e0204a", {from: accounts[0], value: web3.utils.toWei("0.03")})
    console.log("208")
    console.log(result[208])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[209] = await instance.play(web3.utils.toBN("36455723205767183127477681769815635293048964159014057495327184991100604745666"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("209")
    console.log(result[209])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[210] = await instance.wager(false, web3.utils.toBN("81252475127400521724168258479408093658311042428382246764781730742827876780910"), web3.utils.toBN("6400801"), web3.utils.toBN("27"), "0x39410b4d6d88aa471eba08af90f6fef58e4c67792971c1a0ce104d71f8a3ffc7", "0x1944a29d1bd348d85fe19371011777e05cc1e3c76fe8b88944c46aef2b3b7c71", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("210")
    console.log(result[210])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[211] = await instance.play(web3.utils.toBN("87316315302801982986322532482169117461493649595291689274583654329453390614260"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("211")
    console.log(result[211])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[212] = await instance.wager(false, web3.utils.toBN("58616772777103931347886936346555443629234444754746272793280931745377155824972"), web3.utils.toBN("6401032"), web3.utils.toBN("28"), "0xc51d451df86e4bca9553fbf0f3bc1d5c6a8ef7d97e48685478d68742113aaf33", "0x232f3e4e01ef9db3ea9eb6497d83d58c3d2aec53ce5e8141325eb506044ce684", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("212")
    console.log(result[212])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[213] = await instance.play(web3.utils.toBN("59127741185555577958636419595269929983998717326548631986469950772231338570979"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("213")
    console.log(result[213])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[214] = await instance.wager(true, web3.utils.toBN("34937978409363943492329587808465412403914228700046469365984908151897710806506"), web3.utils.toBN("6403598"), web3.utils.toBN("28"), "0x5c2a8e0a6428455f60b81a181cec777b2f398a14de04b979bf297dab17ca16f4", "0x2939d85593614c93b1967600c03daac4a3791e0c5db6ae4bee513495ec74a0d7", {from: accounts[14], value: web3.utils.toWei("0.1")})
    console.log("214")
    console.log(result[214])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[215] = await instance.wager(true, web3.utils.toBN("37580499887772030583704960402839115812421237566647644346506191569884734802695"), web3.utils.toBN("6403629"), web3.utils.toBN("27"), "0xc539252e393bd3f3840459b075e007e575ffb27daccf5db99481ad587e8f7cb8", "0x01f522fee377f18f63168c8b4c88d0d20bad0a5ad259c570c9fe289ae734ce2e", {from: accounts[14], value: web3.utils.toWei("0.1")})
    console.log("215")
    console.log(result[215])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[216] = await instance.play(web3.utils.toBN("25707852974842266485372424085444055868532064913693104005870928377947450217724"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("216")
    console.log(result[216])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[217] = await instance.wager(false, web3.utils.toBN("35587799410918180093286815264797685941646022000039091089341665650930893548515"), web3.utils.toBN("6403649"), web3.utils.toBN("28"), "0x239b2b7c9d6825a9629594ea02e9622b9d9101e9890a47f5370dd247558f721f", "0x73b232c6fc6087cc3dc6ac84ae9556a8584b9673bc64ce97dccbcd043644a025", {from: accounts[14], value: web3.utils.toWei("0.1")})
    console.log("217")
    console.log(result[217])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[218] = await instance.play(web3.utils.toBN("42565802669013244741348956830520955378991517473395569330757088272977926924013"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("218")
    console.log(result[218])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[219] = await instance.wager(false, web3.utils.toBN("112161386414712310790974809267165085920581937335728816684711030787648724140314"), web3.utils.toBN("6403662"), web3.utils.toBN("27"), "0xb7f05b3ffe944cd01a6bf74700800f8d38f22cee73cd5e1f77273b54b966c84a", "0x50c9fbf8f3b91841098b8e7fc604522f0a5c2856d9f1d829b6a91d409593d1e8", {from: accounts[14], value: web3.utils.toWei("0.1")})
    console.log("219")
    console.log(result[219])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[220] = await instance.play(web3.utils.toBN("91133218033264389987804439703269812221652748502559454911131957428619500244959"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("220")
    console.log(result[220])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[221] = await instance.wager(false, web3.utils.toBN("87101134738946860764752296170486851130911359440455510159965461356968044383555"), web3.utils.toBN("6405575"), web3.utils.toBN("27"), "0xdcb2046bd4817740179513b32ddb41004fba0efb883f5ab5a4794d5566dadde7", "0x25b3e02ba9d01cd359b257cf43a8809655ca2da810fe426fa1fd77e5927b6948", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("221")
    console.log(result[221])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[222] = await instance.play(web3.utils.toBN("621750185546679261118022767626265092331978283423784992994557129675473660104"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("222")
    console.log(result[222])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[223] = await instance.wager(true, web3.utils.toBN("32515958949026220204429579800706162167253967023267592965175592413843706441092"), web3.utils.toBN("6405599"), web3.utils.toBN("27"), "0x7fa485ef283d44ef6cc38988cfff9347d69ec49d3859093b68a3f712312e1fb7", "0x4ee8ff18ba1b45ad59c0c0f0b0479a51b01429594f3ba5a93f2672176670c077", {from: accounts[0], value: web3.utils.toWei("0.04")})
    console.log("223")
    console.log(result[223])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[224] = await instance.play(web3.utils.toBN("94853877555465947214193913571458230154766845197012502076214112810777048765231"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("224")
    console.log(result[224])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[225] = await instance.wager(true, web3.utils.toBN("46530804089753308263954359153821254823348385860362210066338214800339945112944"), web3.utils.toBN("6406314"), web3.utils.toBN("27"), "0x7659b96621ba302978be893303763e6bfdc6236d71380e31a7051daff498f7b4", "0x57e3cb4ac2476145fdd7274b3018643bf8c280defde0a4a5a8a9ad63d60ca013", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("225")
    console.log(result[225])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[226] = await instance.play(web3.utils.toBN("92407063968927825170079649194713976907963011462518329162285160779659143609669"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("226")
    console.log(result[226])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[227] = await instance.wager(true, web3.utils.toBN("112690653314525003717075371191810390769746101767191996063992287074216681817542"), web3.utils.toBN("6406705"), web3.utils.toBN("27"), "0x66ff519117ebb3e9deac45e8a9aa5011d9dad765d863814a62479341a63f3e92", "0x17d87c45a2bc3920508e2191d2f1ba7a93b034b66fd459af7bb2ddd6647b0937", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("227")
    console.log(result[227])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[228] = await instance.play(web3.utils.toBN("111864977811388993457871092099369071253286787133006098157628121676189828163965"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("228")
    console.log(result[228])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[229] = await instance.wager(true, web3.utils.toBN("75839727814488657843159946842067281092908505122111152327883585438144844896836"), web3.utils.toBN("6406712"), web3.utils.toBN("28"), "0x00503c3d85cefd0c30fa064e8cdf6dd4b96c3fd1515460d495a36d55e12232c6", "0x34abb5c04d5787aef50a09c349ed77ec456a1c737a43d075a22f572b8100746e", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("229")
    console.log(result[229])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[230] = await instance.play(web3.utils.toBN("58464291808917881248330518071700386917944835516014086621726411934294568585549"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("230")
    console.log(result[230])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[231] = await instance.wager(true, web3.utils.toBN("87434302461948846957445424851609108866966412540148514694561569738873139319549"), web3.utils.toBN("6406731"), web3.utils.toBN("27"), "0x0718e52e6b9b48388252e371c3cbe21671a19ce63c6baf5d8e52b019ac45c255", "0x0b8f73e3d8422f885a56c67f36fe761bdb6b519f1267ba067471506b5058589a", {from: accounts[0], value: web3.utils.toWei("0.04")})
    console.log("231")
    console.log(result[231])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[232] = await instance.play(web3.utils.toBN("38747654452198711776345671967064980444013336351767758476141021555254393785925"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("232")
    console.log(result[232])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[233] = await instance.wager(true, web3.utils.toBN("101401864741165627141898239016391518807418962752859135838581061679145420927044"), web3.utils.toBN("6406774"), web3.utils.toBN("27"), "0xb1451c29bb0f2b7a97ddbae1d09775e02f1e459529c9aa4a70848c786255707b", "0x4c8a5a2b9f91a1fa521dd19c2c229360d5c6efd9fa1114662d5df8b9c298ef02", {from: accounts[0], value: web3.utils.toWei("0.03")})
    console.log("233")
    console.log(result[233])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[234] = await instance.play(web3.utils.toBN("26730098057957148019689870349705485635387592577413967495625053979989693399968"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("234")
    console.log(result[234])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[235] = await instance.wager(false, web3.utils.toBN("2916059047201222436412195490041970709310370529195144097156885587198554478186"), web3.utils.toBN("6409039"), web3.utils.toBN("28"), "0x010b7da33bc1bb37247cecd9429552c7cb7525ee0043ae423150b2b97b29946e", "0x6a70f805b9fe0a5781ec7d912760c9ab2c504dec33efc4eb87069ffb5cc1919a", {from: accounts[16], value: web3.utils.toWei("0.01")})
    console.log("235")
    console.log(result[235])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[236] = await instance.play(web3.utils.toBN("18087534682460809569939737076784978720169312744457173693136618180572406230821"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("236")
    console.log(result[236])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[237] = await instance.wager(false, web3.utils.toBN("84069226532444529341333732824810078438135632615175105893552690582482660728510"), web3.utils.toBN("6409072"), web3.utils.toBN("28"), "0xa889df0945850140929640e314c39db6001cdfb1b68adde5e1a1115b3cc6555d", "0x4cc1cd226f7b9771bca62c403dc8a85cff1176628828c7a54b42a76cca6007e8", {from: accounts[0], value: web3.utils.toWei("0.01")})
    console.log("237")
    console.log(result[237])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[238] = await instance.play(web3.utils.toBN("38794870398179036636891413859151026500481529529747715554424628624793013886411"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("238")
    console.log(result[238])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[239] = await instance.wager(false, web3.utils.toBN("4976539930621050842556596434388189895967029454160369057234234833813669569753"), web3.utils.toBN("6414586"), web3.utils.toBN("27"), "0x215d587a3d6c902734ee4702ecac9eff6745d3c04eceb5e1d72e92cb374fa22e", "0x66e126800ed81a7897cf244c250aaaf5cd547f426a2e96a70fcd94ffe4146554", {from: accounts[15], value: web3.utils.toWei("0.01")})
    console.log("239")
    console.log(result[239])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[240] = await instance.play(web3.utils.toBN("62988586647103510358769008655011522689587784712125592069727183012428642993915"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("240")
    console.log(result[240])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[241] = await instance.wager(false, web3.utils.toBN("25240885561845754777019660819824312813970226824327002519395720630143151526084"), web3.utils.toBN("6414598"), web3.utils.toBN("28"), "0x1b47fa7aaae4dfb87f72224e7b64b4a730d15b4ba815d90af48a9f337113d79f", "0x3952c6546997465ce5b81d48e42433405cff347cbe0dbe5705c40c97dfa2b5d5", {from: accounts[15], value: web3.utils.toWei("0.01")})
    console.log("241")
    console.log(result[241])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[242] = await instance.play(web3.utils.toBN("106324169840548817916362603746630125663563173400032682453369562843399690246382"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("242")
    console.log(result[242])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[243] = await instance.wager(false, web3.utils.toBN("109184699857831873284012550854925154157439289946971740962590918754691131156292"), web3.utils.toBN("6418745"), web3.utils.toBN("27"), "0x0fb0e73761c9c4f3cb9e8bb508eaa149e2ee2b03202cf72839e0c66e3139ae66", "0x7cf3566b86aea3fcf2e9908ead55fa4557a6cd59ffb10ff6060e77e8936fc6dc", {from: accounts[0], value: web3.utils.toWei("0.03")})
    console.log("243")
    console.log(result[243])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[244] = await instance.play(web3.utils.toBN("43817748113755153718740794876115858239420673769839485594813056162920814296827"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("244")
    console.log(result[244])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[245] = await instance.wager(false, web3.utils.toBN("67086427798166727524633367198874727045545881180033828192996672383387814618255"), web3.utils.toBN("6419936"), web3.utils.toBN("27"), "0x04788c183bd4687657cab26be02583e1a69211ec4c67f6f6b968f3a2df41aba4", "0x2a2cd1f95b2d365b67c4ea7dc0b36e1bee4bb27f03fdd6d43182470da5f9ec90", {from: accounts[0], value: web3.utils.toWei("0.02")})
    console.log("245")
    console.log(result[245])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[246] = await instance.play(web3.utils.toBN("96514481958783242913950529395649981460184038900102221026106058063744584721220"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("246")
    console.log(result[246])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[247] = await instance.play(web3.utils.toBN("96514481958783242913950529395649981460184038900102221026106058063744584721220"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("247")
    console.log(result[247])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[248] = await instance.play(web3.utils.toBN("96514481958783242913950529395649981460184038900102221026106058063744584721220"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("248")
    console.log(result[248])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[249] = await instance.wager(false, web3.utils.toBN("102435418168529505256733770511351795335354930062746796270012557714122244059725"), web3.utils.toBN("6420718"), web3.utils.toBN("27"), "0x5a8e0014f3e2c5dfd0ce913cbc12188f60e030efc1e4ce192d10552c948a5dfc", "0x1897295a812ad6a0f668170a24281915bc34785ec104e3a8c767621399597bdc", {from: accounts[0], value: web3.utils.toWei("0.02")})
    console.log("249")
    console.log(result[249])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[250] = await instance.play(web3.utils.toBN("87441055238835549091381065878647966454844908138335864901102759307764321296315"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("250")
    console.log(result[250])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[251] = await instance.play(web3.utils.toBN("87441055238835549091381065878647966454844908138335864901102759307764321296315"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("251")
    console.log(result[251])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[252] = await instance.play(web3.utils.toBN("87441055238835549091381065878647966454844908138335864901102759307764321296315"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("252")
    console.log(result[252])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[253] = await instance.wager(false, web3.utils.toBN("73026223879332925599795501804850195256297521670903256370476400001617778480247"), web3.utils.toBN("6436127"), web3.utils.toBN("28"), "0x8f44164c6f4b7eadc548d76bc2bacf51b1af3eefecc720f83d656281f07e233b", "0x4554e7a14e6e1e71ec3b7fd4eac5b57aeb38f678558a4b5c055a07387a7399fc", {from: accounts[0], value: web3.utils.toWei("0.02")})
    console.log("253")
    console.log(result[253])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[254] = await instance.play(web3.utils.toBN("98138897149645906333799655957403610117622021452850239616974821180679752385244"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("254")
    console.log(result[254])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[255] = await instance.wager(true, web3.utils.toBN("2539498178636135729005357369714231048749492185633458868975928090947290632254"), web3.utils.toBN("6436540"), web3.utils.toBN("27"), "0x3d435341e539223d850cf62ee00e737efc284297df6675f1f0e32a30506bb557", "0x3922414e158b24193906af57c4759894425393be53f6bf45d180b23d78e7e14f", {from: accounts[20], value: web3.utils.toWei("0.01")})
    console.log("255")
    console.log(result[255])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[256] = await instance.play(web3.utils.toBN("98138897149645906333799655957403610117622021452850239616974821180679752385244"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("256")
    console.log(result[256])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[257] = await instance.play(web3.utils.toBN("33330521696808391620617247161667082561526255304755988965563903491615529081088"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("257")
    console.log(result[257])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[258] = await instance.play(web3.utils.toBN("33330521696808391620617247161667082561526255304755988965563903491615529081088"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("258")
    console.log(result[258])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[259] = await instance.play(web3.utils.toBN("33330521696808391620617247161667082561526255304755988965563903491615529081088"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("259")
    console.log(result[259])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[260] = await instance.play(web3.utils.toBN("33330521696808391620617247161667082561526255304755988965563903491615529081088"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("260")
    console.log(result[260])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[261] = await instance.play(web3.utils.toBN("33330521696808391620617247161667082561526255304755988965563903491615529081088"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("261")
    console.log(result[261])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[262] = await instance.wager(true, web3.utils.toBN("78757600542938544629833372890646480519208003484852185546520817280945105613456"), web3.utils.toBN("6460688"), web3.utils.toBN("28"), "0x6e13ab39cacb78462c6bfb7624c9239740defe57734fd1f0eaeb5dc01dd84763", "0x76164114801a31b906082fb4bde4663dd177eeb9da4e13f252014dacb8fcb6ec", {from: accounts[17], value: web3.utils.toWei("0.02")})
    console.log("262")
    console.log(result[262])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[263] = await instance.play(web3.utils.toBN("18032389006981753813615508445523055862897828895797108080838755488769167403967"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("263")
    console.log(result[263])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[264] = await instance.wager(true, web3.utils.toBN("113889372644296838792543874171219438915287146900895096862608240608742458630577"), web3.utils.toBN("6485349"), web3.utils.toBN("28"), "0x0601af3ebff49bab938cd3e476c234f4af9b921709ba9810e271c44d3eabf792", "0x7811e87aebc18358c394dffdf13d64f42607fccf4f52c49ff043942c31b97663", {from: accounts[6], value: web3.utils.toWei("0.01")})
    console.log("264")
    console.log(result[264])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[265] = await instance.wager(true, web3.utils.toBN("27094382217945836943915420784113068056342988618128891816710114254939105703724"), web3.utils.toBN("6485364"), web3.utils.toBN("28"), "0x95fb42448ffb2d66171e0da2d9c7e28c661b21f55a937719f349ae3424b5e7b0", "0x1e12cb25e4aad292fc742d9029b965bec5caca1b95906a7160e4d0318554320e", {from: accounts[6], value: web3.utils.toWei("0.01")})
    console.log("265")
    console.log(result[265])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[266] = await instance.play(web3.utils.toBN("98576737266652148152101869060097650987343858045957746291857684766797846618409"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("266")
    console.log(result[266])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[267] = await instance.wager(true, web3.utils.toBN("44939341875826482430577319830228642509432843034134741967678826413183473202163"), web3.utils.toBN("6503594"), web3.utils.toBN("27"), "0x035e526be92e16a51e3728d0be9902bd1c87b93dab61a911873ea7b1a59d68f9", "0x1ec416aeba6e793381c9b5069c4ef942280760a0f1555d9464c2d711ed8b0091", {from: accounts[5], value: web3.utils.toWei("0.04")})
    console.log("267")
    console.log(result[267])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[268] = await instance.wager(true, web3.utils.toBN("48732529850097639789189078471891318322954168918960656210131253890535714006668"), web3.utils.toBN("6503611"), web3.utils.toBN("27"), "0xeaaabd9c76085bd69c456c577a8c14f8279bd763ea0b0310115a53455cde163e", "0x11b8eb59c3b6f59c6fa6b7d7c60185e8eaace69e356d0dd5fa9bb049c0c133db", {from: accounts[5], value: web3.utils.toWei("0.04")})
    console.log("268")
    console.log(result[268])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[269] = await instance.play(web3.utils.toBN("99248554818721588211021091967942936605409674470937216410475371932897979003789"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("269")
    console.log(result[269])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[270] = await instance.wager(true, web3.utils.toBN("61285911717563267690205879860821792529609951335211849986310847224839684963965"), web3.utils.toBN("6503629"), web3.utils.toBN("27"), "0xa6935fa95912472066110dc55decf114ac3f3d7c590d4f21dff20ed2b873f10c", "0x15029a1383c0bc27cdcf183181b945eee7ba9ce829cab3c37b75ce913eef40bd", {from: accounts[5], value: web3.utils.toWei("0.04")})
    console.log("270")
    console.log(result[270])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[271] = await instance.play(web3.utils.toBN("52913475775785906991339277123203454424163107436294054148865597886509359783461"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("271")
    console.log(result[271])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[272] = await instance.wager(false, web3.utils.toBN("15974214564603001347730322624912083859058467748643151673729498991049268687989"), web3.utils.toBN("6534074"), web3.utils.toBN("28"), "0x0797c1dd8b2b7b0d71f356d10532ae8ed7e88431886012fd3c85b236cfa867ab", "0x1310655a8bd4877dc5d5c21c6e44bec2d9e5392df60a39b577d7c23810576145", {from: accounts[22], value: web3.utils.toWei("0.1")})
    console.log("272")
    console.log(result[272])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[273] = await instance.wager(false, web3.utils.toBN("27140764246632603266984515297639343843541679670460780461595431102962168703408"), web3.utils.toBN("6534082"), web3.utils.toBN("27"), "0x813890523e74edb15bc4b33d64301bd1dfc6d3aff972467db5af4d9b6322684d", "0x0a073e3e38d58c04701cb89dc0b01c959a2068b98766bec9819bf42ec39294c4", {from: accounts[22], value: web3.utils.toWei("0.1")})
    console.log("273")
    console.log(result[273])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[274] = await instance.play(web3.utils.toBN("48853184729065931847048222684877937207194860863763371284009302618814077513458"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("274")
    console.log(result[274])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[275] = await instance.wager(false, web3.utils.toBN("46278594498551133650391329885732168504929972421054100848299126163937248395384"), web3.utils.toBN("6534100"), web3.utils.toBN("27"), "0x54c8f34713778dd3f8d5a216c23edb4c81a35bcb5be041751f41a06a34bc3394", "0x039c8f85b2b4782e8bedc7a88b0269f4ca886812896b5656c4fcce2b7a552448", {from: accounts[22], value: web3.utils.toWei("0.15")})
    console.log("275")
    console.log(result[275])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[276] = await instance.play(web3.utils.toBN("34405808689688474553223661698599043000107133537277958133989520946411200803349"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("276")
    console.log(result[276])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[277] = await instance.wager(false, web3.utils.toBN("91539861950830461072741826118752820092267837638393171738716835846291471377623"), web3.utils.toBN("6534130"), web3.utils.toBN("28"), "0x21badadb3e5745931d1e9ab26afab117349edd63e7f128831d3d0ef7b0e52aa5", "0x19c566b801451932c362a9bbf1c6ad00aba73e1c90bdb23f808d9f63764feacb", {from: accounts[22], value: web3.utils.toWei("0.15")})
    console.log("277")
    console.log(result[277])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[278] = await instance.play(web3.utils.toBN("4465285479196478627114086745666523826345092852828417272745440349770870576453"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("278")
    console.log(result[278])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[279] = await instance.wager(false, web3.utils.toBN("16099443884139099286854568724031451998289215884391164536974546323484005146275"), web3.utils.toBN("6534135"), web3.utils.toBN("28"), "0xc0f43e8d636595d5f449c081923cd30344698aacd6e882bd34fc395565284cf0", "0x748105e1be549e85285b9835eaaedd501ea7ddb5c152e6f8b7366c82e5e89fca", {from: accounts[22], value: web3.utils.toWei("0.15")})
    console.log("279")
    console.log(result[279])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[280] = await instance.play(web3.utils.toBN("49270904839362492040263450213721127785559350311306199376338955057554720744310"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("280")
    console.log(result[280])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[281] = await instance.wager(false, web3.utils.toBN("71739382794748589486325093244158421948638695891569426902579653101499910465342"), web3.utils.toBN("6534139"), web3.utils.toBN("28"), "0x33925287d58f55f05d8a97d1683ea61a7028fc173a8479dc1a3d9269fc57f49c", "0x48c67bc79c52280aabf3f1bbadfee937d1a5a68187639bca4669882dfba06806", {from: accounts[22], value: web3.utils.toWei("0.15")})
    console.log("281")
    console.log(result[281])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[282] = await instance.play(web3.utils.toBN("42046409760252754362422399099037818874339553901923731235588846518896570158367"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("282")
    console.log(result[282])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[283] = await instance.wager(false, web3.utils.toBN("71274726596690591269245989302908955085385357913011621004709966375459486280002"), web3.utils.toBN("6534140"), web3.utils.toBN("27"), "0x1220d80936dc4ac26574cdfab5532040d79d28d8f2ba17b4960b65b5fe81c791", "0x5c659e623b1514bd2be5271d8dce95d0cb27c7b3b02c763aea9ccc64b62436df", {from: accounts[7], value: web3.utils.toWei("0.01")})
    console.log("283")
    console.log(result[283])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[284] = await instance.wager(true, web3.utils.toBN("89110421893355966168372646453401678701071966456748155572067307432915274052642"), web3.utils.toBN("6534140"), web3.utils.toBN("27"), "0xb9d87c0755e48abbaa6de7662004f3dab83d5467a9b625d0f00f17162d5a5da8", "0x788018124ea2ee6a081b28e3b93e87be9212fafc6f7af087cef7270e8ae892a0", {from: accounts[12], value: web3.utils.toWei("0.01")})
    console.log("284")
    console.log(result[284])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[285] = await instance.play(web3.utils.toBN("26070262606935501020119486314361305248323902160489324616839370222075962574965"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("285")
    console.log(result[285])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[286] = await instance.play(web3.utils.toBN("49107870583455207297868443729337753707549726700317144368390767242013578845568"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("286")
    console.log(result[286])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[287] = await instance.play(web3.utils.toBN("8952458609615106119132726206460706583385303100821850887088763648670780300205"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("287")
    console.log(result[287])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[288] = await instance.wager(false, web3.utils.toBN("28190067527571004801158345043773845763512383773319128056025642778831432799717"), web3.utils.toBN("6534147"), web3.utils.toBN("27"), "0xfcd8eec4aff9e38f4f9c21fd6b728cd634a9bf90fd2ae1d161aff2765fe3ba8c", "0x35a89da8e58e83025d553a3e104f529f02beb4d631b3ebc4fa32ce4f76a5118a", {from: accounts[22], value: web3.utils.toWei("0.15")})
    console.log("288")
    console.log(result[288])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[289] = await instance.wager(true, web3.utils.toBN("30471458296968684246639302747391582165682103905236803419000020329358907907347"), web3.utils.toBN("6534150"), web3.utils.toBN("27"), "0x5461e5fadcb063ccabe21b5c84ac761503ca87aa12b4b53b5ba01dd2533b7db8", "0x2c5951abe706c33d6103c98d89c141b19b3ee6dbb47f33bff89ca741fd459ce5", {from: accounts[12], value: web3.utils.toWei("0.15")})
    console.log("289")
    console.log(result[289])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[290] = await instance.wager(false, web3.utils.toBN("42489890351599355088119066757955339524182302333077982086112783322933557847740"), web3.utils.toBN("6534153"), web3.utils.toBN("27"), "0xb054f1448268f203b88e05c1875f71d28753f173b0470f631fb519d5eb7a3677", "0x469cc5f73c859cfe7b5717277ffe0d143dae2bab1bcc948f9420bd4a769e3e84", {from: accounts[13], value: web3.utils.toWei("0.01")})
    console.log("290")
    console.log(result[290])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[291] = await instance.play(web3.utils.toBN("27185576157379032375450539990716657974722593888157513807521451469531728357835"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("291")
    console.log(result[291])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[292] = await instance.wager(false, web3.utils.toBN("7726683790388212068378439731293224318173424396906296930504362172817245142253"), web3.utils.toBN("6534156"), web3.utils.toBN("27"), "0x21c68f620d72b3252dc0b6e2739c6a110d68c0419e6631ca22cf83ebdda49224", "0x1c5dafea38a661c953a99149010aa636591e7358090a310ca091ff1ecf41ccca", {from: accounts[22], value: web3.utils.toWei("0.15")})
    console.log("292")
    console.log(result[292])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[293] = await instance.wager(true, web3.utils.toBN("113423199755407357210107235785682952876399063876014499927435098177408206028198"), web3.utils.toBN("6534154"), web3.utils.toBN("28"), "0xfeab7cd672cc06b8f0ddba2ff55878622d59fed81314970c1d702448e6d4edf7", "0x0ea73566dd3d2b48acd942c92992dd839028adb3c309aa1e907f4baf9bc17951", {from: accounts[7], value: web3.utils.toWei("0.02")})
    console.log("293")
    console.log(result[293])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[294] = await instance.play(web3.utils.toBN("103117972463304447640792371653037644080273235447427657475177214667017160076941"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("294")
    console.log(result[294])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[295] = await instance.wager(false, web3.utils.toBN("34613365816061896307583361683818475053726588746912289466799474801724228088756"), web3.utils.toBN("6534156"), web3.utils.toBN("28"), "0x65413f10d64cfd486dd167a563346c3aaa2c45650b1b08e5df02928a1c8987be", "0x7552b10203d5e51bb38ec4d5cc8f873edb801bdde1801b13d682c342149deabf", {from: accounts[22], value: web3.utils.toWei("0.15")})
    console.log("295")
    console.log(result[295])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[296] = await instance.wager(true, web3.utils.toBN("86816195539506017784157768961190517679705867034439963996367607083727031046617"), web3.utils.toBN("6534160"), web3.utils.toBN("27"), "0x0a44dc639fd8a8f56888056a7123a9ba124c5a1e636b17ee949bdf169b42abbe", "0x1d9a1b6a8fc90db9b2cafecbfedd5218ca75a82cd974fb6c6f8dd6c269c52a80", {from: accounts[12], value: web3.utils.toWei("0.1")})
    console.log("296")
    console.log(result[296])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[297] = await instance.play(web3.utils.toBN("37676082654551856811464429270167100881315429269389529724969772337495358104530"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("297")
    console.log(result[297])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[298] = await instance.play(web3.utils.toBN("108299280714184120830514085113508658919263754833923360101135754900661551491103"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("298")
    console.log(result[298])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[299] = await instance.wager(false, web3.utils.toBN("56455306358584800293814212377818002955675306489914820537319909743613272934014"), web3.utils.toBN("6534169"), web3.utils.toBN("28"), "0xc34388bd9533080c6cdd6e7e04c3a8c613753bd600ccd3ba60d449fccde37fea", "0x25789097ea0201097749440fa1dc9058fc6ef80465b5c243886eed7cfeb3068d", {from: accounts[12], value: web3.utils.toWei("0.1")})
    console.log("299")
    console.log(result[299])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[300] = await instance.wager(false, web3.utils.toBN("436092474486656208818653220104559403384471636255200755988986444958218254120"), web3.utils.toBN("6534173"), web3.utils.toBN("28"), "0x57538bb26e76a05accef1252b540e60ffe82e3101e502527faec080538fd499c", "0x337078180331407de96c7a60f65f50537aa4bb9802850c43fa9de09720eb40a6", {from: accounts[8], value: web3.utils.toWei("0.01")})
    console.log("300")
    console.log(result[300])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[301] = await instance.play(web3.utils.toBN("57279171049317687718939291360828817603518899171801175111117182024535004698815"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("301")
    console.log(result[301])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[302] = await instance.wager(false, web3.utils.toBN("25234452940252049132689163107901337473493577509725600688050168118914046569102"), web3.utils.toBN("6534174"), web3.utils.toBN("28"), "0x2b9eedf0a9276f188a50284c3e059cf90ed54931f0370fcce5025bbc9df467ba", "0x4c7a2b654282e500b546fb8ba1ff5a9f90d4989776617ee6322034e1fafa69a9", {from: accounts[1], value: web3.utils.toWei("0.01")})
    console.log("302")
    console.log(result[302])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[303] = await instance.play(web3.utils.toBN("73756639139057852478348959450546421923724206146315377511228554667892361046167"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("303")
    console.log(result[303])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[304] = await instance.play(web3.utils.toBN("109653591765065895546590523304212535886952727848251594383391138336194589208076"), {from: accounts[4], value: web3.utils.toWei("0")})
    console.log("304")
    console.log(result[304])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[305] = await instance.wager(false, web3.utils.toBN("32162329506450696954434157588547801600671072243600897293922307745067378451391"), web3.utils.toBN("6534180"), web3.utils.toBN("28"), "0x864c2ba4392a076bb36ffcae962b4bf9972b68eab2730f24ba6dc84a75b4e820", "0x164f6c62d0c789941d85c5b8c9606b1d893334f55780d9305bbc8e4de4f5dc2c", {from: accounts[12], value: web3.utils.toWei("0.1")})
    console.log("305")
    console.log(result[305])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[306] = await instance.wager(true, web3.utils.toBN("42832560538538728110616608277256109562656568145673436361646857137916269275576"), web3.utils.toBN("6534184"), web3.utils.toBN("28"), "0x60857a402c0b12ef702d89932713069d08615eaf769200ce9f85fe1f9ad801ff", "0x4260a2933fb054411f6d59bee5be4ee66dea03e09ed104ce0b649914ca42e42d", {from: accounts[7], value: web3.utils.toWei("0.03")})
    console.log("306")
    console.log(result[306])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[307] = await instance.wager(false, web3.utils.toBN("21921304692874118217454754510681806313837141774018384602210957190421771185209"), web3.utils.toBN("6534188"), web3.utils.toBN("28"), "0x66ab7ed2b4efea3db4d21b38a4fc633854f2f8768c986c7af214f485b09ddc6e", "0x0d897192cab9771778016dc7158224a1ad14c7160280fc02a4a3ce528465ae88", {from: accounts[8], value: web3.utils.toWei("0.1")})
    console.log("307")
    console.log(result[307])
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
