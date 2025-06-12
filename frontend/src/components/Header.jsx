import React from "react";
import { NavLink } from "react-router-dom";
import { NavItems } from "../utils/home.utils";

const Header =()=>{
    return(
        <header className="w-full flex items-center justify-between top-0 left-0 h-14 gap-x-2 bg-amber-200 fixed z-20">
            <div className="flex items-center justify-center pl-6 text-2xl">SecureChain</div>
            <div className="flex items-center justify-center gap-x-8 pr-6">
                 {NavItems.map((item)=>(
                <NavLink className={``} key={item.path} to={item.path}>{item.name}</NavLink>
            ))}

          
            </div>
           
        </header>
    )
}

export default Header