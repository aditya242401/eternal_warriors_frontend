import React from 'react'
import Header from './Header'

export default function HeroSection() {
  return (
    <div className="w-full max-w-full bg-[url('/assets/images/hero-bg.png')] bg-cover bg-center min-h-screen">
      <div className='flex flex-col justify-between content-between min-h-screen md:mx-10 mx-5'>
        <Header />

        <div className='text-white text-center md:text-start pb-20'>
          <h1 className='md:text-[96px] text-[65px] font-normal leading-[110%]'>Creating Leaders</h1>
          <p className='md:text-[40px] text-[24px] my-5'>From Fear to Freedom</p>
          <button className='bg-white text-[#A300D1] px-6 py-3 rounded-[10px] md:w-auto w-full text-[14px]'>Join the Warriors</button>
        </div>
      </div>
    </div>
  )
}