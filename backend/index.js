

// import app from "./app.js";
// import dotenv from "dotenv"

// dotenv.config({
//     path:"./.env"
// })

// import { fromPath } from "pdf2pic";
// import Tesseract from "tesseract.js";
// import fs from "fs";
// import crypto from "crypto"
// // Step 1: Convert PDF to image (first page as example)
// const convert = fromPath("./daksh.pdf", {
//   density: 150,
//   saveFilename: "output",
//   savePath: "./output",
//   format: "png",
//   width: 800,
//   height: 1000,
// });

// convert(1).then(async (res) => {
//   console.log("Image saved:", res.path);

//   // Step 2: Run OCR on the saved image
//   const result = await Tesseract.recognize(res.path, "eng", {
//     logger: (m) => console.log(m),
//   });

//   const text = result.data.text;
//   console.log("Extracted OCR Text:\n", text);

//   // Step 3: Hash the extracted text
// //   const crypto = await import('crypto');
//   const hash = crypto.createHash('sha256').update(text).digest('hex');
//   console.log("OCR Text SHA256 Hash:", hash);
// });


// app.listen(5000,()=>{
    
//     console.log("App is Running on Port 500")
// })

import app from "./app.js";
import dotenv from "dotenv";
import { fromPath } from "pdf2pic";
import Tesseract from "tesseract.js";
import fs from "fs";
import crypto from "crypto";

dotenv.config({ path: "./.env" });

// Step 1: Convert PDF to image (first page)
const convert = fromPath("./daksh.pdf", {
  density: 150,
  saveFilename: "output",
  savePath: "./output",
  format: "png",
  width: 800,
  height: 1000,
});

const runOCR = async () => {
  try {
    const res = await convert(1);
    console.log("Image saved:", res.path);

    const result = await Tesseract.recognize(res.path, "eng", {
      logger: (m) => console.log(m),
    });

    const text = result.data.text;
    console.log("Extracted OCR Text:\n", text);

    const hash = crypto.createHash("sha256").update(text).digest("hex");
    console.log("OCR Text SHA256 Hash:", hash);
  } catch (err) {
    console.error("OCR or Hashing Failed:", err);
  }
};

app.listen(5000, () => {
  console.log("App is Running on Port 5000");
  runOCR(); // Run OCR once server starts (optional)
});
