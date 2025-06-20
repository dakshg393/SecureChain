import express from "express";
import dotenv from "dotenv";
import { ethers } from "ethers";
import contractABI from "./abi/SecureChain.json" assert { type: "json" }; // import ABI

dotenv.config();

const app = express();
app.use(express.json());

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, contractABI, signer);

// Route: Register user
app.post("/signup", async (req, res) => {
  const { metaMaskId, type, name } = req.body;

  try {
    const tx = await contract.registerUser(metaMaskId, type, name);
    await tx.wait();
    res.json({ success: true, txHash: tx.hash });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Route: Verify user (admin flow)
app.post("/verifyUser", async (req, res) => {
  const { metaMaskId } = req.body;

  try {
    const tx = await contract.verifyUser(metaMaskId);
    await tx.wait();
    res.json({ success: true, txHash: tx.hash });
  } catch (err) {
    console.error("Verification Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Route: Store document
app.post("/storedoc", async (req, res) => {
  const {
    metaMaskId,
    docHash,
    docTitle,
    docType,
    docDescription,
    docFileLink,
  } = req.body;

  try {
    const tx = await contract.storeDocument(
      metaMaskId,
      docHash,
      docTitle,
      docType,
      docDescription,
      docFileLink
    );
    await tx.wait();
    res.json({ success: true, txHash: tx.hash });
  } catch (err) {
    console.error("StoreDoc Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Route: Get user documents
app.post("/getdocs", async (req, res) => {
  const { userAddress } = req.body;

  try {
    const docs = await contract.getDocuments(userAddress);
    res.json(docs);
  } catch (err) {
    console.error("GetDocs Error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default app;
