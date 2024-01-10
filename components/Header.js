import React from 'react'

function Header() {
    const headerMenu=[
        {

        }
    ]
  return (
    <div className='flex justify-between items-center mx-auto px-4 md:px-16 py-4' >
      <div>
        <a className='flex gap-0.5'>
        <h1 className='text-[16px] sm:text-[24px] font-semibold text-[#19468F]'> Mother </h1>
        <h1 className='text-[16px] sm:text-[24px] font-semibold text-[#F66D2F]'> travels </h1></a>
      </div>  
      <div className=''>
      <button className='bg-[#1C4FA2] font-normal tracking-wider text-white text-[12px] md:text-[16px]  
                            px-2 lg:px-5 py-0.5 lg:py-1 rounded-full hover:bg-[#cc5c29]'>
      <a href="tel:+919092131783">+91 9092131783</a> </button>
      </div>
    </div>
    
  )
}

export default Header