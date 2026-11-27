import React from 'react'

export default function Homepagefilteration({countcategory,categoryname}) {
  return (
<button className='bg-[#161616] h-47 rounded-2xl flex flex-col p-4 group hover:bg-linear-to-r hover:from-amber-900 hover:to-amber-500 transition duration-300'>
<div className='flex flex-col justify-center items-start h-full gap-3'>
    <div className='bg-[#2d1d135b] border border-[#552a10] w-12 p-3 rounded-lg'><i class="fa-solid fa-gear text-amber-500 group-hover:text-white transition duration-300"></i></div>
    <p className='text-white font-bold text-2xl'>{categoryname}</p>
    <p className='text-[#6A6D70] group-hover:text-white transition duration-300'>{countcategory} مقالة</p>
</div>
<div>
    
</div>
</button>
  )
}
