const networkConfig = {
    default: {
        name: "hardhat",
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        keepersUpdateInterval: "30",
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        callbackGasLimit: "500000",
    },
    31337: {
        name: "localhost",
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        keepersUpdateInterval: "30",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        callbackGasLimit: "500000",
    },
    42: {
        name: "kovan",
        linkToken: "0xa36085F69e2889c224210F603D836748e7dC0088",
        ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
        oracle: "0xc57b33452b4f7bb189bb5afae9cc4aba1f7a4fd8",
        jobId: "d5270d1c311941d0b08bead21fea7747",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        keepersUpdateInterval: "30",
    },
    4: {
        name: "rinkeby",
        linkToken: "0x01be23585060835e02b77ef475b0cc51aa1e0709",
        ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        vrfCoordinator: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
        subscriptionId: 9186,
        oracle: "0xc57b33452b4f7bb189bb5afae9cc4aba1f7a4fd8",
        jobId: "6b88e0402e5d415eb946e528b8e0c7ba",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        keepersUpdateInterval: "30",
    },
    5: {
        name: "goerli",
        linkToken: "0x326c977e6efc84e512bb9c30f76e30c160ed06fb",
        vrfCoordinator: "0x2ca8e0c643bde4c2e08ab1fa0da3401adad7734d",
        subscriptionId: 2679,
        gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        callbackGasLimit: "500000",
        fundAmount: "100000000000000000", // 0.1
        keepersUpdateInterval: "30",
    },
    1: {
        name: "mainnet",
        linkToken: "0x514910771af9ca656af840dff83e8264ecf986ca",
        fundAmount: "0",
        keepersUpdateInterval: "30",
    },
    137: {
        name: "polygon",
        linkToken: "0xb0897686c545045afc77cf20ec7a532e3120e0f1",
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
        oracle: "0x0a31078cd57d23bf9e8e8f1ba78356ca2090569e",
        jobId: "12b86114fa9e46bab3ca436f88e1a912",
        fee: "100000000000000",
        fundAmount: "100000000000000",
    },
}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}
