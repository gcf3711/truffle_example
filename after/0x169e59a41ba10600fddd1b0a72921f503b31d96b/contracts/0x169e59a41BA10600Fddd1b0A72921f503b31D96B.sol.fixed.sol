contract sGuard {
    function sub_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    function div_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a / b;
        return c;
    }

    function add_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }

    function mul_uint256(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }
        uint256 c = a * b;
        assert(c / a == b);
        return c;
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
}
/**
 *Submitted for verification at Etherscan.io on 2018-01-24
 */

pragma solidity ^0.4.19;

/**
 * Math operations with safety checks
 */
contract SafeMath is sGuard {
    function safeMul(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a * b;
        assert(a == 0 || c / a == b);
        return c;
    }

    function safeDiv(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b > 0);
        uint256 c = div_uint256(a, b);
        assert(a == add_uint256(mul_uint256(b, c), a % b));
        return c;
    }

    function safeSub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return sub_uint256(a, b);
    }

    function safeAdd(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a && c >= b);
        return c;
    }
}

/**
 * Standard ERC20 token with Short Hand Attack and approve() race condition mitigation.
 *
 * Based on code by FirstBlood:
 * https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol
 */
contract StandardToken is sGuard, SafeMath {
    uint256 public totalSupply;

    /* Actual balances of token holders */
    mapping(address => uint256) balances;

    /* approve() allowances */
    mapping(address => mapping(address => uint256)) allowed;
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
    /**
     *
     * Fix for the ERC20 short address attack
     *
     * http://vessenes.com/the-erc20-short-address-attack-explained/
     */
    modifier onlyPayloadSize(uint256 size) {
        require(msg.data.length == size + 4);
        _;
    }

    function transfer(address _to, uint256 _value)
        public
        onlyPayloadSize(2 * 32)
        returns (bool success)
    {
        require(_to != 0);
        uint256 balanceFrom = balances[msg.sender];
        require(_value <= balanceFrom);

        // SafeMath safeSub will throw if there is not enough balance.
        balances[msg.sender] = safeSub(balanceFrom, _value);
        balances[_to] = safeAdd(balances[_to], _value);
        Transfer(msg.sender, _to, _value);
        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(_to != 0);
        uint256 allowToTrans = allowed[_from][msg.sender];
        uint256 balanceFrom = balances[_from];
        require(_value <= balanceFrom);
        require(_value <= allowToTrans);

        balances[_to] = safeAdd(balances[_to], _value);
        balances[_from] = safeSub(balanceFrom, _value);
        allowed[_from][msg.sender] = safeSub(allowToTrans, _value);
        Transfer(_from, _to, _value);
        return true;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }

    function approve(address _spender, uint256 _value)
        public
        returns (bool success)
    {
        // To change the approve amount you first have to reduce the addresses`
        //  allowance to zero by calling `approve(_spender, 0)` if it is not
        //  already 0 to mitigate the race condition described here:
        //  https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
        //    if ((_value != 0) && (allowed[msg.sender][_spender] != 0)) throw;
        // require((_value == 0) || (allowed[msg.sender][_spender] == 0));

        allowed[msg.sender][_spender] = _value;
        Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender)
        public
        view
        returns (uint256 remaining)
    {
        return allowed[_owner][_spender];
    }

    /**
     * Atomic increment of approved spending
     *
     * Works around https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     */
    function addApproval(address _spender, uint256 _addedValue)
        public
        onlyPayloadSize(2 * 32)
        returns (bool success)
    {
        uint256 oldValue = allowed[msg.sender][_spender];
        allowed[msg.sender][_spender] = safeAdd(oldValue, _addedValue);
        Approval(msg.sender, _spender, allowed[msg.sender][_spender]);
        return true;
    }

    /**
     * Atomic decrement of approved spending.
     *
     * Works around https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     */
    function subApproval(address _spender, uint256 _subtractedValue)
        public
        onlyPayloadSize(2 * 32)
        returns (bool success)
    {
        uint256 oldVal = allowed[msg.sender][_spender];

        if (_subtractedValue > oldVal) {
            allowed[msg.sender][_spender] = 0;
        } else {
            allowed[msg.sender][_spender] = safeSub(oldVal, _subtractedValue);
        }
        Approval(msg.sender, _spender, allowed[msg.sender][_spender]);
        return true;
    }
}

/**
 * @title Ownable
 * @dev The Ownable contract has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */
