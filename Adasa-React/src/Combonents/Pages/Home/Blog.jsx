import React, { useState } from "react";
import "./Blog.css";
import { posts, categories, siteinfo } from "../../../assets/posts.js";
import Filterblogbutton from "../../FixedCombonents/buttons/Filterblogbutton.jsx";
import Articlesummary from "../../FixedCombonents/Articlesummary/Articlesummary.jsx";
import Pagesbutton from "../../FixedCombonents/buttons/Pagesbutton.jsx";
export default function Blog() {
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
      <div className="searchAndFelterd w-full ">
        <div className="w-[92%] md:w-[85%] lg:w-[80%] min-h-15 bg-[#0A0A0A] m-auto flex justify-between items-center">
          <input
            type="search"
            className="placeholder:text-[#696766] border-2 border-[#3a3837] focus:outline-none focus:border-amber-500 duration-300 w-93 h-10 rounded-sm bg-[#161616]"
            placeholder="ابحث في المقالات..."
          />
          <div className="flex gap-2">
            {articscategory.map((category) => {
              return (
                <Filterblogbutton
                  key={category.name}
                  categoryName={category.name}
                  isActive={selectedCategory === category.name}
                  onClick={() => {
                    setSelectedCategory(category.name);
                    setCurrentPage(1);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="articlesummary w-full mt-4 ">
        <div className="w-[92%] md:w-[85%] lg:w-[80%] min-h-15 m-auto flex justify-between">
          <p className="text-[#696766] text-xl">
            عرض <span className="text-white">{filteredPostes.length}</span>{" "}
            مقالات
          </p>
          <div className="p-1 h-full bg-[#161616] flex gap-3 rounded-xl">
            <div className="  p-2 rounded-lg  active:bg-amber-500 ">
              <i class="fa-solid fa-list text-xl text-[#696766]"></i>
            </div>
            <div className="  p-2 rounded-lg  active:bg-amber-500">
              <i class="fa-solid fa-table-cells-large text-xl text-[#696766]"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="articlesummaies w-[92%] md:w-[85%] lg:w-[80%] grid grid-cols-3  bg-amber-200 m-auto gap-4">
        {currentPosts.map((post) => {
          return (
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
          );
        })}
      </div>
      <div className="w-[92%] md:w-[85%] lg:w-[80%] m-auto pt-10 pb-10 flex justify-center gap-4">
        {[...Array(totalPages).keys()].map((index) => {
          const pageNumber = index + 1;
          return (
            <Pagesbutton
              onClick={() => setCurrentPage(pageNumber)}
              key={index}
              page={pageNumber}
              isActive={currentPage === pageNumber}
            />
          );
        })}
      </div>
      <p className="text-[#696766] text-center">
        صفحة {currentPage} من {totalPages}
      </p>
    </section>
  );
}
