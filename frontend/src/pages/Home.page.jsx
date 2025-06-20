import React from "react";
import homeImage from "../assets/homeimage.jpg"
import Button from "../components/microComponents/Button";
import { Link } from "react-router-dom";
const Home = () =>{
    return(
        <section className=" flex flex-wrap justify-center items-center min-h-screen  max-w-screen"  
        // style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-full flex items-center justify-center flex-col md:flex-row flex-wrap">
            <div className="w-full md:w-1/2 min-h-full flex flex-col items-start  justify-center p-4 pl-6 flex-wrap">
                <h1 className="text-3xl md:text-6xl font-bold pb-4">
                    <span className="">Secure Document<br/></span>
                    <span className="bg-theme-gradient bg-clip-text text-transparent">Blockchain eVault</span>
                </h1>
                <p className=" pb-4 ">Store, verify and secure your critical documents with next-generation blockchain technology. Tamper-proof, encrypted, and instantly verifiable.</p>
                <span >
                     <Link to={"upload"}><Button  key={"upload"}  customcss="bg-theme-gradient">Upload</Button></Link>
                    <Link to={"verify"}><Button  key={"verifyDocButton"}  customcss="bg-white">Verify</Button></Link>
                 </span>
            </div>
            <div className="w-full md:w-1/2 min-h-full flex items-center justify-end ">
                <img src={homeImage} alt="Image" />
            </div>
            </div>
            <div className="bg-amber-500 w-full">
           
              
            </div>
            
        </section>
    )
}

export default Home