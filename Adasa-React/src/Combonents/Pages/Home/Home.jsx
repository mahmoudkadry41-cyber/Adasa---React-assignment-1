import React, { useState } from "react";
import "./Home.css";
import { posts, categories, siteinfo } from "../../../assets/posts.js";
import Chosenarticles from "../../FixedCombonents/Articlesummary/Chosenarticles";
import Homepagefilteration from "../../FixedCombonents/buttons/Homepagefilteration.jsx";
import Articlesummary from "../../FixedCombonents/Articlesummary/Articlesummary.jsx";

export default function Home() {
  const [articscategory, setarticlecaregory] = useState(categories);
  const [articleposts, setarticleposts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");
  const filteredPostes =
    selectedCategory === "جميع المقالات"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPostes.length / postsPerPage);
  const lasIndex = currentPage * postsPerPage;
  const firstIndex = lasIndex - postsPerPage;
  const currentPosts = filteredPostes.slice(firstIndex, lasIndex);
  const firstThreePosts = articleposts.slice(0, 3);
  const newestPosts = [...posts].sort((a,b)=> new Date(b.date) - new Date(a.date) || b.id-a.id).slice(0,3)
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
      <section className="chosenArticles pt-8 flex flex-col bg-[#09090B]">
        <div className="w-[92%] md:w-[85%] lg:w-[80%] flex flex-col m-auto">
          <div className=" p-3 border w-30 border-amber-500 rounded-full flex justify-center items-center gap-3.5 bg-[#fe5d003b]">
            <div className="flex gap-1.5">
              <div className="animate-pulse w-1.5 h-1.5 bg-amber-300 rounded-full"></div>
              <div className="animate-ping w-1.5 h-1.5 bg-amber-300 rounded-full"></div>
            </div>
            <span className="text-white text-sm font-bold">مميز</span>
          </div>
          <h2 className="text-white text-[45px] font-bold">مقالات مختارة</h2>
          <div className="flex justify-between items-center pt-4 pb-8">
            <p className="text-[#525050]">محتوى منقى لبدء رحلة تعلمك</p>
            <button className="p-3 bg-amber-500 rounded-2xl group hover:-translate-y-1 duration-300">
              <span>عرض الكل</span>
              <i class="duration-300 fa-solid fa-angle-left group-hover:-translate-x-1"></i>{" "}
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {firstThreePosts.map((post) => {
              return (
                <Chosenarticles
                  img={post.image}
                  post={post}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  author={post.author.name}
                  role={post.author.role}
                  avatar={post.author.avatar}
                  category={post.category}
                  key={post.id}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="pt-15 w-full flex flex-col items-center bg-[#09090B]">
        <div className=" p-3 border w-40 border-amber-500 rounded-full flex justify-center items-center gap-3.5 bg-[#fe5d003b]">
          <div className="flex gap-1.5">
            <div className="animate-pulse w-1.5 h-1.5 bg-amber-300 rounded-full"></div>
            <div className="animate-ping w-1.5 h-1.5 bg-amber-300 rounded-full"></div>
          </div>
          <span className="text-white text-sm font-bold w-">التصنيفات</span>
        </div>
        <h2 className="text-white text-[45px] font-bold ">
          استكشف حسب الموضوع{" "}
        </h2>
        <p className="text-[#525050] text-2xl">
          اعثر على محتوى مصمم حسب اهتماماتك
        </p>
        <div className="grid grid-cols-4 w-[92%] md:w-[85%] lg:w-[80%] gap-5">
          {articscategory.map((category) => {
            return (
              <Homepagefilteration
                countcategory={category.count}
                categoryname={category.name}
              />
            );
          })}
        </div>
      </section>
      <section className="newestArticles pt-8 flex flex-col bg-[#09090B]">
        <div className="w-[92%] md:w-[85%] lg:w-[80%] flex flex-col m-auto">
          <div className=" p-3 border w-30 border-amber-500 rounded-full flex justify-center items-center gap-3.5 bg-[#fe5d003b]">
            <div className="flex gap-1.5">
              <div className="animate-pulse w-1.5 h-1.5 bg-amber-300 rounded-full"></div>
              <div className="animate-ping w-1.5 h-1.5 bg-amber-300 rounded-full"></div>
            </div>
            <span className="text-white text-sm font-bold">مميز</span>
          </div>
          <h2 className="text-white text-[45px] font-bold">مقالات مختارة</h2>
          <div className="flex justify-between items-center pt-4 pb-8">
            <p className="text-[#525050]">محتوى منقى لبدء رحلة تعلمك</p>
            <button className="p-3 bg-amber-500 rounded-2xl group hover:-translate-y-1 duration-300">
              <span>عرض الكل</span>
              <i class="duration-300 fa-solid fa-angle-left group-hover:-translate-x-1"></i>{" "}
            </button>
          </div>
        </div>
        <div className="w-[92%] md:w-[85%] lg:w-[80%] m-auto grid grid-cols-3 gap-3">
          {newestPosts.map((post)=>
            <Articlesummary
                          img={post.image}
                          post={post}
                          title={post.title}
                          excerpt={post.excerpt}
                          date={post.date}
                          readTime={post.readTime}
                          author={post.author.name}
                          role={post.author.role}
                          avatar={post.author.avatar}
                          category={post.category}
                          key={post.id}
                        />
         )}
        </div>
      </section>
    </div>
  );
}
