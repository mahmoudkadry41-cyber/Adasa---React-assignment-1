import React from "react";
import "./Footer.css";
import { posts, categories, siteinfo } from "../../../assets/posts.js";
import { Link } from "react-router";
export default function Footerbar() {
  return (
    <div className="w-full bg-[#161616] ">
      <div className="upperfooter w-full border-b border-[#525050]">
        <div className=" m-auto w-[92%] md:w-[85%] lg:w-[80%] grid grid-cols-4 gap-2 ">
          <div className=" h-full  p-3 flex flex-col justify-between gap-3">
            <div className="flex flex-row justify-start items-center h-17 gap-3">
              <Link to={`/home`} className="flex justify-center items-center rounded-2xl text-[18px] font-bold text-white bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                ع
              </Link>
              <h1 className="text-[20px] font-bold text-white p-0 m-0">عدسة</h1>
            </div>
            <p className="text-[16px] text-white">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="flex flex-row justify-center items-center h-17 gap-3">
              <a href={siteinfo.social.twitter} className=" flex justify-center items-center rounded-2xl border border-#525050 text-[18px] font-bold text-[#525050] bg-[#2c2b2b] hover:bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href={siteinfo.social.github} className="flex justify-center items-center rounded-2xl border border-#525050 text-[18px] font-bold text-[#525050] bg-[#2c2b2b] hover:bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={siteinfo.social.linkedin} className="flex justify-center items-center rounded-2xl border border-#525050  text-[18px] font-bold text-[#525050] bg-[#2c2b2b] hover:bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href={siteinfo.social.youtube} className="flex justify-center items-center rounded-2xl border border-#525050  text-[18px] font-bold text-[#525050] bg-[#2c2b2b] hover:bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className=" h-[80%] p-4 flex flex-col gap-3 ">
            <div className="flex flex-row justify-start items-center gap-3 ">
              <div className="h-1 w-7.5 bg-amber-500"></div>
              <h1 className="text-[20px] font-bold text-white p-0 m-0">
                استكشف
              </h1>
            </div>
            <ul className="flex flex-col gap-4">
              <Link to={`/home`} className="  cursor-pointer overflow-hidden relative group">
                <i className="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <Link to={`/home`} className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  الرئيسية
                </Link>
              </Link>
              <Link  to={`/blog`}  className="  cursor-pointer overflow-hidden relative group">
                <i className="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <Link to={`/blog`} className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  المدونة
                </Link>
              </Link>
              <Link to={`/about`} className="  cursor-pointer overflow-hidden relative group">
                <i className="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <Link to={`/about`} className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  من نحن
                </Link>
              </Link>
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
              {categories.map((category)=>(
                <Link to={`/blog`} state={{category:category.name}} className="  cursor-pointer overflow-hidden relative group">
                <i className="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <span className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                 {category.name}
                </span>
              </Link>
              ))}
              {/* <li className="  cursor-pointer overflow-hidden relative group">
                <i className="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <span className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  اضاءة
                </span>
              </li>
              <li className="  cursor-pointer overflow-hidden relative group">
                <i className="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <span className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  بورتريه
                </span>
              </li>
              <li className="  cursor-pointer overflow-hidden relative group">
                <i className="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <span className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  مناظر طبيعية
                </span>
              </li>
              <li className="  cursor-pointer overflow-hidden relative group">
                <i className="fa-solid fa-chevron-left absolute -right-4 top-1 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-out text-amber-500"></i>
                <span className="text-[#525050] font-bold inline-block group-hover:-translate-x-5 transition-transform duration-500 ease-out group-hover:text-amber-500">
                  تقنيات
                </span>
              </li> */}
            </ul>
          </div>
          <div className=" h-full p-4 flex flex-col justify-start items-start gap-6">
            <div className="flex flex-row justify-start items-center h-17 gap-3">
              <div className="h-1 w-7.5 bg-amber-500"></div>
              <h1 className="text-[20px] font-bold text-white p-0 m-0">
                ابقى على اطلاع
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
