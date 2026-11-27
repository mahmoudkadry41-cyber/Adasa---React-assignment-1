import React from "react";
import { posts, categories, siteinfo } from "../../../assets/posts.js";
export default function Articleindetails() {
  const post = posts[0];
  return (
    <div className="bg-black min-h-screen">
      <div
        style={{ backgroundImage: `url(${post.image})` }}
        className="w-full h-164  bg-cover bg-center bg-no-repeat overflow-hidden"
      >
        <div className=" w-full h-full bg-linear-to-b from-black/20 via-[#09090B]/60 to-[#09090B] p-5">
          <div className="bg-[#0a0a0a71] w-51 h-14 rounded-2xl text-[#C5C6C7] flex justify-center items-center p-4 ">
            <i class="fa-solid fa-house active:text-amber-500 transition duration-300 cursor-pointer"></i>
            <i class="fa-solid fa-angle-left"></i>
            <span className="active:text-amber-500 transition duration-300 cursor-pointer">
              المدونة
            </span>
            <i class="fa-solid fa-angle-left"></i>
            <span className="text-amber-500 transition duration-300 cursor-pointer">
              اضاءة
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
