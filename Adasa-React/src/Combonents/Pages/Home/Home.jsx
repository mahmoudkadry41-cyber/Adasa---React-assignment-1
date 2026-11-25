import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div className="Home">
      <section className="Herosection w-full min-h-screen ">
        <div className="container1 w-[50%] h-125  flex flex-col justify-between items-center m-auto">
          <div className="p-3 border border-amber-500 rounded-full flex justify-center items-center gap-3.5 bg-[#fe5d003b]">
            <div className="flex gap-1.5">
              <div className="animate-pulse w-1.5 h-1.5 bg-amber-300 rounded-full"></div>
              <div className="animate-ping w-1.5 h-1.5 bg-amber-300 rounded-full"></div>
            </div>
            <span className="text-white text-sm font-bold ">
              مرحبا بك في عدسة
            </span>
          </div>
          <h1 className="text-white text-[45px] text-center font-bold">
            اكتشف <span className="text-amber-500">فن</span> التصوير الفوتوغرافي
          </h1>
          <p className="text-[24px] text-center text-[#525050]">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="w-full  flex justify-center items-center gap-5">
            <button className="group rounded-full text-[14px] font-bold text-white bg-amber-500 p-3 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:-translate-y-1">
              استكشف المقالات{" "}
              <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 duration-300"></i>
            </button>
            <button className="group rounded-full text-[14px] font-bold text-white bg-transparent p-3 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:-translate-y-1 border border-[#8f8c8c]">
              <i className="fa-solid fa-circle-exclamation"></i> اعرف المزيد
            </button>
          </div>
          <div className="w-full flex justify-around">
            <div className="flex flex-col justify-around items-center bg-[#161513] rounded-2xl border border-[#262626] h-25 w-25 p-3 hover:scale-110 duration-300">
              <i className="fa-solid fa-book text-[#FF6900] text-2xl"></i>
              <p className="text-[#7F5317] font-bold text-2xl">+50</p>
              <p className="text-[#737373] text-sm">مقالة</p>
            </div>
            <div className="flex flex-col justify-between items-center bg-[#161513] rounded-2xl border border-[#262626] h-25 w-25 p-3 hover:scale-110 duration-300">
              <i className="fa-solid fa-people-line text-[#FF6900] text-2xl"></i>
              <p className="text-[#7F5317] font-bold text-2xl">+10ألف</p>
              <p className="text-[#737373] text-sm">قارئ</p>
            </div>
            <div className="flex flex-col justify-between items-center bg-[#161513] rounded-2xl border border-[#262626] h-25 w-25 p-3 hover:scale-110 duration-300">
              <i className="fa-solid fa-folder-open text-[#FF6900] text-2xl"></i>
              <p className="text-[#7F5317] font-bold text-2xl">4</p>
              <p className="text-[#737373] text-sm">تصنيفات</p>
            </div>
            <div className="flex flex-col justify-between items-center bg-[#161513] rounded-2xl border border-[#262626] h-25 w-25 p-3 hover:scale-110 duration-300">
              <i className="fa-solid fa-pen-nib text-[#FF6900] text-2xl"></i>
              <p className="text-[#7F5317] font-bold text-2xl">6</p>
              <p className="text-[#737373] text-sm">كاتب</p>
            </div>
          </div>
        </div>
      </section>
      <section className="chosenArticles"></section>
    </div>
  );
}
