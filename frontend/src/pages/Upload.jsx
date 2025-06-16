import React from "react";
import { CloudUpload } from "lucide-react"
import Button from "../components/microComponents/Button";
const Upload = () => {
    return (
        <section className="flex items-center justify-center flex-col gap-y-3">
            <h1 className="text-2xl text-center">Secure Document Upload</h1>
            <p className="text-center">Upload your legal documents securely to our blockchain-powered eVault, ensuring tamper-proof storage and instant verification.</p>

            <div className="flex  items-center justify-center  p-4 flex-col gap-y-8 rounded-2xl border-2 my-6 bg-white">
                <span className="text-start">
                    <h1>Document Uploader</h1>
                    <p>Drag and drop your document or use the file browser. We support PDF, DOCX, JPG, and PNG formats.</p>
                </span>
                
                <div className="flex items-center justify-center w-full ">
                    <div class="flex items-center p-4 flex-col space-y-2 w-full  border-1 border-dashed rounded-2xl">
                        <label><CloudUpload /></label>
                        <h1>Drag and drop your file here</h1>
                        <h1>or</h1>
                        <label for="file-upload" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 h-10 w-30 ">
                            Choose File
                        </label>
                        <input id="file-upload" type="file" class="hidden" onchange="document.getElementById('file-name').textContent = this.files[0]?.name || 'No file chosen'" />
                        <p id="file-name" class="text-sm ">No file chosen</p>
                    </div>
                </div>

                <div className=" border-1 p-8 flex justify-center flex-col gap-y-4 rounded-2xl">
                    <h1>Document Metadata</h1>
                    <span>
                        <label htmlFor="">Document Title:</label>
                        <input className="border-1 mx-2 rounded-sm" type="text" placeholder="Enter Document Title"/>
                          <label htmlFor="">Document Type:</label>
                        <input className="border-1 mx-2 rounded-sm" type="text" placeholder="Enter Document Type"/><br/>
                    </span>
                    <label htmlFor="">Document Discription</label>
                    <input  type="text" className="w-full min-h-20 border-1 mx-2 rounded-sm" placeholder="Enter Document Description"/>
                </div>

                <Button>Upload Document</Button>
            </div>
        </section>
    )
}

export default Upload