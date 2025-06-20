import React from "react";
import MainHeading from "../components/majorComponent/MainHeading";

const Contact = ()=>{
    return(
        <section className="flex items-center justify-center min-h-[80vh] ">
            <MainHeading>Contact Us</MainHeading>
            <div className="flex items-center justify-center flex-col bg-linear-to-bl bg-cyan-500 to-indigo-500  rounded-2xl h-44 w-88 flex-wrap">
                <h1>Contact Us </h1>
                <h3>Email:daksh@gmail.com</h3>
                <h3>8965-XXXX-XX</h3>
            </div>
        </section>
    )
}

export default Contact