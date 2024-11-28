import React from 'react'

export default function SterlingSection() {
  return (
    <div className='w-full max-w-full md:px-10 px-5 md:py-20 py-10'>
      <div className='flex flex-wrap flex-col-reverse md:flex-row items-center gap-5 md:mt-10 mt-0'>
        <div className="flex-1 text-white">
          <h1 className='md:text-[64px] text-[36px] text-center md:text-start text-black dark:text-white leading-[110%]'><span className='text-[#A300D1]'>Meet</span> David Sterling</h1>
          <p className='text-[#8C8C8C] text-center md:text-start md:my-10 my-2 md:text-[24px] text-[16px]'>
            Our vision is to build a worldwide network where leadership is nurtured through continuous personal development, spiritual harmony, and collective empowerment.
          </p>
          <button className='bg-[#4A00D5] dark:bg-[#B266FF] md:w-auto w-full mt-3 py-4 px-4 rounded-[10px] text-white'>
            Explore More
          </button>
        </div>
        <div className="flex-1">
          <img src="/assets/images/sterling-right.png" />
        </div>
      </div>
    </div>
  )
}