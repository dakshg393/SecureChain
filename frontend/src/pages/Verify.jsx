import React, { useState } from "react";
import { FileType, File, CodeXml } from "lucide-react"
import Button from "../components/microComponents/Button";
const Verify = () => {
    const [uploadDoc, setUploadDoc] = useState(false)

  
    return (
        <section className="flex items-center justify-center flex-col gap-y-3">
            <h1 className="text-2xl text-center">Document Verification Portal</h1>
            <p className="text-center">Instantly verify document authenticity with our AI-powered blockchain verification system.</p>

            <div className="flex  items-center justify-center  p-4 flex-col gap-y-8 rounded-2xl border-2 my-6 bg-white">
                <span className="text-start">
                    <h1>Verify Document</h1>
                    <p>Upload a document to verify its authenticity against the blockchain record.</p>
                </span>

                <div className="flex items-center justify-center w-full p-4 gap-4  ">
                    <button className={`w-1/2 border-2 cursor-pointer text-center rounded-sm ${uploadDoc?"border-blue-500":""}`} onClick={()=>setUploadDoc(true)}> <File /> Upload Document </button>
                    <button className={`w-1/2 border-2  cursor-pointer rounded-sm ${uploadDoc? "":"border-blue-500"}`} onClick={()=>setUploadDoc(false)}> <CodeXml /> Enter Hash ID</button>
                </div>

                {uploadDoc ?
                    <div className="flex items-center justify-center w-full ">
                        <div class="flex items-center p-4 flex-col space-y-2 w-full  border-1 border-dashed rounded-2xl">
                            <label htmlFor=""><FileType /></label>
                            <h1>Drag and drop document to verify</h1>
                            <h1>or</h1>
                            <label for="file-upload" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 h-10 w-30 ">
                                Choose File
                            </label>
                            <input id="file-upload" type="file" class="hidden" onchange="document.getElementById('file-name').textContent = this.files[0]?.name || 'No file chosen'" />
                            <p id="file-name" class="text-sm ">No file chosen</p>
                        </div>
                    </div>
                    :
                    <div className=" border-1 p-8 flex justify-center flex-col gap-y-4 rounded-2xl w-full">
                        <h1>Verify Document </h1>
                       
                        <label htmlFor="">Document Hash ID</label>
                        <input type="text" className="w-full min-h-20 border-1 mx-2 rounded-sm" placeholder="Enter Document Hash ID" />
                    </div>
                }

                <Button>Verfiy Document</Button>
            </div>
        </section>
    )
}

export default Verify