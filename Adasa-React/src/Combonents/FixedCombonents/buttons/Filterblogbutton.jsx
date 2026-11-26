import React from 'react'

export default function Filterblogbutton({categoryName}) {
  console.log(categoryName)
  return (
            <button className='p-3 bg-[#161616] border border-[#202020] text-[#A1A1A1] hover:border-[#5D2F0F] active:bg-amber-950 active:font-bold active:text-white rounded-xl cursor-pointer'>{categoryName}</button>

  )
}
