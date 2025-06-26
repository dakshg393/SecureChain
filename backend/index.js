import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import ethers   from "ethers";
import  contractABI  from "./contract/DocumentVault.json";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Setup Provider, Wallet, Contract
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(
  process.env.CONTRACT_ADDRESS,
  contractABI.abi,
  wallet
);

// ✅ 1. Register User
app.post("/register", async (req, res) => {
  const { account, name, email, userType } = req.body;
  try {
    const tx = await contract.registerUser(account, name, email, userType);
    await tx.wait();
    res.json({ success: true, message: "User registered!" });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ 2. Upload Document
app.post("/upload", async (req, res) => {
  const { account, docHash, docTitle, docType, docDescription } = req.body;
  try {
    const tx = await contract.uploadDocument(
      account,
      docHash,
      docTitle,
      docType,
      docDescription
    );
    await tx.wait();
    res.json({ success: true, message: "Document uploaded!" });
  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ 3. Verify User
app.get("/verify-user/:address", async (req, res) => {
  try {
    const isRegistered = await contract.verifyUser(req.params.address);
    res.json({ address: req.params.address, isRegistered });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ 4. Verify Document
app.get("/verify-document/:address/:docHash", async (req, res) => {
  try {
    const exists = await contract.verifyDocument(
      req.params.address,
      req.params.docHash
    );
    res.json({ exists });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
