import React from "react";

const Button =({text,onclick,className=""})=>{
    return(
        <button className={`bg-linear-to-l from-sky-500 to-indigo-500 h-12 w-36 rounded-4xl m-2 ${className}`}>{text}</button> 
    )
}

export default Button