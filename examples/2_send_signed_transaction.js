require("dotenv").config()
const { ethers } = require("ethers")

// Import private key helper
const { promptForKey } = require("../helpers/prompt.js")

// Setup connection

async function main() {
  const privateKey = await promptForKey()

  // Setup wallet

  // Get balances

  // Log balances

  // Create transaction

  // Wait transaction

  // Get balances

  // Log balances
}

main()