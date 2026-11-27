import React from "react";
import { posts, categories, siteinfo } from "../../../assets/posts.js";
export default function Articleindetails() {
  const post = posts[0];
  const contentsBlocks = post.content
    .split("\n\n")
    .map((block) => block.trim());
  console.log(contentsBlocks);
  return (
    <div className="bg-black min-h-screen">
      <div
        style={{ backgroundImage: `url(${post.image})` }}
        className="w-full h-164  bg-cover bg-center bg-no-repeat overflow-hidden"
      >
        <div className=" w-full h-full bg-linear-to-b from-black/20 via-[#09090B]/60 to-[#09090B] p-5">
          <div className="bg-[#0a0a0a71] w-51 h-14 rounded-2xl text-[#C5C6C7] flex justify-center items-center p-4 mb-8">
            <i className="fa-solid fa-house active:text-amber-500 transition duration-300 cursor-pointer"></i>
            <i className="fa-solid fa-angle-left"></i>
            <span className="active:text-amber-500 transition duration-300 cursor-pointer">
              المدونة
            </span>
            <i className="fa-solid fa-angle-left"></i>
            <span className="text-amber-500 transition duration-300 cursor-pointer">
              {post.category}
            </span>
          </div>
          <div className="w-[92%] md:w-[85%] lg:w-[80%] m-auto flex flex-col justify-center items-center">
            <div className="w-[70%]  flex flex-col gap-6">
              <div className="group rounded-full text-[14px] font-bold text-white bg-amber-500 p-3 w-30 flex justify-center items-center ">
                {post.category}
              </div>
              <h1 className="text-7xl font-bold text-white">{post.title}</h1>
              <div className="flex justify-around items-center gap-3 bg-[#42403f50] border border[#635f5d] rounded-2xl p-6 w-50 ">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 rounded-full h-10"
                />
                <div className="flex flex-col">
                  <p className="text-white">{post.author.name}</p>
                  <p className="text-[#635f5d] text-sm">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="flex gap-4 w-[92%] md:w-[85%] lg:w-[80%] min-h-screen m-auto justify-between pt-3 pb-3">
        <div className="border border-white w-[60%] flex flex-col gap-7">
          <div className="w-full min-h-17  border border-[#452307] p-3 flex items-center rounded-lg bg-linear-to-r from-[#211309] to-[#21130949]">
            <p className="text-white text-xl">{post.excerpt}</p>
          </div>
          {contentsBlocks.map((block,i) => {
            if (block.startsWith("## ")) {
              return (
                <div id={`header-${i}`} className="flex gap-4 scroll-mt-24">
                  <i class="fa-solid fa-camera text-amber-700 text-3xl"></i>
                  <h5 className="text-3xl text-white font-bold">
                    {block.replace(/^##\s/, "")}
                  </h5>
                </div>
              );
            }
            return <p className="text-lg text-[#635f5d] ">{block}</p>;
          })}
          <div className="w-full p-5 bg-[#42403f50] border border[#635f5d] rounded-2xl flex flex-col gap-4">
            <div className="flex justify-start items-center gap-5">
              <i class="fa-solid fa-tags text-amber-600 text-xl"></i>
              <span className="text-white font-bold text-lg ">الوسوم</span>
            </div>
            <div className="flex gap-8">
              {post.tags.map((tag) => {
                return (
                  <div className="bg-[#1A1A1A] ps-3 pe-3 pt-2  pb-2 border border-transparent rounded-2xl w-fit flex justify-center text-[#635f5d] cursor-pointer hover:text-amber-500 hover:border-amber-500">
                    <span>{tag}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full p-5 bg-[#42403f50] border border[#635f5d] rounded-2xl flex items-center justify-around">
            <div className="flex gap-3 justify-center items-center">
              <i class="fa-solid fa-diagram-project text-amber-600 text-xl"></i>
              <span className="text-white font-bold text-lg ">شارك المقال</span>
            </div>
            <div className="flex gap-3 ">
              <button className="rounded-2xl border border-#525050 text-[18px] font-bold text-[#525050] bg-[#2c2b2b] hover:bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                <i className="fa-brands fa-x-twitter"></i>
              </button>
              <button className="rounded-2xl border border-#525050 text-[18px] font-bold text-[#525050] bg-[#2c2b2b] hover:bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                <i className="fa-brands fa-github"></i>
              </button>
              <button className="rounded-2xl border border-#525050  text-[18px] font-bold text-[#525050] bg-[#2c2b2b] hover:bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                <i className="fa-brands fa-linkedin"></i>
              </button>
              <button className="rounded-2xl border border-#525050  text-[18px] font-bold text-[#525050] bg-[#2c2b2b] hover:bg-amber-500 w-12 h-12 cursor-pointer transition duration-300 whitespace-nowrap hover:scale-110">
                <i className="fa-brands fa-youtube"></i>
              </button>
            </div>
          </div>
          <div className="w-full p-5 bg-[#42403f50] border border[#635f5d] rounded-2xl flex gap-3.5 items-center">
            <div className=" w-25 h-25 rounded-2xl overflow-hidden">
              <img src={post.author.avatar} alt="" />
            </div>
            <div>
              <span className="text-amber-600">كاتب المقال</span>
              <h6 className="text-white text-lg font-bold">
                {post.author.name}
              </h6>
              <p className="text-[#635f5d] text-sm">{post.author.role}</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-[35%]">
          <div className="w-full flex flex-col gap-3 sticky top-24">
            <div className="w-full bg-[#111111] border border[#635f5d] rounded-2xl p-5">
              <ul className=" flex flex-col gap-4">
                <li className="flex justify-start items-center gap-3">
                  <div className="p-3 flex justify-center items-center bg-[#29190F] rounded-lg">
                    <i class="fa-solid fa-list-ul text-amber-600"></i>
                  </div>
                  <span className="text-white font-bold">محتويات المقال</span>
                </li>
              {/* {contentsBlocks.filter((block)=>block.startsWith('## ')).map((heading,i)=>(
                <li className="flex items-center gap-3 w-full hover:bg-[#29190F] text-[#635f5d] hover:text-amber-600 rounded-2xl">
                  <div className="bg-[#1A1A1A] w-7 h-7 flex justify-center items-center border border-[#635f5d] rounded-sm" >{i+1}</div>
                  <span className="" >{heading.replace(/^##\s/,'')}</span>
                </li>
                
              ))} */}
              {contentsBlocks.map((block,i)=>{
                if(!block.startsWith("## ")) return null;
                return(
                  <li className="flex items-center gap-3 w-full hover:bg-[#29190F] text-[#635f5d] hover:text-amber-600 rounded-2xl">
                    <a className="flex items-center gap-3 w-full hover:bg-[#29190F] text-[#635f5d] hover:text-amber-600 duration-300 rounded-2xl" href={`#header-${i}`}>
                      <div className="bg-[#1A1A1A] w-7 h-7 flex justify-center items-center border border-[#635f5d] rounded-sm" >{(i+1)/2}</div>
                      <span>{block.replace(/^##\s/,'')}</span>
                    </a>
                  </li>
                )
              })}
              </ul>
            </div>
            <div className="w-full bg-[#111111] border border[#635f5d] rounded-2xl p-5 flex justify-center items-center gap-5">
              <div className="bg-[#0A0A0A] w-35 h-35 border flex flex-col justify-between items-center p-3 rounded-2xl">
                  <i class="fa-regular fa-clock text-amber-600 text-3xl "></i>
                  <span className="text-white font-bold text-center">{post.readTime}</span>
                  <span className="text-sm text-[#635f5d]">وقت القراءة</span>
              </div>
              <div className="bg-[#0A0A0A] w-35 h-35 border flex flex-col justify-between items-center p-3 rounded-2xl">
                  <i class="fa-regular fa-calendar text-amber-600 text-3xl "></i>
                  <span className="text-white font-bold text-center">{post.date}</span>
                  <span className="text-sm text-[#635f5d]">تاريخ النشر</span>
              </div>
            </div>
            <div className="w-full bg-[#1B1309] border border-[#452307] flex flex-col justify-center items-center gap-2 p-3 rounded-2xl">
                <div className="w-15 h-15 flex flex-col justify-center items-center bg-[#4C2407] rounded-2xl">
                  <i class="fa-solid fa-envelope text-amber-600 text-3xl"></i>
                </div>
                <p className="text-white text-2xl font-bold">لا تفوت جديدنا</p>
                <p className="text-[#635f5d]">اشتراك للحصول على احدث المقالات</p>
                <button className="bg-amber-600 text-white p-2 w-40 rounded-2xl mt-5">تصفح المزيد</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[92%] md:w-[85%] lg:w-[80%] m-auto">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-4 p-5">
              <div className="w-15 h-15 bg-[#221208] flex justify-center items-center border border-[#662C06] rounded-2xl">
                <i class="fa-solid fa-images text-amber-600 text-2xl"></i>
              </div>
              <div>
                <p className="text-white text-2xl font-bold">مقالات قد تعجبك</p>
                <p className="text-[#635f5d]">استكشف المزيد من المحتوى المميز</p>
              </div>
            </div>
            <div className="text-amber-600 group flex justify-center items-center gap-4 cursor-pointer">
              <span>عرض الكل</span>
              <i class="fa-solid fa-arrow-left-long group-hover:-translate-x-2 duration-300"></i>
            </div>
          </div>
          <div className="grid grid-cols-3">
            
          </div>
        </div>
      </section>
    </div>
  );
}
