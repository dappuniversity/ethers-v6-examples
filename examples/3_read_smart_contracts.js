require("dotenv").config()
const { ethers } = require("ethers")

// Setup connection
const URL = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
const provider = new ethers.JsonRpcProvider(URL)

// Define "Application Binary Interface"

// Setup contract

async function main() {
  // Get contract state

  // Log contract state

  // Get ERC20 balance

  // Log ERC20 balance
}

main()