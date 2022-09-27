const { assert, expect } = require("chai")
const { network, deployments, ethers, getNamedAccounts } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Test Base NFT", async function () {
          let deployer
          beforeEach(async () => {
              await deployments.fixture(["basic"])
              baseNft = await ethers.getContract("BaseNFT")
              deployer = (await getNamedAccounts()).deployer
          })

          describe("Constructor", async () => {
              it("set the token counter to zero", async () => {
                  const tokenId = await baseNft.getTokenCounter()
                  assert.equal(tokenId.toString(), "0")
              })
          })

          describe("mintNFT", async () => {
              it("mint nft and increment the token counter", async () => {
                  const mint = await baseNft.mintNFT()
                  const tokenId = await baseNft.getTokenCounter()
                  assert.equal(tokenId.toString(), "1")
              })

              it("mint nft and increment the token counter", async () => {
                for(let i=0; i<30000; i++){
                    const mint = await baseNft.mintNFT()

                }  
                  const tokenId = await baseNft.getTokenCounter()
                  assert.equal(tokenId.toString(), "1")
              })

              it("update the balance of the msg.sender of the mint function", async () => {
                  const mint = await baseNft.mintNFT()
                  const balance = await baseNft.balanceOf(deployer)
                  assert.equal(balance.toString(), "1")
              })

              it("the msg.sender is the owner of the tokenId that he has already minted", async () => {
                  const mint = await baseNft.mintNFT()
                  const owner = await baseNft.ownerOf(0)
                  assert.equal(owner.toString(), deployer)
              })

              it("has the tokenURI set in the cunstructor", async () => {
                  const tokenUri = await baseNft.tokenURI(0)
                  assert.equal(
                      tokenUri,
                      "ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json"
                  )
              })
          })
      })
