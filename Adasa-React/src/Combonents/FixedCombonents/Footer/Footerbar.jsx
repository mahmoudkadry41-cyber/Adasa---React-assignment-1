import React from "react";
import "./Footer.css";
export default function Footerbar() {
  return (
    <div className="w-full bg-[#161616] ">
      <div className="upperfooter w-full border-b border-[#525050]">
        <div className=" m-auto w-[92%] md:w-[85%] lg:w-[80%] grid grid-cols-4 gap-2 ">
          <div className=" h-[80%]  p-4 flex flex-col gap-3">
            <div className="flex flex-row justify-start items-center h-17 gap-3">
              <button className="rounded-2xl text-[18px] font-bold text-white bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                ع
              </button>
              <h1 className="text-[20px] font-bold text-white p-0 m-0">عدسة</h1>
            </div>
            <p className="text-[16px] text-white">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="flex flex-row justify-center items-center h-17 gap-3">
              <button className="rounded-2xl text-[18px] font-bold text-[#525050] bg-[#2c2b2b] hover:bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                <i class="fa-brands fa-x-twitter"></i>
              </button>
              <button className="rounded-2xl border border-#525050 text-[18px] font-bold text-[#525050] bg-[#2c2b2b] hover:bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                <i class="fa-brands fa-github"></i>
              </button>
              <button className="rounded-2xl border border-#525050  text-[18px] font-bold text-[#525050] bg-[#2c2b2b] hover:bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                <i class="fa-brands fa-linkedin"></i>
              </button>
              <button className="rounded-2xl border border-#525050  text-[18px] font-bold text-[#525050] bg-[#2c2b2b] hover:bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                <i class="fa-brands fa-youtube"></i>
              </button>
            </div>
          </div>
          <div className=" h-[80%] p-4 flex flex-col justify-between items-start gap-3 ">
            <div className="flex flex-row justify-start items-center gap-3 ">
              <div className="h-1 w-7.5 bg-amber-500"></div>
              <h1 className="text-[20px] font-bold text-white p-0 m-0">
                استكشف
              </h1>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="  cursor-pointer overflow-hidden relative group">
                <i class="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <span className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  الرئيسية
                </span>
              </li>
              <li className="  cursor-pointer overflow-hidden relative group">
                <i class="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <span className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  المدونة
                </span>
              </li>
              <li className="  cursor-pointer overflow-hidden relative group">
                <i class="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <span className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  من نحن
                </span>
              </li>
            </ul>
          </div>
          <div className=" h-[80%] p-4 flex flex-col  gap-3">
            <div className="flex flex-row justify-start items-center  gap-3">
              <div className="h-1 w-7.5 bg-amber-500"></div>
              <h1 className="text-[20px] font-bold text-white p-0 m-0">
                التصنيفات
              </h1>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="  cursor-pointer overflow-hidden relative group">
                <i class="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <span className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  اضاءة
                </span>
              </li>
              <li className="  cursor-pointer overflow-hidden relative group">
                <i class="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <span className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  بورتريه
                </span>
              </li>
              <li className="  cursor-pointer overflow-hidden relative group">
                <i class="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <span className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  مناظر طبيعية
                </span>
              </li>
              <li className="  cursor-pointer overflow-hidden relative group">
                <i class="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <span className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  تقنيات
                </span>
              </li>
            </ul>
          </div>
          <div className=" h-[80%] p-4 flex flex-col gap-3">
            <div className="flex flex-row justify-start items-center h-17 gap-3">
              <div className="h-1 w-7.5 bg-amber-500"></div>
              <h1 className="text-[20px] font-bold text-white p-0 m-0">
                التصنيفات
              </h1>
            </div>
            <p className="text-[16px] text-white">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form action="" className="w-full flex flex-col gap-3">
              <input
                type="email"
                className="placeholder:text-[#3a3837] border-2 border-[#3a3837] focus:outline-none focus:border-amber-500 duration-300 w-full h-10 rounded-sm bg-[#161616]"
                placeholder="ادخل بريدك الالكتروني"
              />
              <button className="rounded-full  text-[14px] font-bold text-white bg-amber-500 w-full h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:-translate-y-1">
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bottomfooter h-17 w-[92%] md:w-[85%] lg:w-[80%] m-auto flex justify-between items-center p-4">
        <div className="flex justify-center items-center h-full ">
          <p className="text-[#3a3837] text-sm">
            © 2026 عدسة. صنع بكل{" "}
            <i className="fa-solid fa-heart text-amber-500"></i> جميع الحقوق
            محفوظة.
          </p>
        </div>
        <div className="flex justify-center items-center h-full gap-4 ">
          <i className="text-[#3a3837] duration-500 ease-out hover:text-amber-500 cursor-pointer text-sm">سياسة الخصوصية</i>
          <i className="text-[#3a3837] duration-500 ease-out hover:text-amber-500 cursor-pointer text-sm">شروط الخدمة</i>
        </div>
      </div>
    </div>
  );
}
