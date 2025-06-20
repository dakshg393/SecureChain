import React from "react";
import { features } from "../utils/home.utils";
import FeaturesBox from "../components/FeatureBox";
import MainHeading from "../components/majorComponent/MainHeading";

const Features = () =>{
    return(
        <section className=" flex flex-wrap justify-center items-center md:justify-center flex-col w-full " >
           <div>
               
                <MainHeading><span className="text-black">Advanced </span>Blockchain Features</MainHeading>
           </div>

           <div className="flex flex-wrap items-center justify-center flex-row gap-8 w-[90%] py-10 ">
                {features.map((feature)=>(
                    <FeaturesBox className="hover:bg-theme-gradient transition-all duration-500 hover:slide-up bg-white cursor-pointer hover:-translate-y-4 tra" icon={feature.icon}  title={feature.title} description={feature.description}/>
                ))}
           </div>

            
        </section>
    )
}

export default Features