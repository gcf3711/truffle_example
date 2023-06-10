const WedIndex = artifacts.require("WedIndex")
module.exports = async function(callback) {
  try {
    await web3.eth.getAccounts().then(function (acc){accounts = acc})
    result = []
    instance = await WedIndex.deployed()
    address = await WedIndex.address
    try{
      result[1] = await instance.writeIndex(web3.utils.toBN("1519794814"), "0xd09B6E3C8FB7E05e248197EC45c38cD338d66C1a", "Bowen &amp; Luker", web3.utils.toBN("1504206000"), web3.utils.toBN("1"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("1")
    console.log(result[1])
    }
    catch(error){
      console.log(error)
    };
    try{
      result[2] = await instance.writeIndex(web3.utils.toBN("1519794814"), "0x958a8f594101d2c0485a52319f29b2647f2ebc06", "Garrett &amp; Stephanie", web3.utils.toBN("1511715600"), web3.utils.toBN("1"), {from: accounts[0], value: web3.utils.toWei("0")})
    console.log("2")
    console.log(result[2])
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
