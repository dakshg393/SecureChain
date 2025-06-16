import React from "react";
import { features } from "../utils/home.utils";
import FeaturesBox from "../components/FeatureBox";

const Features = () =>{
    return(
        <section className=" flex flex-wrap justify-center items-center md:justify-center flex-col w-full " >
           <div>
                <h1 className="text-4xl text-center">Advanced <span> Blockchain Features</span></h1>
           </div>

           <div className="flex flex-wrap items-center justify-center flex-row gap-8 w-[90%] py-10 ">
                {features.map((feature)=>(
                    <FeaturesBox className="hover:bg-linear-to-bl transition-all duration-500 from-cyan-500 to-indigo-500 hover:slide-up bg-white cursor-pointer hover:-translate-y-4 tra" icon={feature.icon}  title={feature.title} description={feature.description}/>
                ))}
           </div>

            
        </section>
    )
}

export default Features