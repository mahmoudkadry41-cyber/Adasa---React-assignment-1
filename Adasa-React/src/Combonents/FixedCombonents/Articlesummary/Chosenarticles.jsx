import React, { useState } from "react";
import { Link } from "react-router";
export default function Chosenarticles({
  img,
  post,
  title,
  excerpt,
  date,
  readTime,
  author,
  role,
  avatar,
  category,
}) {

  return (
    <article className="bg-[#161616]   rounded-2xl border border-[#3a3837] overflow-hidden relative group flex justify-between">
          <div className="h-full w-150 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="group-hover:scale-110 duration-300 h-full w-full object-cover"
          />
        </div>
      <div className="flex flex-col justify-between">
        
        <div className="absolute top-4 right-4 bg-[#221C18] text-white font-bold pr-2 pl-2 pt-0.5 pb-0.5 rounded-full">
          {category}
        </div>

        <div className="flex flex-col gap-5 items-start text-[#635f5d] pb-5 m-5 border-b border-[#3a3837]">
          <div className="flex gap-5 items-start">
            <p>
              {" "}
              <i className="fa-regular fa-clock text-sm"></i> {readTime}{" "}
            </p>
            <p>{date}</p>
          </div>
          <p className="text-white font-bold text-xl group-hover:text-[#F36502] duration-300">
            {title}
          </p>
          <p className="text-[#635f5d]">{excerpt}</p>
        </div>
        <div className="flex justify-between m-5">
          <div className="flex  gap-3">
            <img src={avatar} alt={author} className="w-10 rounded-full" />
            <div className="flex flex-col">
              <p className="text-white">{author}</p>
              <p className="text-[#635f5d] text-sm">{role}</p>
            </div>
          </div>
          <Link to={`/article/${post.slug}`} className="bg-[#fe5d003b] rounded-full w-8 h-8 flex justify-center items-center border border-[#83441d] group-hover:bg-[#F36502] duration-300">
            <i className="fa-solid fa-angle-left text-[#F36502] group-hover:text-white"></i>
          </Link>
        </div>
      </div>
    </article>
  );
}
