// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Token.sol";

contract Vendor is Ownable {
  struct objectiveType {
    string name;
    uint256 tokenAmount;
  }
  mapping(string => objectiveType) objectiveTypes;
  string[] private objectiveType_result;

  function addObjectiveType(string memory name, uint256 tokenAmount) public {
    objectiveType memory ot = objectiveTypes[name];
    ot.name = name;
    ot.tokenAmount = tokenAmount;
    objectiveType_result.push(name);
  }

  function updateType(string memory name, uint256 tokenAmount, string memory newName) public {
    delete objectiveTypes[name];
    addObjectiveType(newName, tokenAmount);
  }
}
