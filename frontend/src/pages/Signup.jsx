import React, { useState } from "react";

import Button from "../components/microComponents/Button";
import MainHeading from "../components/majorComponent/MainHeading";
const Signup = () => {
    const [accountType,setAccountType] =useState("")

    return (
        <section className="flex items-center justify-center flex-col gap-y-3">
            <MainHeading >  <span className="text-black">Sign Up</span> to SecureChain</MainHeading>
            <p className="text-center"> Connect your MetaMask wallet to create your blockchain-backed identity and start securely verifying documents.</p>

            <div className="flex  items-center justify-center min-w-[80vw] md:min-w-100 p-4  gap-y-8 flex-col rounded-2xl border-2 my-6 bg-white ">
                <span className="text-start">
                    <h1>Wallet Sign Up</h1>
                    <p> Use your MetaMask wallet to register a tamper-proof, Web3-secured account.</p>
                </span>
                <span>
                <label className="font-medium">Choose account type</label>
                <select
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md"
                >
                
                    <option value="User">User</option>
                    <option value="Organization">Organization</option>
                </select>
               </span>
               <span>
                <label>Name</label>
                <input type="text" className="border-1" />
                </span>
                <span>
                <label>Email</label>
                <input type="text" className="border-1" />
                </span>



                <Button customcss="bg-theme-gradient">Sign Up</Button>
            </div>
        </section>
    )
}

export default Signup