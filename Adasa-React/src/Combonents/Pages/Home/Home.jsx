import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div className="Home">
      <section className="Herosection w-full h-screen">
        <div className="container1 w-[50%] h-125 bg-blue-500 flex flex-col justify-center items-center m-auto">
          <div className="p-3 border border-amber-500 rounded-full flex justify-center items-center gap-3.5 bg-[#fe5d003b]">
            <div className="flex gap-1.5">
              <div className="animate-pulse w-1.5 h-1.5 bg-amber-300 rounded-full"></div>
              <div className="animate-ping w-1.5 h-1.5 bg-amber-300 rounded-full"></div>
            </div>
            <span className="text-white text-sm font-bold ">مرحبا بك في عدسة</span>
          </div>
        </div>
      </section>
    </div>
  );
}
