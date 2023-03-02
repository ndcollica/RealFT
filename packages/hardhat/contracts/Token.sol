pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20 {
  mapping(address => bool) public whiteList;

  modifier onlyWhitelist() {
    require(whiteList[msg.sender] == true, "Only whitelist");
    _;
  }

  constructor() ERC20("EthDenver Camp Buidl Token", "CABU") {
    whiteList[payable(msg.sender)] = true;
  }

  function mint(address to, uint256 amount) public onlyWhitelist {
    _mint(to, amount);
  }

  function addToWhitelist(address add) public onlyWhitelist {
    whiteList[add] = true;
  }
}
