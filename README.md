# RealFT

## Problem
NFT’s have a bad rep. NFT’s sold for thousands are now worthless. The general public feels they are just meaningless jpegs they can right click and copy at will. The general public does not know they can attach NFT’s to real world value.

## Solution
RealFT solves this problem by allowing anyone to turn their property into an NFT collection. They can add certificates of ownership, maintenance, certificates of authenticity, images of key events with the property, etc. to the collection to add value to their property by making the papertrail to their property as immutable as the blockchain.

### Example
Let’s say I buy a t-shirt at a concert. I can take a picture of the shirt and mint a new NFT collection. I can then add a subNFT of the shirt being signed by the band! This NFT collection adds value by giving more context to the signature. This can be done with certificates of authenticity of luxury watches, celebrity events with luxury cars, etc. Everyone will see that their NFT’s are attached to things of real world value.

## Market Size and Opportunity
- The luxury watches market was valued at $43,661.8 million in 2019, and is estimated to reach $51,317.3 million by 2027
- The global luxury car market size was USD 449.7 billion in 2019 and is projected to reach USD 655.0 billion by 2027, exhibiting a CAGR of 9.3% during the forecast period.
- The luxury yacht market size was valued at $5.8 billion in 2020 and is expected to reach $12.8 billion by 2031, registering a CAGR of 8.0% from 2022 to 2031.
- Luxury Yacht, Car, and Watch owners as well as other property owners will be able to add their property to the blockchain increasing the value of the blockchain both by their property and the network effects of their participants.

## Product Functionality
Users get a burner wallet on visit to the site with the option to sign in with web3auth. Users who authenticate with web3auth will receive tokens to mint 10 free RFT's.

Users will create and view their collection of RealFT Collections using data from Infura, Polygon, and IPFS.

Polygon is the chain where RFTs data is stored

IPFS is where the images are stored

Infura is used to interact with the polygon blockchain.

Users can create a new RFT collection with a photo taken from device or storage.

Users can view collections by clicking on a collection. In the future they will be able to flick through collections as a carousel.

Users can add a new subRFT to the collection with photo, title, and description.

Users can transfer collection to address from home and individual collection page.

## Team and Partners
- Matthew Cahn

- Nickolas Collica

- Emily Shelton


## Competition
Most NFT companies are working on generating NFT’s of JPEG’s or In Game items. I haven’t yet found one that allows people to make NFT’s of their property though people can do it manually on OpenSea or other platforms.

## Investment Use of Funds
Development of wallet app with ability to create NFT’s and SubNFT’s and the ability to encrypt private NFT’s.

Tokens for new users to be able to generate 10 NFT’s as an incentive to sign up and use the platform.

Initial diagram for app: https://www.figma.com/file/jKIYo52hNW30A4NcbsHysx/Luxvesting-RealFT-Creation?node-id=0%3A1

## ETH Denver 2023 Bounties
- #BUIDLathon 2023 NFTs + Metaverse + Gaming Track
- Best Use of Polygon
- Build with Web3Auth
- Integrate Web3Auth Core-Kit SDK in your Ethereum Application
- Best Use of Infura NFT API
- Best Lens app
- Integrate Lens
- Best Use of Lens Protocol using Infura
- Deploy your smart contract on Scroll
- Scroll ♥ Lens | Cross-chain Decentralized Social Media


# Built Using:

# Scaffold-Eth 2

⚠️ This project is currently under active development. Things might break. Feel free to check the open issues & create new ones.

*The best way to get started building decentralized applications on Ethereum!*

A new version of [scaffold-eth](https://github.com/scaffold-eth/scaffold-eth/tree/master) with its core functionality. Built using NextJS, RainbowKit, Wagmi and Typescript.

- ✅ Contract component to easily edit the smart contracts and view & test the contract on your frontend
- 🔥 Burner wallet & local faucet
- 🔐 Integration with the different wallet providers

---

## Quickstart

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/se-2.git
cd se-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`.

Run smart contract test with `yarn hardhat:test`

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend in `packages/nextjs/pages`
- Edit your deployment scripts in `packages/hardhat/deploy`

## Deploying Smart Contracts
Once you are ready to deploy your smart contracts, there are a few things you need to adjust.

1. Select the network

By default, ```yarn deploy``` will deploy the contract to the local network. You can change the defaultNetwork in `packages/hardhat/hardhat.config.js.` You could also simply run ```yarn deploy --network target_network``` to deploy to another network.

Check the `hardhat.config.js` for the networks that are pre-configured. You can also add other network settings to the `hardhat.config.js file`. Here are the [Alchemy docs](https://docs.alchemy.com/docs/how-to-add-alchemy-rpc-endpoints-to-metamask) for information on specific networks.

2. Generate a new account or add one to deploy the contract(s) from. Additionally you will need to add your Alchemy API key. Rename `.env.example` to `.env` and fill the required keys.

```
ALCHEMY_API_KEY="",
DEPLOYER_PRIVATE_KEY=""
```

The deployer account is the account that will deploy your contracts and execute calls you make in your deployment script.

You can generate a random account / private key with ```yarn generate``` or add the private key of your crypto wallet. ```yarn generate``` will create a random account and add the DEPLOYER_PRIVATE_KEY to the .env file. You can check the generated account with ```yarn account```.

3. Deploy your smart contract(s)

Run the command below to deploy the smart contract to the target network. Make sure to have some funds in your deployer account to pay for the transaction.

```
yarn deploy --network network_name
```

4. Verify your smart contract

You can verify your smart contract on Etherscan by running:

```
yarn verify --network network_name
```

## Deploying your NextJS App

Run `yarn vercel` and follow the steps to deploy to Vercel. Once you log in (email, github, etc), the default options should work. It'll give you a public URL.

If you want to redeploy to the same production URL you can run `yarn vercel --prod`. If you omit the `--prod` flag it will deploy it to a preview/test URL.

**Make sure your `.env.production` file has the values you need.**

**Hint**: We recommend connecting the project GitHub repo to Vercel so you the gets automatically deployed when pushing to `main`

---
## ⚠️ Disabling type & linting error checks 
> **Hint**
> Typescript helps you catch errors at compile time, which can save time and improve code quality, but can be challenging for those who are new to the language or who are used to the more dynamic nature of JavaScript. Below are the steps to disable type & lint check at different levels  
### Disabling commit checks
We run `pre-commit` [git hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) which lints the staged files and don't let you commit if there is an linting error. 

To disable this, go to `.husky/pre-commit` file and comment out `yarn lint-staged --verbose`

```diff
- yarn lint-staged --verbose 
+ # yarn lint-staged --verbose
```

### Deploying to Vercel without any checks 
Vercel by default runs types and lint checks while developing `build` and deployment fails if there is a types or lint error. 

To ignore types and lint error checks while deploying, use : 
```shell
yarn vercel:yolo
```

### Disabling Github Workflow
We have github workflow setup checkout `.github/workflows/lint.yaml` which runs types and lint error checks every time code is __pushed__ to `main` branch or __pull request__ is made to `main` branch 

To disable it, **delete `.github` directory** 

---
## Contributing to Scaffold-Eth 2

We welcome contributions to Scaffold-Eth 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/se-2/blob/master/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-Eth 2.

