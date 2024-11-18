import React from 'react'
import Header from './Header'

export default function HeroSection() {
  return (
    <div className="w-full max-w-full px-10 bg-[url('/assets/images/hero-bg.png')] bg-cover min-h-screen">
      <div className='flex flex-col justify-between content-between min-h-screen'>
        <Header />

        <div className='text-white pb-20'>
          <h1 className='text-[96px] leading-[110%]'>Creating Leaders</h1>
          <p className='text-[40px] mb-4'>From Fear to Freedom</p>
          <button className='bg-white text-[#A300D1] px-6 py-3 rounded-[10px] text-[14px]'>Join the Warriors</button>
        </div>
      </div>
    </div>
  )
}