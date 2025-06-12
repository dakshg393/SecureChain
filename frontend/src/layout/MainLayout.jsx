import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
          <main className="pt-20 relative overflow-hidden flex-grow ">
             <div className="absolute inset-0 z-0 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

            <div className="relative z-10"><Outlet /></div>
            
          </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
