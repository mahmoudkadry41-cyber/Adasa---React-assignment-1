import React from 'react'

export default function Pagesbutton({page , isActive, onClick})
 {
  return (
    <button onClick={onClick} className={`w-10 h-10  rounded-xl bg-[#161616] border border-[#262626] text-[#979797] cursor-pointer duration-300 hover:text-white hover:bg-amber-500 
    ${isActive?'text-white bg-amber-500' :''
    }`}>
{page}
    </button>
  )
}
