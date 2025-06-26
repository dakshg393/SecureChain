const express = require("express");
const { ethers } = require("ethers");
const cors = require("cors");
require("dotenv").config();
const contractABI = require("./UserVaultABI.json");

const app = express();
app.use(cors());
app.use(express.json());

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, contractABI, signer);

// Register User
app.post("/api/register", async (req, res) => {
  const { account, name, email, userType } = req.body;

  try {
    const tx = await contract.registerUser(account, name, email, userType);
    await tx.wait();
    res.json({ status: "success", txHash: tx.hash });
  } catch (err) {
    res.status(500).json({ error: err.reason || "Registration failed" });
  }
});

// Upload Document
app.post("/api/upload", async (req, res) => {
  const { account, docHash, docTitle, docType, docDescription } = req.body;

  try {
    const tx = await contract.uploadDocument(account, docHash, docTitle, docType, docDescription);
    await tx.wait();
    res.json({ status: "uploaded", txHash: tx.hash });
  } catch (err) {
    res.status(500).json({ error: err.reason || "Upload failed" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
