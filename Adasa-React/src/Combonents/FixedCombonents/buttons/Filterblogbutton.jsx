import React from 'react'

export default function Filterblogbutton({categoryName,onClick,isActive}) {
  console.log(categoryName)
  return (
            <button onClick={onClick} className={`p-3 bg-[#161616] border border-[#202020] text-[#A1A1A1] hover:border-[#5D2F0F] active:bg-amber-950 active:font-bold active:text-white rounded-xl cursor-pointer ${isActive? `bg-amber-950 font-bold text-white`:`` }`}>{categoryName}</button>

  )
}
