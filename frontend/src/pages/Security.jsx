import React from "react";
import securityImage from "../assets/security.jpg"

const Security = () =>{
    return(
        <section className=" flex flex-wrap justify-center items-center  flex-col text-center" >
           <div className="flex items-center justify-center flex-col">
                <h1 className="text-4xl">Advanced <span>  Security Architecture </span></h1>
                <p className="text-center ">In a digital world full of vulnerabilities, SecureChain ensures your documents <br/> stay protected from tampering, fraud, and unauthorized access.</p>
           </div>

           <div className="flex flex-wrap items-center justify-center flex-row gap-8 m-10 border-2 rounded-2xl">
                <div className="flex items-center justify-center  sm:flex-row md:flex-col">
                    <img  height={400} width={400} src={securityImage} />
                </div>
                <div className="">
                    <h1 className="text-2xl  py-8"> ✅ Why Our Security Stands Out ?</h1> 
                    <ol>
                        <li>Blockchain-Powered Integrity</li>
                        <li>Decentralized Authentication</li>
                        <li>End-to-End Hash Verification</li>
                        <li>Trustless Verification</li>
                        <li>Encryption & Anonymity</li>
                    </ol>
                </div>
           </div>

            
        </section>
    )
}

export default Security