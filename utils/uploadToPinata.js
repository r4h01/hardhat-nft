const pinataSdk = require("@pinata/sdk")
const path = require("path")
const fs = require("fs")
const pinata = pinataSdk(process.env.PINATA_KEY, process.env.PINATA_SECRET)

async function storeImages(imagesFilePath) {
    const fullPath = path.resolve(imagesFilePath)
    const files = fs.readdirSync(fullPath)

    let response = []
    for (fileIndex in files) {
        const readableStreamFromFile = fs.createReadStream(`${fullPath}/${files[fileIndex]}`)
        try {
            let result = await pinata.pinFileToIPFS(readableStreamFromFile)
            response.push(result)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(`Response ${response}`)

    return { response, files }
}

async function storeTokenUriMetadata(metadata) {
    try {
        const response = await pinata.pinJSONToIPFS(metadata)
        return response
    } catch (error) {
        console.log(error)
    }
    return null
}

module.exports = {
    storeImages,
    storeTokenUriMetadata,
}
