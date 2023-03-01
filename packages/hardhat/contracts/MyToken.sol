//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
  event Mint(address indexed to, uint256 value);

  constructor() ERC20("MyToken", "MTK") {}

  function mint(address to) public returns (bool) {
    _mint(to, 1000);
    return true;
  }
}