contract Ownable is sGuard {
    address public owner;

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    /**
     * @dev The Ownable constructor sets the original `owner` of the contract to the sender
     * account.
     */
    function Ownable() public {
        owner = msg.sender;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    /**
     * @dev Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    function transferOwnership(address newOwner)
        public
        nonReentrant_
        onlyOwner
    {
        require(newOwner != address(0));
        OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
}

contract MigrationAgent is sGuard {
    function migrateFrom(address _from, uint256 _value) public;
}

contract UpgradeableToken is sGuard, Ownable, StandardToken {
    address public migrationAgent;

    /**
     * Somebody has upgraded some of his tokens.
     */
    event Upgrade(address indexed from, address indexed to, uint256 value);

    /**
     * New upgrade agent available.
     */
    event UpgradeAgentSet(address agent);

    // Migrate tokens to the new token contract
    function migrate() public {
        require(migrationAgent != 0);
        uint256 value = balances[msg.sender];
        balances[msg.sender] = safeSub(balances[msg.sender], value);
        totalSupply = safeSub(totalSupply, value);
        MigrationAgent(migrationAgent).migrateFrom(msg.sender, value);
        Upgrade(msg.sender, migrationAgent, value);
    }

    function() public payable {
        require(migrationAgent != 0);
        require(balances[msg.sender] > 0);
        migrate();
        msg.sender.transfer(msg.value);
    }

    function setMigrationAgent(address _agent) external onlyOwner {
        migrationAgent = _agent;
        UpgradeAgentSet(_agent);
    }
}

contract OKOToken is sGuard, UpgradeableToken {
    event Mint(address indexed to, uint256 amount);
    event MintFinished();

    address public allTokenOwnerOnStart;
    string public constant name = "OKOIN";
    string public constant symbol = "OKO";
    uint256 public constant decimals = 6;

    function OKOToken() public {
        allTokenOwnerOnStart = msg.sender;
        totalSupply = 240000000000000;
        balances[allTokenOwnerOnStart] = totalSupply;
        Mint(allTokenOwnerOnStart, totalSupply);
        Transfer(0x0, allTokenOwnerOnStart, totalSupply);
        MintFinished();
    }
}

// ============================================================================

contract IcoOKOToken is sGuard, Ownable, SafeMath {
    address public wallet;
    address public allTokenAddress;
    bool public emergencyFlagAndHiddenCap = false;
    // UNIX format
    uint256 public startTime = 1516838400; // 25 Jan 2017 00:00:00 GMT
    uint256 public endTime = 1524700800; // 26 Apr 2018 00:00:00 GMT

    uint256 public USDto1ETH = 1100; // 1 ether = 1100$
    uint256 public price;
    uint256 public totalTokensSold = 524380060997;
    uint256 public constant maxTokensToSold = 84000000000000; // 35% * (240 000 000.000 000)
    OKOToken public token;

    function IcoOKOToken(address _wallet, OKOToken _token) public {
        wallet = _wallet;
        token = _token;
        allTokenAddress = token.allTokenOwnerOnStart();
        price = ((1 ether / USDto1ETH / 1000000) * 27) / 10;
    }

    function() external payable {
        require(now <= endTime && now >= startTime);
        require(!emergencyFlagAndHiddenCap);
        require(totalTokensSold < maxTokensToSold);
        uint256 value = msg.value;
        uint256 tokensToSend = safeDiv(value, price);
        require(tokensToSend >= 1000000 && tokensToSend <= 350000000000);
        uint256 valueToReturn = safeSub(
            value,
            mul_uint256(tokensToSend, price)
        );
        uint256 valueToWallet = safeSub(value, valueToReturn);

        wallet.transfer(valueToWallet);
        if (valueToReturn > 0) {
            msg.sender.transfer(valueToReturn);
        }
        token.transferFrom(allTokenAddress, msg.sender, tokensToSend);
        totalTokensSold = add_uint256(totalTokensSold, tokensToSend);
    }

    function ChangeUSDto1ETH(uint256 _USDto1ETH)
        public
        nonReentrant_
        onlyOwner
    {
        USDto1ETH = _USDto1ETH;
        ChangePrice();
    }

    function ChangePrice() public nonReentrant_ onlyOwner {
        uint256 priceWeiToUSD = div_uint256(1 ether, USDto1ETH);
        price = add_uint256(
            div_uint256(
                mul_uint256(div_uint256(priceWeiToUSD, 1000000), 27),
                10
            ),
            mul_uint256(
                div_uint256(
                    mul_uint256(div_uint256(priceWeiToUSD, 1000000), 1),
                    2
                ),
                (div_uint256((sub_uint256(now, startTime)), 604800))
            )
        ); // 2.7$ on start + 0.5$ per week
    }

    function ChangeStart(uint256 _startTime) public nonReentrant_ onlyOwner {
        startTime = _startTime;
    }

    function ChangeEnd(uint256 _endTime) public nonReentrant_ onlyOwner {
        endTime = _endTime;
    }

    function emergencyAndHiddenCapToggle() public nonReentrant_ onlyOwner {
        emergencyFlagAndHiddenCap = !emergencyFlagAndHiddenCap;
    }
}
