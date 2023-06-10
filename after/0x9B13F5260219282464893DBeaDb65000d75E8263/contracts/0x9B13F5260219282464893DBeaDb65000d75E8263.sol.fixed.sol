contract sGuard{
  function mul_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
    if (a == 0) {
      return 0;
    }
    uint256 c = a * b;
    assert(c / a == b);
    return c;
  }
  
  function add_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert(c >= a);
    return c;
  }
  
  function sub_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }
  
  bool internal locked_;
  constructor() internal {
    locked_ = false;
  }
  modifier nonReentrant_() {
    require(!locked_);
    locked_ = true;
    _;
    locked_ = false;
  }
  
  function div_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a / b;
    return c;
  }
}
pragma solidity ^0.4.18;


contract Owned  is sGuard {
    address public owner;

    function Owned() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

     function transferOwnership(address newOwner) nonReentrant_  onlyOwner public {
        owner = newOwner;
    }
}


contract GFCB is sGuard,  Owned {

    string public name="Golden Fortune Coin Blocked";
    string public symbol="GFCB";
    uint8  public decimals=18;
    uint256 public totalSupply;
    uint256 public sellPrice;
    uint256 public buyPrice;
    uint minBalanceForAccounts;

    mapping (address => uint256) public balanceOf;
    mapping (address => bool) public frozenAccount;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event FrozenFunds(address target, bool frozen);

    function GFCB() public {
        totalSupply = 10000000000000000000000000000;
        balanceOf[msg.sender] = totalSupply;
    }

     function setMinBalance(uint minimumBalanceInFinney) nonReentrant_  onlyOwner public {
        minBalanceForAccounts = mul_uint256(minimumBalanceInFinney, 1 finney);
    }

    /* Internal transfer, can only be called by this contract */
    function _transfer(address _from, address _to, uint _value) internal {
        require (_to != 0x0);                               // Prevent transfer to 0x0 address. Use burn() instead
        require (balanceOf[_from] >= _value);                // Check if the sender has enough
        require (add_uint256(balanceOf[_to], _value) > balanceOf[_to]); // Check for overflows
        require(!frozenAccount[_from]);                     // Check if sender is frozen
        require(!frozenAccount[_to]);                       // Check if recipient is frozen
        balanceOf[_from] = sub_uint256(balanceOf[_from], _value);                         // Subtract from the sender
        balanceOf[_to] = add_uint256(balanceOf[_to], _value);                           // Add the same to the recipient
        emit Transfer(_from, _to, _value);
    }
     function transfer(address _to, uint256 _value) nonReentrant_  public {
        require(!frozenAccount[msg.sender]);
        if (msg.sender.balance<minBalanceForAccounts) {
            sell(div_uint256((sub_uint256(minBalanceForAccounts, msg.sender.balance)), sellPrice));
        }
        _transfer(msg.sender, _to, _value);
    }

     function mintToken(address target, uint256 mintedAmount) nonReentrant_  onlyOwner public {
        balanceOf[target] = add_uint256(balanceOf[target], mintedAmount);
        totalSupply += mintedAmount;
        emit Transfer(0, owner, mintedAmount);
        emit Transfer(owner, target, mintedAmount);
    }


     function freezeAccount(address target, bool freeze) nonReentrant_  onlyOwner public {
        frozenAccount[target] = freeze;
        emit FrozenFunds(target, freeze);
    }

     function setPrices(uint256 newSellPrice, uint256 newBuyPrice) nonReentrant_  onlyOwner public {
        sellPrice = newSellPrice;
        buyPrice = newBuyPrice;
    }


     function buy() nonReentrant_  payable public returns (uint amount) {
        amount = div_uint256(msg.value, buyPrice);
        require(balanceOf[this] >= amount);
        balanceOf[msg.sender] = add_uint256(balanceOf[msg.sender], amount);
        balanceOf[this] = sub_uint256(balanceOf[this], amount);
        emit Transfer(this, msg.sender, amount);
        return amount;
    }

     function sell(uint amount) nonReentrant_  public returns (uint revenue) {
        require(balanceOf[msg.sender] >= amount);
        balanceOf[this] = add_uint256(balanceOf[this], amount);
        balanceOf[msg.sender] = sub_uint256(balanceOf[msg.sender], amount);
        revenue = mul_uint256(amount, sellPrice);
        msg.sender.transfer(revenue);
        emit Transfer(msg.sender, this, amount);
        return revenue;
    }
}
