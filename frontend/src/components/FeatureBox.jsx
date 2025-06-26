import React from "react";

const FeaturesBox = ({icon,title="",description,className})=>{
    return(
        <div className={`flex items-center justify-center flex-col w-100 h-auto md:h-60 max-w-[80%]  border-2 flex-wrap gap-3 rounded-2xl text-center ${className}`}>
            <p className="text-4xl ">{icon}</p>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-center">{description}</p>

        </div>
    )
}

export default FeaturesBox