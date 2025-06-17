import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NavItems } from "../utils/home.utils";
import {X,AlignJustify} from "lucide-react"

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
        <header className="w-full flex flex-col lg:flex-row items-center  justify-center lg:justify-between top-0 left-0 min-h-14 h-auto lg:h-14 gap-6 lg:gap-x-2  bg-white inset-shadow-2xs border-b-1 fixed z-20 font-semibold ">
            <div className="flex flex-wrap flex-row items-center justify-between px-4 lg:px-auto  lg:pl-6 text-2xl w-full lg:w-auto">
                {/* <h1>SecureChain</h1>  */}
                <Link to={""} >SecureChain</Link>
                <button className={`block lg:hidden`} onClick={toggleNav}>{isNavOpen?<X/> :<AlignJustify/>}</button>
            </div>
            <div className={`${isNavOpen?"flex":"hidden lg:flex"} items-center justify-center gap-x-8 pr-6 flex-col lg:flex-row gap-y-4  w-full lg:w-auto bg-white`}>
                 {NavItems.map((item)=>(
                <NavLink className={({isActive})=>`${isActive?"text-blue-500":""} hover:text-blue-500`} key={item.path} to={item.path}>{item.name}</NavLink>
            ))}

          
            </div>
           
        </header>
    )
}

export default Header