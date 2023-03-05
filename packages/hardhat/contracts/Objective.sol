// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// contract Objective is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
contract Objective is ERC721, ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIdCounter;
  uint256 private _reward;
  bool private isPrimary;
  bool private isCompleted;
  bool private isActive;
  string private title;
  string private description;
  address private parentTokenAddress;
  uint256 private rewardTokenAmount;

  mapping(address => bool) childNfts;
  address[] private childNft_result;

  mapping(address => bool) public whiteList;

  constructor() ERC721("properT Objective", "PRPT") {}

  modifier onlyWhitelist() {
    require(whiteList[msg.sender] == true, "Only whitelist");
    _;
  }

  function safeMint(address to, uint256 tokenId) public onlyWhitelist {
    _safeMint(to, tokenId);
  }

  function _baseURI() internal pure override returns (string memory) {
    return "https://ipfs.io/ipfs/";
  }

  function mintItem(address to, string memory uri) public onlyWhitelist returns (uint256) {
    _tokenIdCounter.increment();
    uint256 tokenId = _tokenIdCounter.current();
    _safeMint(to, tokenId);
    _setTokenURI(tokenId, uri);
    return tokenId;
  }

  function addToWhitelist(address add) public onlyWhitelist {
    whiteList[add] = true;
  }

  function setReward(uint256 amount) public onlyWhitelist {
    _reward = amount;
  }

  // The following functions are overrides required by Solidity.

  //   function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721, ERC721Enumerable) {
  //     super._beforeTokenTransfer(from, to, tokenId);
  //   }

  //   function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override ERC721 {
  //     super._beforeTokenTransfer(from, to, tokenId);
  //   }

  function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }

  function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    return super.tokenURI(tokenId);
  }

  //   function supportsInterface(bytes4 interfaceId) public view override ERC721 returns (bool) {
  //     return super.supportsInterface(interfaceId);
  //   }

  //   function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns (bool) {
  //     return super.supportsInterface(interfaceId);
  //   }
}
