import React, { useState } from "react";
import { ethers } from "ethers";

import Button from "../components/microComponents/Button";
const Login = () => {

     const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User rejected request:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

    return (
        <section className="flex items-center justify-center flex-col gap-y-3 p-4">
            <h1 className="text-2xl text-center">Login</h1>
            <p className="text-center">Login to Your Account.</p>

            <div className="flex  items-center justify-center min-w-[80vw] md:min-w-100   p-4 flex-col gap-y-8 rounded-2xl border-2 my-6 bg-white">
                <span className="text-start">
                    <h1>Login</h1>
                    <p>Login Now</p>
                </span>
                <label htmlFor="connectMetamask" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 min-h-10 min-w-30 ">
                    Connect MetaMask Account
                </label>
                <input id="connectMetamask" type="button" className="hidden" onClick={connectWallet} />
{account && (
  <p className="text-sm text-green-600">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
)}
    <label>Password</label>
    <input type="password" className="border-1" />


                <Button>Login</Button>
            </div>
        </section>
    )
}

export default Login