import React, { useState } from "react";
import Logoimg from "./images/logo.png";
import "./Navbar.css";
export default function Navbar() {
const [listDropped , setListDropped]= useState(false)
 console.log("droplistvalue", listDropped);
  return (
    <>
      <nav className={`${listDropped? 'suppdropdownlistanimi':'supdropoutanimi'}  w-full min-h-20 bg-[#161616] pb-4 `}>
        <div className="w-[92%] md:w-[85%] lg:w-[80%] h-20 flex items-center justify-between m-auto">
          <div className="flex flex-row gap-4.5">
            <img src={Logoimg} alt="Adasa logo" className="m-auto w-12.5 h-12.5" />
            <div>
              <h1 className=" text-white font-bold text-[18px]">عدسة</h1>
              <p className="text-amber-500 text-[14px]">
                عالم التصوير الفوتوغرافي
              </p>
            </div>
          </div>
          <div className="hidden md:flex border rounded-full border-gray-600 w-75 h-[70%] flex-row justify-between items-center p-4">
            <button className="rounded-full text-gray-400 text-[14px] font-bold hover:text-white active:bg-amber-500 w-18.75 h-10 cursor-pointer transition duration-300 whitespace-nowrap">
              المدونة
            </button>
            <button className="rounded-full text-gray-400 text-[14px] font-bold hover:text-white active:bg-amber-500 w-18.75 h-10 cursor-pointer transition duration-300 whitespace-nowrap">
              من نحن
            </button>
            <button className="rounded-full text-gray-400 text-[14px] font-bold hover:text-white active:bg-amber-500 w-18.75 h-10 cursor-pointer transition duration-300 whitespace-nowrap">
              الرئيسية
            </button>
          </div>
          <div className="hidden md:flex flex-row gap-4.5">
            <button className="group w-12 h-12 rounded-xl hover:border-gray-600 border border-transparent transition duration-300"><i className="fa-solid fa-magnifying-glass text-gray-400 group-hover:text-amber-500 text-1xl m-auto p-0 transition duration-300"></i></button>
            <button className="rounded-full  text-[14px] font-bold text-white bg-amber-500 w-28.75 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:-translate-y-1">
             ابدأ بالقراءة
            </button>
          </div>
          <button onClick={()=>setListDropped((state)=>!state)} className="  md:hidden group w-12 h-12 rounded-xl hover:border-gray-600 border border-transparent transition duration-300"><i className="fa-solid fa-bars text-gray-400 group-hover:text-amber-500 text-2xl m-auto p-0 transition duration-300"></i></button>

        </div>
        <div className={`  ${listDropped ? 'flex dropdownlistanimi':'flex droppoutanimi'} md:hidden rounded-2xl m-auto bottom-0  flex-col gap-2.5 p-6 bg-[#3837374b] w-[92%]`}>
           
            <button className="rounded-lg text-gray-400 text-[14px] font-bold hover:text-white hover:bg-[#16161694] active:bg-[#2D1D13] border border-transparent active:border-amber-500 w-full h-10 cursor-pointer transition-all duration-300 whitespace-nowrap text-start ps-4">
              الرئيسية
            </button>
           <button className="rounded-lg text-gray-400 text-[14px] font-bold hover:text-white hover:bg-[#16161694] active:bg-[#2D1D13] border border-transparent active:border-amber-500 w-full h-10 cursor-pointer transition-all duration-300 whitespace-nowrap text-start ps-4">
              المدونة
            </button>
            <button className="rounded-lg text-gray-400 text-[14px] font-bold hover:text-white hover:bg-[#16161694] active:bg-[#2D1D13] border border-transparent active:border-amber-500 w-full h-10 cursor-pointer transition-all duration-300 whitespace-nowrap text-start ps-4">
              من نحن
            </button>
                        <button className="rounded-full  text-[14px] font-bold text-white bg-amber-500 w-full h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:-translate-y-1">
             ابدأ بالقراءة
            </button>
        </div>
      </nav>

    </>
  );
}
