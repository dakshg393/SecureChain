import React, { useState } from "react";

import Button from "../components/microComponents/Button";
const Login = () => {


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
                <input id="connectMetamask" type="button" className="hidden"  />



                <Button>Login</Button>
            </div>
        </section>
    )
}

export default Login