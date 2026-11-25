import React from "react";
import "./Blog.css";
import { posts, categories, siteinfo } from "../../../assets/posts";
export default function Blog() {
  return (
    <section className="blogHeroSection w-full">
      <div className="container1 w-[50%] min-h-100  flex flex-col justify-center items-center m-auto">
        <div className=" w-40 p-3 border border-amber-500 rounded-full flex justify-center items-center gap-3.5 bg-[#fe5d003b]">
          <div className="flex gap-1.5 justify-center items-center">
            <div className="animate-pulse w-1.5 h-1.5 bg-amber-300 rounded-full"></div>
            <div className="  text-amber-300 rounded-full fa-regular fa-newspaper"></div>
          </div>
          <span className="text-amber-300 text-sm font-bold ">مدونتنا</span>
        </div>
        <h1 className="text-white text-[45px] text-center font-bold">
          استكشف{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(to_left,rgba(254,154,0,0.85),rgba(254,200,0,0.85))]">
            مقالاتنا
          </span>
        </h1>
        <p className="text-[24px] text-center text-[#525050]">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>
    </section>
  );
}
