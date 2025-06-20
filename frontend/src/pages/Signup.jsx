import React, { useState } from "react";

import Button from "../components/microComponents/Button";
import MainHeading from "../components/majorComponent/MainHeading";
const Signup = () => {
    const [accountType,setAccountType] =useState("")

    return (
        <section className="flex items-center justify-center flex-col gap-y-3">
            <MainHeading className="text-2xl text-center">Signup</MainHeading>
            <p className="text-center">Signup to Your Account.</p>

            <div className="flex  items-center justify-center min-w-[80vw] md:min-w-100 p-4 flex-col gap-y-8 rounded-2xl border-2 my-6 bg-white ">
                <span className="text-start">
                    <h1>SignUp</h1>
                    <p>Signup Now</p>
                </span>
                <label className="font-medium">Choose account type</label>
                <select
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md"
                >
                
                    <option value="User">User</option>
                    <option value="Organization">Organization</option>
                </select>
                <label>MetaMaskID ID</label>
                <input type="text" className="border-1" />
                <label>Name</label>
                <input type="text" className="border-1" />
                <label>Email</label>
                <input type="text" className="border-1" />



                <Button>Sign Up</Button>
            </div>
        </section>
    )
}

export default Signup