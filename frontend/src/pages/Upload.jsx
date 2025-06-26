import React, { useEffect, useState } from "react";
import { CloudUpload } from "lucide-react"
import Button from "../components/microComponents/Button";
import MainHeading from "../components/majorComponent/MainHeading";
import Tesseract from "tesseract.js"

const Upload = () => {
    const [uploadDoc, setUploadDoc] = useState(false)
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState("No file chosen")

    const handleDrop = (e) => {
        e.preventDefault();
        const items = e.dataTransfer.items;

        if (items && items[0].kind === "file") {
            const file = e.dataTransfer.files[0];
            setFileName(file.name);
            setFile(file)
            return;
        }

        // Handle URL drops from Google Images
        const url = e.dataTransfer.getData("text/uri-list");
        if (url) {
            setFileName("Image from web: " + url.split("/").pop()); // just a label
            // Optional: fetch the file manually if needed
        }
    };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file)
            setFileName(file.name);
        }
    };

    useEffect(() => {
        const extractTextFromImage = async () => {
            if (!file || file.type === "application/pdf") return;

            try {
                const result = await Tesseract.recognize(file, "eng");
                const text = result.data.text;
                console.log("Extracted OCR Text:", text);
                // TODO: Hash this and send to backend or blockchain
            } catch (err) {
                console.error("OCR failed:", err);
            }
        };

        extractTextFromImage();
    }, [file]);



    return (
        <section className="flex items-center justify-center flex-col gap-y-3">
            <MainHeading > <span className="text-black">Secure</span> Document Upload</MainHeading>
            <p className="text-center">Upload your legal documents securely to our blockchain-powered eVault, ensuring tamper-proof storage and instant verification.</p>

            <div className="flex  items-center justify-center  p-4 flex-col gap-y-8 rounded-2xl border-2 my-6 bg-white">
                <span className="text-start">
                    <h1>Document Uploader</h1>
                    <p>Drag and drop your document or use the file browser. We support PDF, DOCX, JPG, and PNG formats.</p>
                </span>

                <div className="flex items-center justify-center w-full ">
                    <div className="flex items-center p-4 flex-col space-y-2 w-full  border-1 border-dashed rounded-2xl"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}>
                        <label><CloudUpload /></label>
                        <h1>Drag and drop your file here</h1>
                        <h1>or</h1>
                        <label htmlFor="file-upload" accept=".jpg,.jpeg,.png,.pdf" className="cursor-pointer bg-theme-gradient text-white px-4 py-2  rounded-full h-10 w-30 ">
                            Browse File
                        </label>
                        <input id="file-upload" type="file" accept=".jpg,.jpeg,.png,.pdf" className="hidden" onChange={handleFileChange} />
                        <p id="file-name" className="text-sm ">{fileName}</p>
                    </div>
                </div>

                <div className=" border-1 p-8 flex justify-center flex-col gap-y-4 rounded-2xl">
                    <h1>Document Metadata</h1>
                    <span>
                        <label htmlFor="">Document Title:</label>
                        <input className="border-1 mx-2 rounded-sm" type="text" placeholder="Enter Document Title" />
                        <label htmlFor="">Document Type:</label>
                        <input className="border-1 mx-2 rounded-sm" type="text" placeholder="Enter Document Type" /><br />
                    </span>
                    <label htmlFor="">Document Discription</label>
                    <input type="text" className="w-full min-h-20 border-1 mx-2 rounded-sm" placeholder="Enter Document Description" />
                </div>

                <Button customcss="bg-theme-gradient">Upload Document</Button>
            </div>
        </section>
    )
}

export default Upload