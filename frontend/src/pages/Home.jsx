import React from "react";
import bgImage from "../assets/bgmain1.jpg";
import homeImage from "../assets/homeimage.jpg"
import Button from "../components/microComponents/Button";
const Home = () =>{
    return(
        <section className=" flex flex-wrap justify-center items-center "  
        // style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-full flex items-center justify-center flex-col md:flex-row">
            <div className="w-full md:w-1/2 min-h-full flex flex-col items-start  justify-center p-4 pl-6">
                <h1 className=" text-6xl font-bold pb-4">
                    <span className="">Secure Document<br/></span>
                    <span className="bg-linear-to-l from-cyan-500 to-indigo-500 bg-clip-text text-transparent">Blockchain eVault</span>
                </h1>
                <p className=" pb-4 w-96">Store, verify and secure your critical documents with next-generation blockchain technology. Tamper-proof, encrypted, and instantly verifiable.</p>
                <span ><Button  key={"upload"} text={"Upload Document"}/><button className="border-2 border-cyan-300 h-12 w-36 rounded-4xl ">Verify Document</button> </span>
            </div>
            <div className="w-full md:w-1/2 min-h-full flex items-center justify-end">
                <img src={homeImage} alt="Image" />
            </div>
            </div>
            <div className="bg-amber-500 w-full">
           
              
            </div>
            
        </section>
    )
}

export default Home