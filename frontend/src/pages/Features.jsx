import React from "react";
import { features } from "../utils/home.utils";
import FeaturesBox from "../components/FeatureBox";

const Features = () =>{
    return(
        <section className=" flex flex-wrap justify-center items-center md:justify-center flex-col " >
           <div>
                <h1 className="text-4xl">Advanced <span> Blockchain Features</span></h1>
           </div>

           <div className="flex flex-wrap items-center justify-center flex-row gap-8 p-10">
                {features.map((feature)=>(
                    <FeaturesBox icon={feature.icon}  title={feature.title} description={feature.description}/>
                ))}
           </div>

            
        </section>
    )
}

export default Features