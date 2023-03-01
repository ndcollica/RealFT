//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
 import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ERC20Transfer {
  IERC20 public token;

  constructor(address _tokenAddress) {
    token = IERC20(_tokenAddress);
  }

  function transferTokens(address _recipient, uint256 _amount) external {
    require(token.balanceOf(msg.sender) >= _amount, "Insufficient balance");
    require(token.transferFrom(msg.sender, _recipient, _amount), "Transfer failed");
  }
}