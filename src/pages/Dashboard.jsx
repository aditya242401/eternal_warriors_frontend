import React from 'react'
import Layout from '../components/Layout'

export default function Dashboard() {
  return (
    <Layout>
      <div className='px-6 pt-6'>
        <div className="rounded-[20px] relative p-20 my-blur text-white overflow-hidden bg-[url('/assets/images/dashboard-banner.png')] bg-cover">
          <div className='relative z-10'>
            <p className='text-[32px] mt-32'>Welcome, </p>
            <p className='text-[96px] font-medium'>John Doe</p>
            <p className='text-[20px]'>Let's dive into your Eternal Warrior journey.
              You've been active in the Network Marketing module. Let's explore more opportunities together.</p>
          </div>
        </div>
      </div>

      <div className='px-6 py-6'>
        <div className="rounded-[20px] relative p-20 overflow-hidden bg-[#160029]">
          <div className='flex gap-10'>
            <div className='flex-1 relative'>
              <div>
                <div className='content text-white text-center'>
                  <img src='/assets/images/ranks/white-diamond.png' className='w-full' />
                  <p className='mt-3 text-[15px]'>DIAMOND</p>
                  <p className='text-[rgba(217,177,255,0.45)] text-[15px]'>LV.01</p>
                </div>
              </div>
            </div>
            <div className='flex-1 relative'>
              <div className='my-lock'>
                <div className='content text-white text-center'>
                  <img src='/assets/images/ranks/white-diamond.png' className='w-full' />
                  <p className='mt-3 text-[15px]'>WHITE DIAMOND</p>
                  <p className='text-[rgba(217,177,255,0.45)] text-[15px]'>LV.01</p>
                </div>
              </div>
            </div>
            <div className='flex-1 relative'>
              <div className='my-lock'>
                <div className='content text-white text-center'>
                  <img src='/assets/images/ranks/black-diamond.png' className='w-full' />
                  <p className='mt-3 text-[15px]'>BLACK DIAMOND</p>
                  <p className='text-[rgba(217,177,255,0.45)] text-[15px]'>LV.01</p>
                </div>
              </div>
            </div>
            <div className='flex-1 relative'>
              <div className='my-lock'>
                <div className='content text-white text-center'>
                  <img src='/assets/images/ranks/red-diamond.png' className='w-full' />
                  <p className='mt-3 text-[15px]'>RED DIAMOND</p>
                  <p className='text-[rgba(217,177,255,0.45)] text-[15px]'>LV.01</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}