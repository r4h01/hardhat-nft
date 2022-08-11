const { getNamedAccounts, deployments, network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    log("------------------------------------------------")

    const args = []
    const basicNFT = await deploy("BaseNFT", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying..")
        await verify(basicNFT.address, args)
    }
}
module.exports.tags = ["all", "basic"]
