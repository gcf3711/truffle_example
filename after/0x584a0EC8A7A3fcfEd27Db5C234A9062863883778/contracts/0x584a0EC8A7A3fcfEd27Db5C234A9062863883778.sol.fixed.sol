contract sGuard{
  function mul_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }
  
  function div_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a / b;
    return c;
  }
  
  function sub_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }
  
  function add_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
}
/**
 *Submitted for verification at Etherscan.io on 2018-03-28
*/

pragma solidity ^0.4.16;

contract owned  is sGuard {
    address public owner;

    function owned() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address newOwner) onlyOwner public {
        owner = newOwner;
    }
}

interface tokenRecipient 
{ 
function receiveApproval(address _from, uint256 _value, address _token, bytes _extraData) public; 
}

contract StandardToken  is sGuard {
    
    string public name;
    string public symbol;
    uint8 public decimals = 18;    
    uint256 public totalSupply;

    mapping (address => uint256) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Burn(address indexed from, uint256 value);

    function StandardToken(
        uint256 initialSupply,
        string tokenName,
        string tokenSymbol
    ) public {
        totalSupply = initialSupply * 10 ** uint256(decimals);  
        balanceOf[msg.sender] = totalSupply;                
        name = tokenName;                                   
        symbol = tokenSymbol;                               
    }

    function _transfer(address _from, address _to, uint _value) {
        require(_to != 0x0);
        require(balanceOf[_from] >= _value);
        require(add_uint256(balanceOf[_to], _value) > balanceOf[_to]);
        uint previousBalances = add_uint256(balanceOf[_from], balanceOf[_to]);
        balanceOf[_from] = sub_uint256(balanceOf[_from], _value);
        balanceOf[_to] = add_uint256(balanceOf[_to], _value);
        Transfer(_from, _to, _value);
        assert(add_uint256(balanceOf[_from], balanceOf[_to]) == previousBalances);
    }

    function transfer(address _to, uint256 _value) public returns (bool success) 
	{
        _transfer(msg.sender, _to, _value);
		return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= allowance[_from][msg.sender]);     
        allowance[_from][msg.sender] = sub_uint256(allowance[_from][msg.sender], _value);
        _transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public
        returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        return true;
    }

    function approveAndCall(address _spender, uint256 _value, bytes _extraData)
        public
        returns (bool success) {
        tokenRecipient spender = tokenRecipient(_spender);
        if (approve(_spender, _value)) {
            spender.receiveApproval(msg.sender, _value, this, _extraData);
            return true;
        }
    }
    
    function burn(uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);   
        balanceOf[msg.sender] = sub_uint256(balanceOf[msg.sender], _value);            
        totalSupply -= _value;                      
        Burn(msg.sender, _value);
        return true;
    }

    function burnFrom(address _from, uint256 _value) public returns (bool success) {
        require(balanceOf[_from] >= _value);                
        require(_value <= allowance[_from][msg.sender]);    
        balanceOf[_from] = sub_uint256(balanceOf[_from], _value);                         
        allowance[_from][msg.sender] = sub_uint256(allowance[_from][msg.sender], _value);             
        totalSupply -= _value;                              
        Burn(_from, _value);
        return true;
    }
}

contract GoodTimeCoin is sGuard,  owned, StandardToken {

    uint256 public sellPrice;
    uint256 public buyPrice;

    mapping (address => bool) public frozenAccount;

    event FrozenFunds(address target, bool frozen);

    function GoodTimeCoin(
        uint256 initialSupply,
        string tokenName,
        string tokenSymbol
    ) StandardToken(initialSupply, tokenName, tokenSymbol) public {}

    function mintToken(address target, uint256 mintedAmount) onlyOwner public {
        balanceOf[target] = add_uint256(balanceOf[target], mintedAmount);
        totalSupply += mintedAmount;
        Transfer(0, this, mintedAmount);
        Transfer(this, target, mintedAmount);
    }

    function freezeAccount(address target, bool freeze) onlyOwner public {
        frozenAccount[target] = freeze;
        FrozenFunds(target, freeze);
    }

    function setPrices(uint256 newSellPrice, uint256 newBuyPrice) onlyOwner public {
        sellPrice = newSellPrice;
        buyPrice = newBuyPrice;
    }

    function buy() payable public {
        uint amount = div_uint256(msg.value, buyPrice);               
        _transfer(this, msg.sender, amount);              
    }

    function sell(uint256 amount) public {
        require(this.balance >= mul_uint256(amount, sellPrice));      
        _transfer(msg.sender, this, amount);              
        msg.sender.transfer(mul_uint256(amount, sellPrice));          
    }
}