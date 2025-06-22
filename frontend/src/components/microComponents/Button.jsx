import React, { Children } from "react";

const Button =({text,onclick,customcss="",children})=>{
 
    return(
        <button  className={` cursor-pointer min-h-12 min-w-36 rounded-4xl m-2 border-1   ${customcss}`}>{children}</button> 
    )
}

export default Button