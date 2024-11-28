import React from 'react'

export default function WhoWeAre() {
  return (
    <div className='w-full max-w-full md:px-10 px-5 md:py-20 py-10'>
      <div className='text-center'>
        <h1 className='md:text-[64px] text-[36px] text-black dark:text-white leading-[110%]'>Who <span className='text-[#A300D1]'>We</span> Are?</h1>
        <p className='text-[#8C8C8C] my-4 md:text-[24px] text-[16px]'>A Community of Growth and Leadership</p>
      </div>
      <div className='flex flex-wrap flex-col-reverse md:flex-row md:gap-5 gap-0 mt-10'>
        <div className="flex-1 flex flex-col min-h-full gap-5 text-white">
          <div className='overflow-hidden bg-[#070743] rounded-[20px] flex-1 p-10 relative'>
            <p className='md:text-[40px] text-[20px]'>Mission</p>
            <p className='text-[14px] md:text-[20px] mt-4'>Eternal Warriors is a global community committed to empowering individuals to unlock their full leadership potential. We believe in personal growth through spiritual alignment, mentorship, and action, providing the tools and support needed to become impactful leaders in all areas of life.</p>
            <img src='/assets/images/section2-left-1.png' className='absolute bottom-0 right-0' />
          </div>
          <div className='overflow-hidden bg-[linear-gradient(130.32deg,_#B266FF_0%,_#4A00D5_100%)] rounded-[20px] p-10 flex-1 relative'>
            <p className='md:text-[40px] text-[20px]'>Vision</p>
            <p className='text-[14px] md:text-[20px] mt-4'>Our vision is to build a worldwide network where leadership is nurtured through continuous personal development, spiritual harmony, and collective empowerment. We aim to inspire individuals to lead with love, integrity, and purpose, fostering positive change in their communities and beyond.</p>
            <img src='/assets/images/section2-left-2.png' className='absolute bottom-0 right-0' />
          </div>
        </div>
        <div className="flex-1">
          <img src="/assets/images/who-we-are-right.png" />
        </div>
      </div>
    </div>
  )
}
/* Frame 262 */