import React, { useState } from "react";
import { ethers } from "ethers";

import Button from "../components/microComponents/Button";
import MainHeading from "../components/majorComponent/MainHeading";
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
            <MainHeading > <span className="text-black">Let's Get</span> Started</MainHeading>
            <p className="text-center">  Connect your MetaMask wallet to securely access your dashboard.</p>

            <div className="flex  items-center justify-center min-w-[80vw] md:min-w-100   p-4 flex-col gap-y-8 rounded-2xl border-2 my-6 bg-white">
                <span className="text-start">
                    <h1>Connect Your Wallet</h1>
                    <p> Use your MetaMask wallet to log in to your account.</p>
                </span>
                <label htmlFor="connectMetamask" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 min-h-10 min-w-30 ">
                    Connect MetaMask Account
                </label>
                <input id="connectMetamask" type="button" className="hidden" onClick={connectWallet} />
{account && (
  <p className="text-sm text-green-600">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
)}
    
     
            </div>
        </section>
    )
}

export default Login