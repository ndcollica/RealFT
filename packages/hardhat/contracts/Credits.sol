pragma solidity >=0.8.0 <0.9.0;
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Credits is ERC20 {
    constructor(address toAddress, uint256 amount) ERC20("Credits", "CREDITS") {
        _mint(toAddress, amount);
    }
}