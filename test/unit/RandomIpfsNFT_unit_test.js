const { assert, expect } = require("chai")
const { network, deployments, ethers, getNamedAccounts } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Test Del contratto IpfsRandomNft!!!", async function () {
          let deployer
          beforeEach(async () => {
              await deployments.fixture(["basic"])
              baseNft = await ethers.getContract("RandomIpfsNft")
              deployer = (await getNamedAccounts()).deployer
          })


      })
