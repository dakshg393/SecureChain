// const { ethers } = require("ethers");

// require("dotenv").config();
import {ethers} from "ethers"

const abi = [ /* your ABI from Remix */ ];

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, process.env.ABI, wallet);

export default contract
