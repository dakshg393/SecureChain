import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavItems } from "../utils/home.utils";


const Header =()=>{
    const [isNavOpen,setNavOpen] = useState(true)

    const location = useLocation(); 


    useEffect(() => {
        setNavOpen(false); 
    }, [location.pathname]);

    const toggleNav = ()=>{
        setNavOpen((state)=>!state)
    }
    return(
        <header className="w-full flex flex-col md:flex-row items-center  justify-center md:justify-between top-0 left-0 min-h-14 h-auto md:h-14 gap-6 md:gap-x-2  bg-white inset-shadow-2xs border-b-1 fixed z-20 font-semibold ">
            <div className="flex  flex-row items-center justify-between px-4 md:px-auto  md:pl-6 text-2xl w-full md:w-auto">
                <h1>SecureChain</h1> 
                <button className={`block md:hidden`} onClick={toggleNav}>X</button>
            </div>
            <div className={`${isNavOpen?"flex":"hidden md:flex"} items-center justify-center gap-x-8 pr-6 flex-col md:flex-row gap-y-4  w-full md:w-auto bg-white`}>
                 {NavItems.map((item)=>(
                <NavLink className={({isActive})=>`${isActive?"text-blue-500":""}`} key={item.path} to={item.path}>{item.name}</NavLink>
            ))}

          
            </div>
           
        </header>
    )
}

export default Header