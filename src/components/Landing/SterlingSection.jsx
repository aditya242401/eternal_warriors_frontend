import React from 'react'

export default function SterlingSection() {
  return (
    <div className='w-full max-w-full px-10 pt-20'>
      <div className='flex flex-wrap flex-col md:flex-row items-center gap-5 mt-10'>
        <div className="flex-1 text-white">
          <h1 className='text-[64px] text-black dark:text-white leading-[110%]'><span className='text-[#A300D1]'>Meet</span> David Sterling</h1>
          <p className='text-[#8C8C8C] my-10 text-[24px]'>
            Our vision is to build a worldwide network where leadership is nurtured through continuous personal development, spiritual harmony, and collective empowerment.
          </p>
          <button className='bg-[#4A00D5] dark:bg-[#B266FF] mt-3 py-4 px-4 rounded-[10px] text-white'>
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